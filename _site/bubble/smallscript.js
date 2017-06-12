var   w = 800,
      h = 500;

var circleWidth = 40;

var palette = {
      "lightgray": "#819090",
      "gray": "#708284",
      "mediumgray": "#536870",
      "darkgray": "#475B62",
      "black": "#394035",
      "greensustain": "#27A822",
      "darkblue": "#0A2933",
      "darkerblue": "#042029",
      "paleryellow": "#FCF4DC",
      "paleyellow": "#EAE3CB",
      "yellow": "#A57706",
      "orange": "#BD3613",
      "red": "#D11C24",
      "pink": "#C61C6F",
      "purple": "#595AB7",
      "blue": "#2176C7",
      "green": "#259286",
      "yellowgreen": "#738A05"}

var nodes = [
      { name: "me",target: [0], img: "bubble/bbl/santhosh_bubble.png",click:"Resume",link: "https://www.linkedin.com/in/santhoshsoundararajan"},
      { name: "Data Analytics",target: [0], img: "bubble/bbl/pyd_bbl.png",click:"Read Blog",link: "blog.html"},
      { name: "Statistics ", target: [0], img: "bubble/bbl/r_bbl.png",click:"Read Blog",link: "blog.html"},
      { name: "Big Data", target: [0], img: "bubble/bbl/dbd_bbl.png",click:"Read Blog",link: "blog.html"},
      { name: "Git Projects", target: [1],target: [0], img: "bubble/bbl/pjt_bbl.png",click:"View Projects",link: "https://github.com/Santhosh114"},
      { name: "Data Visualizations", target: [0, 1, 2, 3], img: "bubble/bbl/viz_bbl.png",click:"Read Blog",link: "blog.html"}];

var links = [];

for (var i = 0; i< nodes.length; i++) {
      if (nodes[i].target !== undefined) {
            for (var x = 0; x< nodes[i].target.length; x++ ) {
                  links.push({
                        source: nodes[i],
                        target: nodes[nodes[i].target[x]]
                  })
            }
      }
}
if (screen.width >= 600) {
	wdf = 900;
var myChart = d3.select('div#chart')
		.append('svg')
		.attr("viewBox", "10 0 " + w + " " + h )
        .attr("preserveAspectRatio", "xMidYMid meet")

        .attr("width", wdf)
        .attr("height", wdf * h / w)
}else{
	wdf = window.innerWidth;
var myChart = d3.select('div#chart')
		.append('svg')
		.attr("viewBox", "40 0 " + w + " " + h )
        .attr("preserveAspectRatio", "xMidYMid meet")

        .attr("width", wdf)
        .attr("height", wdf * h / w)
}


var force = d3.layout.force()
	.nodes(nodes)
	.links([])
	.gravity(0.2)
	.charge(-2000)
	.size([w, h])
	.linkDistance(100)
    .friction(0.925)
    .linkStrength(function(l, i) {return 8; })
    

var link = myChart.selectAll('line')
	.data(links).enter().append('line')
	.attr('stroke', palette.gray);

var node = myChart.selectAll('circle')
	.data(nodes).enter()
	.append('g')
	.call(force.drag);

 node.append("svg:a")
    .attr("xlink:href", function(d){return d.link})
	.append('circle')
	.attr('cx', function(d) { return d.x; })
	.attr('cy', function(d) { return d.y; })
	.attr('r',function(d, i) {
		if (i>0) { return circleWidth  }
		else { return circleWidth + 10 }
	})
	.attr('fill', function(d, i) {
		if (i>0) { return palette.greensustain }
		else { return palette.black }
	})

	click = node.append('text')
	.text(function(d) { return d.click})
	.attr('font-family', 'Play')
	.attr('x', function(d, i) {
		if (d.name=="me") { return -30 }
		if (d.name=="Git Projects") { return -30 }
		else { return -35 }
	})
	.attr('y', function(d, i) {
		if (d.name=="me") { return 5  }
		else { return 5 }
	})
	.attr('font-size',function(d, i) {
		if (d.name=="Git Projects") { return 10 }
			if (d.name=="me") { return 16 }
		else { return 15 }
})
	.attr('fill',
	  function(d, i) {
		if (i>0) { return palette.black }
		else { return  palette.greensustain}
	})
// Append images
  var images = node.append("svg:a")
   .attr("xlink:href", function(d){return d.link;}).append("svg:image")
        .attr("xlink:href",  function(d) { return d.img;})
        .attr("x", function(d,i) { if (i>0) { return -40  }
		else { return -50 }})
        .attr("y", function(d,i) { if (i>0) { return -41  }
		else { return -50 }})
        
        .attr("height", function(d, i) {
		if (i>0) { return 80  }
		else { return 100 }
	})
        .attr("width", function(d, i) {
		if (i>0) { return 80  }
		else { return 100}
	});
// make the image grow a little on mouse over
  var setEvents = images.on( 'mouseenter', function() {
            // select element in current context
            d3.select(this)
              .transition()
              .duration(600) 
              .style('opacity', 0);
          })
          // set back
          .on( 'mouseleave', function() {
            d3.select( this )
              .transition()
              .duration(500)
               .delay(500)
                 .style('opacity', 1);  
          });
          

node.append('text')
	.text(function(d) { return d.name})
	.attr('font-family', 'Play')
	.attr('fill', function(d, i) {
		if (i>0) { return palette.mediumgray}
		else { return palette.greensustain}
	})
	.attr('x', function(d, i) {
		if (i>0) { return circleWidth - 120 }
		else { return circleWidth +50 }
	})
	.attr('y', function(d, i) {
		if (i>0) { return circleWidth + 15 }
		else { return 10 }
	})
	.attr('text-anchor', function(d, i) {
		if (i>0) { return 'beginning' }
		else { return 'end'}
	})
	.attr('font-size',  function(d, i) {
		if (i>0) { return '1em' }
		else { return '1.8em'}
	})

// 	 seemycode= myChart.append("text")
//         .attr("id","description")
//         .text("hi da palette")
//         .attr("x", 600)
//         .attr("y", 400)
//         .attr("opacity", 0)

//         myChart.on("mouseover", function() {
// seemycode.style('opacity', 0.9)
// })
//         myChart.on("mouseout", function() {
//         seemycode.style('opacity', 0)
// })
	

force.on('tick', function(e) {
	node.attr('transform', function(d, i) {
		return 'translate('+ d.x +', '+ d.y +')';
	})

	link
		.attr('x1', function(d) { return d.source.x })
		.attr('y1', function(d) { return d.source.y })
		.attr('x2', function(d) { return d.target.x })
		.attr('y2', function(d) { return d.target.y })
})


force.start();

window.addEventListener('resize', resize); 

function resize() {
	var wd = window.innerWidth;
	if(wd<800){
        myChart.attr("width", wd);
        myChart.attr("height", wd * h / w);
    }else{
    	var wdef = 800;
    	myChart.attr("width", wdef);
        myChart.attr("height", wdef * h / w);
    }
        force.size([w, h]).resume();
    // width = window.innerWidth, height = window.innerHeight;
    // myChart.attr("width", width+20).attr("height", height+20);
    // force.size([width, height]).resume();
}

  // $(window).resize(function() {
  //       var w = window.innerWidth;
  //       myChart.attr("width", w);
  //       myChart.attr("height", w * height / width);
  //       force.size([width, height]).resume();
  //     });
