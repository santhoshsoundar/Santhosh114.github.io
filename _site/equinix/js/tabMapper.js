'use strict';

d3.select("#btnRevenues")
      .on("click", function() {  
          d3.select("#expenditures-container").style("display", "none");
          d3.select("#revenues-container").style("display", "block");
          d3.select("#targetExpenses-container").style("display", "none");

          // use workaround to check for # of filters present & either redrawAll or renderAll
          if ((revByCampusChart.filters().length | 
              sourceOfRevenueChart.filters().length | 
              revSourcePieChart.filters().length) > 0) {
            dc.redrawAll("revenue");
          }
          else {
            dc.renderAll("revenue");
          }

          formatXAxis();

          setUpToolTips();
        });
