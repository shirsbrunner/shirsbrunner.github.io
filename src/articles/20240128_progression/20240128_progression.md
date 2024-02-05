---
title: Alea iacta est
description: Building a simpler PWA
date: 2024-01-28
evolution: 2
tags:
  - html
  - css
---

## Let's roll

Will apps always dominate the mobile and tablet ecosystems? Probably not. App stores are still the main distribution vector for applications on mobile, but the open internet (i.e., websites) might as well be replacing stores somewhen in the future.

Appstores cater to native apps. While these have to be programmed for each mobile platform and pass a multitude of tests and compliance hurdles, not to speak of a fee to be paid to the appstore owner by the publisher, a PWA or progressive web app can be served, installed and easily updated directly from any website (well, also from app stores, but there is still all the hurdles to pass...). 

Sometimes hindered by lock-ins from the different vendors (mainly apple), PWA's can have the same access to sensors and apis on a device, native apps currently have. PWA's seem to be an obvious thing. Obviously, there is some benefit app stores bring - like a discussion on the app itself, some ratings, compliance. Still, PWAs seem to open a lot of doors.

As a designer I didn't really understand all the technology and benefits behind a PWA. Designers tend to be plattform agnostic, the design works everywhere. However, PWAs service workers bring benefits to websites and webapps. I've been mentioning sensor access (like a location information). Another very important thing is also caching of data and delivering an offline experience. These benefits are not to be overlooked (or let solely in the hand of devs). 

Since my first attempt at programming a PWA was hindered by the fact, that building a "different" clock is harder than it seems (the business part - i.e., the science behind time, not the technology of a PWA), this second attempt is a "simple" dice rolling app. 

The kid is currently at an age, where games are more and more important. Boardgames or card games are sometimes more fun than something digital (and parents prefer analog things for their kids). But how do you roll dice in a train? Enter digital dice. 

I'm sure, an app for rolling dice exists somewhere (remember: there is nothing new under the sun). Still, it's an easy enough usecase for everything related to web development, PWAs, service workers and so on. Feel free to use and install it. Suggestions? Send me a message...

## Install me!
After clicking the following link, you can use the dice app online (try it out) and (if you like it) install it using an install action in the browser from the address-bar or a menu, depending on browser. This will generate an app on your computer or mobile phone, should work on a lot of devices and should also be available offline. 

> The digidice app can be found [here](/webApps/DigiDies/) (... time to build a real call to action). 

## Futuristic user interfaces
What makes an interesting GUI design? Initially I was going for something in pixelstyle. But after watching the baymax-movie with the kid for at least 4 times and noticing a lot of futuristic computer screens, I decided to make it a bit more modern.

What makes a GUI look futuristic? Most interfaces are: 
- in darkmode
- have blueish colours for fonts
- use warmer colours for important information
- have containers or buttons with fancy asymetric shapes
- have small text with lots of infos that are mainly for decoration
- use fonts with a lot of edges, still something pixelated, or monospace fonts for smaller things
- tend to make no sense at all
- are touchscreens
- have some background images and transparency (hud-like, sometimes an overlay on the realworld)
- use a lot of graphical elements

Can I show a picture? Legally, I don't know, but watch baymax once or trice!

I tried to incorporate a lot of these ideas into the digidice app - let me know, if I missed something important.

## Notes, learnings & sources
- If you can't install it, it's probably installed and can only be installed once. The browser will hide the icon and not show it again. This cost me an evening of debugging.
- Form inputs are harder than I thought... at least for me, and dropdowns should really be better styleable in pure html / css without fancy hacks. Sorry devs for requests in the past. 
- It's fun to add / define elements to be added to the screen. I'm always amazed on how features grow from easy to super complex when programming. Stuff that is hard to describe initially takes form - Prototyping and defining directly in the medium is a lot of fun
- You can burn a lot of time, if IDs are not correct... Radiobuttons don't select on clicks and so on...
- Installing PWAs to mobile phones is impossible without deployment (or fancy setups) as the webserver in question needs https. While http is super simple to achieve, https seems not.
- having an outdated folder, "webapps" besides the new folder "webApps" counts for endless hours of 404 fun - time to make a custom 404 page btw.

The basic PWA and Service worker is based on info on these sites (regarding PWA / Service workers)
- [Mozilla dev intro to PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection)
- [Mozilla regarding service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Web.dev regarding service workers](https://web.dev/learn/pwa/service-workers/)

## Todos
- accept enter to submit the dice building form
- sound... imagine this also made a sound when rolling :)
