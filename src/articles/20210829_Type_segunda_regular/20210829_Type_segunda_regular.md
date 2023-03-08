---
title: Bold is not really regular
description: It's a family - in addition to the old regular now called "bold" there is now also a regular fontface in a didone style
date: 2021-08-29
tags:
  - typeface
  - typography
---

## The goal
Admitting, that the former segunda regular font is actually a bold style, I decided to create my first font family. 

## Process & Learnings
While segunda should initially have been a base for a variable font (by just increasing and decreasing line width), learning more about type (by reading books and blogs), I realized that this was hardly practical. The outcome was more than ugly. Thinking about other options I decided to go into a didone style of typography. 

The geometric style should be ideal. Verticals fat, horizontals thin, easy living. Boy was I wrong. What do you do with an A, a V, the M or all the special characters? This fontface took even more time to adjust and fiddle. Hints and kerning were off, letters didn't have the same weight. I had to add spurs and serifs because letters were indistinguishable or unreadable. In fact, i learnt a lot about didone fonts and why they have specific characteristics. The very big contrast between the different lines is not making a font designers live easier. I could probably change small characteristics on this font forever, adjust width, punches, serifs, line weight...

## The result
Is it pretty? Maybe not on this screen. I'm pretty sure, that checking the fontface on a kindle is not best practice. The font looks still very technological and does not have the warmth of a didone font. It seems to work better in a low-contrast setting. 

The following paragraph shows the outcome with some "cupcake ipsum" text: 

<style>
@font-face {
  font-family: 'segunda';
  src: url('segunda-regular-webfont.woff2') format('woff2'),
       url('segunda-regular-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;

}
</style>

<div class="text_sample">
<p style="font-family:'segunda';font-weight:normal;font-size:0.9em; margin: 0.5em"> <mark>0.9em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
<p style="font-family:'segunda';font-weight:normal;font-size:1em; margin: 0.5em"> <mark>1.0em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
<p style="font-family:'segunda';font-weight:normal;font-size:1.2em; margin: 0.5em"> <mark>1.2em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
<p style="font-family:'segunda';font-weight:normal;font-size:1.4em; margin: 0.5em"> <mark>1.4em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
</div>
<div class="text_sample_inverted">
<p style="font-family:'segunda';font-weight:normal;font-size:0.9em; margin: 0.5em"> <mark>0.9em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
<p style="font-family:'segunda';font-weight:normal;font-size:1em; margin: 0.5em"> <mark>1.0em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
<p style="font-family:'segunda';font-weight:normal;font-size:1.2em; margin: 0.5em"> <mark>1.2em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
<p style="font-family:'segunda';font-weight:normal;font-size:1.4em; margin: 0.5em"> <mark>1.4em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
</div>

## The current state is not the final state

This is only a first draft - I have to update the width of the letters to account for different apperture, change and add ligatures - stay tuned for updates now and then. 
