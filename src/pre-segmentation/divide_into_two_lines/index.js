"use strict";

function divideIntoTwoLines(text){
	var lines = text.split("\n");

	var counter = 0;

	var result = lines.map((l)=>{
		if(l === ""){
			return l;
		}else{
			if(counter ===0){
				counter+=1;
				if(l[l.length -1][0] ==='.'){
					return l +"\n\n";
				}
				return l +"\n";
			}else if(counter ===1){
				counter =0;
				return l +"\n\n";
			}
		}
	});
	return result.join(" ").trim();
}

module.exports = divideIntoTwoLines;