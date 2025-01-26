---
title: Utopia
description: Designing for the future – fluid typescales
date: 2024-08-10
evolution: 1
urlbase: '/articles/20240810_utopia/'
previewImage: Utopia-Preview.png
tags:
  - html
  - css
---

## Learning more about type on the web

I've recently been following a typography masterclass by Elliot Jay Stocks - the author of Universal principles of typography. While the masterclass covers similar things as the book. I did nevertheless enjoy the masterclass and learnt additional things, but could sadly not participate live (luckily there have been nice recordings).

While I knew utopia before, it took the class to make me try to use it in the webpage. Time to fan about it a bit. 

## Fluid design

This page already without breakpoints using flexbox. This stems from the fact, that it was supposed to be an easy linear site. Flexbox was used as a solution, because, the desktop design didn't work on mobile. We can consider this a fluid design - it works on every device, starting at around 320px (this was the viewport size I was using at construction time for UX-projects). Today, I'd probably start at around 240px (Android accessibility-mode zooms up my phone, so that the viewport only sports 240px). 

But fluidly floating content around is not the only thing that can or should be done when designing without breakpoints. Things that come to mind are typography and whitespace. 

Size of the typeface is dependent on user needs (accessibility) but also on the distance to the reader. Normally the reading distance to a computer screen is a bit larger than the distance to a mobile screen. Furthermore large titles might not have adequate space on a smaller screen making adjustments a necessity. 

And when type sizes adjust, the rhythm of the page changes. Hence designers need adjustments to whitespace to attain gestalt. 

## Enter Utopia

Utopia does exactly this. It allows to create fluid typescales and spaces by interpolating between two viewports. The handy calculator can be found under [utopia.fyi](http://www.utopia.fyi). The page explains it all, maybe a bit too technically for non-frontend-devs without a clue.

All you need is a minimum and maximum viewport (read min / max-width of the body element) a base font size (the standard size is around 16px) and a typographic scale. Assuming you want to use one, typographic scales describe the increment between font-size-steps. These can be based on any number, i.e., the golden ratio, major third and so on. 

> In the end utopia is very easy to use – maybe I was looking too much for complexity.

On your webpage, instead of setting font size to a number of em or rem or anything (but just never use pixels because of A11Y) you add the code provided by utopia into your css and set the font size using one of the provided css variables. Instantly your fontsize adjusts "magically" to the current viewport in the browser, using interpolation between the set min/max values.   

The same works with space. There is figma plugin you can use for design. Assuming you have a min / max viewport, it should be easy to adapt it to fluid stuff. 