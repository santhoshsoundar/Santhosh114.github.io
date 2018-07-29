---
layout: demo
title: Time-Series Bubble Map
mytags: "  #D3.js  #visualization  #TopoJSON #SVG-map"
img: <img class="post-cover" src="../static/img/blog/demoboy/bbl/bubbleMap.png"  border="5" alt="Responsive image">
tags:
- D3.js
- visualization
- TopoJSON
- SVG-map


---

<script src="//code.jquery.com/jquery-2.0.0.js"></script>
<style>

          .airports {
          fill: #036;
          stroke: #6cb0e0;
          stroke-width: 0.5px;
          stroke-linecap: round;
          stroke-linejoin: round;
          vector-effect: non-scaling-stroke;
                }
      </style>


<script src="//d3js.org/d3.v3.min.js"></script>
<script src="//d3js.org/topojson.v1.min.js"></script>

<div id="us_states"></div>
<script type="text/javascript">
  (function() {

     var m_width = $("#us_states").width(),
          width = 1060,
          height = 600,
          country,
          state;

      var projection = d3.geo.albersUsa()
      .scale(1060)
      .translate([width / 2, height / 2])
      .precision(.1);

  var path = d3.geo.path()
      .projection(projection);



       var svg = d3.select("#us_states").append("svg")
          .attr("preserveAspectRatio", "xMidYMid")
          .attr("viewBox", "0 0 " + width + " " + height)
          .attr("width", m_width)
          .attr("height", m_width * height / width);

 var start_val = 1987,
                                                              end_val = [2008];
                                                          var clock = svg.append("svg")
                                                                    .attr("y", 100)
                                                                    .attr("x", 700)
                                                                    .style( {'font-weight':'bold', 'font-family':'sans-serif',
                                                                              'font-size':'30px'})  
                                                                    .attr("fill", "steelblue");

                                                              clock.selectAll(".txt")
                                                              .data(end_val)
                                                              .enter()
                                                              .append("text")
                                                              .text(start_val)
                                                              .attr("class", "txt")
                                                              .attr("x", 10)
                                                              .attr("y", 25)
                                                              .transition()
                                                              .duration(20900)
                                                                  .tween("text", function(d) {
                                                                      var i = d3.interpolate(this.textContent, d),
                                                                          prec = (d + "").split("."),
                                                                          round = (prec.length > 1) ? Math.pow(10, prec[1].length) : 1;

                                                                      return function(t) {
                                                                          this.textContent = Math.round(i(t) * round) / round;
                                                                      };
                                                                  });

                                                          svg.append("text")
                                                                    .attr("y", 570)
                                                                    .attr("x", 320)
                                                                    .style( {'font-weight':'bold', 'font-family':'sans-serif',
                                                                              'font-size':'10px'})
                                                                    .style("opacity", "0.9")
                                                                    .attr("fill", "#595959")
                                                                    .text("Total Flights:");



                                                          var start_val = 135469,
                                                              end_val = [62135469];
                                                          var total_flights = svg.append("svg")
                                                                    .attr("y", 550)
                                                                    .attr("x", 380)
                                                                    .style( {'font-weight':'bold', 'font-family':'sans-serif',
                                                                              'font-size':'20px'})
                                                                    .style("opacity", "0.9")
                                                                    .attr("fill", "steelblue");

                                                              total_flights.selectAll(".txt")
                                                              .data(end_val)
                                                              .enter()
                                                              .append("text")
                                                              .text(start_val)
                                                              .attr("class", "txt")
                                                              .attr("x", 10)
                                                              .attr("y", 25)
                                                              .transition()
                                                              .duration(17000)
                                                                  .tween("text", function(d) {
                                                                      var i = d3.interpolate(this.textContent, d),
                                                                          prec = (d + "").split("."),
                                                                          round = (prec.length > 1) ? Math.pow(10, prec[1].length) : 1;

                                                                      return function(t) {
                                                                          this.textContent = Math.round(i(t) * round) / round;
                                                                      };
                                                                  });

                                                          svg.append("text")
                                                                    .attr("y", 570)
                                                                    .attr("x", 520)
                                                                    .style( {'font-weight':'bold', 'font-family':'sans-serif',
                                                                              'font-size':'10px'})
                                                                    .style("opacity", "0.9")
                                                                    .attr("fill", "#595959")
                                                                    .text("Incount:");


                                                          var start_val = 1469,
                                                              end_val = [23365469];
                                                          var total_flights = svg.append("svg")
                                                                    .attr("y", 550)
                                                                    .attr("x", 560)
                                                                    .style( {'font-weight':'bold', 'font-family':'sans-serif',
                                                                              'font-size':'20px'})
                                                                    .style("opacity", "0.9")
                                                                    .attr("fill", "steelblue");

                                                              total_flights.selectAll(".txt")
                                                              .data(end_val)
                                                              .enter()
                                                              .append("text")
                                                              .text(start_val)
                                                              .attr("class", "txt")
                                                              .attr("x", 10)
                                                              .attr("y", 25)
                                                              .transition()
                                                              .duration(17000)
                                                                  .tween("text", function(d) {
                                                                      var i = d3.interpolate(this.textContent, d),
                                                                          prec = (d + "").split("."),
                                                                          round = (prec.length > 1) ? Math.pow(10, prec[1].length) : 1;

                                                                      return function(t) {
                                                                          this.textContent = Math.round(i(t) * round) / round;
                                                                      };
                                                                  });

                                                          svg.append("text")
                                                                    .attr("y", 570)
                                                                    .attr("x", 680)
                                                                    .style( {'font-weight':'bold', 'font-family':'sans-serif',
                                                                              'font-size':'10px'})
                                                                    .style("opacity", "0.9")
                                                                    .attr("fill", "#595959")
                                                                    .text("Outcount:");

                                                          var start_val = 35469,
                                                              end_val = [38525469];
                                                          var total_flights = svg.append("svg")
                                                                    .attr("y", 550)
                                                                    .attr("x", 730)
                                                                    .style( {'font-weight':'bold', 'font-family':'sans-serif',
                                                                              'font-size':'20px'})
                                                                    .style("opacity", "0.9")
                                                                    .attr("fill", "steelblue");

                                                              total_flights.selectAll(".txt")
                                                              .data(end_val)
                                                              .enter()
                                                              .append("text")
                                                              .text(start_val)
                                                              .attr("class", "txt")
                                                              .attr("x", 10)
                                                              .attr("y", 25)
                                                              .transition()
                                                              .duration(17000)
                                                                  .tween("text", function(d) {
                                                                      var i = d3.interpolate(this.textContent, d),
                                                                          prec = (d + "").split("."),
                                                                          round = (prec.length > 1) ? Math.pow(10, prec[1].length) : 1;

                                                                      return function(t) {
                                                                          this.textContent = Math.round(i(t) * round) / round;
                                                                      };
                                                                  });
   d3.json("../geoSample/us.json", function(error, us) {
    if (error) return console.error(error);

    svg.selectAll("path").attr('id', 'myInsert')
        .data(topojson.feature(us, us.objects.states).features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", "LightGray")
        .attr("stroke", "White");

      var  sampleData = [{name: "San Francisco", coordinates: [-122.417,37.783], barheight: 50,airportName:"San Francisco International Airport", airportCode:"SFO"},
    {name: "Los Angeles", coordinates: [-118.682,33.52], barheight: 40,airportName:"Los Angeles International Airport", airportCode:"LAX"},
    {name: "Denver", coordinates: [-104.8778,39.673], barheight: 37,airportName:"Denver International Airport", airportCode:"DEN"},    
    {name: "St. Louis", coordinates: [-90.505,38.788], barheight: 33,airportName:"Lambert-St. Louis International Airport", airportCode:"STL"},
    {name: "Atlanta", coordinates: [-84.682,33.52], barheight: 45,airportName:"Atlanta International Airport", airportCode:"ATL"},
    {name: "Arizona", coordinates: [-112.682,33.52], barheight: 27,airportName:"Phoenix Sky Harbor International Airport", airportCode:"PHX"},
    {name: "Minnesota", coordinates: [-93.682,44.52], barheight: 22,airportName:"St. Paul International Airport", airportCode:"MSP"},
    {name: "Chicago", coordinates: [-87.9067,41.988], barheight: 47,airportName:"Chicago O'hare International Airport", airportCode:"ORD"},
    {name: "Detroit", coordinates: [-83.417,42.783], barheight: 27,airportName:"Detroit Metro Airport", airportCode:"DTW"},
     {name: "Pittsburg", coordinates: [-80.682,40.52], barheight: 25,airportName:"Pittsburgh International Airport", airportCode:"PIT"},
      {name: "Charlotte", coordinates: [-80.682,35.52], barheight: 24,airportName:"Douglas International Airport", airportCode:"CLT"},
       {name: "New Jersey", coordinates: [-74.1682,41.52], barheight: 30,airportName:"Newark Liberty International Airport", airportCode:"EWR"},
     {name: "New York", coordinates: [-73.682,40.0952], barheight: 42,airportName:"John F. Kennedy International Airport", airportCode:"JFK"},
    {name: "Boston", coordinates: [-71.505,42.488], barheight: 20,airportName:"Boston Logan International Airport", airportCode:"BOS"},
    {name: "Texas", coordinates: [-100.682,31.52], barheight: 20, airportName:"Bush Intercontinental Airport", airportCode:"IAH"},
    {name: "Florida", coordinates: [-81.682,28.52], barheight: 17,airportName:"Orlando International Airport", airportCode:"MCO"}            
    ];



    bars = svg.selectAll("g")
    .data(sampleData)
    .enter()
    .append("g")
    .attr("class", "bars")
    .attr("transform", function(d) {return "translate(" + projection(d.coordinates) + ")";});

    bars.append("circle")
    .attr("cx", function (d) { return d.x_axis; })
    .attr("cy", function (d) { return d.y_axis; })
    .attr("class", "bars")
    .attr("r", 6)
    .style("fill", "green")
    .style("stroke", "White")
    .style("stroke-width", 0.5)
    .style("opacity", 0.5)
    .transition()
    .delay(function(d, i) {
          return i * 20;
      })
      .duration(15000)

    .attr("r", function (d) { return d.barheight; });

bars.append("text")
      .style({
        'fill':'#050505',
        'font-family':'sans-serif',
        'font-size':'7px'
      })  
             .attr("dy", ".80em")
    .attr("text-anchor", "start")
    .text(function(d) {return d.name});
  });







  $(window).resize(function() {
        var w = $("#us_states").width();
        svg.attr("width", w);
        svg.attr("height", w * height / width);
      });

  })();
</script>


### [Overview:]()

This is a walkthrough of my project on creating interactive transitions using tween functions on objects tied to a map/geo-location in D3.js.

This US map is generated from the [US.json](../geoSample/us.json)

### [Data:]()
Sample of data used for this infograph with variable derived from Python data manupulation on [AirportStats flights delay dataset](http://stat-computing.org/dataexpo/2009/the-data.html).
{% highlight javascript %}

var  sampleData = [{name: "San Francisco", coordinates: [-122.417,37.783], barheight: 50,airportName:"San Francisco International Airport", airportCode:"SFO"},
    {name: "Los Angeles", coordinates: [-118.682,33.52], barheight: 40,airportName:"Los Angeles International Airport", airportCode:"LAX"},
    {name: "Denver", coordinates: [-104.8778,39.673], barheight: 37,airportName:"Denver International Airport", airportCode:"DEN"},    
    {name: "St. Louis", coordinates: [-90.505,38.788], barheight: 33,airportName:"Lambert-St. Louis International Airport", airportCode:"STL"},
    {name: "Atlanta", coordinates: [-84.682,33.52], barheight: 45,airportName:"Atlanta International Airport", airportCode:"ATL"},
    {name: "Arizona", coordinates: [-112.682,33.52], barheight: 27,airportName:"Phoenix Sky Harbor International Airport", airportCode:"PHX"},
    {name: "Minnesota", coordinates: [-93.682,44.52], barheight: 22,airportName:"St. Paul International Airport", airportCode:"MSP"},
    {name: "Chicago", coordinates: [-87.9067,41.988], barheight: 47,airportName:"Chicago O'hare International Airport", airportCode:"ORD"},
    {name: "Detroit", coordinates: [-83.417,42.783], barheight: 27,airportName:"Detroit Metro Airport", airportCode:"DTW"},
     {name: "Pittsburg", coordinates: [-80.682,40.52], barheight: 25,airportName:"Pittsburgh International Airport", airportCode:"PIT"},
      {name: "Charlotte", coordinates: [-80.682,35.52], barheight: 24,airportName:"Douglas International Airport", airportCode:"CLT"},
       {name: "New Jersey", coordinates: [-74.1682,41.52], barheight: 30,airportName:"Newark Liberty International Airport", airportCode:"EWR"},
     {name: "New York", coordinates: [-73.682,40.0952], barheight: 42,airportName:"John F. Kennedy International Airport", airportCode:"JFK"},
    {name: "Boston", coordinates: [-71.505,42.488], barheight: 20,airportName:"Boston Logan International Airport", airportCode:"BOS"},
    {name: "Texas", coordinates: [-100.682,31.52], barheight: 20, airportName:"Bush Intercontinental Airport", airportCode:"IAH"},
    {name: "Florida", coordinates: [-81.682,28.52], barheight: 17,airportName:"Orlando International Airport", airportCode:"MCO"}            
    ];

{% endhighlight %}
