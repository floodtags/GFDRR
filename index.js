'use strict';

// Dependencies
var Enrichment = require(__dirname + '/enrichment'),
    fs = require('fs'),
    ini = require('ini'),
    QPromise = require('promise');

// Global variables
var config = ini.parse(fs.readFileSync(__dirname + '/config.ini', 'utf8'));
var parsed = [];

// First some general checks to verify config file
if (!config.hasOwnProperty('nodejs') && !config.nodejs.hasOwnProperty('data')) {
   throw new Error('No data path found in config file');
}
if (!fs.existsSync(config.nodejs.data)) {
   throw new Error('No data file found at give destination');
}

// Second, read and parse config file
var data = fs.readFileSync(config.nodejs.data, 'utf8').split('\n');
data.forEach(function (line) {
   if (!line.length) return;
   var tweet;
   try {
      tweet = JSON.parse(line);
   } catch (e) {
      throw new Error('Could not parse given datafile');
   }
   parsed.push(tweet);
});

/**
 * This function iterates recursively over all the tweets and enriches them one
 * by one.
 * @param array tweets An array of all the tweets in the data file.
 */
function enrich (tweets) {
   // First check to see if you're done.
   if (!tweets.length) {
      console.log('Enriched everything!');
      return;
   }

   var toEnrich = tweets.shift();      // Second, take one tweet from the pile...
   var e = new Enrichment(toEnrich);   // ...Feed it to the enrichment...
   e.run().done(function (response) {  // ...And call the run process.
      console.log('Succesfully enriched #' + (parsed.length - tweets.length) + ', result:', JSON.stringify(response.enrichment()));
      enrich(tweets);
   });
}

enrich(parsed.slice(0));
