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

Well, robazoid was removed from the appstore by google (because I could not update it anymore - unity was developing faster than I could develop the game, also versioning in unity was a pain). The same moment, google removed my developer account (I had no app anymore) – something that I don't really understand but can't make nothing against. The game is still running on my phone, but who knows for how long... As the kid likes playing robazoid, I was thinking about rebuilding robazoid. After the experience with google I wanted no gatekeepers, the new game should run anywhere and be installable without the apples and googles of this world. I also didn't want to use unity anymore due to versioning pains. 

## The lure of the pixels
Ideally the new game would run on a retropie or batocera home setup, playable on the TV with any controller around. Looking for available platforms, I found some very nice, small environments that catered to the pixel nostalgia. Why not make something that could have run on a gameboy? It became clear that I want to make a retro game with pixel art. 
### Pyxel
The first suitable candidate was the [pyxel engine](https://github.com/kitao/pyxel). Something like pyxel or pico-8 that it was based on looked like an easy enough choice. I started drawing sprites and setting up simple movement and text display, when the kid looked over my shoulder. 

Drawing stuff and also pixel people is something kids love to do. I had him draw characters on paper and added them to pyxel where I had them move using arrow keys. Seeing characters animated was a lot of fun. However, when trying to run the pilot on the raspberrypi batocera, it turend out that run options are limited to non raspberry pi setups (i.e., on other linux machines).
### Godot
I decided to switch to something else. Looking around, I found [godot](https://godotengine.org/), another game engine. Godot is similar to unity, but opensource, has a big following and lots of documentation. While this does not work with batocera either (or maybe it does, as version 3.5 hat someone porting runtimes), it is way less limited in run options than unity, or pyxel. 

Luckily, there's a ton of things in the internet. Make no mistake, godot is not easy to use or needs a lot of getting used to. Some things are not very well organised, there are a lot of seemingly hidden things, or nested menus or special things that need to be considered. The good and that's the thing that sold me: you can just use git on the folder your game runs in. Up to now, it seems to work like a charm, all changes and links made in the editor are converted to text by the engine, everything could be done in simple text. Getting a stable git setup is something I never managed to do in unity on the free plan, and the main reason I lost the source for the robazoid. 
## Projects when kids are involved
Projects are a bit harder with kids. Kids have lots of ever changing ideas and those ideas and goals change quickly. Every impression can change their desires or their current top goal.

> Similar to working with a client with no vision or planning, scope management is one of the most important parts of development with kids.

However, sometimes, and this is mainly true for our own projects, we can just expand the product and pivot everything into something new. 

### Making it more fun
Thus, instead of one playable character, after watching elsa in Frozen, we had to add Elsa as a main character. What about the initial character (the rabbit in the thumbnail)? Well, we can now switch and have a character selector at the start of the game.

Initially both characters had the same moves and changing was aesthetics only. This was rather boring. Now characters can be switched in the game and sometimes have to be switched to reach certain things. Currently, the rabbit can shoot plasma and Elsa can create ice blocks to change the environment.

While changing and implementing these things is a lot of work, it leads to more fun and better games – instead of a simple jump'n run game, the game is now some puzzle platformer. It also led to better understanding and revision of the games code architecture and programming in general (and a lot of patched up code in some cases). I've been revisiting singletons, factory patterns and so on just to implement some of the functions.

### Little beta testers
Kids are not only good at coming up with fresh ideas, they also are splendid beta test partners. They tend to try things, that you don't do. However, they don't notice anything odd. Ice cube in a strange position? Game over on one hit? Everything part of the intended experience. Even the game crashing is completely normal, so experienced supervision of testers is advised. 

## Topics without stakeholder intervention
Kids are mainly interested in playing a game. Drawing sprites is fun, seeing these sprites in action is even more fun. But there are other things 

### Learning the game engine
A new program is always a bit of a learning curve. Watching videos, reading tutorials helped a lot and lead to discover best practice patterns. Implementing these again took a lot of refactoring. What was an easy scene initially had to change due to the player switch or a multi level approach or enemies able to shoot things or a game over screen or a simple hud. There is a lot of ways on how to do certain things and I guess, there will be a lot more to change and rebuild again and again.

I can't stress this enough: What I like a lot in Godot is being able to use git for versioning on the game folder. So far it has been very easy to check different versions against each other, branch on risky refactoring and do some resets when everything falls apart. 

### Games have a lot complexity
Strange things happen all the time - where collisions trigger multiple times or the position of a sprite is a bit off (by 0.024 pixels) hooking the player character in place. These things lead to bugs and keeping track of all these is not an simple task.

### Sprites
Part of the sprites are based on kids drawings, the rest, I do myself. I guess the look could be more polished, but I like doing everything myself instead of copying or grabbing other peoples work. It's easier in the longrun to adjust things a little bit, get a consistent look or just do things your way.

I don't build programs to build ressources however. For sprites I've been checking programs and ended up on Pixelorama that is also built in the Godot-Engine. It supports simple animation and allows me to build spritesheets. There are some things I miss however - merging multiple animations frames into one spritesheet. Still, everything visual in the new game is made in Pixelorama (apart from the fonts).

### Music and sound effects
The first Robazoid never had sound effects. Something I was planning to fix, but never managed to. Pyxel however had a beat machine built in (it's a lot of fun using MML music language apparently) - I suggest trying it out just for the music part alone - it's a lot of fun.

Sadly I couldn't export sound out of Pyxel or interpret MML in godot. The current workaround is garage band (I use a mac) with the [YMCK magical 8 bit plugin](https://ymck.net/app/magical-8bit-plug-en). YMCK is also available on other platforms should I ever decide to move away from a mac again. Garage band is not easy to use without a real midi controller (piano keys), but I managed to add some simple soundeffects.

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