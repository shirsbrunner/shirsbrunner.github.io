---
title: The perils of darkmode
description: Darkmode - it's the new fancy thing
date: 2022-03-13
evolution: 3
urlbase: '/articles/20220228_darkmode/'
previewImage: Darkmode-Preview.png
tags:
  - html
  - css
---

## Forward into todays times

Since I'm mostly looking at this page in the later hours of the day, the reaaally white page is a bit of a shift when coming from a dev environment or most mobile apps. Designer to the rescue. Let's not make everything a bit darker, but let's design and build a darkmode.
It's not as easy as it initially seemed (at least, if you're not an experienced frontend developer). 

## Challenges
Most of the todos appear to be straight forward, there have been some things that I didn't think about initially. 
- Colours should be accessible in both modes. Just inverting the colours did not work, because the accent red did not have enough contrast to the initial black. Apart from trial and error, there does not seem to be a palette-generator that can improve a (non WCAG conform) combination with black, white, red, light red and grey. 
- Bad structure in html and css can only be fixed with even more bad html and css. The code had (and most probably still has) duplications, strange inheritance or cascade and so on.
- Even though the browser identifies darkmode, default link colours are not specified and do not change out of the box. This leads to violett links on dark backgrounds and automatic violations of a11y. In summary leading subsequently to the need to style links und to restyle every link previously styled.
- For colouring, SVG-Icons either need to be adjusted in the SVG-code or adjusted using a css filter.   
- Triggering should be done automatically, but you should also be able to override it, and let's store the users decision for good measure. 
- Suddenly the page needs JavaScript
- Toggle button's hover states are sticky on touch devices...
- Certaing colours tend to bleed into others, and maybe I'd also need to adjust the fontsizes or weights for certain combinations

I'm pretty sure there is more, but currently, this page sports some dark mode. Switch it by hand using the toggle in the footer, or wait until your device decides for you. 

## Basic help
Again, where would I be without the internet... pretty sure, these are not all of the links I used in the solution
- An [article](https://web.dev/prefers-color-scheme/) about everything related to dark mode.
- Most of the implementation on the page is from [this css-tricks source](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/)
- Stackoverflow answering the question on [how to change the colour of SVG](https://stackoverflow.com/questions/22252472/how-to-change-the-color-of-an-svg-element)