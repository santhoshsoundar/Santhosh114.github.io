function print_filter(filter){
	var f=eval(filter);
	if (typeof(f.length) != "undefined") {}else{}
	if (typeof(f.top) != "undefined") {f=f.top(Infinity);}else{}
	if (typeof(f.dimension) != "undefined") {f=f.dimension(function(d) { return "";}).top(Infinity);}else{}
	console.log(filter+"("+f.length+") = "+JSON.stringify(f).replace("[","[\n\t").replace(/}\,/g,"},\n\t").replace("]","\n]"));
}

var functionScoreChart = dc.lineChart("#score-line-chart", "magScoresGrp");
var functionSegmentChart = dc.rowChart("#segment-row-chart", "magScoresGrp");
var functionYearChart = dc.barChart("#year-bar-chart", "magScoresGrp");
var functionMarketChart = dc.pieChart("#market-pie-chart", "magScoresGrp");
var avgLineChart = dc.lineChart('#avg-line-chart', 'magScoresGrp');
var avgVolChart = dc.barChart('#avg-volume-chart', 'magScoresGrp');
var customerBubbleChart = dc.bubbleChart('#bubble-chart', 'magScoresGrp');

d3.csv("../equinix/package/customer-min-data.csv", function (err, data) {

            if(err) throw err;

            data.forEach(function(d) {
                    d.ms = +d.ms;
                    d.ic = +d.ic;
                    d.gd = +d.gd;
                });
                
            var g;

            var ndx = crossfilter(data);
            var ndxLine = crossfilter(data);
            var all = ndx.groupAll();
            var parseDate = d3.time.format("%Y-%m-%d").parse;

            var colorScale = d3.scale.ordinal()
                    .domain(["Network", "Cloud & IT Services", "Content & Digital Media", "Financial Services", "Enterprises"])
                    .range(['#3182bd', '#9ecae1', '#e6550d', '#fd8d3c', '#31a354']);

            var plallar = d3.scale.category10();


            var dateDim = ndx.dimension( function(d) { 
                d.Date = parseDate(d['dt']);
                return d.Date;}),
                minDate = dateDim.bottom(1)[0].Date,
                maxDate = dateDim.top(1)[0].Date;

            var dateDimLine = ndxLine.dimension( function(d) { 
                d.Date = parseDate(d['dt']);
                return d.Date;}),
                minDate = dateDim.bottom(1)[0].Date,
                maxDate = dateDim.top(1)[0].Date;

            var customerDim = ndx.dimension( function(d) { return d['id']; });
            var segmentDim = ndx.dimension( function(d) { return d['sg']; });
            var yearDim = ndx.dimension( function(d) { return d['yr']; });
            var marketDim = ndx.dimension( function(d) { return d['mk']; }),        
                mScoreVal = dateDim.group().reduceSum( dc.pluck('ms')),
                icScoreVal = dateDim.group().reduceSum(dc.pluck('ic')),
                gdiScoreVal = dateDim.group().reduceSum(dc.pluck('gd')), 
                grpSegment = segmentDim.group(),
                grpYear = yearDim.group(),
                grpMarket = marketDim.group();
                // grpCustFreq = customerDim.group(); 

            var scoresGroup = dateDimLine.group().reduce(

                    function (p, v) {
                            ++p.count;
                            p.ms += v.ms;
                            p.averageMs = p.ms / p.count
                            p.ic += v.ic;
                            p.averageIc = p.ic / p.count
                            p.gd += v.gd
                            p.averageGd = p.gd / p.count
                            return p;
                        },

                        function (p, v) {
                            --p.count;
                            p.ms -= v.ms;
                            p.averageMs = p.ms / p.count
                            p.ic -= v.ic;
                            p.averageIc = p.ic / p.count
                            p.gd -= v.gd
                            p.averageGd = p.gd / p.count
                            return p;
                        },

                        function () {
                            return {
                                count: 0,
                                ms: 0,
                                ic: 0,
                                gd: 0, 
                                averageMs: 0,
                                averageIc: 0,
                                averageGd: 0
                                
                            };
                        }
                    );

            function orderValueMS(p) {
                return p.ms;
                }

            var customerGroup = customerDim.group().reduce(

                    function (p, v) {
                            ++p.count;
                            p.ms += v.ms;
                            p.msAgg = p.ms / p.count;
                            p.ic += v.ic;
                            p.icAgg = p.ic / p.count;
                            p.gd += v.gd;
                            p.gdAgg = p.gd / p.count;
                            p.sg = v.sg;
                            return p;
                        },

                        function (p, v) {
                            --p.count;
                            p.ms -= v.ms;
                            p.msAgg = p.ms / p.count;
                            p.ic -= v.ic;
                            p.icAgg = p.ic / p.count;
                            p.gd -= v.gd;
                            p.gdAgg = p.gd / p.count;
                            p.sg = v.sg;
                            return p;
                        },

                        function () {
                            return {
                                count: 0,
                                ms: 0,
                                msAgg:0,
                                ic: 0,
                                icAgg: 0, 
                                gd: 0, 
                                gdAgg: 0,
                                sg: ''
                            };
                        }
                    );

// .order(orderValueMS).top(50)

            functionScoreChart
                .width(950)
                .height(400)
                .margins({top: 10,right: 20,bottom: 20,left: 50})
                .dimension(dateDim)
                .group(mScoreVal, 'comp_mscore')
                .stack(icScoreVal, 'ic_net_score')
                .stack(gdiScoreVal, 'gdi_net_score')
                .x(d3.time.scale().domain([minDate,maxDate]))
                .renderArea(true)
                .brushOn(false)
                .renderHorizontalGridLines(true)
                .renderVerticalGridLines(true)
                .elasticY(true)
                .yAxisLabel("Aggregated Scores")
                .legend(dc.legend().x(100).y(15).itemHeight(15).gap(15)
                    .autoItemWidth(true)
                    .horizontal(false))
                .title(function(d) { return 'Date: '+d.key + ', Sum:'+d.value; })
                .dotRadius(7);



            customerBubbleChart 
                .width(950)
                .height(400)
                .margins({top: 10, right: 50, bottom: 30, left: 40})
                .dimension(customerDim)
                .group(customerGroup)
                .colors(plallar)
                .colorAccessor(function (d) {
                    return d.value.sg;
                })
                .keyAccessor(function (p) {
                    return p.value.icAgg ;
                })
                .valueAccessor(function (p) {
                    return p.value.gdAgg ;
                })
                .radiusValueAccessor(function (p) {
                    return p.value.msAgg ;
                })
                .maxBubbleRelativeSize(0.05)
                .x(d3.scale.pow().exponent(0.5).domain([0, 110]))
                .y(d3.scale.pow().exponent(0.5).domain([12, 110]))
                .yAxisLabel("Avg  ic_Scores")
                .xAxisLabel("Avg  gd_Scores")
                .r(d3.scale.linear().domain([0, 500]))
                .renderHorizontalGridLines(true)
                .renderVerticalGridLines(true)
                .renderLabel(true)
                .label(function (p) {
                    return p.key;
                })
                .legend(dc.legend().x(100).y(15).itemHeight(15).gap(15)
                    .autoItemWidth(true)
                    .horizontal(true))
                .renderTitle(true)
                .title(function (p) {
                    return [
                        'Customer ID: '+ p.key,
                        'Sector: ' + p.value.sg,
                        'mScore: ' + p.value.ms,
                        'Avg mScore: ' + p.value.msAgg,
                        'icScore: ' + p.value.ic,
                        'Avg icScore: ' + p.value.icAgg,
                        'gdScore: ' + p.value.gd,
                        'Avg gdScore: ' + p.value.gdAgg
                    ].join('\n');
                });

            functionSegmentChart
                .width(360)
                .height(220)
                .margins({top: 10,right: 10,bottom: 30,left: 10})
                .dimension(segmentDim)
                .group(grpSegment)
                .elasticX(true)
                .colors(plallar);

            functionYearChart
                .width(350)
                .height(220)
                .margins({top: 10,right: 10,bottom: 30,left: 40})
                .dimension(yearDim)
                .group(grpYear)
                .xUnits(dc.units.ordinal)
                .x(d3.scale.ordinal().domain(['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008']))
                .yAxisLabel("Count")
                .elasticY(true);

            functionMarketChart
                .width(260)
                .height(200)
                .dimension(marketDim)
                .group(grpMarket)
                .legend(dc.legend().x(215));


            avgLineChart
                .width(950)
                .height(400)
                .margins({top: 10,right: 20,bottom: 20,left: 50})
                .dimension(dateDimLine)
                .group(scoresGroup, 'avg_mscore')
                .valueAccessor(function(p) { 
                        return p.value.averageMs; 
                        }) 
                .stack(scoresGroup, 'avg_ic__score')
                .valueAccessor(function(p) { 
                        return p.value.averageIc; 
                        }) 
                .stack(scoresGroup, 'avg_gdi_score')
                .valueAccessor(function(p) { 
                        return p.value.averageGd; 
                        }) 
                .rangeChart(avgVolChart)
                .x(d3.time.scale().domain([minDate,maxDate]))
                .renderArea(true)
                .brushOn(false)
                .renderHorizontalGridLines(true)
                .renderVerticalGridLines(true)
                .yAxisLabel("Average Scores")
                .legend(dc.legend().x(800).y(15).itemHeight(15).gap(15)
                    .autoItemWidth(true)
                    .horizontal(false))
                .title(function(d) { return 'Date: '+d.key + ', Average mScore: ' + Math.round(d.value.averageMs)+', Average icScore: ' + Math.round(d.value.averageIc)+', Average: ' + Math.round(d.value.averageGd) ; })
                .dotRadius(7);


            avgVolChart
                .width(980)
                .height(60)
                .margins({top: 0,right: 20,bottom: 20,left: 90})
                .dimension(dateDimLine)
                .group(scoresGroup)
                .valueAccessor(function(p) { 
                        return p.value.averageMs; 
                        }) 
                .centerBar(true)
                .gap(0)
                .colors("#6baed6")
                .brushOn(true)
                .x(d3.time.scale().domain([minDate,maxDate]));

            avgVolChart.xUnits(function(){return 10;});

            dc.dataCount(".dc-data-count", "magScoresGrp")
                    .dimension(ndx)
                    .group(all);

            dc.renderAll('magScoresGrp');

});





