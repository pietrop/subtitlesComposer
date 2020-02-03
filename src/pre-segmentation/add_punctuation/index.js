// word in progress
function punctuatorPostRequest(content, cb){
	var tmpPunctuationFile =sourceVideoPath+".punctuation.txt";  //"~/Desktop/textTEST.txt"
	var comand = `curl -d "text=${content}" http://bark.phon.ioc.ee/punctuator > ${tmpPunctuationFile}`
	exec(comand, function(error, stdout, stderr) {
		var resultTextWithPunctuation = openFile(tmpPunctuationFile);
		if(cb){cb(resultTextWithPunctuation)}
	   	console.log('stdout punctuatorPostRequest: ' + stdout);
	    console.log('stderr punctuatorPostRequest: ' + stderr);
	    if (error !== null) {
	        console.log('exec error: ' + error);
	    }
	});

}