'use strict';
d3.select("#compositeLink")
      .on("click", function() {  
          d3.select("#customer-container").style("display", "none");
          d3.select("#sector-container").style("display", "none");
          d3.select("#revenues-container").style("display", "none");
          d3.select("#composite-container").style("display", "block");

          if ((functionScoreChart.filters().length | 
              functionSegmentChart.filters().length | 
              functionYearChart.filters().length | 
              functionMarketChart.filters().length) > 0) {
            dc.redrawAll("magScoresGrp");
          }
          else {
            dc.renderAll("magScoresGrp");
          }
          
        });


d3.select("#customerLink")
      .on("click", function() {  
          d3.select("#composite-container").style("display", "none");
          d3.select("#sector-container").style("display", "none");
          d3.select("#eda-container").style("display", "none");
          d3.select("#customer-container").style("display", "block");

          if ((functionCompositeChart.filters().length | 
              functionCustYear.filters().length | 
              functionCustMarket.filters().length) > 0) {
            dc.redrawAll("customerChartGrp");
          }
          else {
            dc.renderAll("customerChartGrp");
          }

        });


d3.select("#sectorLink")
      .on("click", function() {  
          d3.select("#composite-container").style("display", "none");
          d3.select("#customer-container").style("display", "none");
          d3.select("#eda-container").style("display", "none");
          d3.select("#sector-container").style("display", "block");
          
          if ((avgLineChart.filters().length | 
              avgVolChart.filters().length ) > 0) {
            dc.redrawAll("magScoresGrp");
          }
          else {
            dc.renderAll("magScoresGrp");
          }

        });

d3.select("#edaLink")
      .on("click", function() {  
          d3.select("#composite-container").style("display", "none");
          d3.select("#customer-container").style("display", "none");
          d3.select("#sector-container").style("display", "none");
          d3.select("#eda-container").style("display", "block");
          
          if ((top50BubbleChart.filters().length) > 0) {
            dc.redrawAll("top50ChGrp");
          }
          else {
            dc.renderAll("top50ChGrp");
          }
        });

        