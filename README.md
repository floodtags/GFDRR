# GFDRR

This is a repository that binds together all source code specifically made
within the GFDRR Challenge fund project. More information on the technical
details can be found at

This README contains:

1. Outlines of the project
2. Available branches
3. How to get started
4. Code and naming conventions


## Outlines of the project
Citizens and communities in Philippines and Indonesia are affected by floods
each year. For 2014 alone, the Philippines Red Cross registered 21 floods in 80
different areas in their country. Indonesia is comparably bad. To respond to the
floods effectively, disaster managers need to know what is happening on-the-
ground and how the people are affected.
The hopeful development is that people on-the-ground increasingly share their
observations and their needs through digital media, in large numbers. Flood
events are often described by hundreds of thousands of documents per day.
However, the content contains a lot of noise, uncertainties and important
information is sometimes hidden in only a few text lines. This makes social
media as a data source difficult to be used in highly organized response
operations.
What we will do in this project, is translate unstructured Twitter data into
actionable data for first responders. This means 1. real-time analyzing and
combining the Twitter data with other relevant (water) information and 2. send
the results as data service to the systems of the national societies of the Red
Cross in the Philippines and Indonesia.


## Available branches
The available branches in this repository are:
- master
- python

### master
This is the main branch that contains only documentation of this repository.

### python
This is an example of how python can be integrated into the software of
Floodtags.


## How to get started
When you want to create an enrichment and decided you want to use the examples
here as a format, you can follow these guidelines to help you get started:
1. Log in to Github with your own account
2. Go to the repo page: https://github.com/floodtags/GFDRR
3. Click on the button "Fork" in the upper right corner
4. Clone the repo to your development environment
5. Create your own branch, based on the branch you'd like to use. Details about
   naming conventions will be discussed later in this README

Now you can already start developing!


## Code and naming conventions

Rules:
- Please use a linter to check your code! Linter config files are included in
  the config folder in the main branch. If there is no config file available
  for the programming language that you're using, please contact Floodtags.
- Do not use spaces in folder and file names, use hyphens instead.
- Make sure your git commit messages make sense so that everybody can see what
  kind of cool stuff you made. More information on this can be found in this
  blog post: http://chris.beams.io/posts/git-commit/
- Branch names have to start with original branch name, followed by a hyphen and
  then the name of the enrichment you are working on.

### Linter config files
- .jshintrc: a config file for JavaScript, using the JShint package.
