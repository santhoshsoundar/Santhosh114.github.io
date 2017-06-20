---
layout: post
title:  Crossfilter Dashboard 
mytags: " #DC.js  #crossfilter #dashboard"
img: <img class="post-cover" src="../static/img/blog/crossfilter/crossfilterThum.png"  border="5" alt="Responsive image">
tags:
- DC.js
- crossfilter
- dashboard
---

<style>.container {
  width: auto;
  max-width: 1096px;
  text-align: center;
}
</style>
<style>@import url(../crossfilter/dashboardStyle.css);</style>
<style>@import url(../crossfilter/dc.min.css);</style>




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


### [Crossfilter & D3.js:]()

This is a minimal dashboard built with [DC.js](https://dc-js.github.io/dc.js/), a charting library with advanced filtering operations. 

It is an amalgamation of D3.js and Crossfilter, by [square](http://square.github.io/crossfilter/). 







<script src="//code.jquery.com/jquery-2.0.0.js"></script>
<script src="//d3js.org/d3.v3.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/crossfilter/1.3.12/crossfilter.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/dc/2.1.6/dc.min.js"></script>

<script src="crossfilter/dcdash.js"></script>