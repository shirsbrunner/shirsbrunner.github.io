---
title: Surving the waves
description: Ready to radio
date: 2026-10-18
evolution: 1
previewImage: RadioWeaver-Preview.png
urlbase: '/articles/20261018_radioweaver/'
tags:
  - html
  - css
  - gadgets
---

## Let me ramble about the olden days, like the old guy I am
When I was younger, I listened to the radio every day. Radio was a constant companion with music, quizzes, tales and news. Growing up I switched away from the channels, my parents were listening to, to the cool ones intended for the younger generation. 

But eventually, a time came, when I only listened to music on demand, to my collection of mp3s. We were sharing discs and collections among friends. On the road, a disc man, or an Ipod was catering to the taste better than whatever was on air. Most probably it was also availability while walking or on public transport. Outside of a car, nobody was using a small portable radio.

Scrobbeling stuff to last.fm was insightful for comparing taste in music and to analyize my own behaviour. Listening to the current favourite song 20 times in a row? Indeed.

## Listening to music on demand
After it being a constant companion, nowadays I only listen to the radio, when I don't wake up before the alarm. And even then, it's probably on for around 5 seconds a day before I turn it off to get up.

When listening to music my choice of medium has been LP's and MP3's and youtube music videos. I still use CD's, albeit rarely. Those are from that phase, when CDs went and MP3 grew. Music that I never ripped and then forgot in the box – I don't really have an optical drive at arms length anymore.

Luckily, in Switzerland, public radio also allows you to download a lot of podcasts of stories and tales to listen in your own time - these also come as MP3. 

> Sidenote: I will never understand people who want to defund public television and radio. Why would you want to listen to often not so stellar content riddled with adds the whole time? And at the same time eliminate a public ecosystem of very good content?

At work, outside of client ecosystems, I used to listen to music on youtube, where I have a lot of playlists. The time spent at clients offices again was MP3-world.

## The lure of the streaming service
Why stop listening to music on demand? Apparently... after a certain age, people don't really change taste in music anymore. I guess it happens, because of canned music, music that you own. We stop exploring, people don't share mixtapes anymore, we are not exposed to a diverse taste anymore.

Well, maybe it's just me or my generation. Maybe growing up with your limited personal music collection shapes different listening habits than growing up in a world where everything is available all the time.

Also, eventually, listening to the same thing over and over gets a bit boring? So, why not conveniently switch to spotify? I never got the appeal of spotify or similar algorithmic streaming services. It's like radio, but missing the diversity of content, the explorability. Also these services are not paying artists very well.

## Getting into explorer mode again
How to embrace the exploring again and why would you change your habits? Suddendly, you find yourself with a kid that brings home new music and wants to explore a developing taste, while you get sidecar experience of learning, what's cool nowadays. 

In my case, it's also switching jobs into a more restricted ecosystem. Working as an inhouse designer has its advantages and its drawbacks. Not working on my own machine I'm hesitant on just using youtube in the office browser. To stream it to the mobile phone, the phone must be active, else the stream stops (because google want's to sell an upgrade).

## The appeal of webradio
I don't know about you, and maybe I'm a romantic, but radio is currently ticking a lot of boxes for me. Other people listen to radio too. And with the internet, we can listen to radios from allover the world.

After landing on CJ Dunns work playlist via social media (check out his type work over at [CJType](https://cjtype.com/)), I felt inspired to building (read glueing together) another PWA - this time, it's a webradio. 

<div class="cta">

Still very WIP (See below, but here you go) [Get the app here](/webApps/RadioWeaver/)

</div>

Don't trust the app (yet)? Just click any stream you find and your browser will open it. The app just facilitates switching channels. You could even just use some bookmarks for more or less the same functionality. 

## Some notes about the app
### Features
- PWA - add your own radios
- Export your radios as a JSON and import them in another instance, or when switching devices.
- Change a single radiostation if you must (give it a name and a stream)
- Only 5 Radiostations. 
- Works like these car radios from the olden times, with 5 Radiobuttons (why would you need more) and a stop button.

### Things that probably need fixing
- There are only 3 out of 5 radiostations at the start. If you use an Iphone, Radiostations need changing every time you open the app, I guess - Hopefully Apple will somewhen in the future allow to install PWAs easily. 
- Sometimes when switching, Radiostations don't load and there is only selfmade static even though the radios should be there... I guess it's related to switching too fast, while the stream has not yet been loading.

### Notable things
- Even thought I try to sanitise some inputs, don't just upload anything you find on the internet...
- I'm thinking about some sort of visualisation in the orange box on the upper right. But maybe I'll just fake it visually into a loudspeaker. 
