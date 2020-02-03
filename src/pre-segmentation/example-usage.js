const fs = require("fs");
const prepText = require("./aeneas_subtitles_lines_prep_script.js");
// const punctuationTextContentFilePath = './sample_data/soleio/Soleio_Cuervo.txt';
const punctuationTextContentFilePath = './sample_data/1min/1530_TIPS_020620.txt';
const punctuationTextFile = fs.readFileSync(punctuationTextContentFilePath).toString();
const numberOfCharPerLine = 37;

prepText({
    punctuationTextContent: punctuationTextFile,
    numberOfCharPerLine: numberOfCharPerLine
    }, 
    function(text){
        console.log(text)
    })