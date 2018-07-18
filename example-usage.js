"use strict";
const fs = require('fs');
const subtitleComposer = require('./index.js');
var punctuationTextFile = './sample_data/Mogensen/Mogensen-raw.txt';
var punctuationTextContent = fs.readFileSync(punctuationTextFile).toString();
var captionFileFormat = "srt";

subtitleComposer({
    punctuationTextContent: punctuationTextContent,
    numberOfCharPerLine: 35,
    // where to save intermediate segmented text file needed for aeneas module 
    segmentedTextInput: './tmp/segmentedtext.tmp.txt',
    //audio or video file to use for aeneas alignement as original source 
    mediaFile: './sample_data/Mogensen/Mogensen.mp3',
    outputCaptionFile: "./tmp/Mogensen."+captionFileFormat,
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