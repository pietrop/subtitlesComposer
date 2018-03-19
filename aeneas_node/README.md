# Aeneas node 

A node wrapper for Aeneas 



Equivalent to run example using [Aeneas runtime configurations](https://www.readbeyond.it/aeneas/docs/clitutorial.html#the-runtime-configuration).

```bash
/usr/local/bin/aeneas_execute_task "./data/2017_07_19_11_26_13-Cd56vF3lZ_Q.mp4" "./examples/blaine.srt" "task_language=eng|os_task_file_format=srt|is_text_type=subtitles|is_audio_file_head_length=0|is_audio_file_tail_length=0|task_adjust_boundary_nonspeech_min=1.000|task_adjust_boundary_nonspeech_string=REMOVE|task_adjust_boundary_algorithm=percent|task_adjust_boundary_percent_value=75|is_text_file_ignore_regex=[*]" ./examples/2017_07_19_11_26_13-Cd56vF3lZ_Q.mp4.srt
```

## Input 
Takes input as segmented text as example. line separated by spaces. 

<!-- link to Aeneas explanation.  -->

```text
All right, yeah, I'm good my day, is literally going from bad.

To worse, I mean I wasn't even having a good day to start with, and then I just cut these texts from dwara and I'm just like what my day.

Yes, please.

I seen you like this before.

Should we take five minutes sifting through this, I knew you were gon na say that yes, okay, don't get fight all right.

That'S why the task?

What is it you want me to help me think through?

I don't even know where to start I've just hang on, and what do I actually want to get out of this?

I just need.

I just need to sort this out basically, because I've got somewhere to go in about half an hour and then I've just got these texts this more than I can actually sort out in half an hour, and I need to sort of figure out what I'm gon Na do because I don't even actually know what to do okay.

So what is it that you need to solder?

Well, okay, can I just tell you what's happened or - and I think we've got to tell him what okay all right.

Basically, I need like a housing solution for Laura, because she's just texted me saying she's got nowhere to live, so I just need to do something: to sort it out: okay, yeah, okay!

Is that all right, yeah?
```

## Output

returns an srt, caption file. See example below

```srt
1
00:00:00,000 --> 00:00:16,520
All right, yeah, I'm good my day, is literally going from bad.

2
00:00:16,520 --> 00:00:30,240
To worse, I mean I wasn't even having a good day to start with, and then I just cut these texts from dwara and I'm just like what my day.

3
00:00:30,240 --> 00:00:31,720
Yes, please.

4
00:00:31,720 --> 00:00:34,520
I seen you like this before.

5
00:00:34,520 --> 00:00:43,560
Should we take five minutes sifting through this, I knew you were gon na say that yes, okay, don't get fight all right.

6
00:00:43,560 --> 00:00:45,840
That'S why the task?

7
00:00:45,840 --> 00:00:50,040
What is it you want me to help me think through?

8
00:00:50,040 --> 00:01:05,800
I don't even know where to start I've just hang on, and what do I actually want to get out of this?

```

## TODO: 

- [ ] add export to module
- [ ] add test.index.js example usage. 

