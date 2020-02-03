"use strict";
const foldWords = require('./index.js');

const sampleText = `Walmart is doing this VR or virtual reality assessment for all its workers in a new management structure rolling out to hundreds of stores right now, so you put on the Oculus headset the same thing you would use to like play a video game and you get a training about how to use a new online pickup tower in the store, something like that, but separately in a little bit more cutting edge perhaps is they're also assessing their workers where they're really saying, Hey, where is your attention? Like how fast are you scanning a wall and seeing what is out of stack or answer these questions about what you would do in this scenario where the customer is really upset, they're doing VR assessments to decide who gets a promotion within this new structure and higher pay and who doesn't. Walmart executives say they're going to use virtual reality assessment as a potential tool and that they hope that it reduces bias in the process of hiring new workers and so that their workforce, especially the upper management ranks in a store, will become more diverse and that they can reduce turnover because they'll pick folks who are right for this job in a really tight labor market. A VR assessment is a lot like an in person interview. You prepare by figuring out what the questions might be, what the company might want from you. I spoke with a lot of workers. One thing they found really helpful was talking to other workers who had already taken these assessments because they can kind of compare notes and I think a lot of workers found that helpful because of course this is brand new for most of them.`;


// const expectedOutput = `Hi there, my name is Ian police -
//  are recording this video to talk
//  about mercury for the folks at a
//  tech daily conference in New York.

// Sorry, I can't be there in person,
//  so we are building a prototype
//  funded in part by Google DNI of a
//  web-based computer, assisted
//  transcription and translation tool
//  with some video editing features.

// It does speech to text and then
//  automated consistent translation
//  and then text to speech generate
//  synthetic voices at time codes
//  that line up with the original
//  original audio.`;

const result = foldWords(sampleText, 38);
console.log(result)

// check length of sentences

const resultList = result.split('\n')

// console.log(resultList)

resultList.forEach((line) => {
    if (line.length >= 38){
        console.log('is greater then 38')
        console.log(line.trim().length,line.length)
    } 
});