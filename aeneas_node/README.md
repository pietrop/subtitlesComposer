# Aeneas node 

A node wrapper for Aeneas 

Equivalent to run example using [Aeneas runtime configurations](https://www.readbeyond.it/aeneas/docs/clitutorial.html#the-runtime-configuration).

```bash
/usr/local/bin/aeneas_execute_task "./data/Andrea_Ginzburg.webm" "./data/Andrea_Ginzburg.webm.segmented.txt" "task_language=eng|os_task_file_format=srt|is_text_type=subtitles|is_audio_file_head_length=0|is_audio_file_tail_length=0|task_adjust_boundary_nonspeech_min=1.000|task_adjust_boundary_nonspeech_string=REMOVE|task_adjust_boundary_algorithm=percent|task_adjust_boundary_percent_value=75|is_text_file_ignore_regex=[*]" ./examples/Andrea_Ginzburg.webm.srt
```

## Input 
Takes input as segmented text as example. line separated by spaces. 
segmented for captions/subtitles alignement. 

<!-- link to Aeneas explanation.  -->

```text
Buonasera, a questo incontro con 
il professore avrai leasing, che 

ringraziano di essere, non è di 
aver, accettato dallo stupido per 

questa riflessione e stiamo 
cercando di costruire scritti sui 

temi che che riguardano la nostra 
situazione socio economica 

politica nella quale ci troviamo 
tutti in questi, giorni nostri, 
```

## Output

returns an srt, caption file. See example below

```srt
1
00:00:00,000 --> 00:00:07,400
Buonasera, a questo incontro con
il professore avrai leasing, che

2
00:00:07,400 --> 00:00:12,520
ringraziano di essere, non è di
aver, accettato dallo stupido per

3
00:00:12,520 --> 00:00:18,720
questa riflessione e stiamo
cercando di costruire scritti sui

4
00:00:18,720 --> 00:00:28,040
temi che che riguardano la nostra
situazione socio economica

5
00:00:28,040 --> 00:00:34,080
politica nella quale ci troviamo
tutti in questi, giorni nostri,

```

## Usage

see [`index.test.js`](./index.test.js) for example usage.


## Installing dependencies

Unfortunatelly `Aeneas` has  a ton of dependecies

- [Aeneas install documentation](https://github.com/readbeyond/aeneas/blob/master/wiki/INSTALL.md)

Lukily there installers, for mac, windows, and linux to simplify the process  

- [`aeneas-installer`](https://github.com/sillsdev/aeneas-installer) (see [`releases` section](https://github.com/sillsdev/aeneas-installer/releases), and [here for linux version](https://github.com/sillsdev/aeneas-installer/issues/30)) 

However it be great to be able to make the module more self contained and point to packaged binaries of the dependencies rather then relying on system wide installation of those.  
Eg for use cases such as packaging with [electron](https://electronjs.org/) to make cross platform desktop apps.

Similar in concept to [`ffmpeg-static`](https://github.com/eugeneware/ffmpeg-static) node module that contains ffmpeg binary for os, win and linux.

## `Aeneas` supported languages

[List of 38 supported languages](https://github.com/readbeyond/aeneas#supported-features)

## TODO: 

- [ ] Make dependencies self contained (see install dependencies section). 

