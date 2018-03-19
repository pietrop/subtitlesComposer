// https://jsfiddle.net/cL3kuxum/9/
// https://jsfiddle.net/36nmceu1/16/
// https://jsfiddle.net/6nsyqzen/12/
// TODO: refactor into module var text = `Hi there, my name is Ian police - are recording this video to talk about mercury for the folks at a tech daily conference in New York.

var text = `Hi there, my name is Ian police - are recording this video to talk about mercury for the folks at a tech daily conference in New York.

Sorry, I can't be there in person, so we are building a prototype funded in part by Google DNI of a web-based computer, assisted transcription and translation tool with some video editing features.

It does speech to text and then automated consistent translation and then text to speech generate synthetic voices at time codes that line up with the original original audio.`
/*
* folds array of words 
* adds `\n`
* foldNumber = char after which to fold. eg 35 char.
*/
function foldWords(textArray,foldNumber){
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
  })

  return result;

}
//////////////////////////
var lineArr = text.split("\n\n");

var res = lineArr.map((line)=>{
	return foldWords(line.split(" "), 35)
})

console.log(res)


var result = res.map((line)=>{
  var lastWord = line[line.length-1];
  if(lastWord.includes('\n')){
    console.log(lastWord);
  }
	return line.join(' ')
})

// remove \n from last element of line if present.
/* console.log(result) */

 document.getElementById("demo").innerHTML = result.join("\n\n");