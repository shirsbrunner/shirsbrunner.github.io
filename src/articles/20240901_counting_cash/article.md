---
title: Paying attention to time
description: Measuring the flow of cost and value
date: 2024-09-01
updateDate: 2024-12-29
evolution: 2
urlbase: '/articles/20240901_counting_cash/'
fontname: AD-Digiwatch-Regular
sampletext: Error at 0.123456789 09:22 - Goto line 22 and Lorem Ipsum
tags:
  - html
  - css
  - typography
---

## Everything counts in large amounts

How much time do you spend in meetings? How many people do you meet with? How much do you value your time? What do you spend it on? Is it well spent? Sometimes, we discuss things like these among friends or maybe in the office. Wouldn't it be great, if we could visualize this? Well, we can. 

## PWA (again)
Based on the "rolling dice" PWA, building another one was way simple thing this time. I could dedicate some more time to styling things (mainly typographic). 

<div class="cta">

For starters: [The app can be found here](/webApps/CountsInSmallAmounts/)

</div>

### What it does(n't do)

You add the cost per time, a currency, a multiplier (i.e., the people in a meeting) and press start. The app calculates the amount of cash spent while doing / discussing / discovering important things. You can take a break and resume the meeting later or get to a / postpone the decision and stop the meeting.

While a bit tongue in cheek and geared towards necessary meetings, this can be used to calculate the value of anything tied to time. 

Currently it is not possible (and probably will never be possible) to:
- change parameters of your meeting
- calculate compound interest on your time (i.e., investing the cash spent will yield compound interest, if you do it right)
- tie the above calculation to the stock market

### This one has fluid type

Similar to this homepage, the PWA features a fluid typscale based on utopia (see [utopia.fyi](http://www.utopia.fyi)). I've been trying out some things with typography and I really like this concept. It's still missing fluid spaces though. 

I've been playing around with utopias steps and scales (as the PWA needs vastly different font-sizes for the different elements). It seems to pay off to just have more steps, if there is bigger text instead of using a bigger difference between the scales - this also pays of accessibility-wise.  

### There is a lso a new 8 segment typeface

For this counter, I made a new typeface - a very simple copy of the 8-segment numbers of calculators and digital watches. Currently, there is nothing but numbers, period and colon (see below). This is a very easy typeface to make. Currently, there is a lot of whitespace around the glyphs. It still has a descender (that I might eventually remove) and as it is an equal spaced font, there is the same space above... also the display below should read "em" next to the initial numbers, but well...

{%include 'partials/textsample.njk' %}

{%include 'partials/typographic-link.njk' %}

The main typeface is my other typeface circulos, also used on the PWA - for currencies, I added an Euro sign.

## Sadly, the app is still sorely lacking in 
This is not finished or really polished yet..
- The PWA does nothing more than make it installable. But it could record the starting time, in case your phone has a shutdown, or your browser.
- The install-buttons for the PWAs are a hassle with testing scope, I hope I got it right this time. 
- Accessibility: I'm currently only hiding and showing things - someone in need of assisting technology will probably have a hard time finding out, what is going on (yet to be tested with a screen reader though).

## Dez 2024: Update to the typeface
This now has "all" the letters of the alphabet in sometimes upper and lowercase including some special signs.
Characters are based on the 7-Segment specification and adjusted here and there (sometimes using the Siekoo Character). Where only one of upper/lower-case was available, the available one fills both for easier typing. 