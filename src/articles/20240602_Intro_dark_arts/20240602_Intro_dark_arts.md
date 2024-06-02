---
title: Introduction to the Dark Arts
description: Not so blackletter
date: 2024-06-02
evolution: 1
tags:
  - typeface
  - typography
---

## Blackletter

Blackletter, Fraktur, Gothic are names for a style of typefaces that where in use in western Europe from around 1150 to the 1940ies. Details on the style, its history and why it disappeared see [Blackletter on Wikipedia](https://en.wikipedia.org/wiki/Blackletter). 

In Switzerland, it's mainly used to show, that something has tradition (e.g., newspapers), as housenumbers and signs in the old towns (where it's probably original in use). It still has this special connotation and it's hard to sell chocolate coated apples with a blackletter typeface without giving it some "Snow white evil queen"-vibe. 

Apparently, this is a bit different in Mexico, where Blackletter is still alive. It's used in handpainted signs on storefronts, cars and so on. Check [The Mysterious Case of the Shapeshifting Poblano Blackletter with Jesús Barrientos](https://vimeo.com/879954360), where a presentation of samples is given at the letterform archive. 

It's that presentation, that prompted me to try making a typeface similar to the style. 

## Black and white

While most blackletter tends to be a bit edgy, there is a typeface called rotunda, where less decoration and rounder forms have been used. Rotunda also has this calligraphy-feel but looks a bit friendlier - at least to my eyes. Still it has this rythm, that gives blackletter its style.  

I've been trying to incorporate some of the rotunda forms. The samples I found in the web have mostly been in latin. Thus some letters have been missing. Others have sometimes been so far from their current counterparts, that legibility was tricky. 

Legibility was mainly a problematic with upper case, where samples have been highly decorated, had different elements than lower case, contrast and so on. While combinations were nice in single words, upper case did not really fit or match lower case in a longer text. I couldn't shake the impression, that these forms have again been mainly used in latin texts (well, not german texts), where upper case is mostly used at the beginning of a sentence or paragraph. Hence more flourish did not hinder legibility, while in german texts vastly different letterforms hinder the uniformity of or rythm in a block of text. Maybe I just couldn't find the correct samples. 

A reference for numbers are tricky (in matching style) and symbols (i.e., #, @) are obviously very hard to impossible to find.

## Fancy letters and combinations

In older scripts, there seems to be no end to additional letters, we no longer use today. 

An example is the r rotunda, a calligraphic variant of the letter r, only used after letter with round endforms like o, b, p, h (but also other letters depending on typeface).

Another example is the letter s, where depending on place in the word a long or a round s was used (also in combination with a second s). 

There are also combinations, ligatures we are still using today. Looking around for examples during holidays, I noticed additional "special" combinations that I have never seen in other places (e.g., a NE-ligature in France). 

I'm pretty sure, there is even more. 

## Draft of the typeface

While there is endless work still to do (and I'm not yet happy with at all with a lot of the letters), there is a start: 

<style>
@font-face {
  font-family: 'Ideala';
  src: url('Ideala-Regular.woff2') format('woff2'),
       url('Ideala-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

</style>

<div class="text_sample">
<p style="font-family:'Ideala';font-weight:normal;font-size:0.9em; margin: 0.5em;line-height: 87%"> <mark>0.9em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
<p style="font-family:'Ideala';font-weight:normal;font-size:1em; margin: 0.5em;line-height: 87%"> <mark>1.0em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
<p style="font-family:'Ideala';font-weight:normal;font-size:1.2em; margin: 0.5em;line-height: 87%"> <mark>1.2em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
<p style="font-family:'Ideala';font-weight:normal;font-size:1.4em; margin: 0.5em;line-height: 87%"> <mark>1.4em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
</div>
<div class="text_sample_inverted">
<p style="font-family:'Ideala';font-weight:normal;font-size:0.9em; margin: 0.5em;line-height: 87%"> <mark>0.9em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
<p style="font-family:'Ideala';font-weight:normal;font-size:1em; margin: 0.5em;line-height: 87%"> <mark>1.0em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
<p style="font-family:'Ideala';font-weight:normal;font-size:1.2em; margin: 0.5em;line-height: 87%"> <mark>1.2em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
<p style="font-family:'Ideala';font-weight:normal;font-size:1.4em; margin: 0.5em;line-height: 87%"> <mark>1.4em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
</div>

## Challenges
- It's hard to make small details and stay in style - cedillas, circles and so on need a lot of work. 
- Blackletter is a nordic or german typeface accents are tricky to find.
- What additional signs do I want to add? Do I need other number forms? 

## Todos
- Can't believe I forgot the ampersand
- Kerning, Spacing, Adjustment of forms
- Variable fonts - this could be super pretty using rounder forms, woodprint-like 