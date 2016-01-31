
var  sampleData = [{name: "San Francisco", coordinates: [-122.417,37.783], barheight: 100,airportName:"San Francisco International Airport", airportCode:"SFO"},
    {name: "Los Angeles", coordinates: [-118.682,33.52], barheight: 80,airportName:"Los Angeles International Airport", airportCode:"LAX"},
    {name: "Denver", coordinates: [-104.8778,39.673], barheight: 75,airportName:"Denver International Airport", airportCode:"DEN"},    
    {name: "St. Louis", coordinates: [-90.505,38.788], barheight: 65,airportName:"Lambert-St. Louis International Airport", airportCode:"STL"},
    {name: "Atlanta", coordinates: [-84.682,33.52], barheight: 90,airportName:"Atlanta International Airport", airportCode:"ATL"},
    {name: "Arizona", coordinates: [-112.682,33.52], barheight: 55,airportName:"Phoenix Sky Harbor International Airport", airportCode:"PHX"},
    {name: "Minnesota", coordinates: [-93.682,44.52], barheight: 44,airportName:"St. Paul International Airport", airportCode:"MSP"},
    {name: "Chicago", coordinates: [-87.9067,41.988], barheight: 95,airportName:"Chicago O'hare International Airport", airportCode:"ORD"},
    {name: "Detroit", coordinates: [-83.417,42.783], barheight: 45,airportName:"Detroit Metro Airport", airportCode:"DTW"},
     {name: "Pittsburg", coordinates: [-80.682,40.52], barheight: 50,airportName:"Pittsburgh International Airport", airportCode:"PIT"},
      {name: "Charlotte", coordinates: [-80.682,35.52], barheight: 48,airportName:"Douglas International Airport", airportCode:"CLT"},
       {name: "New Jersey", coordinates: [-74.1682,41.52], barheight: 60,airportName:"Newark Liberty International Airport", airportCode:"EWR"},
     {name: "New York", coordinates: [-73.682,40.0952], barheight: 85,airportName:"John F. Kennedy International Airport", airportCode:"JFK"},
    {name: "Boston", coordinates: [-71.505,42.488], barheight: 40,airportName:"Boston Logan International Airport", airportCode:"BOS"},
    {name: "Texas", coordinates: [-100.682,31.52], barheight: 40, airportName:"Bush Intercontinental Airport", airportCode:"IAH"},
    {name: "Florida", coordinates: [-81.682,28.52], barheight: 34,airportName:"Orlando International Airport", airportCode:"MCO"}            
    ];




 
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

                                                                 


                              svg.append("rect").style("fill", "#f2f2f2").attr("x",600).attr("y",180).attr("height",170).attr("width",70).attr("opacity",0.5)   
                              svg.append("rect").style("fill", "#f2f2f2").attr("x",0).attr("y",200).attr("height",100).attr("width",100)  
                              svg.append("rect").style("fill", "#005fcc") .attr("x",612).attr("y",199).attr("height",1).attr("width",6) 
                              
                              svg.append("rect").style("fill", "#005fcc") .attr("x",615).attr("y",300).attr("height",35).attr("width",6)
                              svg.append("rect").style("fill", "#005fcc") .attr("x",630).attr("y",270).attr("height",65).attr("width",6)
                              svg.append("rect").style("fill", "#005fcc") .attr("x",645).attr("y",240).attr("height",95).attr("width",6) 

                              


                              svg.append("rect").style("fill", "darkGray") .attr("x",605).attr("y",225).attr("height",110).attr("width",0.5)                               
                              svg.append("rect").style("fill", "darkGray").attr("x",605).attr("y",335).attr("height",0.5).attr("width",60)
                              
                              
                              
                              
                              

                  /////////////////////////// Text Clocks Elements ///////////////////////////////

                                                             
                                                                 svg.append("text")
                                                                    .attr("y", 190)
                                                                    .attr("x", 610)
                                                                    .style( {'font-weight':'bold',
                                                                              'font-size':'6px'})
                                                                    .style("opacity", "0.9") 
                                                                    .attr("fill", "#000000")
                                                                    .text("1Px of Bar Height");

                                                                    svg.append("text")
                                                                    .attr("y", 210)
                                                                    .attr("x", 602)
                                                                    .style( {
                                                                              'font-size':'5px'})
                                                                    .style("opacity", "0.9") 
                                                                    .attr("fill", "#000000")
                                                                    .text("[The bars show total number of");

                                                                    svg.append("text")
                                                                    .attr("y", 220)
                                                                    .attr("x", 604)
                                                                    .style( {
                                                                              'font-size':'5px'})
                                                                    .style("opacity", "0.9") 
                                                                    .attr("fill", "#000000")
                                                                    .text("flights per airport during 2008]");

                                                                svg.append("text")
                                                                    .attr("y", 210)
                                                                    .attr("x", 2)
                                                                    .style( {
                                                                              'font-size':'6.5px'})
                                                                    .style("opacity", "0.9") 
                                                                    .attr("fill", "#000000")
                                                                    .text("The animated bars represent the"); 
                                                                
                                                                svg.append("text")
                                                                    .attr("y", 218)
                                                                    .attr("x", 2)
                                                                    .style( {
                                                                              'font-size':'6.5px'})
                                                                    .style("opacity", "0.9") 
                                                                    .attr("fill", "#000000")
                                                                    .text("yearly increase in the number of");
                                                                
                                                                svg.append("text")
                                                                    .attr("y", 226)
                                                                    .attr("x", 2)
                                                                    .style( {
                                                                              'font-size':'6.5px'})
                                                                    .style("opacity", "0.9") 
                                                                    .attr("fill", "#000000")
                                                                    .text("flights at each airport. The data");
                                                                
                                                                svg.append("text")
                                                                    .attr("y", 234)
                                                                    .attr("x", 2)
                                                                    .style( {
                                                                              'font-size':'6.5px'})
                                                                    .style("opacity", "0.9") 
                                                                    .attr("fill", "#000000")
                                                                    .text("is captured between 1987 & 2008."); 

                                                                    svg.append("text")
                                                                    .attr("y", 255)
                                                                    .attr("x", 2)
                                                                    .style( {
                                                                              'font-size':'6.5px'})
                                                                    .style("opacity", "0.9") 
                                                                    .attr("fill", "#000000")
                                                                    .text("Data Source:"); 

                                                                    svg.append("text")
                                                                    .attr("y", 265)
                                                                    .attr("x", 2)
                                                                    .style( {'font-weight':'bold','font-style': 'italic',
                                                                              'font-size':'5px'})
                                                                    .style("opacity", "0.9") 
                                                                    .attr("fill", "#000000")
                                                                    .text("Bureau of Transportation Statistics(BTS)"); 

                                                                    svg.append("text")
                                                                    .attr("y", 275)
                                                                    .attr("x", 32)
                                                                    .style( {'font-weight':'bold','font-style': 'italic',
                                                                              'font-size':'5px'})
                                                                    .style("opacity", "0.9") 
                                                                    .attr("fill", "#000000")
                                                                    .text("&"); 

                                                                    svg.append("text")
                                                                    .attr("y", 285)
                                                                    .attr("x", 2)
                                                                    .style( {'font-weight':'bold','font-style': 'italic',
                                                                              'font-size':'5px'})
                                                                    .style("opacity", "0.9") 
                                                                    .attr("fill", "#000000")
                                                                    .text("American Statistical Association"); 
                                                                           

                                                                svg.append("text")
                                                                    .attr("y", 200)
                                                                    .attr("x", 620)
                                                                    .style( {'font-weight':'bold',
                                                                              'font-size':'6px'})
                                                                    .style("opacity", "0.9") 
                                                                    .attr("fill", "#000000").text("= 6000 Flights");

                                                                    svg.append("text")
                                                                    .attr("y", 295)
                                                                    .attr("x", 610)
                                                                    .style( {'font-weight':'bold',
                                                                              'font-size':'5px'})
                                                                    .style("opacity", "0.9").style("fill", "#ff0066")
                                                                    .attr("fill", "#000000")
                                                                    .text("210K");

                                                                    svg.append("text")
                                                                    .attr("y", 265)
                                                                    .attr("x", 625)
                                                                    .style( {'font-weight':'bold',
                                                                              'font-size':'5px'})
                                                                    .style("opacity", "0.9").style("fill", "#ff0066")
                                                                    .attr("fill", "#000000")
                                                                    .text("390K");

                                                                    svg.append("text")
                                                                    .attr("y", 235)
                                                                    .attr("x", 640)
                                                                    .style( {'font-weight':'bold',
                                                                              'font-size':'5px'})
                                                                    .style("opacity", "0.9").style("fill", "#ff0066") 
                                                                    .attr("fill", "#000000")
                                                                    .text("570K");



                                                                    svg.append("text")
                                                                    .attr("y",50)
                                                                    .attr("x", 700)
                                                                    .style( {'font-weight':'bold',
                                                                              'font-size':'4px'})
                                                                    .style("opacity", "0.9") 
                                                                    .attr("fill", "#000000").attr("transform", "rotate(25)")
                                                                    .text("Florida");

                                                                    svg.append("text")
                                                                    .attr("y",43)
                                                                    .attr("x", 715)
                                                                    .style( {'font-weight':'bold',
                                                                              'font-size':'4px'})
                                                                    .style("opacity", "0.9") 
                                                                    .attr("fill", "#000000").attr("transform", "rotate(25)")
                                                                    .text("St. Louis");

                                                                    svg.append("text")
                                                                    .attr("y",37)
                                                                    .attr("x", 730)
                                                                    .style( {'font-weight':'bold',
                                                                              'font-size':'4px'})
                                                                    .style("opacity", "0.9") 
                                                                    .attr("fill", "#000000").attr("transform", "rotate(25)")
                                                                    .text("Chicago");


                                                          var start_val = 1987,
                                                              end_val = [2008];
                                                          var clock = svg.append("svg")
                                                                    .attr("y", 40)
                                                                    .attr("x", 430)
                                                                    .style( {'font-weight':'bold',
                                                                              'font-size':'30px'})
                                                                    .attr("fill", "#ff0066");

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
                                                                    .attr("fill", "#ff0066");

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
                                                                    .attr("x", 330)
                                                                    .style( {'font-weight':'bold',
                                                                              'font-size':'10px'})
                                                                    .style("opacity", "0.9") 
                                                                    .attr("fill", "#595959")
                                                                    .text("Incount:");


                                                          var start_val = 1469,
                                                              end_val = [23365469];
                                                          var total_flights = svg.append("svg")
                                                                    .attr("y", 365)
                                                                    .attr("x", 365)
                                                                    .style( {'font-weight':'bold',
                                                                              'font-size':'20px'})
                                                                    .style("opacity", "0.9") 
                                                                    .attr("fill", "#ff0066");

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
                                                                    .attr("fill", "#595959")
                                                                    .text("Outcount:");

                                                          var start_val = 35469,
                                                              end_val = [38525469];
                                                          var total_flights = svg.append("svg")
                                                                    .attr("y", 365)
                                                                    .attr("x", 510)
                                                                    .style( {'font-weight':'bold',
                                                                              'font-size':'20px'})
                                                                    .style("opacity", "0.9") 
                                                                    .attr("fill", "#ff0066");

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

                 ///////////////////////////// clock ends ///////////////////////////////////////////////



   d3.json("airport/us.json", function(error, us) {
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


  ///////////////////////////// Initializing Bars ///////////////////////////////////////////////
       
         Animbars = svg.selectAll("g")
                    .data(sampleData)
                    .enter()
                    .append("g")
                    .attr("class", "Animbars")
                    .attr("transform", function(d) {return "translate(" + projection(d.coordinates) + ")";});
                    

                    ///////////////////////////// text elements for 18 airports///////////////////////////////////////////////

                    //////////////Group 1 Airports///////////////

                                                     ///////////////// den

                                            heading_den=   svg.append("text")
                                                      .attr("y", 120)
                                                      .attr("x", 120)
                                                      .style("fill", "White")
                                                      .style("font-size", "10px")
                                                      .text("Denver International Airport").style('opacity', 0);

                                            code_den=   svg.append("text")
                                                      .attr("y", 135)
                                                      .attr("x", 120)
                                                      .style("fill", "White")
                                                      .style("font-size", "6px")
                                                      .text("Airport Code: DEN").style('opacity', 0);
                                             in_den=   svg.append("text")
                                                      .attr("y", 150)
                                                      .attr("x", 120)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total InCount(2008): 239625").style('opacity', 0);
                                             out_den=   svg.append("text")
                                                      .attr("y", 160)
                                                      .attr("x", 120)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total OutCount(2008): 215685").style('opacity', 0);

                                                      ////////////// LAX

                                            heading_lax=   svg.append("text")
                                                      .attr("y", 120)
                                                      .attr("x", 120)
                                                      .style("fill", "White")
                                                      .style("font-size", "10px")
                                                      .text("Los Angeles Int. Airport").style('opacity', 0);

                                            code_lax=   svg.append("text")
                                                      .attr("y", 135)
                                                      .attr("x", 120)
                                                      .style("fill", "White")
                                                      .style("font-size", "6px")
                                                      .text("Airport Code: LAX").style('opacity', 0);
                                             in_lax=   svg.append("text")
                                                      .attr("y", 150)
                                                      .attr("x", 120)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total InCount(2008): 249605").style('opacity', 0);
                                             out_lax=   svg.append("text")
                                                      .attr("y", 160)
                                                      .attr("x", 120)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total OutCount(2008): 205680").style('opacity', 0);


                                                      ////////////

                                                      ///////////////// SFO

                                            heading_sfo=   svg.append("text")
                                                      .attr("y", 120)
                                                      .attr("x", 120)
                                                      .style("fill", "White")
                                                      .style("font-size", "10px")
                                                      .text("San Francisco Int. Apt").style('opacity', 0);

                                            code_sfo=   svg.append("text")
                                                      .attr("y", 135)
                                                      .attr("x", 120)
                                                      .style("fill", "White")
                                                      .style("font-size", "6px")
                                                      .text("Airport Code: SFO").style('opacity', 0);
                                             in_sfo=   svg.append("text")
                                                      .attr("y", 150)
                                                      .attr("x", 120)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total InCount(2008): 299025").style('opacity', 0);
                                             out_sfo=   svg.append("text")
                                                      .attr("y", 160)
                                                      .attr("x", 120)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total OutCount(2008):225085").style('opacity', 0);

                                                      ////////////// PHX

                                            heading_phx=   svg.append("text")
                                                      .attr("y", 120)
                                                      .attr("x", 120)
                                                      .style("fill", "White")
                                                      .style("font-size", "10px")
                                                      .text("Phoenix SH Int. Airport").style('opacity', 0);

                                            code_phx=   svg.append("text")
                                                      .attr("y", 135)
                                                      .attr("x", 120)
                                                      .style("fill", "White")
                                                      .style("font-size", "6px")
                                                      .text("Airport Code: PHX").style('opacity', 0);
                                             in_phx=   svg.append("text")
                                                      .attr("y", 150)
                                                      .attr("x", 120)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total InCount(2008): 219600").style('opacity', 0);
                                             out_phx=   svg.append("text")
                                                      .attr("y", 160)
                                                      .attr("x", 120)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total OutCount(2008): 205690").style('opacity', 0);


                                                      ////////////

        //////////////Group 2 Airports///////////////

                                                      ////////////// STL

                                            heading_stl=   svg.append("text")
                                                      .attr("y", 220)
                                                      .attr("x", 320)
                                                      .style("fill", "White")
                                                      .style("font-size", "10px")
                                                      .text("Lambert-St. Louis Int. Airport").style('opacity', 0);

                                            code_stl=   svg.append("text")
                                                      .attr("y", 235)
                                                      .attr("x", 320)
                                                      .style("fill", "White")
                                                      .style("font-size", "6px")
                                                      .text("Airport Code: STL").style('opacity', 0);
                                             in_stl=   svg.append("text")
                                                      .attr("y", 250)
                                                      .attr("x", 320)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total InCount(2008): 169025").style('opacity', 0);
                                             out_stl=   svg.append("text")
                                                      .attr("y", 260)
                                                      .attr("x", 320)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total OutCount(2008): 215005").style('opacity', 0);


                                                      ////////////


                                                      ////////////// ATL

                                            heading_atl=   svg.append("text")
                                                      .attr("y", 220)
                                                      .attr("x", 320)
                                                      .style("fill", "White")
                                                      .style("font-size", "10px")
                                                      .text("Atlanta International Airport").style('opacity', 0);

                                            code_atl=   svg.append("text")
                                                      .attr("y", 220)
                                                      .attr("x", 320)
                                                      .style("fill", "White")
                                                      .style("font-size", "6px")
                                                      .text("Airport Code: ATL").style('opacity', 0);
                                             in_atl=   svg.append("text")
                                                      .attr("y", 220)
                                                      .attr("x", 320)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total InCount(2008): 209625").style('opacity', 0);
                                             out_atl=   svg.append("text")
                                                      .attr("y", 220)
                                                      .attr("x", 320)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total OutCount(2008): 185685").style('opacity', 0);


                                                      ////////////

                                                                         ////////////// CLT

                                            heading_CLT=   svg.append("text")
                                                      .attr("y", 220)
                                                      .attr("x", 320)
                                                      .style("fill", "White")
                                                      .style("font-size", "10px")
                                                      .text("Douglas International Airport").style('opacity', 0);

                                            code_CLT=   svg.append("text")
                                                      .attr("y", 220)
                                                      .attr("x", 320)
                                                      .style("fill", "White")
                                                      .style("font-size", "6px")
                                                      .text("Airport Code: CLT").style('opacity', 0);
                                             in_CLT=   svg.append("text")
                                                      .attr("y", 220)
                                                      .attr("x", 320)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total InCount(2008): 189625").style('opacity', 0);
                                             out_CLT=   svg.append("text")
                                                      .attr("y", 220)
                                                      .attr("x", 320)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total OutCount(2008): 195685").style('opacity', 0);


                                                      ////////////                     
                                                                             ////////////// IAH

                                            heading_iah=   svg.append("text")
                                                      .attr("y", 220)
                                                      .attr("x", 320)
                                                      .style("fill", "White")
                                                      .style("font-size", "10px")
                                                      .text("Bush Intercontinental Airport").style('opacity', 0);

                                            code_iah=   svg.append("text")
                                                      .attr("y", 220)
                                                      .attr("x", 320)
                                                      .style("fill", "White")
                                                      .style("font-size", "6px")
                                                      .text("Airport Code: IAH").style('opacity', 0);
                                             in_iah=   svg.append("text")
                                                      .attr("y", 220)
                                                      .attr("x", 320)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total InCount(2008): 189625").style('opacity', 0);
                                             out_iah=   svg.append("text")
                                                      .attr("y", 220)
                                                      .attr("x", 320)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total OutCount(2008): 145685").style('opacity', 0);


                                                      ////////////
                                                       ////////////// MCO

                                            heading_mco=   svg.append("text")
                                                      .attr("y", 220)
                                                      .attr("x", 320)
                                                      .style("fill", "White")
                                                      .style("font-size", "10px")
                                                      .text("Orlando International Airport").style('opacity', 0);

                                            code_mco=   svg.append("text")
                                                      .attr("y", 220)
                                                      .attr("x", 320)
                                                      .style("fill", "White")
                                                      .style("font-size", "6px")
                                                      .text("Airport Code: MCO").style('opacity', 0);
                                             in_mco=   svg.append("text")
                                                      .attr("y", 220)
                                                      .attr("x", 320)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total InCount(2008): 130625").style('opacity', 0);
                                             out_mco=   svg.append("text")
                                                      .attr("y", 220)
                                                      .attr("x", 320)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total OutCount(2008): 114685").style('opacity', 0);


                                                      ////////////
     

//////////////Group 3 Airports///////////////
                                                      
                                                      ////////////// MSP

                                            heading_msp=   svg.append("text")
                                                      .attr("y", 120)
                                                      .attr("x", 300)
                                                      .style("fill", "White")
                                                      .style("font-size", "10px")
                                                      .text("St. Paul Int. Airport").style('opacity', 0);

                                            code_msp=   svg.append("text")
                                                      .attr("y", 120)
                                                      .attr("x", 300)
                                                      .style("fill", "White")
                                                      .style("font-size", "6px")
                                                      .text("Airport Code: MSP").style('opacity', 0);
                                             in_msp=   svg.append("text")
                                                      .attr("y", 120)
                                                      .attr("x", 300)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total InCount(2008): 219605").style('opacity', 0);
                                             out_msp=   svg.append("text")
                                                      .attr("y", 120)
                                                      .attr("x", 300)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total OutCount(2008): 275685").style('opacity', 0);


                                                      ////////////
                                           
                                                      ////////////// ORD

                                            heading_ord=   svg.append("text")
                                                      .attr("y", 120)
                                                      .attr("x", 300)
                                                      .style("fill", "White")
                                                      .style("font-size", "10px")
                                                      .text("Chicago O'hare Int. Apt.").style('opacity', 0);

                                            code_ord=   svg.append("text")
                                                      .attr("y", 120)
                                                      .attr("x", 300)
                                                      .style("fill", "White")
                                                      .style("font-size", "6px")
                                                      .text("Airport Code: ORD").style('opacity', 0);
                                             in_ord=   svg.append("text")
                                                      .attr("y", 120)
                                                      .attr("x", 300)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total InCount(2008): 239625").style('opacity', 0);
                                             out_ord=   svg.append("text")
                                                      .attr("y", 120)
                                                      .attr("x", 300)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total OutCount(2008): 255685").style('opacity', 0);


                                                      ////////////
                                                      ////////////// DTW

                                            heading_dtw=   svg.append("text")
                                                      .attr("y", 120)
                                                      .attr("x", 300)
                                                      .style("fill", "White")
                                                      .style("font-size", "10px")
                                                      .text("Detroit Metro Airport").style('opacity', 0);

                                            code_dtw=   svg.append("text")
                                                      .attr("y", 120)
                                                      .attr("x", 300)
                                                      .style("fill", "White")
                                                      .style("font-size", "6px")
                                                      .text("Airport Code: DTW").style('opacity', 0);
                                             in_dtw=   svg.append("text")
                                                      .attr("y", 120)
                                                      .attr("x", 300)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total InCount(2008): 319625").style('opacity', 0);
                                             out_dtw=   svg.append("text")
                                                      .attr("y", 120)
                                                      .attr("x", 300)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total OutCount(2008): 385685").style('opacity', 0);


                                                      ////////////
                                                      ////////////// PIT

                                            heading_pit=   svg.append("text")
                                                      .attr("y", 120)
                                                      .attr("x", 300)
                                                      .style("fill", "White")
                                                      .style("font-size", "10px")
                                                      .text("Pittsburgh Int. Airport").style('opacity', 0);

                                            code_pit=   svg.append("text")
                                                      .attr("y", 120)
                                                      .attr("x", 300)
                                                      .style("fill", "White")
                                                      .style("font-size", "6px")
                                                      .text("Airport Code: PIT").style('opacity', 0);
                                             in_pit=   svg.append("text")
                                                      .attr("y", 120)
                                                      .attr("x", 300)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total InCount(2008): 299625").style('opacity', 0);
                                             out_pit=   svg.append("text")
                                                      .attr("y", 120)
                                                      .attr("x", 300)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total OutCount(2008): 285685").style('opacity', 0);


                                                      ////////////



                                                      ////////////// EWR

                                            heading_ewr=   svg.append("text")
                                                     .attr("y", 120)
                                                      .attr("x", 300)
                                                      .style("fill", "White")
                                                      .style("font-size", "10px")
                                                      .text("Newark Liberty Int. Apt.").style('opacity', 0);

                                            code_ewr=   svg.append("text")
                                                      .attr("y", 120)
                                                      .attr("x", 300)
                                                      .style("fill", "White")
                                                      .style("font-size", "6px")
                                                      .text("Airport Code: EWR").style('opacity', 0);
                                             in_ewr=   svg.append("text")
                                                     .attr("y", 120)
                                                      .attr("x", 300)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total InCount(2008): 239625").style('opacity', 0);
                                             out_ewr=   svg.append("text")
                                                      .attr("y", 120)
                                                      .attr("x", 300)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total OutCount(2008): 215685").style('opacity', 0);


                                                      ////////////
                                                      ////////////// JFK

                                            heading_jfk=   svg.append("text")
                                                      .attr("y", 120)
                                                      .attr("x", 300)
                                                      .style("fill", "White")
                                                      .style("font-size", "10px")
                                                      .text("JFK Int. Airport").style('opacity', 0);

                                            code_jfk=   svg.append("text")
                                                      .attr("y", 120)
                                                      .attr("x", 300)
                                                      .style("fill", "White")
                                                      .style("font-size", "6px")
                                                      .text("Airport Code: JFK").style('opacity', 0);
                                             in_jfk=   svg.append("text")
                                                     .attr("y", 120)
                                                      .attr("x", 300)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total InCount(2008): 123925").style('opacity', 0);
                                             out_jfk=   svg.append("text")
                                                      .attr("y", 120)
                                                      .attr("x", 300)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total OutCount(2008): 121585").style('opacity', 0);


                                                      ////////////
                                                      ////////////// BOS

                                            heading_bos=   svg.append("text")
                                                      .attr("y", 120)
                                                      .attr("x", 300)
                                                      .style("fill", "White")
                                                      .style("font-size", "10px")
                                                      .text("Boston Int. Airport").style('opacity', 0);

                                            code_bos=   svg.append("text")
                                                      .attr("y", 120)
                                                      .attr("x", 300)
                                                      .style("fill", "White")
                                                      .style("font-size", "6px")
                                                      .text("Airport Code: BOS").style('opacity', 0);
                                             in_bos=   svg.append("text")
                                                      .attr("y", 120)
                                                      .attr("x", 300)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total InCount(2008): 369625").style('opacity', 0);
                                             out_bos=   svg.append("text")
                                                      .attr("y", 120)
                                                      .attr("x", 300)
                                                      .style("fill", "White")
                                                      .style("font-size", "8px")
                                                      .text("Total OutCount(2008): 335685").style('opacity', 0);


                                                      ////////////
          
                                                    

 

lin = svg.select("g")
.attr("class", "lines");
    
        

    Animbars.append("rect")
    .attr('width', 6)
    .attr('height',  5)
    .attr("class", "bars")
    .style("fill", "#005fcc")
    .attr("transform", "rotate(180)")
    .on('mouseover', function(d) {

      
           
    d3.select(this).transition()
            .style('opacity', 1)
            //.style('fill', "#00C5F0")
            .style('fill', "#000066")
            .attr('width',  140)
            .attr('height',  70)
          



                                                                    if(d.name == "Denver"){

                                                                    heading_den.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 130)
                                                                                .attr("x", 140)
                                                                    code_den.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 140)
                                                                                .attr("x", 140)
                                                                    in_den.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 150)
                                                                                .attr("x", 140)
                                                                    out_den.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 170)
                                                                                .attr("x", 140)

                                                                               }
                                                                    else if(d.name == "Los Angeles"){

                                                                    heading_lax.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 180)
                                                                                .attr("x", 4)
                                                                    code_lax.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 190)
                                                                                .attr("x", 4)
                                                                    in_lax.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 210)
                                                                                .attr("x", 4)
                                                                    out_lax.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 220)
                                                                                .attr("x", 4)

                                                                               }
                                                                    else if(d.name == "San Francisco"){

                                                                    heading_sfo.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 120)
                                                                                .attr("x", 4)
                                                                    code_sfo.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 135)
                                                                                .attr("x", 4)
                                                                    in_sfo.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 145)
                                                                                .attr("x", 4)
                                                                    out_sfo.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 165)
                                                                                .attr("x", 4)

                                                                               }
                                                                    else if(d.name == "Arizona"){

                                                                    heading_phx.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 200)
                                                                                .attr("x", 55)
                                                                    code_phx.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 210)
                                                                                .attr("x", 55)
                                                                    in_phx.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 225)
                                                                                .attr("x", 55)
                                                                    out_phx.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 240)
                                                                                .attr("x", 55)

                                                                               }


                                                                               //////////////////////group  2 


                                                                               else if(d.name == "St. Louis"){

                                                                    heading_stl.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 140)
                                                                                .attr("x", 275)
                                                                    code_stl.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 150)
                                                                                .attr("x", 275)
                                                                    in_stl.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 165)
                                                                                .attr("x", 275)
                                                                    out_stl.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 175)
                                                                                .attr("x", 275)

                                                                               }
                                                                    else if(d.name == "Atlanta"){

                                                                    heading_atl.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 210)
                                                                                .attr("x", 334)
                                                                    code_atl.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 220)
                                                                                .attr("x", 334)
                                                                    in_atl.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 235)
                                                                                .attr("x", 334)
                                                                    out_atl.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 245)
                                                                                .attr("x", 334)

                                                                               }
                                                                    else if(d.name == "Texas"){

                                                                    heading_iah.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 230)
                                                                                .attr("x", 175)
                                                                    code_iah.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 240)
                                                                                .attr("x", 175)
                                                                    in_iah.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 255)
                                                                                .attr("x", 175)
                                                                    out_iah.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 275)
                                                                                .attr("x", 175)

                                                                               }
                                                                               else if(d.name == "Florida"){

                                                                    heading_mco.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 260)
                                                                                .attr("x", 374)
                                                                    code_mco.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 270)
                                                                                .attr("x", 374)
                                                                    in_mco.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 285)
                                                                                .attr("x", 374)
                                                                    out_mco.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 295)
                                                                                .attr("x", 374)

                                                                               }
                                                                               else if(d.name == "Charlotte"){

                                                                    heading_CLT.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 170)
                                                                                .attr("x", 374)
                                                                    code_CLT.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 180)
                                                                                .attr("x", 374)
                                                                    in_CLT.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 195)
                                                                                .attr("x", 374)
                                                                    out_CLT.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 205)
                                                                                .attr("x", 374)

                                                                               }
                                                                               //////////////////////group  3


                                                                               else if(d.name == "New York"){

                                                                    heading_jfk.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 100)
                                                                                .attr("x", 425)
                                                                    code_jfk.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 110)
                                                                                .attr("x", 425)
                                                                    in_jfk.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 125)
                                                                                .attr("x", 425)
                                                                    out_jfk.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 135)
                                                                                .attr("x", 425)

                                                                               }

                                                                                else if(d.name == "New Jersey"){

                                                                    heading_ewr.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 85)
                                                                                .attr("x", 425)
                                                                    code_ewr.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 95)
                                                                                .attr("x", 425)
                                                                    in_ewr.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 110)
                                                                                .attr("x", 425)
                                                                    out_ewr.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 120)
                                                                                .attr("x", 425)

                                                                               }
                                                                               else if(d.name == "Boston"){

                                                                    heading_bos.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 70)
                                                                                .attr("x", 435)
                                                                    code_bos.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 80)
                                                                                .attr("x", 435)
                                                                    in_bos.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 85)
                                                                                .attr("x", 435)
                                                                    out_bos.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 95)
                                                                                .attr("x", 435)

                                                                               }
                                                                               else if(d.name == "Pittsburg"){

                                                                    heading_pit.style('opacity', 0.9)
                                                                                .transition()
                                                                                 .attr("y", 110)
                                                                                .attr("x", 380)
                                                                    code_pit.style('opacity', 0.9)
                                                                                .transition()
                                                                                 .attr("y", 120)
                                                                                .attr("x", 380)
                                                                    in_pit.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 130)
                                                                                .attr("x", 380)
                                                                    out_pit.style('opacity', 0.9)
                                                                                .transition()
                                                                                 .attr("y",140)
                                                                                .attr("x", 380)
                                                                               }
                                                                               else if(d.name == "Detroit"){

                                                                    heading_dtw.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 85)
                                                                                .attr("x", 350)
                                                                    code_dtw.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 95)
                                                                                .attr("x", 350)
                                                                    in_dtw.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 110)
                                                                                .attr("x", 350)
                                                                    out_dtw.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 120)
                                                                                .attr("x", 350)

                                                                               }
                                                                               else if(d.name == "Minnesota"){

                                                                    heading_msp.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 80)
                                                                                .attr("x", 250)
                                                                    code_msp.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 90)
                                                                                .attr("x", 250)
                                                                    in_msp.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 105)
                                                                                .attr("x", 250)
                                                                    out_msp.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 115)
                                                                                .attr("x", 250)

                                                                               }
                                                                               else if(d.name == "Chicago"){

                                                                    heading_ord.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 100)
                                                                                .attr("x", 295)
                                                                    code_ord.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 110)
                                                                                .attr("x", 295)
                                                                    in_ord.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 125)
                                                                                .attr("x", 295)
                                                                    out_ord.style('opacity', 0.9)
                                                                                .transition()
                                                                                .attr("y", 135)
                                                                                .attr("x", 295)

                                                                               }
                                                                              





     })

    .on('mouseout', function(d) {
        

        d3.select(this).transition()
            .style('opacity', 1)
            .style('fill', "#005fcc")
            .attr('width',  6)
            .attr('height',  function(d) {return d.barheight})
            

            /////////////////////////////////////////////////////////////////////////////////

                                                                    heading_den.transition()
                                                                              .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                            
                                                                    code_den.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    in_den.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    out_den.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)

                                                                              ///////////////////////

                                                                              heading_lax.transition()
                                                                              .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                            
                                                                    code_lax.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    in_lax.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    out_lax.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)

                                                                              ///////////////////////

                                                                              heading_sfo.transition()
                                                                              .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                            
                                                                    code_sfo.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    in_sfo.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    out_sfo.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)

                                                                              ///////////////////////

                                                                              heading_phx.transition()
                                                                              .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                            
                                                                    code_phx.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    in_phx.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    out_phx.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)

                                                                              //g3

                                                                                 heading_msp.transition()
                                                                              .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                            
                                                                    code_msp.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    in_msp.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    out_msp.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)

                                                                              ///////////

                                                                                 heading_ord.transition()
                                                                              .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                            
                                                                    code_ord.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    in_ord.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    out_ord.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)


                                                                              //////////////

                                                                                 heading_dtw.transition()
                                                                              .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                            
                                                                    code_dtw.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    in_dtw.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    out_dtw.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)

                                                                              ////////////////

                                                                                 heading_ewr.transition()
                                                                              .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                            
                                                                    code_ewr.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    in_ewr.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    out_ewr.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)

                                                                              /////////////////


                                                                                 heading_jfk.transition()
                                                                              .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                            
                                                                    code_jfk.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    in_jfk.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    out_jfk.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)

                                                                              ///////////////////

                                                                                 heading_pit.transition()
                                                                              .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                            
                                                                    code_pit.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    in_pit.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    out_pit.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)

                                                                              ///////////////////  g2

                                                                               ///////////////////
                                                                                heading_stl.transition()
                                                                              .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                            
                                                                    code_stl.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    in_stl.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    out_stl.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                              ///////////////////

                                                                    heading_CLT.transition()
                                                                              .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                            
                                                                    code_CLT.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    in_CLT.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    out_CLT.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                              ///////////////////
  ///////////////////
                                                                                heading_mco.transition()
                                                                              .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                            
                                                                    code_mco.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    in_mco.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    out_mco.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)

                                                                              heading_atl.transition()
                                                                              .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                            
                                                                    code_atl.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    in_atl.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    out_atl.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                              ///////////////////

                                                                                 heading_iah.transition()
                                                                              .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                            
                                                                    code_iah.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    in_iah.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    out_iah.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                              ///////////////////

                                                                                 heading_pit.transition()
                                                                              .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                            
                                                                    code_pit.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    in_pit.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    out_pit.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                              ///////////////////

                                                                                 heading_atl.transition()
                                                                              .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                            
                                                                    code_atl.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    in_atl.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    out_atl.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                              ///////////////////
                                                                                heading_bos.transition()
                                                                              .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                            
                                                                    code_bos.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    in_bos.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                    out_bos.transition()
                                                                               .duration(1000)
                                                                               .attr("y", 120)
                                                                               .attr("x", 120)
                                                                              .style('opacity', 0)
                                                                              ///////////////////

                                                                             

                                                                             

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

  });

      


  $(window).resize(function() {
        var w = $("#us_states").width();
        svg.attr("width", w);
        svg.attr("height", w * height / width);
      });


