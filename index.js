"use strict";
const fs = require('fs');
const prepText =require("./aeneas_subtitles_lines_prep_script.js");
const runAeneasComand = require('./aeneas_node/index.js');
// - 0.Punctuation 


//TODO: define config vars for this function, 
//tmp folder etc..
function subtitlesComposer(config, cb){


	prepText(config, function(text){
		fs.writeFileSync(config.segmentedTextInput, text);
		// - 5.Aeneas `-->` subtitl file -
		

		runAeneasComand(config, function(srtFilePath){
			// var result = fs.readFileSync(srtFilePath,'utf8').toString('utf8');	
			// console.log(result);
			if(cb){cb(srtFilePath)}else{return srtFilePath};
			// console.log(srtFilePath);
		});
	});
}

module.exports = subtitlesComposer;


//////////////////
// var punctuationTextFile = './sample_data/Andrea_Ginzburg.webm_no-punctuation.txt';
// var punctuationTextContent = fs.readFileSync(punctuationTextFile).toString();

// var captionFileFormat = "srt";

// subtitleComposer({
// 	punctuationTextContent: punctuationTextContent,
// 	numberOfCharPerLine: 35,
// 	// where to save intermediate segmented text file needed for aeneas module 
// 	segmentedTextInput: './tmp/segmentedtext.tmp.txt',
// 	//audio or video file to use for aeneas alignement as original source 
// 	mediaFile: './sample_data/Andrea_Ginzburg.webm',
// 	outputCaptionFile: "./tmp/Andrea_Ginzburg."+captionFileFormat,
// 	audio_file_tail_length: 0,
// 	audio_file_head_length : 0,
// 	captionFileFormat : captionFileFormat,
// 	language: 'ita'

// 	}, 
// 	function(filePath){
// 		console.log('filePath', filePath);
// 		var result = fs.readFileSync(filePath).toString();
// 		console.log(result)
		
// });


