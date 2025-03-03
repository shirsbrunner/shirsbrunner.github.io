---
title: Advice in complex situations
description: PWA for your obliques
date: 2024-10-09
evolution: 1
urlbase: '/articles/20241008_obliques/'
previewImage: Obliques-Preview.png
tags:
  - html
  - css
---

## Oblique strategies

Oblique Strategies is a set of initially 55 cards by Brian Eno and Peter Schmidt. The cards contain suggestions to break dilemmas or deadlock situations, some specific to music design, others more general. Note, that an official (?) set can still be bought in an online store. There are however a myriad of implementations available on the internet. 
Interested in trying out the method, I was thinking about creating my own set for ages. Some people just write the suggestions on a set of playingcards – I was more thinking on printing a set but never really finished.

## Thoughts and adapting 

I assume, the cards (after the original set written on disused prints) have deliberately been "no-frills" - only the text should help over a writers block. Hence, using a design as neutral as possible.

However... The typeface, the haptics of the paper, the colour of the paper, the colour of the text all add some sort of quality and meaning to the message. When printed on playing cards, do I get different outcomes compared to a set printed on quality-paper using letterpress?

The same most probably is true for the language. Using the original set of advice, does the fact that it's given in english change the outcome for me as a non native speaker? Does having to think about the word and potential misunderstandings change the outcome? Probably more than the quality of the print. 

I decided long before the current implementation, on using a Swiss German translation. Interpretation of words written in english and translation to Swiss German has it's challenges and probably also changes meaning. Also tricky: there is no real grammar in Swiss German (that I'd know of). Learn more about the topic on [Wikipedia](https://de.wikipedia.org/wiki/Schweizerdeutsch). 

But will it be usable in a UX-Design setting? Time will tell. 

## Well, this is a PWA again

I kind of love creating little PWA's and base each one on the previous one. Obliques is another PWA to have handy on my phone. 
<div class="cta">

Want to try it out? [Get the app here](/webApps/Obliques/)

</div>

It would probably be easy to change this into a flash-card app. I've also been thinking about expanding the JSON-logic, to make it possible to add arrays of elements (i.e., multiple lessons, multiple sets of inspiration) triggering a select if more than one set / array is available. 

## Features
- Reading content from a JSON-File - changing the JSONs content changes what the app shows (in hindsight, this probably makes caching for the PWA harder and is not as easy to update as it could be).
- There is a small ODS-Libre office file that helps on writing the JSON
- Dialog element for the additional info
- Fancy "has:"-focus magic
- Utopia again

## Todos
- Should the app also be in Swiss German? Or maybe add a bit of localization...
- I'm really behind with accessiblity on this one as well. How should the advice-text be ideally announced without being super annoying? How well do screen reader work with Swiss German? 
- Additional JSON-Magic, maybe allow for an override in local storage or something for easier changes to the content of the file.
- I'm pretty sure this might use a different typeface to be more "neutral", maybe also less colour, only black and white or something.
- There are other creativity methods - maybe this could be an app including multiple approaches? 
- What about pictures? 
- What about adding addional suggestions in the app (or removing non working ones)?