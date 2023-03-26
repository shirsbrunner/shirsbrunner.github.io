---
title: Circle time
description: Another typeface with a geometric base
date: 2023-03-14
evolution: 1
tags:
  - typography
---

## Making something pretty for once?

While my initial typefaces were of a rather edgy design, most type used in print or the web uses round forms now and then. After digitizing handwriting I continued with edgy design because it seemed easier to base it on a simple grid system in designer. 

While the initial typefaces did not find a lot of use in everyday life, I've been looking to design something "prettier" (read: more similar to typefaces for everyday use). Using my previous templates I started to build up letters and shapes in Affinity Designer. Having artboards and grids set up led to an easy, quick start. 

## Based on circles

Instead of using a square for the foundation of the typeface, I decided to use a circle. Using a circle-based grid allows for the easy generation of most of the lower case letters. However when designing the upper case letters, I realised, that basing everything on circles leads to huge differences in the width of the letters (Example: comparing the capital O and the capital I). While there is room for creativity, it is up to the designer to decide on what end of the spectrum most of the other letters end up. 

In addition, in the first iteration, the contrast between lower and upper case was to big and letters were overall to small (to allow for ample descenders and space for accents). In a second iteration I changed the ratio between lower and upper case using measurements on other fonts. 

It took a third iteration to end up with a design that was readable in "normal" sizes and had a more pleasant rhythm between upper and lower case. Surely all iterations are part of the learning curve. 

## Fontforge on a mac
In addition to multiple changes in the base file with subsequent copying and processing in fontforge, I switched from a windows pc to a mac in summer 2022. I initially used fontforge on the mac, however issues with the rendering of the GUI (invisible checkboxes) made creating typefaces tedious since kerning the typeface was just not possible anymore. 

I decided to try out [Glyphs Mini](https://glyphsapp.com/) (Cheap, nice, can apparently do most of the relevant things, the "big" app can do). Let me say, that the transition from fontforge was not easy:
- Downloading a trial version of both apps (Glyphs 3 and Glyphs mini)
- Exporting UFO-files from fontforge into Glyphs 3
- Transforming and renaming glyphs and cleaning up the data
- Save as Glyphs 2 File and reimport everything into Glyphs mini
- Rename Ligatures, accents, some of the glyphs
- Finally be able to work on the typeface again

Still, I don't look back. Glyph Mini is a very nice piece of software considering the price and I will eventually upgrade to the bigger version for more control and better support of fancy type features (also kerning smallcaps). 

## Yeah, yeah, show me the typeface...

The following paragraph shows the outcome with some "cupcake ipsum" text: 

<style>
@font-face {
  font-family: 'grancirculos';
  src: url('GranCirculos-Post.woff2') format('woff2'),
       url('GranCirculos-Post.woff') format('woff');

       src/articles/20230314_circletime/GranCirculos-Regular.woff
  font-weight: normal;
  font-style: normal;
}
</style>

<div class="text_sample">
<p style="font-family:'grancirculos';font-weight:normal;font-size:0.9em; margin: 0.5em"> <mark>0.9em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
<p style="font-family:'grancirculos';font-weight:normal;font-size:1em; margin: 0.5em"> <mark>1.0em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
<p style="font-family:'grancirculos';font-weight:normal;font-size:1.2em; margin: 0.5em"> <mark>1.2em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
<p style="font-family:'grancirculos';font-weight:normal;font-size:1.4em; margin: 0.5em"> <mark>1.4em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
</div>
<div class="text_sample_inverted">
<p style="font-family:'grancirculos';font-weight:normal;font-size:0.9em; margin: 0.5em"> <mark>0.9em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
<p style="font-family:'grancirculos';font-weight:normal;font-size:1em; margin: 0.5em"> <mark>1.0em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
<p style="font-family:'grancirculos';font-weight:normal;font-size:1.2em; margin: 0.5em"> <mark>1.2em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
<p style="font-family:'grancirculos';font-weight:normal;font-size:1.4em; margin: 0.5em"> <mark>1.4em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
</div>

I like the soft character of the typeface. 

## Things to improve
- I'll probably have to look at the kerning or the sidebearings or a combination of both again and again and again.
- Certain letters might need some additional character.
- On letters like b,n the intersection between bowl and stem can be improved.
- There are other small things like the width of vertical / horizontal segments that still puzzle me without sticking to best practice.
- [Overshoot](https://en.wikipedia.org/wiki/Overshoot_\(typography\)) - I'm pretty sure there are issues with certain letters due to stretching without adapting curvature of lettershapes.
- probably the x-height of the f-ligatures (ff, fi, fl ffi...)

## Learnings
- Apparently the "round typeface" is something everyone tries to do once in their career
- Balanced contrast between wide an narrow letters is tricky
- Kerning is harder with round shapes
- Kerning is way easier in Glyphs than in fontforge
- Switching from fontforge to Glyphs is a pain (Kerning, Ligatures, Metrics, all lost in translation)
- Designing directly in Glyphs is way easier than in fontforge. The need for a design-software like affinity designer disappears.
- Look up the  about the ideal thickness of strokes in relation to glyph-height again, before designing the next typeface (or make it a variable font)
