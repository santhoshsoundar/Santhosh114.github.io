function print_filter(filter){
	var f=eval(filter);
	if (typeof(f.length) != "undefined") {}else{}
	if (typeof(f.top) != "undefined") {f=f.top(Infinity);}else{}
	if (typeof(f.dimension) != "undefined") {f=f.dimension(function(d) { return "";}).top(Infinity);}else{}
	console.log(filter+"("+f.length+") = "+JSON.stringify(f).replace("[","[\n\t").replace(/}\,/g,"},\n\t").replace("]","\n]"));
}

var functionCompositeChart = dc.compositeChart('#custComposite','customerChartGrp');
var functionCustYear = dc.barChart("#cust-year-bar", "customerChartGrp");
var functionCustMarket = dc.pieChart("#cust-market-pie", "customerChartGrp");


$.getJSON('http://whateverorigin.org/get?url=' +
    encodeURIComponent('https://stark-headland-64641.herokuapp.com/getCust/1') + '&callback=?',
    function (data) {

            var custData = JSON.parse(data.contents);

            var ndxCust = crossfilter(custData);
            var allCust = ndxCust.groupAll();
            var parseDate = d3.time.format("%Y-%m-%d").parse;


            var custDateDim = ndxCust.dimension( function(d) {
                d.Date = parseDate(d['date']);
                return d.Date;}),
                minDate = custDateDim.bottom(1)[0].Date,
                maxDate = custDateDim.top(1)[0].Date;

            var custYearDim = ndxCust.dimension( function(d) { return d['year']; });
            var custMarketDim = ndxCust.dimension( function(d) { return d['market']; }),
                custGrpYear = custYearDim.group(),
                custGrpMarket = custMarketDim.group();


            var ibxVal = custDateDim.group().reduceSum( dc.pluck('net_ibx_presence')),
                metroVal = custDateDim.group().reduceSum(dc.pluck('net_metro_presence')),
                custMScoreVal = custDateDim.group().reduceSum(dc.pluck('comp_mscore'));

                var ibxLine = dc.lineChart(functionCompositeChart).group(ibxVal, "Net IBX Presence")
                .useRightYAxis(true)
                .dotRadius(7).interpolate('step-after').renderArea(false).colors("#007022"),

                metroLine = dc.lineChart(functionCompositeChart).group(metroVal, "Net Metro Presence")
                .useRightYAxis(true)
                .interpolate('step-after').dotRadius(7).renderArea(false).colors("#FF5D5D"),

                customerMScoreLine = dc.lineChart(functionCompositeChart).group(custMScoreVal, "comp_mScore")
                            .colors("#2f7ea0")
                            .dimension(custDateDim)
                            .renderTitle(true)
                            .renderArea(true)
                            .brushOn(false)
                            .dotRadius(7)
                            .x(d3.time.scale().domain([minDate, maxDate]))
                            .render();

                functionCompositeChart
                                .width(950)
                                .height(400)
                                .margins({top: 10,right: 45,bottom: 20,left: 45})
                                .dimension(custDateDim)
                                .group(custMScoreVal)
                                .x(d3.time.scale().domain([minDate,maxDate]))
                                .brushOn(false)
                                .legend(dc.legend().x(600).y(10).itemHeight(15).gap(5)
                                    .autoItemWidth(false)
                                    .horizontal(false))
                                .renderHorizontalGridLines(true)
                                .renderVerticalGridLines(true)
                                .yAxisLabel("Composite mScore")
                                .rightYAxisLabel(" Net IBX Presence / Net Metro Presence")
                                .title(function(d) { return 'Date: '+d.key + ', Value: ' + d.value ; })
                    .compose([
                        customerMScoreLine, ibxLine, metroLine
                    ]);

                    functionCustYear
                        .width(350)
                        .height(220)
                        .margins({top: 10,right: 10,bottom: 30,left: 40})
                        .dimension(custYearDim)
                        .group(custGrpYear)
                        .xUnits(dc.units.ordinal)
                        .x(d3.scale.ordinal().domain(['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008']))
                        .yAxisLabel("Count")
                        .elasticY(true);

                    functionCustMarket
                        .width(300)
                        .height(200)
                        .dimension(custMarketDim)
                        .group(custGrpMarket)
                        .legend(dc.legend().x(235));

                dc.dataCount("#customerCount", "customerChartGrp")
                    .dimension(ndxCust)
                    .group(allCust);

                    dc.renderAll('customerChartGrp');


        });


var searchCustomer = function newSearch(searchKey) {

        $.getJSON('http://whateverorigin.org/get?url=' +
            encodeURIComponent(`https://stark-headland-64641.herokuapp.com/getCust/${searchKey}`) + '&callback=?',
            function (data) {

            document.getElementById("customerIDVal").innerHTML = "Insights for CustID - " +searchKey;

            var custData = JSON.parse(data.contents);

            var ndxCust = crossfilter(custData);
            var allCust = ndxCust.groupAll();
            var parseDate = d3.time.format("%Y-%m-%d").parse;


            var custDateDim = ndxCust.dimension( function(d) {
                d.Date = parseDate(d['date']);
                return d.Date;}),
                minDate = custDateDim.bottom(1)[0].Date,
                maxDate = custDateDim.top(1)[0].Date;

            var custYearDim = ndxCust.dimension( function(d) { return d['year']; });
            var custMarketDim = ndxCust.dimension( function(d) { return d['market']; }),
                custGrpYear = custYearDim.group(),
                custGrpMarket = custMarketDim.group();


            var ibxVal = custDateDim.group().reduceSum( dc.pluck('net_ibx_presence')),
                metroVal = custDateDim.group().reduceSum(dc.pluck('net_metro_presence')),
                custMScoreVal = custDateDim.group().reduceSum(dc.pluck('comp_mscore'));

                var ibxLine = dc.lineChart(functionCompositeChart).group(ibxVal, "Net IBX Presence")
                .useRightYAxis(true)
                .dotRadius(7).interpolate('step-after').renderArea(false).colors("#007022"),

                metroLine = dc.lineChart(functionCompositeChart).group(metroVal, "Net Metro Presence")
                .useRightYAxis(true)
                .interpolate('step-after').dotRadius(7).renderArea(false).colors("#FF5D5D"),

                customerMScoreLine = dc.lineChart(functionCompositeChart).group(custMScoreVal, "comp_mScore")
                            .colors("#2f7ea0")
                            .dimension(custDateDim)
                            .renderTitle(true)
                            .renderArea(true)
                            .brushOn(false)
                            .x(d3.time.scale().domain([minDate, maxDate]))
                            .render();

                functionCompositeChart
                                .width(950)
                                .height(400)
                                .margins({top: 10,right: 45,bottom: 20,left: 45})
                                .dimension(custDateDim)
                                .group(custMScoreVal)
                                .x(d3.time.scale().domain([minDate,maxDate]))
                                .brushOn(false)
                                .legend(dc.legend().x(600).y(10).itemHeight(15).gap(5)
                                    .autoItemWidth(false)
                                    .horizontal(false))
                                .renderHorizontalGridLines(true)
                                .renderVerticalGridLines(true)
                                .yAxisLabel("Composite mScore")
                                .rightYAxisLabel(" Net IBX Presence / Net Metro Presence")
                                .title(function(d) { return 'Date: '+d.key + ', Value: ' + d.value ; })
                    .compose([
                        customerMScoreLine, ibxLine, metroLine
                    ]);

                    functionCustYear
                        .width(350)
                        .height(220)
                        .margins({top: 10,right: 10,bottom: 30,left: 40})
                        .dimension(custYearDim)
                        .group(custGrpYear)
                        .xUnits(dc.units.ordinal)
                        .x(d3.scale.ordinal().domain(['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008']))
                        .yAxisLabel("Count")
                        .elasticY(true);

                    functionCustMarket
                        .width(300)
                        .height(200)
                        .dimension(custMarketDim)
                        .group(custGrpMarket)
                        .legend(dc.legend().x(235));

                    dc.renderAll('customerChartGrp');
        });

    }


var elem = document.getElementById("mySearch");
    elem.onkeyup = function(e){
        if(e.keyCode == 13){
        mySearchFunction();
        }
    }

function mySearchFunction() {
    var searchKey = document.getElementById("mySearch").value;
    searchCustomer(searchKey);
}
