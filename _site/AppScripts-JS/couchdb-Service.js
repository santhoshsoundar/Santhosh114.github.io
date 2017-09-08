// This is Service module built to made a DB connection 

'use strict';

const Promise = require('bluebird');
const cookie = require('cookie');
const nano = require('nano-blue');

// Implementing couchdb service
const service = () => {
  // Define connection function for service
  const createConnection = function createConnection(dbconfig) {
    // Return promise of a authenticated connection
    return nano(dbconfig.url)
      .auth(dbconfig.username, dbconfig.password).spread((authBody, authHeader) => {
        // Check if couchdb allow cookie authentification
        if (authHeader && authHeader['set-cookie']) {
          // Define insert wrapper around nano-blue insert function
          const insert = function insert(origdoc, backup) {
            // Basic counters
            let iternum = 0;
            const bknum = typeof backup !== 'undefined' ? backup : 5;
            // Set document metadate
            const doc = origdoc;
            if (!('timestamp' in origdoc)) {
              doc.timestamp = Date().toString();
            }
            const authSession = cookie.parse(authHeader['set-cookie'].toString()).AuthSession;
            // Return a promise of insert a document with backup
            const db = nano({
              url: dbconfig.url,
              cookie: `AuthSession=${authSession}`,
            });
            // Return a promise with original doc rev
            return db.get(doc._id).spread((docBody, docHeader) => {
              iternum = docBody.iternum;
              const rev = docHeader.etag.substring(1, docHeader.etag.length - 1);
              if ((iternum + 1) % bknum === 0) {
                // Return a promise with backup doc rev
                return db.head(doc._id.concat('Backup')).then(() =>
                  // Return a promise of copy of original doc by ovewriting backup
                  db.copy(
                    doc._id, doc._id.concat('Backup'), { overwrite: true }
                  ).then(() => rev)
                ).catch(error => {
                  if (error.statusCode === 404) {
                    // Return a promise of copy of original doc
                    return db.copy(
                      doc._id, doc._id.concat('Backup')
                    ).then(() => rev);
                  }
                  throw error;
                });
              }
              return rev;
            // Return a promise of update original document
            }).then(rev => {
              const newdoc = doc;
              newdoc._rev = rev;
              newdoc.iternum = iternum + 1;
              return db.insert(newdoc);
            // Return a promise of insert document
            }).catch((error) => {
              if (error.statusCode === 404) {
                const newdoc = doc;
                newdoc.iternum = 1;
                return db.insert(doc);
              }
              throw error;
            });
          };

          // Define insert wrapper around nano-blue get function
          const get = function get(doc) {
            const authSession = cookie.parse(authHeader['set-cookie'].toString()).AuthSession;
            // Return a promise of insert a document with backup
            const db = nano({
              url: dbconfig.url,
              cookie: `AuthSession=${authSession}`,
            });
            // Return a promise with original doc rev
            return db.get(doc);
          };

          const view = function view(designname, showname, params) {
            const authSession = cookie.parse(authHeader['set-cookie'].toString()).AuthSession;
            // Return a promise of insert a document with backup
            const db = nano({
              url: dbconfig.url,
              cookie: `AuthSession=${authSession}`,
            });
            // Return a promise with original doc rev
            return db.view(designname, showname, params);
          };

          // Return object with redifine insert and get function
          return {
            insert: insert,
            get: get,
            view: view
          };
        }
        return Promise.reject('Cannot use couchdb cookie authentification.');
      });
  };
  // Return service function
  return {
    createConnection,
  };
};

module.exports = service();
