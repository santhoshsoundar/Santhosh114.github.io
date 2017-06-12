---
layout: post
title: Stacked Crossfilter on TimeSeries 
mytags: "  #DC.js  #crossfilter "
img: <img class="post-cover" src="../static/img/blog/airport/airPrev.png"  border="5" alt="Responsive image">
tags:
- DC.js
- crossfilter
---

<style>.container {
  width: auto;
  max-width: 960px;
  text-align: center;

}
</style>

<div id="compositeTimeSeries1"> </div>
<div id="compositeTimeSeries2"> </div>
<div id="compositeSelection"> </div>
<script src="//code.jquery.com/jquery-2.0.0.js"></script>
<script src="//d3js.org/d3.v3.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/crossfilter/1.3.12/crossfilter.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/dc/2.1.6/dc.min.js"></script>

<script src="crossfilter/stackedFilter.js"></script>