#!/usr/bin/env nodejs

var fs = require('fs'),
    binary = fs.readFileSync('012345.002.050.dcm');
var dicomParser = require('./dist/dicomParser');

//process.stdout.write(binary.slice(0, 48));
var dataSet = dicomParser.parseDicom(binary);
var options = {
	omitPrivateAttibutes :false ,
	maxElementLength: 128
};
var instance = dicomParser.explicitDataSetToJS(dataSet, options);
var json = JSON.stringify(instance, undefined, 2);
process.stdout.write(json);
