---
title: It looks like some strange tech-chart
description: A squared font that works in a grid
date: 2023-04-01
updateDate: 2024-12-29
evolution: 1
urlbase: '/articles/20230401_gridtype/'
fontname: MonoCube-Regular
sampletext: Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah cotton candy. "ç(){}1234567890?.
tags:
  - typography
---

## Currently more of an idea

I've been trying to come up with an idea for a typeface that works in all directions - similar to japanese writing. The issue with our alphabet is the irregularity of shapes with decenders, acenders, lower case, upper case and so on. 

> While square or circular frames solve the problem they have issues with the rhythm or density of black and white. 

After visiting the Haettenschweiler-Exhibition at the ZHdK and some inspiration regarding typefaces I decided to start another approach. Disclaimer: this is a rather quick and unfinished one... (lots of glyphs are missing, there are some strange artifacts in the vertical examples - however these seem to be firefox only - the vertical text looks better in chrome or safari)

## Learnings
- space, punctuation and so on all need a square shape - sometimes, this makes text tricky to read. maybe it would be feasible to create ligatures with punctuation and space to not have double whitespace at the end of every paragraph
- readability is really hard with the approach taken
- adding new elements to a constructed approach makes it hard to remain consistent - the same also applies to the whitespace-glyphs that appear way more elegant than the blocky letters. 
- this can be caps-only (because lower case would have the same size as upper case)
- kerning begone - everything has the same shape
- It's probably not possible to create this in glyphs mini (or maybe it is since I don't need vertical kerning or spacing)?
- now... how to turn the draft 90° to show the vertical text? Solution CSS: "writing-mode: vertical-lr; text-orientation: upright;" - however, this does not look good in firefox (better in chrome though - however, then spacings are off...). [Adobe](https://helpx.adobe.com/in/fonts/using/open-type-syntax.html) lists some issues with the open type stuff (See "Note: about vertical features"). this issue seems to be related to the problems with placing the "space"-glyphs. Update: this seems to be an issue with "text-orientation:upright;" - Regarding vertical writing modes see [W3C-Spec](https://www.w3.org/TR/css-writing-modes-3/#vertical-modes) and [this on the same page](https://www.w3.org/TR/css-writing-modes-3/#intro-text-layout) probably answers the question: bi-orientational fonts - but, how to set a font as bi-orientational? 
- There is indeed a "dropleft" for japanese (and probably a "dropright" for mongolilan) as seen in [W3C-Spec](https://www.w3.org/TR/css-writing-modes-3/#block-flow)
- Another [paper as html-page](https://fantasai.inkedblade.net/style/discuss/vertical-text/paper) with a nice writeup of the topic and what could be improved for the organization of online layouts for different scripts with additional information in unicode
- It's really hard to make an uniform wall of text, where content breaks wherever possible ignoring everything that is added to browser logic (including the merging of white-space using css: "white-space:break-spaces"). This also includes breaking words in any place (using css "word-break: break-all"), between whitespace, between word and whitespace (appears to be working with "white-space:break-spaces"), between word and punctuation (css: "line-break: anywhere"). In fact it needs all three (?) to actually break everything. Now... if this was just possible in a desktop-publishing software...

## Questions
- should special characters like & or # be considered letters, whitespace or something else? What about / or %? 

## Results of the draft

The following paragraph shows the outcome with some "cupcake ipsum" text: 

{%include 'partials/textsample_monoblock.njk' %}

{%include 'partials/typographic-link.njk' %}

## Also...
I think this has some amazing potential. 
Would pages consisting only of vertical text be horizontally scrolling? Most probably yes.

## Investigating some things november 2023
An additional issue is currently visible on this page. Sometimes, flexbox for the writing-mode:vertical-lr and text-orientation:upright containers is not working properly. This is based on the fact, that, similar to the dropdowns, flexbox behaviour changes if writing-mode changes (on the container). See the [w3.org-flexbox documentation](https://www.w3.org/TR/css-flexbox-1/#flex-flow-property) for details (it's a bit further down). Currently, I'm not sure on how to handle this. Also - somehow, firefox reacts with reorganizing the flexcontainer when opening inspect mode...

Furthermore firefox (not chrome / safari) seems to be doing something strange to the space character in the vertical-lr/upright text. While an empty space is placed, where the character would be, the character itself is shifted a bit. I'm not sure, if this is related to the typeface or a browser text rendering issue. 

## Small update december 2024
This now has a different sample-text (among with all other articles for typography). I decided to change the vertical-text example to just one. "writing-mode: vertical-lr", flexbox and multiple columns next to eachother just don't seem to work for the purpose, when mixing different writing modes in a page. I might have been close with block-size and inline-size (where it's possible to limit the height of the vertical paragraph) – but I ran into another problem with flexbox, where flex-elements reacted as if their content was just one line, breaking the layout of the page. 
The space-character-bug in firefox is still here however and chrome still adds bigger spaces between the characters with text-orientation:upright. 