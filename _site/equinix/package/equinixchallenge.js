<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	  <meta name="author" content="Santhosh" />
    <meta name="description" content="my personal blog and resume">
    <link rel="favicon" href="static/img/favicon.ico">

<link rel="apple-touch-icon" sizes="57x57" href="static/img/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="static/img/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="static/img/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="static/img/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="static/img/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="static/img/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="static/img/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="static/img/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="static/img/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="static/img/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="static/img/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="static/img/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="static/img/favicon-16x16.png">
<link rel="manifest" href="/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">

<script type="text/javascript"
    src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>

    
      <title>Equinix Data Viz Challenge - Magneto</title>
    

    <!-- Bootstrap -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha256-MfvZlkHCEqatNoGiOXveE8FIwMzZg4W85qfrfIFBfYc= sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ=="
    crossorigin="anonymous">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

	<!-- Custom styles for this template -->
    <link rel="stylesheet" type="text/css" href="static/css/main.css" />

	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
  <link rel="stylesheet" type="text/css" href="static/css/syntax.css" />
  <link href='https://fonts.googleapis.com/css?family=Raleway:400,200,500,300,100' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Oswald:300,400' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Lato:300,400' rel='stylesheet' type='text/css'>
    <!-- Google Analytics -->
    <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-69391421-1', 'auto');
  ga('send', 'pageview');

</script>
  </head>
  <!-- Main Body-->
  <body>
  <!-- Wrap all page content here -->
  <div id="wrap">
    <!-- Navbar header -->
    <style>
.announce {
  padding: 15px 0;
  display: block;
  color: rgba(0, 0, 0, 0.8) !important;
  line-height: inherit;
  background: linear-gradient(to bottom, #ffc, #ffa);
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
}

.column {
  max-width: 960px;
  position: relative;
  display: block;
  margin: 0 auto;
  padding: 0 100px;
}
</style>

<a class='announce' href="https://santhoshsoundar.blog" target="blank">
  <div class='column'>This is an older version my blog, now a react based gatsby blog - <b>santhoshsoundar.blog</b></div>
</a>
<nav class="navbar-default">
  <div class="container">
    <div class="navbar-header">
      <a class="navbar-brand" href="index.html"><h1><i class="fa fa-home"></i>santhosh<span>fiddle</span></h1></a>

    </div>
    <div id="navbar">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="blog.html">Blog</a></li>
        <li><a href="https://github.com/Santhosh114">Projects</a></li>
        <li><a href="https://www.linkedin.com/in/santhoshsoundararajan">Resume</a></li>
      </ul>
    </div>
  </div>
</nav>         

    <div class="container">
	<div class="blog-post">
		<div class="col-sm-12"><h2>
		 <a href="/equinix/package/equinixchallenge.js">Equinix Data Viz Challenge - Magneto</a>
		</h2></div>
	</div>
	<div class="blog-title" style="margin-bottom:25px; float:left; width:100%;">
		<h5><div class="col-sm-3" style="text-align:left;">
		
			
			</div>
			<div class="col-sm-9 tagsin">
			
		    </div>


		</h5>
	</div>
	<div class="panel panel-default">
		<div class="panel-body">
			<div class="blogpost">
			  <style>@import url(../equinix/css/magneto-style.css);</style>
<style>@import url(../static/css/dc.min.css);</style>

<div class="container" id="dashContain">
	<div class="row">
    <div class="col-md-6">
      <!-- Nav tabs -->
      <div class="card">
                <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active"><a href="#composite" id="compositeLink" aria-controls="composite" role="tab" data-toggle="tab">Composite Dashboard</a></li>
                    <li role="presentation"><a href="#customer" id="customerLink" aria-controls="customer" role="tab" data-toggle="tab">Customer Insights</a></li>
                    <li role="presentation"><a href="#eda" id="edaLink" aria-controls="eda" role="tab" data-toggle="tab">Top 50 Customers</a></li>
                    <li role="presentation"><a href="#sector" id="sectorLink" aria-controls="sector" role="tab" data-toggle="tab">Time Series - Avg Scores</a></li>
                    <li role="presentation"><a href="#wrk" aria-controls="wrk" role="tab" data-toggle="tab">Workflow</a></li>
                    <li role="presentation"><a href="#about" aria-controls="about" role="tab" data-toggle="tab">@Magneto</a></li>
                </ul>
        <!-- Tab panes -->
        <div class="tab-content">
                <div role="tabpanel" class="tab-pane active" id="composite">
                        <div class="container" id="composite-container">
                            <div class="row">
                                  <div id="score-line-chart">
                                      <span class="chart-title">Magneto Score Components Over Time</span>
                                      <a class="reset" href="javascript:functionScoreChart.filterAll('magScoresGrp');dc.redrawAll('magScoresGrp');" style="display: none;">reset</a>
                                      <div class="clearfix"></div>
                                  </div>
                            </div>
                            <BR>
                            <div class="row">
                                  <div id="segment-row-chart">
                                      <span class="chart-title">Customer Segment Frequency</span>
                                      <p class="subText"> select segment to filter </p>
                                      <a class="reset" href="javascript:functionSegmentChart.filterAll('magScoresGrp');dc.redrawAll('magScoresGrp');" style="display: none;">reset</a>
                                      <div class="clearfix"></div>
                                  </div>
                                  <div id="year-bar-chart">
                                      <span class="chart-title">Annual Customer Distribution</span>
                                      <p class="subText"> select year to filter </p>
                                      <a class="reset" href="javascript:functionYearChart.filterAll('magScoresGrp');dc.redrawAll('magScoresGrp');" style="display: none;">reset</a>
                                      <div class="clearfix"></div>
                                  </div>
                                  <div id="market-pie-chart">
                                    <span class="chart-title">Market Shares</span>
                                    <p class="subText"> select market to filter </p>
                                    <a class="reset" href="javascript:functionMarketChart.filterAll('magScoresGrp');dc.redrawAll('magScoresGrp');" style="display: none;">reset</a> 
                                    <div class="clearfix"></div>
                                  </div>  
                            </div>
                            <div class="row">
                                  <div class="dc-data-count">
                                    <span class="filter-count"></span> selected out of <span class="total-count"></span> records 
                                  </div>
                                  <BR>
                                  <div id="bubble-chart">
                                      <span class="chart-title">15000 Customer by Scores<br>&nbsp;&nbsp;&nbsp;[radius - mScore]</span>
                                      <a class="reset" href="javascript:customerBubbleChart.filterAll('magScoresGrp');dc.redrawAll('magScoresGrp');" style="display: none;">reset</a>
                                      <div class="clearfix"></div>
                                      <p class="subText"> select customer to filter </p>
                                  </div>
                            </div>
                        </div>
                </div>
                <div role="tabpanel" class="tab-pane" id="customer">
                        <div class="container" id="customer-container" style="display: none;">
                            <div class="row">
                                <button onclick="mySearchFunction()" style="float:right;" class="button1"> Fetch </button>
                                <input type="search" id="mySearch" placeholder="enter a customer id.." style="float:right;">
                            </div>
                            <BR>
                            <div class="row">
                                  <div id="custComposite">
                                      <span class="chart-title">Magneto Score Components Over Time</span>
                                      <BR>
                                      <strong id="customerIDVal">Insights for CustID - 1 </strong>
                                      <a class="reset" href="javascript:functionCompositeChart.filterAll('customerChartGrp');dc.redrawAll('customerChartGrp');" style="display: none;">reset</a>
                                      <div class="clearfix"></div>
                                  </div>
                            </div>
                            <BR>
                            <div class="row">
                                  <div id="cust-year-bar">
                                      <span class="chart-title">Annual Customer Distribution</span>
                                      <p class="subText"> select year to filter </p>
                                      <a class="reset" href="javascript:functionCustYear.filterAll('customerChartGrp');dc.redrawAll('customerChartGrp');" style="display: none;">reset</a>
                                      <div class="clearfix"></div>
                                  </div>
                                  <div id="cust-market-pie">
                                    <span class="chart-title">Market Shares</span>
                                    <p class="subText"> select market to filter </p>
                                    <a class="reset" href="javascript:functionCustMarket.filterAll('customerChartGrp');dc.redrawAll('customerChartGrp');" style="display: none;">reset</a> 
                                    <div class="clearfix"></div>
                                  </div>  
                                   <BR>
                                  <div class="dc-data-count" id="customerCount">
                                      <span class="filter-count"></span> selected out of <span class="total-count"></span> records 
                                  </div>
                            </div>
                        </div>  
                </div>
                <div role="tabpanel" class="tab-pane" id="sector">
                        <div class="container" id="sector-container" style="display: none;">
                            <div class="row">
                                  <div id="avg-line-chart">
                                      <span class="chart-title">Average Scores Over Time</span>
                                  </div>
                                  <div id="avg-volume-chart">
                                      <span class="chart-title">Select time range to zoom in</span>
                                      <a class="reset" href="javascript:avgVolChart.filterAll('magScoresGrp');dc.redrawAll('magScoresGrp');" style="display: none;">reset</a>
                                      <div class="clearfix"></div>
                                  </div>
                            </div>
                        </div>  
                </div>
                <div role="tabpanel" class="tab-pane" id="eda">
                        <div class="container" id="eda-container" style="display: none;">
                             <div class="row">
                                  <div id="top-bubble-chart">
                                      <span class="chart-title">Top 50 Customers based on mean comp_mscore, ic_net_score & gdi_net_score</span>
                                      <p class="subText"> select customer to filter </p>
                                  </div>
                            </div>
                            <div class="row">
                                  <div id="top-table">
                                      <table class="table table-hover dc-data-table" id="top-cust-table">
                                            <thead>
                                            <tr class="header">
                                                <th>CustID</th>
                                                <th>Average comp_mscore</th>
                                                <th>Average ic_net_score</th>
                                                <th>Average gdi_net_score</th>
                                                <th>Segment</th>
                                            </tr>
                                            </thead>
                                      </table>
                                  </div>
                            </div>
                        </div>
                </div>
                <div role="tabpanel" class="tab-pane" id="wrk">
                        <p>My workflow consist of the following componenets:</p>
                        <h5>- Exploratory Analysis</h5>
                        <p class='workflowPara'> First up, I wanted to perform exploratory analysis on the dataset in otder to find the posible features that contains key insights. <BR>
                        So I used <span class='highlightText'> Python - Pandas</span> to group by and apply conditions on the features to visualize the outcomes with <span class='highlightText'> seaborn. </span>
                        Looking at the distributions of features, I realized I was not able to build any meaningful time series unless I break down the dataset based on one or more features. eg - 
                        Customer ID gives us individual time series. 
                        </p> 
                        <h5>- Wireframing</h5>
                        <p class='workflowPara'>At this point, I did my initial wireframing for the plots based on the data and the outcome I extracted from my exploratory analysis.</p>
                        <h5>- Project Planning</h5>
                        <p class='workflowPara'>Before starting my development, I had to make some decisions on what kind of tools I am going to use to build my plots with keeping in mind the the possible features I wanted to bring into the plots.</p> 
                        <h5>- Setting up my Backend</h5>
                        <p class='workflowPara'>Next I worked on setting up my backend as a microservice with <span class='highlightText'> Flask - Python</span> to serve the transformed data after grouping functions are applied. <a href="https://github.com/Santhosh114/Flask-MicroService">GitHub</a></p>
                        <h5>- Preparing my Frontend</h5>
                        <p class='workflowPara'>Built my template and mapper functions to integrate multiple crossfilter enabled plots & to redraw each chart group during tab onClick events to keep the DOM lightweight.</p>
                        <h5>- Building my Filters</h5>
                        <p class='workflowPara'>Built my filter - dimentions & groups with <span class='highlightText'>crossfilter.js</span> which acts as a basic framework for the plots to filter each other in response to onClick events </p>
                        <h5>- Charting</h5>
                        <p class='workflowPara'> With <span class='highlightText'>DC.js</span> I have composed my plots and these could be converted into a reusable chart module with little effort. <a href="https://github.com/Santhosh114/Santhosh114.github.io/tree/master/equinix/js">GitHub</a></p>
                        <h5>- Code clean-up</h5>
                        <p class='workflowPara'>Finally I wrapped it up with code cleanup, crossbrowser testing and version control. </p>
                </div>
                <div role="tabpanel" class="tab-pane" id="about">
                <h5>Dataset:</h5>
                    <ul class="about-data">
                      <li> year – year of score </li>
                      <li> month – month of score </li>
                      <li> market – region of customer: AMER is Americas, APAC is Asia Pacific, EMEA is Europe, Middle East and Africa </li>
                      <li> cust_id – a unique ID of each customer </li>
                      <li> cust_segment – we divide our customers into various buckets of business sectors </li> 
                      <li> comp_mscore – composite m-score. A higher score represents deeper and denser co-system </li>
                      <li> ic_net_score – interconnection score. A measure of how well connected a customer is </li>
                      <li> gdi_net_score -  weighted average of net IBX (datacenter) presence and net metro presence. Higher score means a higher presence within the region </li>
                      <li> cc_count_as_zside – cross connect (line between two machines owned by different customers within a datacenter) count, for incoming connections </li>
                      <li> cc_count_as_aside – cross connect count, for outgoing connections </li>
                      <li> net_ibx_presence – total number of IBXs that the customer is in within the region </li>
                      <li> net_metro_presence – total number of metros (areas of datacenters) that the customer is in within the region </li>
                    </ul>
                </div>
        </div>
      </div>
    </div>
	</div>
</div>

<script src="../equinix/package/jquery.min.js"></script>
<script src="../equinix/package/d3.v3.min.js"></script> 
<script src="../equinix/package/crossfilter.min.js"></script>
<script src="../equinix/package/dc.min.js"></script>

<script src="../equinix/js/compositeInsights.js"></script>
<script src="../equinix/js/customerInsights.js"></script>
<script src="../equinix/js/top50customers.js"></script>
<script src="../equinix/js/mapper.js"></script>

			   <!--<hr>-->
			   <!--<div class="related-posts">
				   <h5>Related Posts</h5>
				   
						<div class="row">
							 <div class="col-sm-4 col-md-4 col-lg-4">
								 <h6 style="text-align: right">
								 	August 22, 2017
								 </h6>
							 </div>
							 <div class="col-sm-8 col-md-8 col-lg-8">
								 <h6 style="text-align: left">
								 	<strong><a href="/expdashboard.html">Expenditure Dashboard</a></strong>
								 </h6>
							 </div>
						</div>
					
						<div class="row">
							 <div class="col-sm-4 col-md-4 col-lg-4">
								 <h6 style="text-align: right">
								 	August 10, 2016
								 </h6>
							 </div>
							 <div class="col-sm-8 col-md-8 col-lg-8">
								 <h6 style="text-align: left">
								 	<strong><a href="/chernoff.html">Chernoff Faces - D3.js</a></strong>
								 </h6>
							 </div>
						</div>
					
						<div class="row">
							 <div class="col-sm-4 col-md-4 col-lg-4">
								 <h6 style="text-align: right">
								 	July 18, 2016
								 </h6>
							 </div>
							 <div class="col-sm-8 col-md-8 col-lg-8">
								 <h6 style="text-align: left">
								 	<strong><a href="/parallel.html">Parallel Coordinates - The Rockstar InfoViz</a></strong>
								 </h6>
							 </div>
						</div>
					
			   </div>-->
			</div>
		</div>
	</div>
	<!--
<div class="disqus">
<div id="disqus_thread"></div>
<script type="text/javascript">
		/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
		var disqus_shortname = 'username'; // required: replace example with your forum shortname
		var disqus_identifier = '/equinix/package/equinixchallenge.js';
		var disqus_url = 'http://santhosh114.github.io//equinix/package/equinixchallenge.js';
 
            /* * * DON'T EDIT BELOW THIS LINE * * */
            (function() {
                var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
                dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            })();
        </script>
        <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
        <a href="http://disqus.com" class="dsq-brlink">blog comments powered by <span class="logo-disqus">Disqus</span></a>
</div>

-->
</div>


  </div>
  <!-- Footer -->
  <footer>
    
    <div id="footer">
        
        <div class="container">

            <p class="text-muted">Powered by <a href="http://jekyllrb.com/">Jekyll</a> and
            <a href="https://github.com/Santhosh114">GitHub</a> with ♥ Santhosh Soundararajan</p>
            
        </div>
    </div>
</footer>
<div class="footer"></div>


    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Bootstrap core JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"
    integrity="sha256-Sk3nkD6mLTMOF0EOpNtsIry+s1CsaqQC1rVLTAy+0yc= sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ=="
    crossorigin="anonymous"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="static/js/docs.min.js"></script>
    <script src="static/js/main.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="static/js/ie10-viewport-bug-workaround.js"></script>
  <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-75622536-1', 'auto');
  ga('send', 'pageview');

</script>
</body>
</html>
