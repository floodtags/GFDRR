# GFDRR - python

This is the python branch of the GFDRR project. This branch contains 4 other
files:
- .jshintrc
- package.json
- config.ini
- data
- index.js
- enrichment.js
- enrichment.py
To be able to use this, the python part of the enrichment has to run as a
background process before you can make calls via the enrichment. Make sure you
start the python script with the correct port number as a parameter.

## .jshintrc
This is a config file for the JShint linter for JavaScript. When developing in
JavaScript, please follow the lint rules of this config file.

## package.json
This is a NodeJS config file that tells you something about this project. Also
listed here are all the node dependencies that are required to run the
JavaScript code. To resolve dependencies, use the command
```
$ npm install
```

## config.ini
A general config file that contains some client specific variables.

## data
A sample dataset. Can be replaced by your own, make sure that you change the
path in the config file when you want to change the data.

## index.js
This is in the script that simulates the pipeline. This script reads tweets from
a file and feeds them one by one to the enrichment. To run this, just called
```
$ node path-to-this-project
```

## enrichment.js
This is the driver file that can communicate with the Floodtags pipeline and a
enrichment script written in an other language than JavaScript. It is important
that this script contains a Constructor method as well as a method called `run`
and a method called `enrichment`. Besides these methods, the resulting object
should also contain the variables `type` and `mapping` (for more information
about mapping, please contact Floodtags).

## enrichment.py
This is an example python script that can communicate with the JavaScript driver
and enriches an incoming tweet.
