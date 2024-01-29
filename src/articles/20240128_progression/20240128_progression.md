---
title: Alea Iacta Est
description: Building a simpler PWA
date: 2024-01-28
evolution: 1
tags:
  - html
  - css
---

## Let's roll

Will apps always dominate the different ecosystems? Probably not. While the internet might as well be replaced somewhen in the future, it appears to be replacing app-stores for some years now, only hindered by lock-ins from the different vendors (mainly apple). PWA's or progressive webapps seem to be an obvious thing. Easily updated, distributed anywhere on the web, no need for an appstore or compliance. Obviously, there is some benefit app stores bring, but still, PWAs seem to open a lot of doors. As a designer I didn't really understand all the PWA things. We tend to be plattform agnostic, the design works everywhere. However, PWAs service workers bring additional benefits to websites and webapps, that are not to be overlooked (or let in the hand of devs only). 

Since my first attempt at programming a PWA was hindered by the fact, that building a "different" clock is harder than it seems (business or science behind time, not technology), this attempt is a dice rolling app. The kid is currently at an age, where games are more and more important. Boardgames or similar are sometimes more fun than something digital (and parents love analog things way more than digital stuff). But where do you roll in a train? Enter digital dice. 

I'm sure, an app for this usecase exists somewhere (remember, there is nothing new under the sun). Still, it's an easy enough usecase for everything related to webdevelopment, PWAs and so on. Feel free to use and install it. Suggestions? Send me a message...

The app can be found [here](/webApps/DigiDies/index.html).

## Futuristic GUI
Thoughts to be added in a later update...

## Notes Learnings & Sources
- If you can't install it, it's probably installed and can only be installed once. The browser will hide the icon and not show it again. This cost me an evening of debugging.
- Form inputs are harder than I thought... at least for me, and dropdowns should really be better styleable in pure html / css without fancy hacks. Sorry devs for requests in the past. 
- It's fun to add / define elements to be added to the screen. I'm always amazed on how features grow from easy to super complex when programming. Stuff that is hard to describe initially takes form - Prototyping and defining directly in the medium is a lot of fun
- You can burn a lot of time, if IDs are not correct... Radiobuttons don't select on clicks and so on...
- Installing PWAs to mobile phones is impossible without deployment (or fancy setups) as the webserver in question needs https. While http is super simple to achieve, https seems not.

The basic PWA and Service worker is based on info on these sites (regarding PWA / Service workers)
- [Mozilla dev intro to PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection)
- [Mozilla regarding service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Web.dev regarding service workers](https://web.dev/learn/pwa/service-workers/)

## Todos
- check if it works
- check if the service worker does it's thing
- should the service worker cache the current dice setup
- the log is not yet clear

