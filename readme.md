#riot-expers
####Experiments with riot.js
###branch basic
Contains basic input and output examples<br/>
run `riot -w ./tags .tags/allTags.js` to compile all the tag files in ./tags into one js file called .tags/allTags.js whenever a tag file is added or changed.
###branch observables
###branch routing
###branch withwebpack
Writing your JavaScript in external files and combining to one bundle.js file. Also includes babel for using es6. To use typescript compile the typescript and then run the webpack. So the following build steps apply:</br>
```
tsc
webpack
```
The have something like http-server run in the background to refresh for changes.