"use strict";
const textSegmentation = require('./text_segmentation/index.js');
const addLineBreakBetweenSentences = require('./line_break_between_sentences/index.js');
const foldWords = require('./fold/index.js');
const divideIntoTwoLines = require('./divide_into_two_lines/index.js');

function prepText(config,cb){
	// - 1.Text Segmentation -
	var segmentedText = textSegmentation(config.punctuationTextContent);
	// - 2.Line brek between stences
	var textWithLineBreakBetweenSentences = addLineBreakBetweenSentences(segmentedText);
	// - 3.Fold char limit per line -
	var foldedText = foldWords(textWithLineBreakBetweenSentences, config.numberOfCharPerLine);
	// - 4.Divide into two lines 
	var textDividedIntoTwoLines = divideIntoTwoLines(foldedText);

	if(cb){
		cb(textDividedIntoTwoLines);
	}else{
		return textDividedIntoTwoLines;
	}
}

module.exports = prepText;