# `subtitlesComposer`

Node module that given a media file (audio or video) and corresponding plain texttranscription without timecodes, realign the texts and produces a subtitle file, eg `srt`. 

## Components

The module is broken down into discrete components for the various stages of prepping the text for the Aeneas input. 
This is to make it easier to write automated tests for each, as well as for reusability in case use case requiring similar building blocks might come up in the future. Also last but not least if a more effective way to achive one of the reuslts come up it should make it eaiser to refactor the internal workings. 


The components prep the text in order to use the "Aeneas `subtitles`" "format" when providing text to the aeneas aligner. This consists of two lines of text separated by one line break, to increasea alignement accuracy of the aeneas tool. It then calls aeneas through a node wrapper and return the path to the caption file.


## Setup 

## Depencencies
You'd need to have Aeneas and related dependencies installed on your system. Luckily there's a [`aeneas-installer`](https://github.com/sillsdev/aeneas-installer) (see [`releases` section](https://github.com/sillsdev/aeneas-installer/releases), and [here for linux version](https://github.com/sillsdev/aeneas-installer/issues/30)) 


## Install

```
npm install
```


## Usage

```js
const subtitlesComposer = require('./index.js');
var punctuationTextFile = './sample_data/Andrea_Ginzburg.webm_no-punctuation.txt';
var punctuationTextContent = fs.readFileSync(punctuationTextFile).toString();
var captionFileFormat = "srt";

subtitlesComposer({
	punctuationTextContent: punctuationTextContent,
	// the number of character per srt subtitle file line.
	numberOfCharPerLine: 35,
	// where to save intermediate segmented text file needed for aeneas module 
	segmentedTextInput: './tmp/segmentedtext.tmp.txt',
	//audio or video file to use for aeneas alignement as original source 
	mediaFile: './sample_data/Andrea_Ginzburg.webm',
	outputCaptionFile: "./tmp/Andrea_Ginzburg."+captionFileFormat,
	audio_file_tail_length: 0,
	audio_file_head_length : 0,
	captionFileFormat : captionFileFormat,
	language: 'ita'

	}, 
	function(filePath){
		console.log('filePath', filePath);
		var result = fs.readFileSync(filePath).toString();
		console.log(result)
		
});

```

### Example input

Input could be with our without punctuation. Eg if text is from automatically generates speech to text system it might be likely to be without punctuation.
As example below. 

```
buonasera a questo incontro con il professore avrai leasing che ringraziano di essere non è di aver accettato dallo stupido per questa riflessione e stiamo cercando di costruire scritti sui temi che che riguardano la nostra situazione socio economica

...
```

However if the input text is provided with punctuation, that is taken into account when generating the caption file.


### Example output 

Example `srt` subtitle/caption file output. See [Aeneas documentation for a comprehensive list of supported file formats](https://github.com/readbeyond/aeneas#supported-features) (`AUD, CSV, EAF, JSON, SMIL, SRT, SSV, SUB, TEXTGRID, TSV, TTML, TXT, VTT, XML`).


```
1
00:00:00,000 --> 00:00:07,440
buonasera a questo incontro con il
professore avrai leasing che

2
00:00:07,440 --> 00:00:12,560
ringraziano di essere non è di
aver accettato dallo stupido per

3
00:00:12,560 --> 00:00:18,720
questa riflessione e stiamo
cercando di costruire scritti sui

4
00:00:18,720 --> 00:00:26,480
temi che che riguardano la nostra
situazione socio economica

...
```

# System overview

See [steps](./steps.md) for a comprehensive overview of the various stages of input / output of the varios parts of the system. 


## Background 

From [Joseph Polizzotto](https://github.com/polizoto) initial bash scripts:

- [`auto_captions_dl`](https://github.com/polizoto/auto_captions_dl)
- [`auto_captions_dl_pc`](https://github.com/polizoto/auto_captions_dl_pc)
- [`align_transcript`](https://github.com/polizoto/align_transcript)
- [`segment_transcript_pc`](https://github.com/polizoto/segment_transcript_pc)


[Joseph](https://github.com/polizoto) presented these [at textAV as a captioning workflow](https://pietropassarelli.gitbooks.io/textav/remote-presentations/captioning-workflow.html), [with a clear list of requirements](https://pietropassarelli.gitbooks.io/textav/remote-presentations/captioning-workflow/needs-for-captioning-tool.html) and then was [re-visited as one of the projects of the textAV unconference](https://pietropassarelli.gitbooks.io/textav/unconference-projects/captioning-workflow-system.html), exploring possibility for UI/UX user experience to make tool more user friendly. [See captioning app technical demo I made after the event](http://pietropassarelli.com/captioning-app.html). Also relevant the [textAV - Captioning workflow app R&D doc](https://docs.google.com/document/d/1yrPSgLnGW4mWBXCHAxR0STzm--lpV_6nglcqhM8EkDc/edit#heading=h.jc3as3upygx6).

# Alternatives

[Joseph Polizzotto](https://github.com/polizoto): 
>BTW this method is a greedy segmentation method and is NOT ideal. It will eventually be improved by what AP is working on with Lachesis (https://github.com/readbeyond/lachesis ).

>Nevertheless, it is improvement and does at least do two things: 1) keep chunks to around ~35 characters per line and 2) chunks sentences separately

About lachesis:
>lachesis automates the segmentation of a transcript into closed captions

Using machine leaning. Altho currenlty not production ready. 

# User interface

At the moment for UX/UI you can use the free software [`closedcaptioncreator`](http://www.closedcaptioncreator.com/) if you need to adjust the captions/subtitles generated with this tools.


# Todo

- [X] README for each component 
- [ ] Create repo for individual components and publish separatly to npm.
- [ ] See if there is a way to package Aeneas dependencies without requiring system wide installation 
- [ ] See if there's a way to deal with punctuation library, eg punctuator, installing locally as self contained package, without relying on the API end point, eg for offline use.


# Contributors

Fee free to raise an issue or getting touch should you have any questions. Pull request welcome.

- [Pietro](http://twitter.com/pietropassarell)