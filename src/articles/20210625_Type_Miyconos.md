---
title: Icons & Ligatures - Creating an icon font
description: There are icon fonts available, but you can make your own and learn about ligatures among other things
date: 2021-06-25
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
.Entryicon{
  font-family:'miyconos';
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
<div class="text_sample" style="display:flex; flex-wrap:wrap; justify-content:flex-start; flex-direction: row; margin:0em">
<div class='Entryicon'><p>File</p></div>
<div class='Entryicon'><p>Magnify</p></div>
<div class='Entryicon'><p>Search</p></div>
<div class='Entryicon'><p>Sun</p></div>
<div class='Entryicon'><p>Cloud</p></div>
<div class='Entryicon'><p>Rain</p></div>
<div class='Entryicon'><p>Flash</p></div>
<div class='Entryicon'><p>Cold</p></div>
<div class='Entryicon'><p>Warm</p></div>
<div class='Entryicon'><p>Hot</p></div>
<div class='Entryicon'><p>Snow</p></div>
<div class='Entryicon'><p>Star</p></div>
<div class='Entryicon'><p>Pentagram</p></div>
<div class='Entryicon'><p>Smile</p></div>
<div class='Entryicon'><p>Laugh</p></div>
<div class='Entryicon'><p>Person</p></div>
<div class='Entryicon'><p>Happy</p></div>
<div class='Entryicon'><p>Angry</p></div>
<div class='Entryicon'><p>Holy</p></div>
<div class='Entryicon'><p>Satanic</p></div>
<div class='Entryicon'><p>Love</p></div>
<div class='Entryicon'><p>Peace</p></div>
<div class='Entryicon'><p>Luck</p></div>
<div class='Entryicon'><p>Football</p></div>
<div class='Entryicon'><p>Espresso</p></div>
<div class='Entryicon'><p>Letter</p></div>
<div class='Entryicon'><p>Pen</p></div>
<div class='Entryicon'><p>Erase</p></div>
<div class='Entryicon'><p>Trash</p></div>
<div class='Entryicon'><p>Bulb</p></div>
<div class='Entryicon'><p>Light</p></div>
<div class='Entryicon'><p>Settings</p></div>
<div class='Entryicon'><p>Lock</p></div>
<div class='Entryicon'><p>Key</p></div>
<div class='Entryicon'><p>Open</p></div>
<div class='Entryicon'><p>Oneup</p></div>
<div class='Entryicon'><p>Invader</p></div>
<div class='Entryicon'><p>Ghost</p></div>
<div class='Entryicon'><p>Skull</p></div>
<div class='Entryicon'><p>Tiki</p></div>
<div class='Entryicon'><p>Monkey</p></div>
<div class='Entryicon'><p>Beholder</p></div>
<div class='Entryicon'><p>Flower</p></div>
<div class='Entryicon'><p>Rudder</p></div>
<div class='Entryicon'><p>Eye</p></div>
<div class='Entryicon'><p>UXA11Y</p></div>
<div class='Entryicon'><p>Maniculeright</p></div>
<div class='Entryicon'><p>Maniculeup</p></div>
<div class='Entryicon'><p>Maniculeleft</p></div>
<div class='Entryicon'><p>Maniculedown</p></div>

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

