// This is my typical data extraction cleaning script built as a node.js app

'use strict';
var _ = require('lodash');
const CouchDB = require('../services/couchdb');
const MySQL = require('promise-mysql');
const Promise = require('bluebird');
const config = require('../config');


function findAndRemove(array, property, value) {
  array.forEach(function(result, index) {
    if(result[property] === value) {
      array.splice(index, 1);
    }    
  });
}


function normalizeData(platform, sessionData, testData){

    var sessionObjects = sessionData[platform];
    
    var sessionDates = [];
    sessionObjects.forEach(function(d) {
        sessionDates.push(d.date);
    })
    var testNodeObjects = testData[platform];
    var testNodeDates = [];
    testNodeObjects.forEach(function(d){
        testNodeDates.push(d.date);
    })

    var incompleteDates = _.difference(sessionDates,testNodeDates);
    incompleteDates.forEach(function(d){
        findAndRemove(sessionObjects, 'date', d);
        findAndRemove(testNodeObjects, 'date', d);
        });

    var sessionLength = sessionObjects.length;
    var testLength = testNodeObjects.length;
    console.log("***** cleaned up data for platform: "+platform +" *****");
    console.log("Session count of "+platform+ ": "+sessionLength);
    console.log("Test Node Stats countof "+platform+ ": "+testLength);
    console.log("Total number of data point chopped off: "+incompleteDates.length);

    for (var i = 0; i < sessionObjects.length; i++) {
        var obj = sessionObjects[i];
        if (testNodeObjects[i] && obj.date == testNodeObjects[i].date) 
        {
                obj.duration = testNodeObjects[i].duration;
                obj.durationMovavg = testNodeObjects[i].durationMovavg;
                obj.platform = platform;
                obj.sessionMovavg = obj.sessionMovavg / 1000;
                obj.duration = (obj.duration / 3600);
                obj.durationMovavg = (obj.durationMovavg / 3600);
                delete obj.jobCount;
                delete obj.sessionCount;
    }
  }
    return sessionObjects;   
}





// Preprocess the queries by separating result based on platform
// Uses the function pass by format to format the platform to the right label
const processPlatforms = function processPlatforms(input, format) {
  const output = {};
  for (let i = 0; i < input.length; i++) {
    const raw = {};
    for (const field in input[i]) {
      if (field === 'platform') {
        continue;
      }
      raw[field] = input[i][field];
    }
    const platform = format(input[i].platform);
    if (!output.hasOwnProperty(platform)) {
      output[platform] = [raw];
      continue;
    }
    output[platform].push(raw);
  }
  return output;
};

// TRDB query string
const trdbq = `
select s1.platform as platform, date_format(jstartdate,'%Y-%m-%d') as date,
count(S.id) as sessionCount, count(distinct jobid) as jobCount from (
    select J.start_date as jstartdate, J.id as jobid,
    TL.id as test_log_id, P.platform as platform from Job as J
    join Test_Log TL on TL.job_id = J.id
    join Platform P on P.id = TL.platform_id
    join Cluster C on C.id = J.cluster_id
    where P.platform in ('glnxa64', 'maci64', 'win64')
    and J.job_status in ('Accept', 'ACCEPTED')
    and J.start_date between date_sub(curdate(), interval 1 year)
    and date_sub(curdate(), interval 3 day)
) as s1
straight_join Session S on S.test_log_id = s1.test_log_id
group by platform, date
order by platform, date`;

// JMD query string
const jmdq = `
select N.name as platform, DATE_FORMAT(J.starttime,'%Y-%m-%d') as date,
AVG(durationSec) as duration
from JMD_CLUSTER C,JMD_JOB J, JMD_DAG D, JMD_DAG_NODE N, JMD_DAG_NODE_RUN R1
where C.cluster_id = J.cluster_id
and J.job_id = D.job_id
and job_status_type_id = '508' # ACCEPTED
and J.job_id = D.job_id
and D.dag_id = N.dag_id
and N.name in ('test-glnxa64', 'test-maci64', 'test-win64')
and N.dag_node_id = R1.dag_node_id
and R1.runCount = (
  select max(runCount)
  from JMD_DAG_NODE_RUN R2
  where R2.dag_node_id = R1.dag_node_id and R2.durationSec > 0
)
and J.starttime between date_sub(curdate(), interval 1 year)
and date_sub(curdate(), interval 3 day)
group BY platform, date
order BY platform, date`;

// Create a connetion, schedule query,
// and close connection when the query is done
const trdbr = MySQL.createConnection(
  config.trdbquery
).then(connection =>
  connection.query(trdbq).finally(() => {
    connection.end();
  })
);

// Create a connetion, schedule query,
// and close connection when the query is done
const jmdr = MySQL.createConnection(
  config.jmd
).then(connection =>
  connection.query(jmdq).finally(() => {
    connection.end();
  })
);

// Wait until both queries are resolved
Promise.all([trdbr, jmdr]).spread((sessionStats, testNodeStats) => {

  // Create new test node stats by arch
  const newSessionStats = processPlatforms(sessionStats, platform => platform);

  for (const platform in newSessionStats) {
    // Avoid triggering guard-for-in rule
    if ({}.hasOwnProperty.call(newSessionStats, platform)) {
      // Shorthand for platform objects
      const stats = newSessionStats[platform];
      // Used to compute exponential suppressed moving average
      let oldDate = 0;
      let sessionMovavg = 0;
      let sessionPerJobMovavg = 0;
      // Creating new counter including moving averages
      for (let i = 0; i < stats.length; i++) {
        const date = stats[i].date;
        const jobCount = stats[i].jobCount;
        const sessionCount = stats[i].sessionCount;
        const sessionPerJob = stats[i].sessionCount / jobCount;

        if (!i) {
          oldDate = date;
        }

        const deltaTime = (Date.parse(date) - Date.parse(oldDate)) / (1000 * 3600 * 24);
        const weight = Math.exp(-deltaTime / 7);
        stats[i].sessionMovavg =
          (1.0 - weight) * sessionCount + weight * sessionMovavg;
        stats[i].sessionPerJobMovavg =
          (1.0 - weight) * sessionPerJob + weight * sessionPerJobMovavg;
        sessionMovavg = stats[i].sessionMovavg;
        sessionPerJobMovavg = stats[i].sessionPerJobMovavg;
        oldDate = date;
      }
    }
  }

  // Create new test node stats by arch
  const newTestNodeStats = processPlatforms(testNodeStats, platform =>
    platform.split('-')[1]
  );

  for (const platform in newTestNodeStats) {
    // Avoid triggering guard-for-in rule
    if ({}.hasOwnProperty.call(newTestNodeStats, platform)) {
      // Shorthand for platform objects
      const stats = newTestNodeStats[platform];
      // Used to compute exponential suppressed moving average
      let oldDate = 0;
      let durationMovavg = 0;
      // Creating new counter including moving averages
      for (let i = 0; i < stats.length; i++) {
        const date = stats[i].date;
        const duration = stats[i].duration;

        if (!i) {
          oldDate = date;
        }

        const deltaTime = (Date.parse(date) - Date.parse(oldDate)) / (1000 * 3600 * 24);
        const weight = Math.exp(-deltaTime / 7);
        stats[i].durationMovavg = (1.0 - weight) * duration + weight * durationMovavg;
        durationMovavg = stats[i].durationMovavg;
        oldDate = date;
      }
    }
  }

var compositeObject = {};
compositeObject.glnxa64 = normalizeData("glnxa64",newSessionStats, newTestNodeStats);
compositeObject.maci64 = normalizeData("maci64",newSessionStats, newTestNodeStats);
compositeObject.win64 = normalizeData("win64",newSessionStats, newTestNodeStats);

  // Create final document
  const doc = {
    _id: 'TestNodeStats',
    testNodeData: compositeObject
  };

  // Save document in couchdb
  CouchDB.createConnection(config.couchdb).then(db => {
    db.insert(doc).then(body => {
      console.log(body);
    }).catch(error => {
      console.log(error);
    });
  });
});
