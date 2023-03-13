---
title: Icons & Ligatures - Creating an icon font
description: There are icon fonts available, but you can make your own and learn about ligatures among other things
date: 2021-06-25
evolution: 2
tags:
  - typeface
  - typography
---

## Icons, icons, icons

With fontawesome people are used to seeing the same icons in lots of projects. As icons are not always given the same meaning sometimes confusion is the result. There are other icon sets available, but sometimes the icons will just not match what you are trying to do. Not that I have big plans with icons, but after some at work talk about designing icons, I decided to leverage the power of fontforge, learn about ligatures and generate an icon font. The hardest part? You need some icons. Even harder: standard icons are boring to design. 

> However, inspiration is hard to confine within a container that will be used at fontsize 8 and smaller

The result of the exercise is a wonky icon-font with a lot of icons probably not suited to any purpose. Forever work in progress, I intend to add additional icons and update the existing ones given time and necessity. For the time being I could already sneak one of the less peculiar ones in a work prototype. 

Let me know if you want to use the icons for anything and/or if you miss a special icon. 

## The outcome

<style>

@font-face {
  font-family: 'miyconos_post';
  src: url('Miyconos-Regular.woff2') format('woff2'),
       url('Miyconos-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;

}

.Entryicon{
  font-family:'miyconos_post';
  font-size:2em;
  margin:0.25em;
   
  flex-basis: 1em; 
  font-variant-ligatures: common-ligatures; 
  text-rendering: optimizeLegibility;
}

.Entryicon p{
  margin: 0em; 
}
</style>
<div class="text_sample" style="display:flex; flex-wrap:wrap; justify-content:center; flex-direction: row; margin:0em">
  <div class='Entryicon'><p>file</p></div>
  <div class='Entryicon'><p>magnify</p></div>
  <div class='Entryicon'><p>search</p></div>
  <div class='Entryicon'><p>sun</p></div>
  <div class='Entryicon'><p>cloud</p></div>
  <div class='Entryicon'><p>rain</p></div>
  <div class='Entryicon'><p>flash</p></div>
  <div class='Entryicon'><p>cold</p></div>
  <div class='Entryicon'><p>warm</p></div>
  <div class='Entryicon'><p>hot</p></div>
  <div class='Entryicon'><p>snow</p></div>
  <div class='Entryicon'><p>star</p></div>
  <div class='Entryicon'><p>pentagram</p></div>
  <div class='Entryicon'><p>smile</p></div>
  <div class='Entryicon'><p>laugh</p></div>
  <div class='Entryicon'><p>person</p></div>
  <div class='Entryicon'><p>happy</p></div>
  <div class='Entryicon'><p>angry</p></div>
  <div class='Entryicon'><p>holy</p></div>
  <div class='Entryicon'><p>satanic</p></div>
  <div class='Entryicon'><p>heart</p></div>
  <div class='Entryicon'><p>peace</p></div>
  <div class='Entryicon'><p>luck</p></div>
  <div class='Entryicon'><p>football</p></div>
  <div class='Entryicon'><p>espresso</p></div>
  <div class='Entryicon'><p>letter</p></div>
  <div class='Entryicon'><p>pen</p></div>
  <div class='Entryicon'><p>erase</p></div>
  <div class='Entryicon'><p>trash</p></div>
  <div class='Entryicon'><p>bulb</p></div>
  <div class='Entryicon'><p>light</p></div>
  <div class='Entryicon'><p>settings</p></div>
  <div class='Entryicon'><p>lock</p></div>
  <div class='Entryicon'><p>key</p></div>
  <div class='Entryicon'><p>open</p></div>
  <div class='Entryicon'><p>oneup</p></div>
  <div class='Entryicon'><p>invader</p></div>
  <div class='Entryicon'><p>ghost</p></div>
  <div class='Entryicon'><p>skull</p></div>
  <div class='Entryicon'><p>tiki</p></div>
  <div class='Entryicon'><p>monkeyhead</p></div>
  <div class='Entryicon'><p>beholder</p></div>
  <div class='Entryicon'><p>flower</p></div>
  <div class='Entryicon'><p>rudder</p></div>
  <div class='Entryicon'><p>eye</p></div>
  <div class='Entryicon'><p>uxally</p></div>
  <div class='Entryicon'><p>maniculeright</p></div>
  <div class='Entryicon'><p>maniculeup</p></div>
  <div class='Entryicon'><p>maniculeleft</p></div>
  <div class='Entryicon'><p>circle</p></div>
  <div class='Entryicon'><p>dotcircle</p></div>
  <div class='Entryicon'><p>enso</p></div>
  <div class='Entryicon'><p>spiral</p></div>
</div>

## Lessions learned

Among other things in no special order
- You need an alphabet to write the ligatures making up your icons, else the ligature lookup does not work. While missing letters are replaced with a standard alphabet in a text editor, only existing letters can be linked together to form a ligature. Maybe this is a fontforge-only problem. Obviously, you could use the alphabet for icons too, however this will give you a hard time trying to correctly type the base for the ligatures. 
- Icons can be placed in the Unicode Block "Private Use Area" from U+E000 to U+F8FF. This potentially gives you a font with 6400 icons. There seems to be usage for certain blocks however (Linux uses some Private Use Area blocks for System usage). Note that to come up with even 1000 Icons is hard. If you need different styles it pays to generate additional fonts
- Fontawesome has a lookup table for every single ligature. They include different spelling, all caps and so on. Also they have a prefix at the start of every ligature to make it impossible for you to accidentially use one of the ligatures in a text. I'm pretty sure that doing this for the fontawesome icons is a lot of work and I doubt that it is needed for this icon-font. 
- Currently the icons do not all have the same line weight or size. I tried eyeballing the visual weight and density and adjusted the thickness of lines to create something consistent. Depending on the shape, this was not always possible. Also I mix sizes, baselines and sometimes styles. Looking at the icon guidelines of material design can teach you a lot about how to set up a "language" for icons before you start with your own set. [Link to the material design guidelines](https://material.io/design/iconography/system-icons.html#design-principles)
- Iconfonts have the same issues that can be seen in "normal" fonts. It is hard to make them pixel perfect, hinting is a pain. Also they work on some sizes and look very bad in other sizes. 
- In use, ligature Icons have an impact on accessibility, as a screenreader will not show the icon, but read the text. Imagine using a an icon called "pentagram" for a function that visually displays "stars". Confusion is the outcome. I'm not even speaking of multilingual icon fonts. It might be possible to correctly translate the text using a language file, if the icon font allows you to use multiple languages (again, this font does not, yet). There are other ways to fix this issue... maybe one should just use SVGs. Advantage? As it is a ligature, the screenreader can read the text - else specific html might be necessary. 
- Icons can be shown using the Unicode-Values. If the ligature is not showing, make sure it is in the font. Fontsquirrel, that I use to create the webfonts, actually removes the Private Use Area unless you tell it not to. To find out this fact while creating the samples above cost me some hours... As soon as you correct this (during creation go to "Expert" and click "no subsetting", keep the rest) icons will show up.
- With ligature-lookups conflicts are possible. If there is a ligature called ABC and a different one called ABCD conflicts might only show the shorter one. I am not really sure about the precedence of one case over the other, but I suggest making non conflicting names. 

## Update 2023.03.11

With a move to glyphs mini and a recent update to the page, the icon-font has also been updated. 

I changed some icons and added new ones used in the adjusted design. This lead to a change in labeling for certain icons (to make labeling more neutral). While some icons initially had multiple keys, with glyphs mini this is sadly not possible without having duplication (should have gotten glyphs 3...). Also numbers don't work anymore (See the UXA11Y glyph where I had to replace the 11 with ll). 

A lot of the icons still need a touch up and I have yet to check for hidden changes resulting from the move to the new design program.