"use strict";
const fs = require('fs');
const prepText =require("./aeneas_subtitles_lines_prep_script.js");
const runAeneasComand = require('./aeneas_node/index.js');
// - 0.Punctuation 


//TODO: define config vars for this function, 
//tmp folder etc..
function subtitleComposer(config, cb){

	
	

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

module.exports = subtitleComposer;











// console.log(result);