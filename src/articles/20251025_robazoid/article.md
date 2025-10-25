---
title: Pixel Things
description: Adventures in Game Design. After around 10 years, Robazoid is disappearing from the digital world – time to make a new game. 
date: 2025-10-25
evolution: 2
previewImage: Robazoid-Preview.png
urlbase: '/articles/20251025_robazoid/'
fontname: AD-Pixelorama8-Regular
sampletext: 0.123456789 09:22 - Pixels are special
tags:
  - typography
---

## Making computer games
I've been making silly computer games for a long time. I still have a copy of a jumping sheep game I made as a kid (in some game studio I don't remember the name of with sprites and art made in Paint and Photoshop). I remember multiple games and changes to games made during computer science studies (Sheeps and wolves, Ursuppe, Snakes and ladders - command line among others).

Then around spring / summer 2014 the first instance of robazoid made in unity while looking for jobs. What's available on the net is [the promo-video for the appstore](https://www.youtube.com/watch?v=PA_EibAH0K8) in hindsight, the start is a bit tricky to watch - but it shows the controls. The game was designed to be very hard, after I read an article on hooking people with random gratification explaining the success of "flappy bird". 

###

- goal: replace old robazoid game that was removed by google, sure to not use unity anymore (was changing faster than I could build a simple game) - but the game is still running on my phone, even though it can't be installed anymore. Hence no gatekeepers, the new game should run anywhere and be installable without the apples and googles of this world.
## Pixel stuff
- Clear to me, to do some pixel things
- tried to mess with pyxel, was looking ag pico-8 (this would be best, honestly, running this on a tv in the living-room)
- starting with drawing sprites and setting up a simple movement and text display in pyxel. drawing pixel people is something kids love to do and it looks like a small wonder to them seeing the figure move.
- drawing sprites is easy for the kid - the bunny
- but it turns out (when I tried to run it on the batocera) run options are limited to non raspberry pi setups
- decided to switch to something else, looking around
- tried godot - while this does not work with batocera either, it is way less limited in run options. 
- luckily as always, there's the internet with tons of guidance, as godot is not easy. there are a lot of seemingly hidden things. The good: just use git on the folder, it seems to work like a charm - something I never managed to do in unity (and the main reason I lost the source for the game)
## when kids are involved
Everything is a bit harder obviously. Kids have lots of ever changing ideas. Every impression can change their desires. Similar to working with a client with no vision or planning, scope management is one of the most important parts of development.
However, sometimes, we can just expand the product and pivot everything into something new. Instead of one playable character, after watching elsa in Frozen, we also had to add elsa - but lowing the initial character? Well, we can now switch and have a character selector at the start of the game. Initially both characters had the same moves, but that was rather boring. Now characters can be switched. While changing and implementing these things is a lot of work, it leads to better understanding in some cases and a lot of patched up code in other cases. I've been revisiting singletons, factory patterns and so on just to implement some of the functions. 

## little beta testers
Kids are not only good at coming up with fresh ideas, they also are splendid beta test partners. They tend to try things, that you don't do. However, they don't notice anything odd. Ice cube in a strange position? Game over on one hit? Even the game crashing is completely normal, so experienced supervision is needed. 


## Topics without stakeholder intervention
Kids are mainly interested in playing a game. Drawing sprites is fun, seeing these sprites in action is even more fun. But there are other things 

### Don't underestimate learning the game engine
A new program is always a bit of a learning curve. Watching videos, reading tutorials helped a lot and lead to discover best practice patterns. Implementing these again took a lot of refactoring. What was an easy scene initially had to change due to the player switch or a multi level approach or enemies able to shoot things or a game over screen or a simple hud. There is a lot of ways on how to do certain things and I guess, there will be a lot more to change and rebuild again and again.

What I like a lot in Godot is being able to use git for versioning on the game folder. So far it has been very easy to check different versions against each other, branch on risky refactoring and do 

### Games have a lot complexity
Strange things happen all the time - where collisions trigger multiple times or the position of a sprite is a bit off (by 0.024 pixels). These things lead to bugs and keeping track of all these is not an simple task. Furthermore  

### Music and sound effects
The old Robazoid one never had sound effects
- MML chiptunes - part of pyxel and pico-8
- using garage band (as I could not export from pyxel) with YMCK magical 8 bit plugin - it's not easy without a real midi controller, but I hope I'll be able to do some things.

### Fonts
My previous fonts did not work very well to a pixel environment (even the early ones that were quite quadratic). The reason is found in font rendering of pixels where the letters are antialiased (i.e., not sharp) due to not matching the pixel grid or not enough hinting (i.e., matching the fonts geometry to pixel grids).
Well, it was time, to make a pixel font, a plan I had ever since I've seen a talk by Marcin Wichary ([check out his page](https://aresluna.org/), [talk about pixel fonts](https://www.youtube.com/watch?v=SDI8ubVZi7w)). 

The result is Pixelorama8. The font is best used at 8 px (thus the 8 in the font name) 

{%include 'partials/textsample.njk' %}

{%include 'partials/typographic-link.njk' %}

Sidenote... As the game is low resolution, the first font was as big as the player char still and not compressing nicely on lower resolutions.

> speak after me: a pixel is a pixel is a pixel

I Had to scale the whole game to use 16px sprites to make the font smaller still. Turns out, this was rather easy to apply in godot (just double everything, but I had to redraw / scale all the sprites). 

Smaller resolutions need smaller fonts. Apparently can go down to 4 px (well, there is a 2 pixel font, but it's tricky to read easily) - we will see, what we need

## The Todo-List
- This currently only works on my machine from Godot - export this to something more public on where it can be played.
- Hopefully there is some way to play this on batocera or retropie... but the internet will do as well... Godot can push to the web - so maaaaybe on this page?



## Trash collector

Text

The following gives a textsample
{%include 'partials/textsample.njk' %}


The following gives a textlink
{%include 'partials/typographic-link.njk' %}


![the final product ready to give away, with branding finalized](./../Stamp.png "Mouse-Over-Text")
Images: 1000px wide

This: [Eleventy or 11ty](https://www.11ty.dev/) is a link

More text

start me with npx eleventy --serve
