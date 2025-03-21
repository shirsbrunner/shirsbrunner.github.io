---
title: The times they are a-changin'
description: Exploring service workers
date: 2023-09-03
updateDate: 2023-09-24
evolution: 1
urlbase: '/articles/20230904_funtime/'
previewImage: PWA-Preview.png
tags:
  - html
  - css
---

## The passing of time

Calculations of time related things are rather complex. For initial reference consider [Wikipedia](https://en.wikipedia.org/wiki/Equation_of_time). Do you need it when programming a special clock? Maybe...

## Progressive Web apps

The main goal behind this little project: learning about PWAs or progressive web apps. PWAs have been around for some years now. A PWA is an app-like experience, something, that can be installed using a browser or an appstore. Like a native app, it works on all plattforms, but only uses web technology. Disclaimer: I'm not an expert, but a lot of things seem straightforward. Check the following ressources: 
- [nice explanation from rowdy](https://rowdy.codes/talks/20230901-front-conference-zurich/) 

The main advantage: PWAs can work offline too, if all relevant data is put into a cache. A service-worker can be programmed, to collect the relevant data, intercept the call to the server and serve data from its cache instead.
Additionally, PWAs have additional rights and can access sensors on the device, allowing for nice additions to the users experience (endless popups, camera...). 

## Playing around with time - current progress
Briefly, I try to program a clock, that shows a special time based on an absurd idea. This involves mostly moving minutes and hours, as well as making seconds longer or shorter. 

It's easy to display the systemtime in a webapp, but it is harder to push out time with an offset or squishing time locally. 
While starting at a given time, moving a bit into the past and making seconds take longer seems easy using some javascript. However time runs out of sync pretty fast, while I'm not looking at it (i.e. browsing the web in a different tab). Especially loading a page somewhere has an impact on the calculated time. 

Initially I was thinking about synching clocks every odd minute. However even at around 1000 secs, there is a noticeable gap.
Current strategy: assuming it is less problematic getting current time every second and moving it around a bit. The issue with stretching time is however not yet solved (and probably way harder to calculate for the general case).

## Learnings
- PWAs use the concept of service workers to work offline
- You can only ever install a PWA once - if install is not working, it's probably installed allready (or you use firefox on a mac, where it currently does not work)
- To do so, it needs to be served using https (localhost is always considered https)
- When simulating time, it's important not to run into endless recursion (doh)
- Also calculated time is not as accurate as system time (for obvious reasons)
- Learning about PWAs might be a good thing for designers in the web space 
