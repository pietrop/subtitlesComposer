const path = require('path');
const exec = require('child_process').exec;
const fs = require('fs');

var sourceVideoPath ='./data/2017_07_19_11_26_13-Cd56vF3lZ_Q.mp4';
var outputCaptionFile ='./examples/Mcewan.srt';
var outPutSegmentedFile = './data/Ian_segmented.txt';//'./data/2017_07_19_11_26_13-Cd56vF3lZ_Q.mp4.punctuation.txt';

var dataPath='./examples';
var appPath = './examples';

var config={
	language: 'eng', 
	captionFileFormat : "srt",//'json',
	audio_file_head_length : 0,//eg 12.000
	audio_file_tail_length : 0, //16.000
 	mediaFile : sourceVideoPath,
 	outPutSegmentedFile : outPutSegmentedFile,
	textFile : outPutSegmentedFile
};

function runAeneasComand(config,cb){
	var mediaFile = config.mediaFile;
	var textFile = config.textFile;
	var language = config.language;
	var captionFileFormat = config.captionFileFormat;
	var audio_file_head_length = config.audio_file_head_length;//eg 12.000
	var audio_file_tail_length = config.audio_file_tail_length; //16.000
	// var tmpTextFileName = dataPath +"/"+ fileName;
	var fileName = path.basename(mediaFile);
	var outputCaptionFile = dataPath+"/"+fileName+"."+captionFileFormat;
	// console.log(JSON.stringify(config,null,2));
	var outPutSegmentedFile = config.outPutSegmentedFile;
	console.log("Aeneas outPutSegmentedFile",outPutSegmentedFile);
	///usr/local/bin/aeneas_execute_task///usr/local/bin/aeneas_execute_task  //python -m aeneas.tools.execute_task 
	var aeneasComandString = `/usr/local/bin/aeneas_execute_task "${mediaFile}" "${outPutSegmentedFile}" "task_language=${language}|os_task_file_format=${captionFileFormat}|is_text_type=subtitles|is_audio_file_head_length=${audio_file_head_length}|is_audio_file_tail_length=${audio_file_tail_length}|task_adjust_boundary_nonspeech_min=1.000|task_adjust_boundary_nonspeech_string=REMOVE|task_adjust_boundary_algorithm=percent|task_adjust_boundary_percent_value=75|is_text_file_ignore_regex=[*]" ${outputCaptionFile}`;
	// var productionEnv = Object.create(process.env);
	console.info("aeneasComandString", aeneasComandString);
	var aeneasPath = "/usr/local/bin/aeneas_execute_task";
	var ffmpegPath = "/usr/local/bin/ffmpeg";
	var ffprobePath = "/usr/local/bin/ffprobe";
	var espeakPath = "/usr/local/bin/espeak";
	var envVar =   {'ffmpeg': ffmpegPath , 'ffprobe': ffprobePath, 'espeak':espeakPath, 'aeneas_execute_task': aeneasPath};
	var options ={env: envVar, cwd: appPath, PYTHONIOENCODING: 'UTF-8'}
	exec(aeneasComandString, function(error, stdout, stderr) {
	    console.log('stdout runAeneasComand: ' + stdout);
	    console.log('stderr runAeneasComand: ' + stderr);
	    if(cb){cb(outputCaptionFile)};
	    if (error !== null) {
	        console.log('exec error: ' + error);
	    }
	});
}


// init()
runAeneasComand(config, function(srtFilePath){
	// var result = fs.readFileSync(srtFilePath,'utf8').toString('utf8');	
	console.log(srtFilePath)
});

 