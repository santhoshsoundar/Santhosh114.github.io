

  (function() {

 
     var m_width = $("#us_states").width(),
          width = 700,
          height = 400,
          country,
          state;

      var projection = d3.geo.albersUsa()
      .scale(700)
      .translate([width / 2, height / 2])
      .precision(.1);

  var path = d3.geo.path()
      .projection(projection);


       var svg = d3.select("#us_states").append("svg")
          .attr("preserveAspectRatio", "xMidYMid")
          .attr("viewBox", "0 0 " + width + " " + height)
          .attr("width", m_width)
          .attr("height", m_width * height / width);


/////////////////////////// Text Clocks ///////////////////////////////
var start_val = 1987,
    end_val = [2008];
var clock = svg.append("svg")
          .attr("y", 40)
          .attr("x", 430)
          .style( {'font-weight':'bold',
                    'font-size':'30px'})
          .style("opacity", "0.9") 
          .attr("font-family", "sans-serif")
          .attr("fill", "#22A08B");

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
          .attr("y", 390)
          .attr("x", 150)
          .style( {'font-weight':'bold',
                    'font-size':'10px'})
          .style("opacity", "0.9") 
          .attr("font-family", "sans-serif")
          .attr("fill", "#595959")
          .text("Total Flights:");



var start_val = 135469,
    end_val = [62135469];
var total_flights = svg.append("svg")
          .attr("y", 365)
          .attr("x", 210)
          .style( {'font-weight':'bold',
                    'font-size':'20px'})
          .style("opacity", "0.9") 
          .attr("font-family", "sans-serif")
          .attr("fill", "#22A08B");

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
          .attr("y", 390)
          .attr("x", 350)
          .style( {'font-weight':'bold',
                    'font-size':'10px'})
          .style("opacity", "0.9") 
          .attr("font-family", "sans-serif")
          .attr("fill", "#595959")
          .text("In-Time:");


var start_val = 1469,
    end_val = [65469];
var total_flights = svg.append("svg")
          .attr("y", 365)
          .attr("x", 385)
          .style( {'font-weight':'bold',
                    'font-size':'20px'})
          .style("opacity", "0.9") 
          .attr("font-family", "sans-serif")
          .attr("fill", "#22A08B");

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
          .attr("y", 390)
          .attr("x", 470)
          .style( {'font-weight':'bold',
                    'font-size':'10px'})
          .style("opacity", "0.9") 
          .attr("font-family", "sans-serif")
          .attr("fill", "#595959")
          .text("Delayed:");

var start_val = 35469,
    end_val = [825469];
var total_flights = svg.append("svg")
          .attr("y", 365)
          .attr("x", 510)
          .style( {'font-weight':'bold',
                    'font-size':'20px'})
          .style("opacity", "0.9") 
          .attr("font-family", "sans-serif")
          .attr("fill", "#22A08B");

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

////////////////////////////////////////////////////// clock ends ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



   d3.json("us.json", function(error, us) {
    if (error) return console.error(error);
    console.log(us);

    svg.selectAll("path")
        .data(topojson.feature(us, us.objects.states).features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("class", "map")
        .attr("fill", "LightGray")
        .attr("stroke", "White");

   
        
         Animbars = svg.selectAll("g")
    .data(sampleData)
    .enter()
    .append("g")
    .attr("class", "Animbars")
    .attr("transform", function(d) {return "translate(" + projection(d.coordinates) + ")";});
    
       
     sample_text=   svg.append("text")
     .style('opacity', 0.5)
          .attr("y", 120)
          .attr("x", 120)
          .style("font-size", "20px")
          .text("Cocoa");


lin = svg.select("g")
.attr("class", "lines");
    
  


    Animbars.append("rect")
    .attr('width', 6)
    .attr('height',  5)
    .attr("class", "bars")
    .style("fill", "tomato")
    .attr("transform", "rotate(180)")
    .on('mouseover', function(d) {

        d3.select(this).transition()
            .style('opacity', .9)
            .style('opacity', 1)
            .style('fill', "Cyan")
            .attr('width',  100)
            .attr('height',  100)

            sample_text.style('opacity', 0.9)
            .transition()
            .attr("y", 170)
            .attr("x", 170)

          lin.append("text").style("font-size", "20px")
          .text("Milk")
          .attr("transform", function(d) {return "translate(" + projection(d.coordinates) + ")";})
           .transition()
           .duration(200000)
          .attr("y", -140)
          .attr("x", -40)
          .text("Milky");

         viz.transition()
            .attr("y", 170)
            .attr("x", 170);//.style('opacity', 0);
           
     })

    .on('mouseout', function(d) {
        

        d3.select(this).transition()
            .style('opacity', 1)
            .style('fill', "tomato")
            .attr('width',  6)
            .attr('height',  function(d) {return d.barheight})
            

            sample_text.transition()
             .attr("y", 120)
             .attr("x", 120)
            .style('opacity', 0.5)
    })
    .transition()
    .delay(function(d, i) {
          return i * 2;
      })
      .duration(20000) 
      .attr('height',  function(d) {return d.barheight}) ;


    
      Animbars.append("text")
      .style({
        'fill':'#050505',
        'font-family':'sans-serif',
        'font-size':'7px'
      })  
             .attr("dy", ".80em")
    .attr("text-anchor", "start") 
    .text(function(d) {return d.name})




///////////////////////////////////////////////////////////// stats- line graphs ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var vis = d3.select("#visualisation1"),
    WIDTH = 300,
    HEIGHT = 150,
    MARGINS = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
    },

    xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([1990, 2010]),
                        yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([134, 215]),
                        xAxis = d3.svg.axis()
                        .scale(xScale),
                        yAxis = d3.svg.axis()
                        .scale(yScale)
                        .orient("left");
vis.style({
    'background':'White'
}).append("text").style({
    'font-size': '20px',
    'fill': 'blue'}).attr("y", 20)
          .attr("x", 20)
          .text("Cocoa");
vis.append("svg:g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
                        .style('opacity', 0.5)
                        .call(xAxis);
                    vis.append("svg:g")
                        .attr("class", "y axis")
                        .style('opacity', 0.5)
                        .attr("transform", "translate(" + (MARGINS.left) + ",0)")
                        .call(yAxis);
                    var lineGen = d3.svg.line()
                        .x(function(d) {
                            return xScale(d.year);
                        })
                        .y(function(d) {
                            return yScale(d.sale);
                        })
                        .interpolate("basis");
                    vis.append('svg:path')
                        .attr('d', lineGen(data11))
                        .attr('stroke', 'green')
                        .attr('stroke-width', 2)
                        .attr('fill', 'none')
                        .style('opacity', 0.5);
                    vis.append('svg:path')
                        .attr('d', lineGen(data12))
                        .attr('stroke', 'blue')
                        .attr('stroke-width', 2)
                        .attr('fill', 'none')
                        .style('opacity', 0.5);


var vis = d3.select("#visualisation2"),
    WIDTH = 300,
    HEIGHT = 150,
    MARGINS = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
    },

    xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([1990, 2010]),
                        yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([134, 215]),
                        xAxis = d3.svg.axis()
                        .scale(xScale),
                        yAxis = d3.svg.axis()
                        .scale(yScale)
                        .orient("left");
vis.style({
    'background':'White'
}).append("text").style({
    'font-size': '20px',
    'fill': 'blue'}).attr("y", 20)
          .attr("x", 20)
          .text("Cocoa");
vis.append("svg:g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
                        .style('opacity', 0.5)
                        .call(xAxis);
                    vis.append("svg:g")
                        .attr("class", "y axis")
                        .style('opacity', 0.5)
                        .attr("transform", "translate(" + (MARGINS.left) + ",0)")
                        .call(yAxis);
                    var lineGen = d3.svg.line()
                        .x(function(d) {
                            return xScale(d.year);
                        })
                        .y(function(d) {
                            return yScale(d.sale);
                        })
                        .interpolate("basis");
                    vis.append('svg:path')
                        .attr('d', lineGen(data11))
                        .attr('stroke', 'green')
                        .attr('stroke-width', 2)
                        .attr('fill', 'none')
                        .style('opacity', 0.5);
                    vis.append('svg:path')
                        .attr('d', lineGen(data12))
                        .attr('stroke', 'blue')
                        .attr('stroke-width', 2)
                        .attr('fill', 'none')
                        .style('opacity', 0.5);




var vis = d3.select("#visualisation3"),
    WIDTH = 300,
    HEIGHT = 150,
    MARGINS = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
    },

    xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([1990, 2010]),
                        yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([134, 215]),
                        xAxis = d3.svg.axis()
                        .scale(xScale),
                        yAxis = d3.svg.axis()
                        .scale(yScale)
                        .orient("left");
vis.style({
    'background':'White'
}).append("text").style({
    'font-size': '20px',
    'fill': 'blue'}).attr("y", 20)
          .attr("x", 20)
          .text("Cocoa");
vis.append("svg:g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
                        .style('opacity', 0.5)
                        .call(xAxis);
                    vis.append("svg:g")
                        .attr("class", "y axis")
                        .style('opacity', 0.5)
                        .attr("transform", "translate(" + (MARGINS.left) + ",0)")
                        .call(yAxis);
                    var lineGen = d3.svg.line()
                        .x(function(d) {
                            return xScale(d.year);
                        })
                        .y(function(d) {
                            return yScale(d.sale);
                        })
                        .interpolate("basis");
                    vis.append('svg:path')
                        .attr('d', lineGen(data11))
                        .attr('stroke', 'green')
                        .attr('stroke-width', 2)
                        .attr('fill', 'none')
                        .style('opacity', 0.5);
                    vis.append('svg:path')
                        .attr('d', lineGen(data12))
                        .attr('stroke', 'blue')
                        .attr('stroke-width', 2)
                        .attr('fill', 'none')
                        .style('opacity', 0.5);


var vis = d3.select("#visualisation4"),
    WIDTH = 300,
    HEIGHT = 150,
    MARGINS = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
    },

    xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([1990, 2010]),
                        yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([134, 215]),
                        xAxis = d3.svg.axis()
                        .scale(xScale),
                        yAxis = d3.svg.axis()
                        .scale(yScale)
                        .orient("left");
vis.style({
    'background':'White'
}).append("text").style({
    'font-size': '20px',
    'fill': 'blue'}).attr("y", 20)
          .attr("x", 20)
          .text("Cocoa");
vis.append("svg:g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
                        .style('opacity', 0.5)
                        .call(xAxis);
                    vis.append("svg:g")
                        .attr("class", "y axis")
                        .style('opacity', 0.5)
                        .attr("transform", "translate(" + (MARGINS.left) + ",0)")
                        .call(yAxis);
                    var lineGen = d3.svg.line()
                        .x(function(d) {
                            return xScale(d.year);
                        })
                        .y(function(d) {
                            return yScale(d.sale);
                        })
                        .interpolate("basis");
                    vis.append('svg:path')
                        .attr('d', lineGen(data11))
                        .attr('stroke', 'green')
                        .attr('stroke-width', 2)
                        .attr('fill', 'none')
                        .style('opacity', 0.5);
                    vis.append('svg:path')
                        .attr('d', lineGen(data12))
                        .attr('stroke', 'blue')
                        .attr('stroke-width', 2)
                        .attr('fill', 'none')
                        .style('opacity', 0.5);


/////////////////////////////////////////////////////////




var vis = d3.select("#visualisation5"),
    WIDTH = 300,
    HEIGHT = 150,
    MARGINS = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
    },

    xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([1990, 2010]),
                        yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([134, 215]),
                        xAxis = d3.svg.axis()
                        .scale(xScale),
                        yAxis = d3.svg.axis()
                        .scale(yScale)
                        .orient("left");
vis.style({
    'background':'White'
}).append("text").style({
    'font-size': '20px',
    'fill': 'blue'}).attr("y", 20)
          .attr("x", 20)
          .text("Cocoa");
vis.append("svg:g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
                        .style('opacity', 0.5)
                        .call(xAxis);
                    vis.append("svg:g")
                        .attr("class", "y axis")
                        .style('opacity', 0.5)
                        .attr("transform", "translate(" + (MARGINS.left) + ",0)")
                        .call(yAxis);
                    var lineGen = d3.svg.line()
                        .x(function(d) {
                            return xScale(d.year);
                        })
                        .y(function(d) {
                            return yScale(d.sale);
                        })
                        .interpolate("basis");
                    vis.append('svg:path')
                        .attr('d', lineGen(data11))
                        .attr('stroke', 'green')
                        .attr('stroke-width', 2)
                        .attr('fill', 'none')
                        .style('opacity', 0.5);
                    vis.append('svg:path')
                        .attr('d', lineGen(data12))
                        .attr('stroke', 'blue')
                        .attr('stroke-width', 2)
                        .attr('fill', 'none')
                        .style('opacity', 0.5);


/////////////////////////////////////////////////////////



var vis = d3.select("#visualisation6"),
    WIDTH = 300,
    HEIGHT = 150,
    MARGINS = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
    },

    xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([1990, 2010]),
                        yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([134, 215]),
                        xAxis = d3.svg.axis()
                        .scale(xScale),
                        yAxis = d3.svg.axis()
                        .scale(yScale)
                        .orient("left");
vis.style({
    'background':'White'
}).append("text").style({
    'font-size': '20px',
    'fill': 'blue'}).attr("y", 20)
          .attr("x", 20)
          .text("Cocoa");
vis.append("svg:g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
                        .style('opacity', 0.5)
                        .call(xAxis);
                    vis.append("svg:g")
                        .attr("class", "y axis")
                        .style('opacity', 0.5)
                        .attr("transform", "translate(" + (MARGINS.left) + ",0)")
                        .call(yAxis);
                    var lineGen = d3.svg.line()
                        .x(function(d) {
                            return xScale(d.year);
                        })
                        .y(function(d) {
                            return yScale(d.sale);
                        })
                        .interpolate("basis");
                    vis.append('svg:path')
                        .attr('d', lineGen(data11))
                        .attr('stroke', 'green')
                        .attr('stroke-width', 2)
                        .attr('fill', 'none')
                        .style('opacity', 0.5);
                    vis.append('svg:path')
                        .attr('d', lineGen(data12))
                        .attr('stroke', 'blue')
                        .attr('stroke-width', 2)
                        .attr('fill', 'none')
                        .style('opacity', 0.5);


/////////////////////////////////////////////////////////
  });

      


  $(window).resize(function() {
        var w = $("#us_states").width();
        svg.attr("width", w);
        svg.attr("height", w * height / width);
      });

  })();