"use strict";

/*
* text string of words 
* foldNumber = char after which to fold. eg 35 char.
*/
function foldWords(text,foldNumberInput){
  /*
  * Helper function 
  * folds array of words 
  * adds `\n`
  * foldNumber = char after which to fold. eg 35 char.
  */
  function foldWordsReturnArray(textArray,foldNumber){
   	 var counter = 0;
    	var result = textArray.map((word, index, list)=>{
      counter += word.length+1;
        //resetting counter when there is a 'paragraph' line break \n\n
      if(counter <= foldNumber){
        // if not last word in list 
        //cover edge case last element in array does not have a next element
        if(list[index+1] !== undefined){
        	var nextElementLength = list[index+1].length;
          //check if adding next word would make the line go over the char limit foldNumber
          if((counter+nextElementLength) < foldNumber){
            return word;
          }else{
          // if it makes it go over, reset counter, return and add line break
            counter = 0;
            return `${word}\n`;
          }
        //last word in the list 
        }else{
          return word;
        }
  		// if not greater then char foldNumber 
      }else{
        //console.log(word, counter)
        counter = 0;
        return `${word}\n`;
        //console.log(counter);
      }
    });

    return result;

  }
  ////////////////////////////////////////////////////
  var lineArr = text.split("\n\n");

  var res = lineArr.map((line)=>{
  	return foldWordsReturnArray(line.split(" "), foldNumberInput);
  });


  var result = res.map((line)=>{
    var lastWord = line[line.length-1];
    if(lastWord.includes('\n')){
      console.log(lastWord);
    }
  	return line.join(' ');
  });

  // remove \n from last element of line if present.
  /* console.log(result) */

  return result.join("\n\n");
}

module.exports = foldWords;
 // document.getElementById("demo").innerHTML = result.join("\n\n");