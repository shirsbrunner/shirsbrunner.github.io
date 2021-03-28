---
title: Creating a second typeface
description: After a simple digital version of my handwriting, I tried to create a typeface that can be used in other digital products
date: 2021-03-13
tags:
  - typeface
  - typography
---

## The goal
After digitizing my own handwriting in what eventually became a font called "Primera" (that I have yet to upload to any place) I took a break and restarted with typography after reading some books and articles on the topic. I became aware of the fact, that lack of knowledge in the field of typography and typesetting was hindering my development in lots of things related to visual design.

To bridge that gap a little bit, I decided to create an additional font. This time I'd not use something handwritten to get a something more professionally looking. I decided to create a quadratic monospace typeface, where every letter would use/need the same space. The result should have been a display typeface usable in horizontal or vertical direction similar to japanese Kanji-signs. Initially I wanted to only create a capital alphabet and use it's geometric base to create different weights for different applications.

## Process & Learnings
I had the intention to use fontforge again, after learning about the software in the attempt to create the first typeface. Knowing the drawing-tools, I decided to rather create the font in affinty-designer and import SVGs into fontforge. This led to it's own issues and I learnt, about the importance of pixel aligning everything (even the artboard), to get an acceptable result.

During creation I added lowercase-letters and deviated from the idea to create a monospace font. The geometric base I initially used was not really suitable for all letters and I had to redraw everything again and again (resizing lowercase letters twice). Also descenders going out of the EM-Square posed some problems and I decided to redraw everything again. 

Due to the basic structure with the individual glyphs it was easy enough to import everything into fontforge quite quickly. 

The hardest part were hinting and kerning. Kerning in a geometric font is harder than kerning the handwriting. Hinting (not an issue in the handwritten font, it's glaringly obvious in a geometric font) again is a different kind of challenge. While kernig is by no means ideal it is good enough to be passable. Adding manual hints is a thing I gave up eventually after reading more on the topic.

This is also where I eventually deviated from creating multiple font weights from the same base - it just didn't look good enough. I suppose there needs to be a different structure (similar to italics), but I'd like to read more on that topic. Also: variable fonts - it's the current big thing (but apparently not supported in fontforge).

## The result
In the end the font has more than 170 letters or signs and can apparently be used in a multitude of languages from Albanian to Zulu (if I can trust font squirrel). The font is used in this page for technical things, copyright-notice and decorations. Initially I wanted to used it as the font for titles, however after going with what I use now (Mono Black)

The following image is a screenshot of the outcome of the font squirrel webfont creator. The real font is less fuzzy. 
![A screenshot of a preview of the font as rendered in the browser, created on fontsquirrel](/images/posts/Segunda_preview1000.jpg "A screenshot of a preview of the font as rendered in the browser, created on fontsquirrel")

It is always fun, to use your own creation replacing every other font in your browser (and helps to find issues with the typeface).

I suggest trying out fontforge for simple things. I'm currently thinking about additional typefaces - maybe an icon-font. 
