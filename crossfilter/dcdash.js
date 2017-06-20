'use strict';

function print_filter(filter){
	var f=eval(filter);
	if (typeof(f.length) != "undefined") {}else{}
	if (typeof(f.top) != "undefined") {f=f.top(Infinity);}else{}
	if (typeof(f.dimension) != "undefined") {f=f.dimension(function(d) { return "";}).top(Infinity);}else{}
	console.log(filter+"("+f.length+") = "+JSON.stringify(f).replace("[","[\n\t").replace(/}\,/g,"},\n\t").replace("]","\n]"));
}



function wwCall(ahCapacityLineChartID, ahCapacityPieID, ahCountLineChartID, grp,  col, volumeID){

var ahCapacityLineChart = dc.compositeChart(ahCapacityLineChartID,grp);
var ahCapacityPie = dc.pieChart(ahCapacityPieID, grp);
var ahCountLineChart = dc.lineChart(ahCountLineChartID, grp);
var volumeChart = dc.barChart( volumeID, grp);

d3.json(col, function(error, data) {
var parseDate = d3.time.format("%Y-%m-%d").parse;
var payload = data["FSUsagePerDay"];


var yMaxCapacity = 0,
    yMaxCount = 0;
payload.forEach( item => {
    item.jaUsage = +item.jaUsage *0.8
    item.sbUsage = +item.sbUsage *2.5
    item.fsCapacity = +item.fsCapacity
            if(item.fsCapacity>yMaxCapacity){
            yMaxCapacity = item.fsCapacity;
            }
    item.fsCount = +item.fsCount
            if(item.fsCount>yMaxCount){
            yMaxCount = item.fsCount;
            }
    item.date = parseDate(item.date)
})

var ndx                 = crossfilter(payload),
    xDimension        = ndx.dimension(function(d) {return d.date;}),
    y1Group       = xDimension.group().reduceSum(function(d) {return ((d.jaUsage/1000)*100)/100;}),
    y2Group       = xDimension.group().reduceSum(function(d) {return ((d.sbUsage/1000)*100)/100;}),
    y3Group       = xDimension.group().reduceSum(function(d) {return ((d.fsCapacity/1000)*100)/100;}),
    y4Group       = xDimension.group().reduceSum(function(d) {return d.fsCount;}),
    y5Group       = xDimension.group().reduceSum(function(d) {return (0.85*((d.fsCapacity/1000)*100)/100);});

var all = ndx.groupAll();

var minDate = xDimension.bottom(1)[0].date,
    maxDate = xDimension.top(1)[0].date,
    maxCount = xDimension.top(1)[0].fsCount + 10,
    minCount = xDimension.bottom(1)[0].fsCount - 10,
    yMax = (yMaxCapacity/1000);

// ---------------- chart bounds  -----------     
if(minCount<0){
    minCount = 0;
    maxCount = maxCount-5;
}
yMax = yMax + (yMax/10)

// ---------------- end of chart bounds  -----------  

var wrapWidth = (document.body.clientWidth - 350),
    leftWidth = (wrapWidth*(0.65)),
    rightWidth = (wrapWidth*(0.26)),
    regionalWdt = (wrapWidth*(0.8)),
    halfWidth = (wrapWidth*(0.5)),
    rowCht = (wrapWidth*(0.25));

// begin charting for capacity
var capacity = dc.lineChart(ahCapacityLineChart).group(y3Group, "Total Funds")
.dotRadius(7).interpolate('step-after').renderArea(false).colors("#525252"),
 
 capacity80 = dc.lineChart(ahCapacityLineChart).group(y5Group, "85% Threshold")
 .interpolate('step-after').dotRadius(7).renderArea(false).colors("#5c9b5a"),

 ja = dc.lineChart(ahCapacityLineChart).group(y1Group, "Production").stack(y2Group, "Advertising").dotRadius(7).renderArea(true)
 

ahCapacityLineChart
    .width(leftWidth)
    .height(.45*leftWidth)
    .transitionDuration(600)
    .margins({top: 30,right: 30,bottom: 20,left: 40})
    .x(d3.time.scale().domain([minDate,maxDate]))
    .y(d3.scale.linear().domain([0, yMax]))
    .brushOn(false)
    .legend(dc.legend().x(100).y(5).itemHeight(15).gap(15)
    .autoItemWidth(true)
    .horizontal(true))
    .renderHorizontalGridLines(true)
    .renderVerticalGridLines(true)
    .rangeChart(volumeChart)
    .dimension(xDimension)
    .group(y1Group)
    .title(function(d) { return 'Date: '+d.key + ', Exp.: ' + d.value + " K$"; })
    .compose([
        capacity, capacity80, ja
    ]);

ahCapacityLineChart.yAxisLabel("Expenditures ($1000))")

volumeChart
    .width(leftWidth)
    .height(60)
    .transitionDuration(600)
    .margins({top: 20,right: 30,bottom: 20,left: 60})
    .dimension(xDimension)
    .group(y1Group)
    .centerBar(true)
    .gap(0)
    .colors("#6baed6")
    .brushOn(true)
    .x(d3.time.scale().domain([minDate,maxDate]))
    .round(d3.time.month.round)
    .xUnits(d3.time.weeks)
    .valueAccessor(function(d) {return d.value;});



var recentCapacityObj = data["FSRecentCapacity"];

// -------------------------- end  ---------------------------


// begin charting for pie
var pieData = [];
pieData.push({label:"Production", value: recentCapacityObj.jaUsage * 0.8});
pieData.push({label:"Advertising", value: recentCapacityObj.sbUsage * 2.5});

var ndxPie                = crossfilter(pieData),
    pieDimension          = ndxPie.dimension(function(d) {return d.label;}),
    pieGroup              = pieDimension.group().reduceSum(function(d) {return d.value;});

var pieWidth = rightWidth,
    pieHeight = 0.6*rightWidth,
    pieRadius = (Math.min(pieWidth, pieHeight) / 2)-20;

ahCapacityPie
    .width(pieWidth)
    .height(pieHeight)
    .transitionDuration(600)
    .externalLabels(-40)
    .radius(pieRadius)
    .legend(dc.legend().x(30).y(5).itemHeight(15).gap(15))
    .dimension(pieDimension)
    .group(pieGroup)
    .title(function(d) { return d.key + ' : ' + d.value+' K$'; })
    .on('renderlet', function(ahCapacityPie) {
            ahCapacityPie.selectAll('text.pie-slice').text(function(d) {
                return Math.round(dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2*Math.PI) * 100), -1) + '% - ' + (Math.round((d.data.value/1000)*100)/100) + ' K$';
            })
        });


// begin charting for count
ahCountLineChart
    .renderArea(true)
    .width(pieWidth*1.56-25)
    .height(0.6*rightWidth)
    .transitionDuration(600)
    .margins({top: 25,right: 30,bottom: 50,left: 30})
    .x(d3.time.scale().domain([minDate,maxDate]))
    .y(d3.scale.linear().domain([minCount, maxCount]))
    .renderHorizontalGridLines(true)
    .renderVerticalGridLines(true)
    .brushOn(false)
    .dimension(xDimension)
    .group(y4Group)
    .rangeChart(ahCapacityLineChart)
    .dotRadius(7)
    .yAxisLabel("Ad Outlets")
    .title(function(d) { return 'Date: '+d.key + ', Outlets: ' + d.value; })
    .on("renderlet", function (ahCountLineChart) {
    ahCountLineChart.selectAll('g.x text')
     .attr('transform', 'translate(-10,10) rotate(315)');
    });



if ((ahCapacityLineChart.filters().length | 
            ahCapacityPie.filters().length | 
            ahCountLineChart.filters().length) > 0) {
            dc.redrawAll(grp);
          }
else {
            dc.renderAll(grp);
          }
});


}



wwCall('#ww-capacity-line', '#ww-capacity-pie', '#ww-fscount-line',  "wwChartGrp", "crossfilter/jaWorldwide-metricCleaned.txt", "#ww-volume-chart")