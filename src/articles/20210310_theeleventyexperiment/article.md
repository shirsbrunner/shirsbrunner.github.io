---
title: The 11ty-experiment
description: Building a static page that can be easily updated
date: 2021-03-10
updateDate: 2025-01-20
evolution: 2
urlbase: '/articles/20210310_theeleventyexperiment/'
previewImage: 11ty-Preview.png
tags:
  - html
  - css
---

## Building a static page

While browsing the web, I stumbled over the topic of static page builders. [Eleventy or 11ty](https://www.11ty.dev/) is one of these "pipelines", that build a static page out of templates and allow to add articles and pages easily using base documents in simple markdown language. 
As a former computer science student, I was eager to try out the mechanism. Apparently it was "simple" enough for someone as rusty as me. 

Since it seemed, that the 11ty-page does not really cater to the rusty programmer or eager noob, I was looking up some tutorials. In case you want to start something like this, know, that it is not to hard, but neither super simple. Blogs and the 11ty-pages have a lot of documentation. Obviously, buying some space on wordpress.com would make your life easier at the additional cost of flexibility. 

I know, that I'll have to look up everything again and again, if I ever try to change something on this page (looking at you accessibility). Hence, this log entry.

But after some time, I have to admit: It's a good way to learn more about the web.

## Why would you want a static page

It's more or less free (if you don't value your time) and you get to learn something while fooling around in text editors. You can easily change everything you want, without having to pay additional things (looking at you wordpress - want to change something small on your page? Pay more).

Since it does not need a database, all it needs is space. You can get away with very cheap hosting. You can host your page for free on github, if you like, and link the blog to your own domain. I'm not sure about the limits, but I feel that you can build a pretty big blog. A page this size builds in seconds locally – it's easy to see the effects of your work, before you publish. 

## Some advice if you're serious

As a UX-Designer, I normally draw a lot of things before commiting to prototypes or programming. Fooling around in eleventy, following tutorials, coding and deciding on the flow, the page ended up looking fugly and worse. 

> It helps, if you know what you want to achieve. 

I had to take a step back to think about content, an design everything from scratch (this time fooling around in Figma), before coming back and adjusting things to match the design. 

It pays to take it slowly, going from MVP to something more serious. This page hasn't had pictures for a very longt time. 

## Ressources that might help you get started
This is by no means a final list. You'll need more things, but this will help you get started. Maybe it's already a bit outdated...

- [Eleventy or 11ty](https://www.11ty.dev/) - this is the source. 
- While you can easily build this in notepad++ I recommend getting something like "visual studio code" - you'll find the link on the search engine of your choice
- To get some explanation, start from the very beginning and understand more than if you just copy a boiler (see next), I suggest following [this page](https://tatianamac.com/posts/beginner-eleventy-tutorial-parti/) and [that page](https://www.sitepoint.com/getting-started-with-eleventy/)
- Markdown-hints to add content to your page - [look no further](https://www.markdownguide.org/basic-syntax/). Note: not all markdown is identical, but the most basic things are the same, like text, links, images. 
- While, for learning purposes, I'd advice against it, it might be handy to start with the correct boilerplate (a base, already built for a certain purpose). You want a blog? [Start with a blog-template](https://github.com/11ty/eleventy-base-blog). 
- There are tons of basic infos about all the coding and language, look for flexbox, the grids, css-stuff on [w3schools](https://www.w3schools.com). I also very much like [css-tricks](https://css-tricks.com/) for that handy flexbox-guide.

## The outcome

... is this page. There are some things that I want to change, also there are some things I already changed since I initially wrote this: 
- Tags for articles (DONE)
- Do more with images (DONE)
- Add more complex blocks to markdown (you can directly add html - DONE see the typeface pages)
- Make outgoing links open in a new tab (well... accessibility... - not going to do that)
- Sticky header (DONE)
- ...

## Small update Sept 2023
Entries can now be updated and a corresponding date can be added. 
A collection of posts is sorted by date updated before initial date. The mechanism was initially alien to me, but rather due to the arrow-functions than the logic itself. 

## Update Nov 2024
The page now has a very basic type-tester (That will need some additional work). I'm not really sure on how to best organize things – assuming, I can do two different pages from one template (or from one folder with two templates and two texts so that shared ressources like webfont-files are still organized neatly). Not sure on how to do that yet. Also, the nav is now too big for the 320 mobile view. The "home"-link is therefore gone. 

## Update Dez 2024
Now on eleventy 3.0. Typesamples are now a partial and thus very easy to update or change. I feel like I missed a lot by not using partials before (and coding every single one of them on the corresponding page, the updates...). This might lead to changing the type-testers again (or at least linking them to the corresponding article). I'm still not sure on how to organize multiple entries under the same folder to share ressources between a blog article and the typetester. 

## Update Jan 2025
Also, cards now have "breakout-links" instead of redundant links - meaning, you can click the whole card and it's also reachable using the keyboard. Adapted from [the blog entry on piccalilli](https://piccalil.li/blog/create-a-semantic-break-out-button-to-make-an-entire-element-clickable/#heading-creating-the-breakout-button-component). There is an extensive collection of cool stuff on this page like [the flow concept](https://piccalil.li/blog/my-favourite-3-lines-of-css/), that's now also integrated.