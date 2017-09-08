var top50BubbleChart = dc.bubbleChart('#top-bubble-chart');

d3.csv("../equinix/package/top50.csv", function (err, data) {

            if(err) throw err;

            data.forEach(function(d) {
                    d.ms = +d.ms;
                    d.ic = +d.ic;
                    d.gd = +d.gd;
                });

            var ndx50 = crossfilter(data);
            var all50 = ndx50.groupAll();
            var parseDate = d3.time.format("%Y-%m-%d").parse;

            var colorScale = d3.scale.ordinal()
                    .domain(["Network", "Cloud & IT Services", "Content & Digital Media", "Financial Services", "Enterprises"])
                    .range(['#3182bd', '#9ecae1', '#e6550d', '#fd8d3c', '#31a354']);

            var plallar = d3.scale.category10();

            var customerIDDim = ndx50.dimension( function(d) { return d['id']; });

             var topCustomerGroup = customerIDDim.group().reduce(

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













});