---
title: Segunda a second time
description: Sidebearings, Kerning and Glyphs revisited
date: 2022-04-10
tags:
  - typeface
  - typography
---

## Goals: fixing visible Flaws

While using [Segunda Regular](/articles/20210327_Type_segunda_regular/) on the Kindle, I noticed flaws in the typeface. While aesthetics are debatable, I was slightly concerned with the rythm of the glyphs based on sidebearings and kerning. Having used fontforge to design the typeface, and knowing kerning to be a tricky part (see further below) I initially decided to do nothing. However reading Death speak in Terry Pratchetts "Mort", the irregularity of the caps only passages suggested that I revisit the typeface again. 

Segunda Regular has multiple issues with spacing, and lots of issues are only addressed with kerning. Thus, when kerning is not available, the typeface looks even worse. Furthermore, there were some irregularities with decenders, the lowercase r was to wide, so was the j. Thus, I decided to make some smaller tweaks to the glyphs and to fix more of the spacing issues with sidebearings only. 

## How to find the correct distance between letters

[Segunda Regular](/articles/20210327_Type_segunda_regular/) was based on [Segunda](/articles/20210327_Type_segunda/), a geometric typeface, that was initially supposed to be monospaced. With my then limited knowledge, I assumed, that it would be easier to make a monospace typeface because, with equal width, there is no need for kerning (doh). Everything would follow geometric principles and all would be well (double doh). 

Issues where visible, but my grasp on the subject was lacking. After reading multiple books on typography and typedesign, I could identify approaches to solve some of the issues. Sources to get you started: 
- "Thinking with type" by Ellen Lupton
- "The stroke" by Gerrit Noordzij
- "Designing Type" by Karren Cheng
- "Shaping text" by Jan Middendorp
- "Helvetica", a Film by Gary Hustwit for a nice discussion of the famous typeface
- there is also a lot of info on the page [design with fontforge](http://designwithfontforge.com) 

Reading educates, and I learnt about the importance of the white space between the letters, of it's relation to the black strocke of the letter and the resulting rhythm. While there are multiple approaches to spacing letters, a simple one appears to be the rule of "three at a time" (see this [article on ohnotype](https://ohnotype.co/blog/spacing)). 

> When looking at any set of letters, always only look at three adjacent ones, if the one in the middle visually appears exactly in the middle, these three letters are correctly spaced. Then shift your focus one letter to the right and repeat. 

Three at a time is very handy when finding side-bearings for letters. Sidebearings are the whitespace on both sides of any individual letter. Sidebearings are one of the reasons, text of different sizes might not easily align. They also define te basic spacing between pairs of letters. Using "three at a time", sidebearings can be found visually using fontforge's metrics window.

In the same view, kerning can be done. Kerning defines rules, where the distance between two letters need to be adjusted, based on the form of the letter. Kerning can easily be seen in action with the following string "ToTbHoHb", where the lowercase o is moved below the capital T. Kerning can be done with individual pairs (say T and o, or H and o) or more efficiently with classes (where o, b, c, d might share similarities on either the left or the right). I'm not sure if there is a hidden benefit of either of the approaches, but kerning with classes appears to be way more efficient.

The approach of "three at a time" shows, where I think, kerning by classes could be improved in fontforge: the user interface only ever shows the two letters to be kerned against each other. No context is given, it is not possible to compare the string vs a string without the need of kerning, like "onoonno". Kerning becomes trial and error and again: correct side bearings seem to be more and more important. 

## The outcome
After some first tests, the typeface appears to be more evenly spaced. It's also a bit wider spaced, however, with the improved sidebearings, this is not always visible - words tend to have similar width. Even without kerning, the caps only passages appear to have a way better rhythm than before. I also took the liberty to change the name to "Neue Segunda". Maybe I'll merge the two typefaces replacing Segunda with Neue Segunda (and keeping the name). However, I feel like I should rather separate Segunda regular and Segunda bold again. 

Is it really better or am I only looking at the things that I have fixed? Time will tell... or maybe you can. 

The following paragraph shows the outcome with some "cupcake ipsum" text: 

<div class="text_sample">
<p style="font-family:'neuesegunda';font-weight:normal;font-size:0.9em; margin: 0.5em"> <mark>0.9em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
<p style="font-family:'neuesegunda';font-weight:normal;font-size:1em; margin: 0.5em"> <mark>1.0em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
<p style="font-family:'neuesegunda';font-weight:normal;font-size:1.2em; margin: 0.5em"> <mark>1.2em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
<p style="font-family:'neuesegunda';font-weight:normal;font-size:1.4em; margin: 0.5em"> <mark>1.4em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
</div>
<div class="text_sample_inverted">
<p style="font-family:'neuesegunda';font-weight:normal;font-size:0.9em; margin: 0.5em"> <mark>0.9em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
<p style="font-family:'neuesegunda';font-weight:normal;font-size:1em; margin: 0.5em"> <mark>1.0em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
<p style="font-family:'neuesegunda';font-weight:normal;font-size:1.2em; margin: 0.5em"> <mark>1.2em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
<p style="font-family:'neuesegunda';font-weight:normal;font-size:1.4em; margin: 0.5em"> <mark>1.4em:</mark> Cupcake ipsum dolor. Sit amet muffin carrot cake I love caramels brownie halvah & cotton candy. +"*ç%&/()=@#[]{}$£1234567890?. </p>
</div>

I'll probably update these again, incrementally (on this page, as there is always a missing kerning class) or radically (in a new article), and eventually it will wreak havoc on all the article-pages using the typefaces...