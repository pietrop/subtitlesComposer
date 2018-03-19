# `subtitleComposer`

Node module that given audio or video media source and corresponding  plain texttranscription without timecodes, realign the texts and produces a subtitle file, eg `srt`.  


<!-- https://github.com/readbeyond/lachesis -->


## components


### ~ 1.Text Segmentation 

<!-- https://docs.google.com/document/d/1yrPSgLnGW4mWBXCHAxR0STzm--lpV_6nglcqhM8EkDc/edit#heading=h.jc3as3upygx6 -->



<!-- See module readme for more details -->

#### Input

Plain text, **with punctuation** all on one line 

```
Hi there, my name is Ian police - are recording this video to talk about mercury for the folks at a tech daily conference in New York. Sorry, I can't be there in person, so we are building a prototype funded in part by Google DNI of a web-based computer, assisted transcription and translation tool with some video editing features. It does speech to text and then automated consistent translation and then text to speech generate synthetic voices at time codes that line up with the original original audio.
```

#### Out 

Puts each sentence that ends with full stop on new line. `\n`.

```
Hi there, my name is Ian police - are recording this video to talk about mercury for the folks at a tech daily conference in New York.
Sorry, I can't be there in person, so we are building a prototype funded in part by Google DNI of a web-based computer, assisted transcription and translation tool with some video editing features.
It does speech to text and then automated consistent translation and then text to speech generate synthetic voices at time codes that line up with the original original audio.
```

#### algo 

[Joseph Polizzotto's perl script identify sentence boundaries sentence-boundary.pl ](https://github.com/polizoto/segment_transcript/blob/master/sentence-boundary.pl)

```perl
# segment transcript into sentences
perl sentence-boundary.pl -d HONORIFICS -i "$f" -o test.txt
```

---

### ~  2.Line brek between stences

<!-- See module readme for more details -->
separates each line (a sentence) with an empty line.
<!-- Adds a line break `\n\n` in between in each stence.  -->

#### Input
is output of previous section 

#### Output

```
Hi there, my name is Ian police - are recording this video to talk about mercury for the folks at a tech daily conference in New York.

Sorry, I can't be there in person, so we are building a prototype funded in part by Google DNI of a web-based computer, assisted transcription and translation tool with some video editing features.

It does speech to text and then automated consistent translation and then text to speech generate synthetic voices at time codes that line up with the original original audio.
```

#### algo 

```bash
# Add blank line after every new line
sed -e 'G' test.txt > test2.txt
```

Equivalent to 

```js
test.replace(/\n/g,"\n\n")
```

---

### ~  3.Fold char limit per line

folds each line at char limit. eg 35 char. 

he 2nd line (pictured) takes each of sentences (now separated by an empty line) and places a new line mark at the end of the word that exceeds > 35 characters (if the sentence exceeds that number)

#### Input
is output of previous section 

#### Output

```

Hi there, my name is Ian police -
are recording this video to talk
about mercury for the folks at a
tech daily conference in New York.

Sorry, I can’t be there in person,
so we are building a prototype
funded in part by Google DNI of a
web-based computer, assisted
transcription and translation tool
with some video editing features.

It does speech to text and then
automated consistent translation
and then text to speech generate
synthetic voices at time codes that
line up with the original original
audio.
```

#### algo

```bash
# Break each line at 35 characters
fold -w 35 -s test2.txt > test3.txt
```


<!-- See module readme for more details -->

---

### ~  4.Divide into two lines

Take these new chunks and separate them further so that there are no more than two consecutive lines before an empty line.

Creating block of text, with one or two consecutive lines.

Groups “paragraphs” by `\n`.

Of “paragraphs” if they are more then 1 line. 	
break/add line break  `\n` every two or more line breaks.


#### Input
is output of previous section 

#### output

```
Hi there, my name is Ian police -
are recording this video to talk

about mercury for the folks at a
tech daily conference in New York.

Sorry, I can’t be there in person,
so we are building a prototype

funded in part by Google DNI of a
web-based computer, assisted

transcription and translation tool
with some video editing features.

It does speech to text and then
automated consistent translation

and then text to speech generate
synthetic voices at time codes that

line up with the original original
audio.
```

#### algo
```perl
# Insert new line for every two lines, preserving paragraphs
perl -00 -ple 's/.*\n.*\n/$&\n/mg' test3.txt > "$f"
```


---

### Notes

Joseph Polizzotto
>BTW this method is a greedy segmentation method and is NOT ideal. It will eventually be improved by what AP is working on with Lachesis (https://github.com/readbeyond/lachesis ).

>Nevertheless, it is improvement and does at least do two things: 1) keep chunks to around ~35 characters per line and 2) chunks sentences separately



---

### ~  5.Aeneas Node

<!-- See module readme for more details -->

Takes, plain text file, same as output of step above, and media source, audio or video, and creates captions file, srt. 

#### example

```bash
/usr/local/bin/aeneas_execute_task "./data/2017_07_19_11_26_13-Cd56vF3lZ_Q.mp4" "./examples/blaine.srt" "task_language=eng|os_task_file_format=srt|is_text_type=subtitles|is_audio_file_head_length=0|is_audio_file_tail_length=0|task_adjust_boundary_nonspeech_min=1.000|task_adjust_boundary_nonspeech_string=REMOVE|task_adjust_boundary_algorithm=percent|task_adjust_boundary_percent_value=75|is_text_file_ignore_regex=[*]" ./examples/2017_07_19_11_26_13-Cd56vF3lZ_Q.mp4.srt
```
