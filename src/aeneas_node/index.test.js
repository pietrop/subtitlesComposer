"use strict";
const fs = require('fs');
var runAeneasComand = require('./index.js');

var sourceVideoPathSample = './data/Andrea_Ginzburg.webm';
var segmentedTextInputSample = './data/Andrea_Ginzburg.webm.segmented.txt';

var captionFileFormat = "srt";
var outputCaptionFileSampleOutput ="./examples/Mcewan"+"."+captionFileFormat;

var config={
	language: 'ita', 
	captionFileFormat : "srt",//'json',
	audio_file_head_length : 0,//eg 12.000
	audio_file_tail_length : 0, //16.000
 	mediaFile : sourceVideoPathSample,
 	segmentedTextInput : segmentedTextInputSample,
 	outputCaptionFile: outputCaptionFileSampleOutput
};


runAeneasComand(config, function(srtFilePath){
	// var result = fs.readFileSync(srtFilePath,'utf8').toString('utf8');	
	// console.log(result);
	console.log(srtFilePath);
});
