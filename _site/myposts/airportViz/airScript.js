var m_width = $("#viz1").width(),
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