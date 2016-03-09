# GFDRR - python

This is the python branch of the GFDRR project. This branch contains 4 other
files:
- .jshintrc
- package.json
- enrichment.js
- enrichment.py

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
