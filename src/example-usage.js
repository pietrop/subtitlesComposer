"use strict";
const fs = require('fs');
const subtitleComposer = require('./index.js');
// var punctuationTextFile = './sample_data/Mogensen/Mogensen-raw.txt';
// const punctuationTextFile = './sample_data/soleio/Soleio_Cuervo-no_punctuation.txt';
// const punctuationTextFile = './sample_data/soleio/Soleio_Cuervo.txt';
const punctuationTextFile = './sample_data/1min/1530_TIPS_020620.txt';

var punctuationTextContent = fs.readFileSync(punctuationTextFile).toString();
var captionFileFormat = "srt";


// const demoMedia = './sample_data/The\ Facebook\ Dilemma\ -\ Soleio\ Cuervo-OIAUfZBd_7w.mp4'
const demoMedia = './sample_data/1min/1530_TIPS_020620.mp4';

subtitleComposer({
    punctuationTextContent: punctuationTextContent,
    numberOfCharPerLine: 37,
    // where to save intermediate segmented text file needed for aeneas module 
    segmentedTextInput: __dirname+'/tmp/segmentedtext.tmp.txt',
    //audio or video file to use for aeneas alignement as original source 
    mediaFile: demoMedia,
    outputCaptionFile: __dirname+"/tmp/output."+captionFileFormat,
    audio_file_tail_length: 0,
    audio_file_head_length : 0,
    captionFileFormat : captionFileFormat,
    language: 'ita',
    optionalPathToAeneasBinary: ''
    }, 
    function(filePath){
        console.log('filePath', filePath);
        var result = fs.readFileSync(filePath).toString();
        // console.log(result)
        //check content of file match expected content of composed srt file
        // expect(result).toEqual(expectedOutput);
});