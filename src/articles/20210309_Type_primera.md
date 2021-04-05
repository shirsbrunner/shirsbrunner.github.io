---
title: Fooling around with fontforge
description: Digitizing your handwriting might be more fun than you think (if you also have strange ideas of "fun")
date: 2021-03-09
tags:
  - typeface
  - typography
---

## Back to the past...

This is an attempt to remember the approach of creating my first typeface ages ago, without knowing anything, without having the nice(r) handwriting I have today, but with some ambition.

## The goal

Fooling around with type was always something on my bucket list. I'm impressed on what you can do with enough skill and tools like inesign or publisher and some fonts as a base. 

Reading on typography I decided to design something myself and quickly rediscovered [Fontforge](https://fontforge.org/) that I read about some time ago. Fontforge is not an easy to use program. Lots of functions are burried within menues and behind arcane names. But it's free to use, can generate impressive fonts and has enough online help. I decided to give it a go. 

As designing entire fonts did appear tricky (after trying to design some variations of the letter "n") I quickly decided to start with handwriting. Handwriting seemed simpler (compared to geomtrically designing all letters of an alphabet, not to what I thought to be the amount of work, that you have to put into a typeface like Frutiger, Open Sans or Verdana).

## Process & Learnings

To digitize your handwriting, one first needs to create some sample-text. Having the "correct" sample text was harder than I thought. The letters of my handwriting tend to change shape depending on their place on the page, the letters they are next to or connected to the, the pen I use, the amount of text written, my mood among other things. 

> It turns out, my handwriting is full of ligatures 

Also some of the letters are just not readable, if I don't concentrate, and if I concentrate and take it slow, the letter does not look like my handwriting - only my hand knows what my real handwriting looks like. 

After experimenting a bit, I decided to approach this more systematically. To create a usable base and it helps to add some rules to a piece of paper. I started writing out the alphabet in upper case and lower case. I then proceeded with some text to make sure, that the individual letters at least looked similar to the way I normally write. 

I started up fontforge and followed the basic tutorial to create a font. Turns out, that an entire font has a lot of letters and other glyphs - way more than what I thought to be the case. Following the grid, I started to add additional things to my base-document. 

It helps if you do a lot of math - else you probably don't use all the signs in your daily repertoire - hence you'd not have your own style for some of the glyphs. I at least had to (re)invent at least some sings that I rarely used before (like a multitude of brackets, &# and so on).

> It probably helps, if you did a lot of mathematics in your education - just for all these strange signs, that you encounter in a typeface

After taking a picture and importing everything into affinity designer I copied the pictures of the individual letters into fontforge and traced all of them individually. The tools in fontforge are not that easy to use or maybe, I'm just spoilt with tools from graphical design software. 

Next learnings: some letters were to big, letters didn't all have the same line-weight (a soft-tip-pen does not give identical line-weights, also errors while tracing), ascenders and descenders were to big on single letters and didn't look pleasing in combination. 

Furthermore I learnt about kerning. We "kern" automatically when writing by hand, but a computer really has to be told where to move two letters nearer to each other. 

## The result

After some iterations I considered the typeface to be good enough - or even better, considering the fact that I only intended to try out fontforge before starting seriously. 

In the end the typeface has more than 150 letters or signs and can apparently be used in a multitude of languages (if I can trust font squirrel). The typeface is currently not used in this page (as too much type tends to be tricky and handwriting is rather hard to read, but who knows, in the future...).

The following paragraph shows the outcome with some "cupcake ipsum" text: 

<div style="display:flex; flex-direction:column">
<p style="font-family:'primera_regular';font-size:1em"> <mark style="color:rgb(155, 20, 20); background-color:white">1.0em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$1234567890?. </p>
<p style="font-family:'primera_regular';font-size:1.1em"> <mark style="color:rgb(155, 20, 20); background-color:white">1.1em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$1234567890?. </p>
<p style="font-family:'primera_regular';font-size:1.3em"> <mark style="color:rgb(155, 20, 20); background-color:white">1.3em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$1234567890?. </p>
<p style="font-family:'primera_regular';font-size:1.6em"> <mark style="color:rgb(155, 20, 20); background-color:white">1.6em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$1234567890?. </p>
</div>

Obviously, the font has a lot of issues, but I like the outcome, especially the little sun, that I use now and then in digital products. 

## Try it!

It's great to have your handwriting digitized and you can learn a lot in the process. 

There are a lot of approaches that are way simpler than what I did with fontforge. Give it a go. 