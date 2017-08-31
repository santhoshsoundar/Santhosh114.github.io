// This is a D3.js DC.js script butit for my dashboard app

'use strict';

function print_filter(filter){
	var f=eval(filter);
	if (typeof(f.length) != "undefined") {}else{}
	if (typeof(f.top) != "undefined") {f=f.top(Infinity);}else{}
	if (typeof(f.dimension) != "undefined") {f=f.dimension(function(d) { return "";}).top(Infinity);}else{}
	console.log(filter+"("+f.length+") = "+JSON.stringify(f).replace("[","[\n\t").replace(/}\,/g,"},\n\t").replace("]","\n]"));
}



function wwCall(ahCapacityLineChartID, ahCapacityPieID, ahCountLineChartID, grp,  col, pieMetaVar, barMetaVar, barMetaVarAb, volumeID, regionalChartID, regionalBarChartID, regionalAbsBarID ){

var ahCapacityLineChart = dc.compositeChart(ahCapacityLineChartID,grp);
var ahCapacityPie = dc.pieChart(ahCapacityPieID, grp);
var ahCountLineChart = dc.lineChart(ahCountLineChartID, grp);
var volumeChart = dc.barChart( volumeID, grp);

var regionalBarChart = dc.compositeChart(regionalBarChartID, grp);
var regionalLineChart = dc.compositeChart(regionalChartID, grp);
var regionalAbsBar = dc.compositeChart(regionalAbsBarID, grp);

d3.json(col, function(error, data) {
var parseDate = d3.time.format("%Y-%m-%d").parse;
var payload = data[0]["FSUsagePerDay"];


var yMaxCapacity = 0,
    yMaxCount = 0;
payload.forEach( item => {
    item.jaUsage = +item.jaUsage
    item.sbUsage = +item.sbUsage
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
    y5Group       = xDimension.group().reduceSum(function(d) {return (0.8*((d.fsCapacity/1000)*100)/100);}),
    y6Group       = xDimension.group().reduceSum(function(d) {return (0.65*((d.fsCapacity/1000)*100)/100);});

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



if(document.body.clientWidth < 1280){
    var wrapWidth = 1280,
    leftWidth = (wrapWidth*(0.65)),
    rightWidth = (wrapWidth*(0.26)),
    regionalWdt = (wrapWidth*(0.8)),
    halfWidth = (wrapWidth*(0.485)),
    rowCht = (wrapWidth*(0.25));
}
else if(document.body.clientWidth > 1280 && document.body.clientWidth < 1800){
    var wrapWidth = (document.body.clientWidth - 250),
    leftWidth = (wrapWidth*(0.65)),
    rightWidth = (wrapWidth*(0.26)),
    regionalWdt = (wrapWidth*(0.8)),
    halfWidth = (wrapWidth*(0.5)),
    rowCht = (wrapWidth*(0.25));
}
else if(document.body.clientWidth > 1800){
    var wrapWidth = (1800 - 250),
    leftWidth = (wrapWidth*(0.65)),
    rightWidth = (wrapWidth*(0.26)),
    regionalWdt = (wrapWidth*(0.8)),
    halfWidth = (wrapWidth*(0.5)),
    rowCht = (wrapWidth*(0.25));
}

// begin charting for capacity
var capacity = dc.lineChart(ahCapacityLineChart).group(y3Group, "Capacity")
.dotRadius(7).interpolate('step-after').renderArea(false).colors("#525252"),
 
 capacity80 = dc.lineChart(ahCapacityLineChart).group(y5Group, "80% Capacity")
 .interpolate('step-after').dotRadius(7).renderArea(false).colors("#FF5D5D"),
 
 capacity65 = dc.lineChart(ahCapacityLineChart).group(y6Group, "65% Capacity")
 .interpolate('step-after').dotRadius(7).renderArea(false).colors("#715454"),

 ja = dc.lineChart(ahCapacityLineChart).group(y1Group, "Job Archive").stack(y2Group, "Sandbox").dotRadius(7).renderArea(true)
 
            


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
    .title(function(d) { return 'Date: '+d.key + ', Disk: ' + d.value + "(TB)"; })
    .compose([
        capacity, capacity80, capacity65, ja
    ]);

ahCapacityLineChart.yAxisLabel("Disk Utilization (TB)")

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



var recentCapacityObj = data[0]["FSRecentCapacity"];
// set values for the html elements -------------------------------
var pieNode = document.getElementById(pieMetaVar);
while (pieNode.firstChild) {
    pieNode.removeChild(pieNode.firstChild);
}
var node = document.createElement("P");
var textnode = document.createTextNode(recentCapacityObj.date);
node.appendChild(textnode);
document.getElementById(pieMetaVar).appendChild(node);



var barNode = document.getElementById(barMetaVar);
while (barNode.firstChild) {
    barNode.removeChild(barNode.firstChild);
}
var node2 = document.createElement("P");
var textnode2 = document.createTextNode(recentCapacityObj.date);
node2.appendChild(textnode2);
document.getElementById(barMetaVar).appendChild(node2);


var barNodeAb = document.getElementById(barMetaVarAb);
while (barNodeAb.firstChild) {
    barNodeAb.removeChild(barNodeAb.firstChild);
}
var node3 = document.createElement("P");
var textnode3 = document.createTextNode(recentCapacityObj.date);
node3.appendChild(textnode3);
document.getElementById(barMetaVarAb).appendChild(node3);

// -------------------------- end  ---------------------------


// begin charting for pie
var pieData = [];
pieData.push({label:"Job Archive", value: recentCapacityObj.jaUsage});
pieData.push({label:"Sandbox", value: recentCapacityObj.sbUsage});

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
    .title(function(d) { return d.key + ' : ' + d.value+' GB'; })
    .on('renderlet', function(ahCapacityPie) {
            ahCapacityPie.selectAll('text.pie-slice').text(function(d) {
                return Math.round(dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2*Math.PI) * 100), -1) + '% - ' + (Math.round((d.data.value/1000)*100)/100) + ' TB';
            })
        });


// begin charting for count
ahCountLineChart
    .renderArea(true)
    .width(rightWidth-15)
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
    .yAxisLabel("Filer Count")
    .title(function(d) { return 'Date: '+d.key + ', FilerCount: ' + d.value; })
    .on("renderlet", function (ahCountLineChart) {
    ahCountLineChart.selectAll('g.x text')
     .attr('transform', 'translate(-10,10) rotate(315)');
    });






var regionalPayload = data[0]["FSLocTrend"],
    yMaxRegional = 0;

regionalPayload.forEach( item => {
    item.date = parseDate(item.date)
    if(item.bglUsage>yMaxRegional){
            yMaxRegional = item.bglUsage/1000;
    }
})

var minDate2 = regionalPayload[0].date,
    maxDate2 = regionalPayload[regionalPayload.length-1].date,
    y2Max = (yMaxRegional)+15;


var ndx2                 = crossfilter(regionalPayload),
    x2Dimension        = ndx2.dimension(function(d) {return d.date;}),
    y3RGroup       = x2Dimension.group().reduceSum(function(d) {return ((d.bglUsage/1000)*100)/100;}),
    y4RGroup       = x2Dimension.group().reduceSum(function(d) {return ((d.ukUsage/1000)*100)/100;}),
    y5RGroup       = x2Dimension.group().reduceSum(function(d) {return ((d.frUsage/1000)*100)/100;}),
    y6RGroup       = x2Dimension.group().reduceSum(function(d) {return ((d.glaUsage/1000)*100)/100;}),
    y7RGroup       = x2Dimension.group().reduceSum(function(d) {return ((d.gnbUsage/1000)*100)/100;}),
    y8RGroup       = x2Dimension.group().reduceSum(function(d) {return ((d.miUsage/1000)*100)/100;}),
    y9RGroup       = x2Dimension.group().reduceSum(function(d) {return ((d.mucUsage/1000)*100)/100;}),
    y10RGroup       = x2Dimension.group().reduceSum(function(d) {return ((d.padUsage/1000)*100)/100;}),
    y11RGroup       = x2Dimension.group().reduceSum(function(d) {return ((d.seUsage/1000)*100)/100;}),
    y12RGroup       = x2Dimension.group().reduceSum(function(d) {return ((d.tyoUsage/1000)*100)/100;}),
    y13RGroup       = x2Dimension.group().reduceSum(function(d) {return ((d.krUsage/1000)*100)/100;});

var all2 = ndx2.groupAll();

 var expenseColors2 = ["#3182bd", "#e6550d", "#9ecae1", "#c6dbef", "#6baed6", "#fd8d3c", "#fdae6b", "#fdd0a2", "#a1d99b", "#74c476", "#31a354",];

 var bglReg = dc.lineChart(regionalLineChart).group(y3RGroup, "BGL").dotRadius(7).renderArea(false).colors(expenseColors2[0])
                .renderDataPoints({radius: 5, fillOpacity: 0.8, strokeOpacity: 0.8}),
 ukReg = dc.lineChart(regionalLineChart).group(y4RGroup, "UK").dotRadius(7).renderArea(false).colors(expenseColors2[10])
                .renderDataPoints({radius: 5, fillOpacity: 0.8, strokeOpacity: 0.8}),
 frReg = dc.lineChart(regionalLineChart).group(y5RGroup, "FR").dotRadius(7).renderArea(false).colors(expenseColors2[1])
                .renderDataPoints({radius: 5, fillOpacity: 0.8, strokeOpacity: 0.8}),
 glaReg = dc.lineChart(regionalLineChart).group(y6RGroup, "GLA").dotRadius(7).renderArea(false).colors(expenseColors2[2])
                .renderDataPoints({radius: 5, fillOpacity: 0.8, strokeOpacity: 0.8}),
 gnbReg = dc.lineChart(regionalLineChart).group(y7RGroup, "GNB").dotRadius(7).renderArea(false).colors(expenseColors2[3])
                .renderDataPoints({radius: 5, fillOpacity: 0.8, strokeOpacity: 0.8}),
 miReg = dc.lineChart(regionalLineChart).group(y8RGroup, "MI").dotRadius(7).renderArea(false).colors(expenseColors2[5])
                .renderDataPoints({radius: 5, fillOpacity: 0.8, strokeOpacity: 0.8}),
 mucReg = dc.lineChart(regionalLineChart).group(y9RGroup, "MUC").dotRadius(7).renderArea(false).colors(expenseColors2[6])
                .renderDataPoints({radius: 5, fillOpacity: 0.8, strokeOpacity: 0.8}),
 padReg = dc.lineChart(regionalLineChart).group(y10RGroup, "PAD").dotRadius(7).renderArea(false).colors(expenseColors2[7])
                .renderDataPoints({radius: 5, fillOpacity: 0.8, strokeOpacity: 0.8}),
 seReg = dc.lineChart(regionalLineChart).group(y11RGroup, "SE").dotRadius(7).renderArea(false).colors(expenseColors2[8])
                .renderDataPoints({radius: 5, fillOpacity: 0.8, strokeOpacity: 0.8}),
 tyoReg = dc.lineChart(regionalLineChart).group(y12RGroup, "TYO").dotRadius(7).renderArea(false).colors(expenseColors2[9])
                .renderDataPoints({radius: 5, fillOpacity: 0.8, strokeOpacity: 0.8}),
 krReg = dc.lineChart(regionalLineChart).group(y13RGroup, "KR").dotRadius(7).renderArea(false).colors(expenseColors2[4])
                .renderDataPoints({radius: 5, fillOpacity: 0.8, strokeOpacity: 0.8});

regionalLineChart
    .width(halfWidth*1.537)
    .height(.525*leftWidth)
    .transitionDuration(600)
    .margins({top: 20,right: 80,bottom: 30,left: 30})
    .x(d3.time.scale().domain([minDate2,maxDate2]))
    .y(d3.scale.linear().domain([0, y2Max]))
    .brushOn(false)
    .legend(dc.legend().x(100).y(20).itemHeight(15).gap(15)
    .autoItemWidth(true)
    .horizontal(true))
    .renderHorizontalGridLines(true)
    .renderVerticalGridLines(true)
    .dimension(x2Dimension)
    .yAxisLabel("Disk Utilization (TB)")
    .group(y3RGroup)
    .title(function(d) { return 'Date: '+d.key + ', Disk: ' + d.value + "(TB)"; })
    .compose([
     bglReg, glaReg, gnbReg, krReg, frReg, miReg, mucReg, padReg, seReg, tyoReg, ukReg, 
    ]);


var rowChartObj = data[0]["FSBarTrend"];
console.log(rowChartObj)

var ndx3                 = crossfilter(rowChartObj),
    x3Dimension        = ndx3.dimension(function(d) {return d.site;}),
    yRowGroup_per       = x3Dimension.group().reduceSum(function(d) {return d.percentUti;}),
    yRowGroup_abs       = x3Dimension.group().reduceSum(function(d) {return d.absoluteUti;}),
    yRowGroup_rem       = x3Dimension.group().reduceSum(function(d) {return d.remCapacity;}),
    yRow80Group       = x3Dimension.group().reduceSum(function(d) {return 80;}),
    yRow65Group       = x3Dimension.group().reduceSum(function(d) {return 65;});

// begin charting for regional bars
var capacity80 = dc.lineChart(regionalBarChart).group(yRow80Group, "80% Full - Critical").renderArea(false).colors("#FF5D5D"),
    capacity65 = dc.lineChart(regionalBarChart).group(yRow65Group, "65% Full - Warning").renderArea(false).colors("#715454"),
    bars = dc.barChart(regionalBarChart).gap(15).centerBar(true)
             .dimension(x3Dimension).group(yRowGroup_per);

regionalBarChart
    .width(halfWidth*0.75)
    .height(.35*leftWidth)
    .margins({top: 25,right: 10,bottom: 20,left: 40})
    .dimension(x3Dimension)
    .group(yRowGroup_per)
    .compose([
      bars, capacity80, capacity65 
            ])
    .legend(dc.legend().x(rowCht).y(-20).itemHeight(15).gap(15)
    .autoItemWidth(true)
    .horizontal(false))
    .y(d3.scale.linear().domain([0, 100])) 
    .xUnits(dc.units.ordinal)
    .x(d3.scale.ordinal().domain(["BGL", "GLA", "GNB", "KR",  "FR",  "MI", "MUC", "PAD", "SE", "TYO", "UK"])) 
    .renderHorizontalGridLines(true)
    .title(function(d) { return 'Date: '+d.key + ', Usage: ' + d.value + "%"; })
    .on('renderlet', function(regionalBarChart){
            regionalBarChart.selectAll('rect.bar').each(function(d, i){
                d3.select(this).attr("style", "fill: " + expenseColors2[i]);
            })
            regionalBarChart.selectAll('g.x text')
                        .attr('transform', 'translate(-16,0)');
                
    })
    .yAxis().tickFormat(function (v) {
                        return v + " % ";
                    });

// begin charting for regional bars absolute values
var absBars = dc.barChart(regionalAbsBar).gap(15).centerBar(true)
             .dimension(x3Dimension).group(yRowGroup_abs).stack(yRowGroup_rem, "Free Space");


 
var yMaxBar = data[0]["FSBarTrend_yMax"];

regionalAbsBar
    .width(halfWidth*0.75)
    .height(.35*leftWidth)
    .margins({top: 25,right: 10,bottom: 20,left: 30})
    .dimension(x3Dimension)
    .group(yRowGroup_abs)
    .compose([
      absBars
            ])
    .legend(dc.legend().x(rowCht).y(-25).itemHeight(15).gap(15)
    .autoItemWidth(true)
    .horizontal(false))
    // .y(d3.scale.pow().exponent(0.6).domain([0, yMaxBar])) 
    .y(d3.scale.linear().domain([0, yMaxBar])) 
    .yAxisLabel("Disk Utilization (TB)")
    .xUnits(dc.units.ordinal)
    .x(d3.scale.ordinal().domain(["BGL", "GLA", "GNB", "KR",  "FR",  "MI", "MUC", "PAD", "SE", "TYO", "UK"])) 
    .renderHorizontalGridLines(true)
    .title(function(d) { return 'Date: '+d.key + ', Usage: ' + d.value + "%"; })
    .on('renderlet', function(regionalBarChart){
            regionalBarChart.selectAll('rect.bar').each(function(d, i){
                d3.select(this).attr("style", "fill: " + expenseColors2[i]);
            })
            regionalBarChart.selectAll('g.x text')
                        .attr('transform', 'translate(-13,0)');
                
    });


if ((ahCapacityLineChart.filters().length | 
            ahCapacityPie.filters().length | 
            ahCountLineChart.filters().length) > 0) {
            dc.redrawAll(grp);
          }
else {
            dc.renderAll(grp);
          }
return recentCapacityObj;
});


}