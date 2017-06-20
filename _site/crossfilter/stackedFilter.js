'use strict';
String.prototype.replaceAt = function(index, character) {
return this.substr(0, index) + character + this.substr(index + character.length);
}
function composePlots(dimention, lineGrp, barGrp, sessLineGrp, compositeChart, rangeChart, minDate, maxDate, expo, y2Label){

    var yMax = barGrp.top(1)[0].value;
    yMax = yMax+5;

    var myLine = dc.lineChart(compositeChart)
            .group(lineGrp)
            .colors("#FF4E49")
            .dimension(dimention)
            .valueAccessor(function (d) {return d.value;})
            .brushOn(false)
            .x(d3.time.scale().domain([minDate, maxDate]))
            .render();

    var myBar = dc.barChart(compositeChart)
            .group(barGrp)
            .colors("#2f7ea0")
            .dimension(dimention)
            .valueAccessor(function (d) {return d.value;})
            .renderTitle(true)
            .centerBar(true)
            .gap(5)
            .brushOn(false)
            .x(d3.time.scale().domain([minDate, maxDate]))
            .render();
    
    var myLineSPJM = dc.lineChart(compositeChart)
            .dimension(dimention)
            .group(sessLineGrp)
            .valueAccessor(function (d) {return d.value;})
            .colors("#007a00")
            .brushOn(false)
            .useRightYAxis(true)
            .x(d3.time.scale().domain([minDate, maxDate]))
            .render();

    compositeChart
        .width(900)
        .height(320)
        .transitionDuration(1000)
        .dimension(dimention)
        .group(lineGrp)
        .rangeChart(rangeChart)
        .rightYAxisLabel( y2Label )
        .yAxisLabel("Test Node duration (hours)")
        .shareTitle(false)
        .y(d3.scale.pow().exponent(expo).domain([0, yMax]))
        .x(d3.time.scale().domain([minDate, maxDate]))
        .xUnits(function(){return 50;})
        .compose([
            myBar,  myLine, myLineSPJM
        ])
        .elasticY(true)
        .yAxisPadding(5)
        .renderHorizontalGridLines(true)
        .renderVerticalGridLines(true)
        .on('renderlet', function(chartComposite){
            myBar.selectAll('rect').attr({opacity: '0.60'})
        })
        .brushOn(false)
        .render();

return compositeChart;
}























var volumeChart = dc.barChart('#volume-chart', "testNodeGrp");

var lynCompositeChartS = dc.compositeChart("#lynCompositeChartS", "testNodeGrp");
var lynCompositeChartSpJ = dc.compositeChart("#lynCompositeChartSpJ", "testNodeGrp");

var macCompositeChartS = dc.compositeChart("#macCompositeChartS", "testNodeGrp");
var macCompositeChartSpJ = dc.compositeChart("#macCompositeChartSpJ", "testNodeGrp");

var winCompositeChartS = dc.compositeChart("#winCompositeChartS", "testNodeGrp");
var winCompositeChartSpJ = dc.compositeChart("#winCompositeChartSpJ", "testNodeGrp");

d3.json('/collectordb/TestNodeStats', function(error, data) {
    if (error) throw error;
    var payload = data[0].testNodeData;
    var parseDate = d3.time.format("%Y-%m-%d").parse;

    var ndxLyn = crossfilter(payload.glnxa64);
    var all = ndxLyn.groupAll();
    var dateDim = ndxLyn.dimension(function(d){
        d.Date = parseDate(d.date);
        return d.Date;}),
    grpDur = dateDim.group().reduceSum(dc.pluck('duration')),
    grpDMA = dateDim.group().reduceSum(dc.pluck('durationMovavg')),
    grpSPJM = dateDim.group().reduceSum(dc.pluck('sessionPerJobMovavg')),
    grpSMA = dateDim.group().reduceSum(dc.pluck('sessionMovavg'));
    var minDate = dateDim.bottom(1)[0].Date,
    maxDate = dateDim.top(1)[0].Date;

var compositeLynSpJ = composePlots(dateDim,  grpDMA, grpDur, grpSPJM, lynCompositeChartSpJ, volumeChart, minDate, maxDate, 0.4, "Sessions per Job");
var compositeLyn = composePlots(dateDim,  grpDMA, grpDur, grpSMA, lynCompositeChartS, compositeLynSpJ, minDate, maxDate, 0.4, "Total Sessions (1 Unit = 1K Session)");

    var ndxMac = crossfilter(payload.maci64);
    var dateDimMac = ndxMac.dimension(function(d){
        d.Date = parseDate(d.date);
        return d.Date;}),
    grpDurM = dateDimMac.group().reduceSum(dc.pluck('duration')),
    grpDMAM = dateDimMac.group().reduceSum(dc.pluck('durationMovavg')),
    grpSPJMM = dateDimMac.group().reduceSum(dc.pluck('sessionPerJobMovavg')),
    grpSMAM = dateDimMac.group().reduceSum(dc.pluck('sessionMovavg'));
 
var compositeMacSpJ = composePlots(dateDimMac,  grpDMAM, grpDurM, grpSPJMM, macCompositeChartSpJ, compositeLyn, minDate, maxDate, 0.4, "Sessions per Job");  
var compositeMac = composePlots(dateDimMac,  grpDMAM, grpDurM, grpSMAM, macCompositeChartS, compositeMacSpJ, minDate, maxDate, 0.4, "Total Sessions (1 Unit = 1K Session)"); 

    var ndxWin = crossfilter(payload.win64);
    var dateDimWin = ndxWin.dimension(function(d){
        d.Date = parseDate(d.date);
        return d.Date;}),
    grpDurW = dateDimWin.group().reduceSum(dc.pluck('duration')),
    grpDMAW = dateDimWin.group().reduceSum(dc.pluck('durationMovavg')),
    grpSPJMW = dateDimWin.group().reduceSum(dc.pluck('sessionPerJobMovavg')),
    grpSMAW = dateDimWin.group().reduceSum(dc.pluck('sessionMovavg'));

var compositeWinSpJ = composePlots(dateDimWin,  grpDMAW, grpDurW, grpSPJMW, winCompositeChartSpJ, compositeMac, minDate, maxDate, 0.4, "Sessions per Job");  
var compositeWin = composePlots(dateDimWin,  grpDMAW, grpDurW, grpSMAW, winCompositeChartS, compositeWinSpJ, minDate, maxDate, 0.4, "Total Sessions (1 Unit = 1K Session)"); 

    volumeChart
        .width(900)
        .height(45)
        .margins({top: 0,right: 50,bottom: 20,left: 40})
        .dimension(dateDim)
        .group(grpDur)
        .centerBar(true)
        .gap(0)
        .brushOn(true)
        .colors("#2f7ea0")
        .x(d3.time.scale().domain([minDate,maxDate]))
        .round(d3.time.month.round)
        .renderVerticalGridLines(true)
        .xUnits(function(){return 65;})
        .valueAccessor(function(d) {return d.value;}).render();

        dc.renderAll();

});

var newScale = function rescalePlots(expo){
    d3.json('/collectordb/TestNodeStats', function(error, data) {
    if (error) throw error;
    var payload = data[0].testNodeData;
    var parseDate = d3.time.format("%Y-%m-%d").parse;

    var ndxLyn = crossfilter(payload.glnxa64);
    var all = ndxLyn.groupAll();
    var dateDim = ndxLyn.dimension(function(d){
        d.Date = parseDate(d.date);
        return d.Date;}),
    grpDur = dateDim.group().reduceSum(dc.pluck('duration')),
    grpDMA = dateDim.group().reduceSum(dc.pluck('durationMovavg')),
    grpSPJM = dateDim.group().reduceSum(dc.pluck('sessionPerJobMovavg')),
    grpSMA = dateDim.group().reduceSum(dc.pluck('sessionMovavg'));
    var minDate = dateDim.bottom(1)[0].Date,
    maxDate = dateDim.top(1)[0].Date;

var compositeLynSpJ = composePlots(dateDim,  grpDMA, grpDur, grpSPJM, lynCompositeChartSpJ, volumeChart, minDate, maxDate, expo, "Sessions per Job");
var compositeLyn = composePlots(dateDim,  grpDMA, grpDur, grpSMA, lynCompositeChartS, compositeLynSpJ, minDate, maxDate, expo, "Total Sessions (1 Unit = 1K Session)");

    var ndxMac = crossfilter(payload.maci64);
    var dateDimMac = ndxMac.dimension(function(d){
        d.Date = parseDate(d.date);
        return d.Date;}),
    grpDurM = dateDimMac.group().reduceSum(dc.pluck('duration')),
    grpDMAM = dateDimMac.group().reduceSum(dc.pluck('durationMovavg')),
    grpSPJMM = dateDimMac.group().reduceSum(dc.pluck('sessionPerJobMovavg')),
    grpSMAM = dateDimMac.group().reduceSum(dc.pluck('sessionMovavg'));
var compositeMacSpJ = composePlots(dateDimMac,  grpDMAM, grpDurM, grpSPJMM, macCompositeChartSpJ, compositeLyn, minDate, maxDate, expo, "Sessions per Job");  
var compositeMac = composePlots(dateDimMac,  grpDMAM, grpDurM, grpSMAM, macCompositeChartS, compositeMacSpJ, minDate, maxDate, expo, "Total Sessions (1 Unit = 1K Session)");   


    var ndxWin = crossfilter(payload.win64);
    var dateDimWin = ndxWin.dimension(function(d){
        d.Date = parseDate(d.date);
        return d.Date;}),
    grpDurW = dateDimWin.group().reduceSum(dc.pluck('duration')),
    grpDMAW = dateDimWin.group().reduceSum(dc.pluck('durationMovavg')),
    grpSPJMW = dateDimWin.group().reduceSum(dc.pluck('sessionPerJobMovavg')),
    grpSMAW = dateDimWin.group().reduceSum(dc.pluck('sessionMovavg'));
var compositeWinSpJ = composePlots(dateDimWin,  grpDMAW, grpDurW, grpSPJMW, winCompositeChartSpJ, compositeMac, minDate, maxDate, expo, "Sessions per Job");  
var compositeWin = composePlots(dateDimWin,  grpDMAW, grpDurW, grpSMAW, winCompositeChartS, compositeWinSpJ, minDate, maxDate, expo, "Total Sessions (1 Unit = 1K Session)"); 

    volumeChart
        .width(900)
        .height(45)
        .margins({top: 0,right: 50,bottom: 20,left: 40})
        .dimension(dateDim)
        .group(grpDur)
        .centerBar(true)
        .gap(0)
        .brushOn(true)
        .colors("#2f7ea0")
        .x(d3.time.scale().domain([minDate,maxDate]))
        .round(d3.time.month.round)
        .renderVerticalGridLines(true)
        .xUnits(function(){return 45;})
        .valueAccessor(function(d) {return d.value;});

        dc.renderAll();

});
}

var $loading = $('#loadingDiv').hide();
var e = document.getElementById("filt-Power"),
    d = document.getElementById("filt-Linear"),
    t = document.getElementById("switcher");


e.addEventListener("click", function(){
  t.checked = false;
  e.classList.add("toggler--is-active");
  d.classList.remove("toggler--is-active");
  $loading.show();
  $loading.fadeOut("slow");
  newScale(0.4);
});

d.addEventListener("click", function(){
  t.checked = true;
  d.classList.add("toggler--is-active");
  e.classList.remove("toggler--is-active");
  $loading.show();
  $loading.fadeOut("slow");
  newScale(1);
});

t.addEventListener("click", function(){
    $loading.show();
    $loading.fadeOut("slow");
  d.classList.toggle("toggler--is-active") && newScale(1); 
  e.classList.toggle("toggler--is-active") && newScale(0.4);
})





