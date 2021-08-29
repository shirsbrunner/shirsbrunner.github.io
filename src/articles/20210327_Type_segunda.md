---
title: Creating a second typeface
description: After a simple digital version of my handwriting, I tried to create a typeface that can be used in other digital products
date: 2021-03-13
tags:
  - typeface
  - typography
---

## The goal
After digitizing my own handwriting in what eventually became a typeface called "Primera" (that I have yet to upload to any place), I took a break from typography.

I only restarted after I became aware of the fact, that lack of knowledge in the field of typography and typesetting was hindering my development in lots of things related to visual design. Also, I wanted to educate myself a bit and started reading some books and articles on the topic. 

To bridge that gap a little bit, I decided to create an additional typeface. This time I'd not use something handwritten to get a something more professionally looking. I decided to create a quadratic monospace typeface, where every letter would use/need the same space. The result should have been a display typeface usable in horizontal or vertical direction similar to japanese Kanji-signs. Initially I wanted to only create the capital alphabet and use it's geometric base to create different weights for different applications - I was also looking at variable fonts.

## Process & Learnings
I had the intention to use fontforge again, after learning the software in the first steps in typography. Knowing (and not liking) the fontforge drawing-tools, I decided to rather create the font in affinty-designer and import SVGs into fontforge. This led to it's own issues and I learnt about the importance of pixel aligning everything (even the artboard), to get an acceptable result.

During creation I added lowercase-letters and deviated from the idea to create a monospace font. The geometric base I initially used was not really suitable for all letters and I had to redraw everything again and again (resizing lowercase letters twice). Also descenders going out of the EM-Square did pose some visual problems and I decided to redraw everything a third time. 

Due to the basic structure with the individual glyphs, it was easy enough to import everything into fontforge quite quickly to keep me motivated. 

The hardest parts were hinting and kerning. Kerning a geometric typeface is harder than kerning handwriting. Hinting (not an issue in a handwritten typeface, it's glaringly obvious in a geometric one) again is a different kind of challenge. While kernig in segunda (the name of the second font) is by no means ideal it is good enough to be passable. I gave up adding manual hints eventually, after reading more on the topic (it's very tricky, apparently operating systems can do it good enough in open type fonts).

At this point I also eventually deviated from creating multiple font weights from the same base - it just didn't look good enough. I think there needs to be a different structure (similar to italics), but I'd like to read more on that topic. Also: variable fonts - it's the current big thing (but apparently not supported in fontforge).

## The result
In the end the typeface has more than 170 letters or signs and can apparently be used in a multitude of languages from Albanian to Zulu (if I can trust font squirrel). The typeface is used in this page for technical things, copyright-notice, tags and decorations. Initially I wanted to used it as the font for titles, however, after trying it out, I decided to go with what I initially designed this page (Mono Black).

The following paragraph shows the outcome with some "cupcake ipsum" text: 

<div class="text_sample">
<p style="font-family:'segunda';font-weight:bold;font-size:0.9em; margin: 0.5em"> <mark style="color:rgb(155, 20, 20); background-color: transparent">0.9em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
<p style="font-family:'segunda';font-weight:bold;font-size:1em; margin: 0.5em"> <mark style="color:rgb(155, 20, 20); background-color: transparent">1.0em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
<p style="font-family:'segunda';font-weight:bold;font-size:1.2em; margin: 0.5em"> <mark style="color:rgb(155, 20, 20); background-color: transparent">1.2em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
<p style="font-family:'segunda';font-weight:bold;font-size:1.4em; margin: 0.5em"> <mark style="color:rgb(155, 20, 20); background-color: transparent">1.4em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
</div>

There are still some issues to be fixed, but the "my baby-effect" is strong. 

## Try it!

It is always fun, to use your own creation replacing every other typeface in your browser (and helps to find issues with the typeface).

I suggest trying out fontforge for simple things. I'm currently thinking about additional typefaces - maybe an icon-font. 
