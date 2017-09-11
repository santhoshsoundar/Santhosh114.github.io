function print_filter(filter){
	var f=eval(filter);
	if (typeof(f.length) != "undefined") {}else{}
	if (typeof(f.top) != "undefined") {f=f.top(Infinity);}else{}
	if (typeof(f.dimension) != "undefined") {f=f.dimension(function(d) { return "";}).top(Infinity);}else{}
	console.log(filter+"("+f.length+") = "+JSON.stringify(f).replace("[","[\n\t").replace(/}\,/g,"},\n\t").replace("]","\n]"));
}

var top50BubbleChart = dc.bubbleChart('#top-bubble-chart', 'top50ChGrp')

d3.csv("../equinix/package/top50.csv", function (err, data) {

            if(err) throw err;

            data.forEach(function(d) {
                    d.ms = +d.ms;
                    d.ic = +d.ic;
                    d.gd = +d.gd;
                    d.count = +d.count;
                });

            var ndx50 = crossfilter(data);
            var all50 = ndx50.groupAll();
            var parseDate = d3.time.format("%Y-%m-%d").parse;


            var colorScale = d3.scale.ordinal()
                    .domain(["Network", "Cloud & IT Services", "Content & Digital Media", "Financial Services", "Enterprises"])
                    .range(['#3182bd', '#9ecae1', '#e6550d', '#fd8d3c', '#31a354']);

            var colorPallet = d3.scale.category10();

            var customerIDDim = ndx50.dimension( function(d) { return d['cust_id']; });


            var custDataGrp = customerIDDim.group().reduce(
                 function (p, v) {
                            ++p.count;
                            p.cust_id = v.cust_id;
                            p.avgMS = v.avgMS;
                            p.avgIC = v.avgIC;
                            p.avgGD = v.avgGD;
                            p.sg = v.sg;
                            return p;
                        },

                  function (p, v) {
                            --p.count;
                            p.cust_id = v.cust_id;
                            p.avgMS = v.avgMS;
                            p.avgIC = v.avgIC;
                            p.avgGD = v.avgGD;
                            p.sg = v.sg;
                            return p;
                        },

                  function () {
                            return {
                                cust_id: '',
                                count:0,
                                avgMS:0,
                                avgIC:0,
                                avgGD:0,
                                sg: ''
                            };
                        });

            top50BubbleChart 
                .width(950)
                .height(400)
                .margins({top: 10, right: 50, bottom: 30, left: 40})
                .dimension(customerIDDim)
                .group(custDataGrp)
                .colors(colorPallet)
                .colorAccessor(function (d) {
                    return d.value.sg;
                })
                .keyAccessor(function (p) {
                    return p.value.avgIC;
                })
                .valueAccessor(function (p) {
                    return p.value.avgGD;
                })
                .radiusValueAccessor(function (p) {
                    return p.value.avgMS;
                })
                .maxBubbleRelativeSize(0.5)
                .x(d3.scale.pow().exponent(0.75).domain([0, 120]))
                .y(d3.scale.pow().exponent(0.75).domain([22, 135]))
                .yAxisLabel("Avg  ic_Scores")
                .xAxisLabel("Avg  gd_Scores")
                .r(d3.scale.linear().domain([0, 1200]))
                .renderHorizontalGridLines(true)
                .renderVerticalGridLines(true)
                .renderLabel(true)
                .label(function (p) {
                    return p.value.cust_id;
                })
                .renderTitle(true)
                .title(function (p) {
                    return [
                        'Customer ID: '+ p.key,
                        'Sector: ' + p.value.sg,
                        'Avg mScore: ' + p.value.avgMS,
                        'Avg icScore: ' + p.value.avgIC,
                        'Avg gdScore: ' + p.value.avgGD
                    ].join('\n');
                });

                dc.dataTable("#top-cust-table", "top50ChGrp")
                    .dimension(customerIDDim)
                    .group(function (d) {
                        return d.sg;
                    })
                    .size(60)
                    .columns([
                            function (d) {
                            return d.cust_id;
                            ;
                        },
                        function (d) {
                            return d.avgMS;
                        },
                        function (d) {
                            return d.avgIC;
                        },
                        function (d) {
                            return d.avgGD;
                        },
                        function (d) {
                            return d.sg;
                        }
                    ])
                    .renderlet(function (table) {
                        table.selectAll(".dc-table-group").classed("info", true);
                    });

                dc.renderAll('top50ChGrp');



});
