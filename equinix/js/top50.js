function print_filter(filter){
	var f=eval(filter);
	if (typeof(f.length) != "undefined") {}else{}
	if (typeof(f.top) != "undefined") {f=f.top(Infinity);}else{}
	if (typeof(f.dimension) != "undefined") {f=f.dimension(function(d) { return "";}).top(Infinity);}else{}
	console.log(filter+"("+f.length+") = "+JSON.stringify(f).replace("[","[\n\t").replace(/}\,/g,"},\n\t").replace("]","\n]"));
}

var top50BubbleChart = dc.bubbleChart('#top-bubble-chart')
// , "top50ChGrp");

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

            var plallar = d3.scale.category10();

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
    
            document.getElementById("errerPriny").innerHTML = print_filter(custDataGrp);
            top50BubbleChart 
                .width(950)
                .height(400)
                .margins({top: 10, right: 50, bottom: 30, left: 40})
                .dimension(customerIDDim)
                .group(custDataGrp)
                .colors(colorScale)
                .colorAccessor(function (d) {
                    return d.value.sg;
                })
                .keyAccessor(function (p) {
                    return p.value.aggIC ;
                })
                .valueAccessor(function (p) {
                    return p.value.aggGD ;
                })
                .radiusValueAccessor(function (p) {
                    return p.value.aggMS ;
                })
                // .maxBubbleRelativeSize(0.5)
                .x(d3.scale.linear().domain([0, 110]))
                .y(d3.scale.linear().domain([0, 110]))
                .yAxisLabel("Avg  ic_Scores")
                .xAxisLabel("Avg  gd_Scores")
                .r(d3.scale.linear().domain([0, 500]))
                .renderHorizontalGridLines(true)
                .renderVerticalGridLines(true)
                .renderLabel(true)
                .label(function (p) {
                    return p.key;
                }).render();
                // "top50ChGrp");
                // .legend(dc.legend().x(100).y(15).itemHeight(15).gap(15)
                //     .autoItemWidth(true)
                //     .horizontal(true))
                // .renderTitle(true)
                // .title(function (p) {
                //     return [
                //         'Customer ID: '+ p.key,
                //         'Sector: ' + p.sg,
                //         'mScore: ' + p.ms,
                //         'Avg mScore: ' + p.aggMS,
                //         'icScore: ' + p.ic,
                //         'Avg icScore: ' + p.aggIC,
                //         'gdScore: ' + p.gd,
                //         'Avg gdScore: ' + p.aggGD
                //     ].join('\n');
                // })
                // .render("top50ChGrp");



});
