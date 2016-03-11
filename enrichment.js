'use strict';

// Dependencies
var rpc      = require('node-json-rpc'),
    exec     = require('child_process').exec,
    QPromise = require('promise'),
    fs       = require('fs');

// Global variables
var port = 2103;
var options = {
  port: port,
  host: '127.0.0.1',
  path: '/jsonrpc',
  strict: true
};

var client = new rpc.Client(options);
var version = JSON.parse(fs.readFileSync(__dirname + '/package.json', 'utf8')).version;
var toReplace = [/…/g, /([^\u0000-\u007F]|[\uE000-\uFFFF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g];


/**
 * Constructor function.
 * @param Object tweet A raw tweet object from Twitter that needs to be enriched.
 * @param string id The identifier for the filter source.
 *
 * This function is mandatory!
 */
function ClassifierWrapper (tweet, options) {
   if (!(this instanceof ClassifierWrapper)) { return new ClassifierWrapper(tweet, options); }
   this._text = tweet.text;
   this._options = options;
   this._classes = [];
}

/**
 * A function to run the enrichment. This way the enrichment can run
 *    asynchronously.
 * @return Promise A promise wrapper for the enrichment.
 *
 * This function is mandatory!
 */
ClassifierWrapper.prototype.run = function () {
   var self = this;
   return new QPromise(function (resolve, reject) {
      var text = self._text;
      toReplace.forEach(function (patt) {
         text = text.replace(patt, ' ');
      });
      client.call(
         {jsonrpc: '2.0', method: 'classify', params: [text], id: 0},
         function (err, response) {
            if (err) reject(err);
            else {
               self._classes.push(response.result);
               resolve(self);
            }
         }
      );
   });
};

/**
 * This method tells you in which class the source tweet is.
 * @return string The identifier of the class.
 */
ClassifierWrapper.prototype.classes = function () {
   return this._classes;
};

/**
 * This method is used to make an enrichment object.
 * @return Object The enrichment object.
 *
 * This function is mandatory!
 */
ClassifierWrapper.prototype.enrichment = function () {
   return this.classes();
};

ClassifierWrapper.type         = ClassifierWrapper.prototype.type         = 'classes';                                   // MANDATORY! The identifier of this enrichment
// ClassifierWrapper.dependencies = ClassifierWrapper.prototype.dependencies = ['locations'];                               // Optional. An array to indicate all the dependencies of this enrichment
ClassifierWrapper.mapping      = ClassifierWrapper.prototype.mapping      = {type: 'string', index: 'not_analyzed'};     // MANDATORY! The elastic search mapping of this enrichment

module.exports = exports = ClassifierWrapper;      // MANDATORY!
