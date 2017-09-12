---
layout: post
title:  Expenditure Dashboard 
mytags: "#Acumen_Assignment #D3.js  #crossfilter"
img: <img class="post-cover" src="../static/img/blog/crossfilter/crossfilterThum.png"  border="5" alt="Responsive image">
tags:
- Acumen_Assignment
- D3.js
- crossfilter
---

<style>.container {
  width: auto;
  max-width: 960px;
  text-align: center;
}
</style>
<style>@import url(../crossfilter/dashboardStyle.css);</style>
<style>@import url(../static/css/dc.min.css);</style>




<div class="container" id="ww-container">
  <div class="row">

  <div id="ww-capacity-line">
    <div class="chart-heading">
    <h5>Daily production and advertising expenditures</h5>
    </div>
  </div>

  <div id="ww-capacity-pie">
    <div class="chart-heading">
    <h5>Avg Proportion - Ads Vs Prod.</h5>
    </div>
  </div>

  <div id="ww-fscount-line">
    <div class="chart-heading">
    <h5>Ad Outlets Timeline </h5>
    </div>
  </div>

  <div id="ww-volume-chart">
    <div class="chart-heading">
    <h5>Filter TimeSeries
    <a href="javascript:dc.filterAll('wwChartGrp'); dc.renderAll('wwChartGrp');" class="rset"> Reset Selection</a>
    </h5>
    </div>
  </div>


  </div>
</div>
<br>

> Post updated with my critique on the dashboard for an interview process with [Acumen LLC](http://www.acumenllc.com/).

Overview:
------

This data visualization dashboard depicts the expenditures accounted for retail client for the production and advertising respectively. This data is sourced from UIC time series data repository for academic purposes, ranging over 12 months on a data point per day basis with random missing values.  

One can just glance over the visualization to see the trend in the dashboard or zoom in to specific timelines for a more intimate look. Hovering one’s cursor over the lines reveals the value of each variable with its associated date. Total expenditure, production costs advertising costs, proportions *(reflecting the most recent datapoint)* and the number of Ad outlets represented in their own independent scope help the viewer understand the visualization in context. It’s a simple construction, approachable to the general public and scientifically accurate.

______

Trifecta Checkup:
------

One of the first visualization review framework I would like to apply is the [Trifecta Checkup](http://junkcharts.typepad.com/junk_charts/junk-charts-trifecta-checkup-the-definitive-guide.html), it is widely used in the industry to interpret visualizations correctly, distinguish the good from the bad. The trifecta checkup involves answering these three basic questions. 

* What is the QUESTION? (Q)
* What does the DATA say? (D)
* What does the VISUAL say? (V)

QDV is seen as three vertices of a triangle that one aims to render effectively to the state of Trifecta, meaning *“Everything is in sync and the chart has no weaknesses!”*

Q - The question that this visualization answers is “What is the time series trend of expense types & their possible correlations with number of Ad campaigns?” I feel the question seeks the right insight from the data, i.e. it not only seek a visual story of various expenditures hence it is ensured it is engaging. 

D - The Data was derived for academic purposes & has relevance to the questions that is being asked. Theory says “Relevance can often be augmented by reducing noise, removing errors or transformations”, hence I made sure the chart element accept data that is not uniformly distributed across the time series and normalized the data.  

V - The Visual elements should represent the Data in a clear, concise manner, addressing the Question directly. Lets take few concrete heuristics into account to come into a conclusion about the expenditures dashboard. 

______



Visualization Specific heuristics:
------

##### **Information Coding**
Perception of information is directly dependent on the mapping of data elements to visual objects. 
In this dashboard, time series trends are visualized as line graphs and stacked line graphs, associated pie aggregation. As we know, perceptual accuracy is at its best with [position and length](https://goo.gl/images/JFDZtd), which is basis of a line chart and one can be sure of the accuracy of information projected perceptually.  This should be enhanced by using realistic characteristics/techniques or the use of additional symbols known as [glyphs](http://www.infovis-wiki.net/index.php?title=Glyph). In this visualization, we have tried to provide a grid outline in the background of the plots that enhances the ability to perceive the numbers. 

##### **Spatial Organization** 
The concerns of users’ orientation in the information space can be met with how the elements are distributed in the layout, precision and legibility, efficiency in space usage and distortion of visual elements. In this dashboard, we can see the charts well position and the visibility of elements are optimized based on its priority. I have taken liberty with the padding property & youtube like tiles to space out individual charts.  

##### **Orientation and Help** 
These are functions like support to control levels, markers to zoom-in zoom-out, redo/undo of actions and representing additional information such as labels & directions. The dashboard accomplishes orientation and help with smart spacing and labeling with minimal chart junks, to achieve this, I forfeited the usage of additional buttons and UI elements and had used plain text and hyperlinks - Reset selection is a realization of this property. 

##### **Minimal Actions** 
Concerns workload with respect to the number of actions necessary to extract insights. At its core, this dashboard hosts a crossfilter layer that performs [Map-Reduce](https://github.com/square/crossfilter/wiki/API-Reference) to aggregate data and slice data based on the user interaction. So when a user select a certain time range in the filter chart element, the dashboard reflects changes based on the user selection. Since this is a minimal version of my previous implementations of dashboards, this has super minimal actions required to extract a trend. One can add more depth to this dashboard by adding more actions to each plot and essentially more plots to broaden the composite view. 

##### **Recognition Rather than Recall** 
Dashboard assumes minimal prior knowledge of such visual interpretation and that encoding we used is pretty straightforward so the user may not have to memorize a lot of information to carry out tasks. 

##### **Chart Junks**
Concerns whether any extra information can be a distraction so the dashboard is kept at its minimal level of styling. The lines elements for total funds and 85% Threshold is technically and example of minimalchart junk. This is one of the most important property underlined in the [Edward Tufte's Visual Design Rules!](http://www.sealthreinhold.com/school/tuftes-rules/rule_three.php)

____________


Technologies Used:
------
This is a minimal dashboard built with [D3.js](https://d3js.org/) in conjuncture with [Crossfilter](http://square.github.io/crossfilter/) a charting library with advanced filtering capabilities powered by "Square" giving rise to [DC.js](https://dc-js.github.io/dc.js/).
Hence the dashboard itself is an amalgamation of D3.js, Crossfilter and DC.js and out of the box customization of the library itself to achieve desired styles. The layouts are designed with vanila CSS. 

____________


Room For Improvement:
------

##### **More Action components**
Given a business requirement, I would add more action components to this dashboard, for example, we can aggregate the proportions pie chart every time a user select instead of the most recent data point. 

##### **Prediction of trends**
I personally liked to have a prediction component as an extension similar to a [holt-winter](https://goo.gl/images/JqTB7g) realization of predictive component. 

##### **Color coding**
The *Ad* attribute could have a common color in both plots *i.e. orange on both line charts* that enhances perception by visual grouping. 

<br>

*In summary, this is a successful dashboard implementation that offers out of the box features for interaction from modern JS frameworks.*



<script src="../equinix/package/jquery.min.js"></script>
<script src="../equinix/package/d3.v3.min.js"></script> 
<script src="../equinix/package/crossfilter.min.js"></script>
<script src="../equinix/package/dc.min.js"></script>


<script src="crossfilter/dcdash.js"></script>