---
title: This is the subtitle-Texts
description: This is in the preview
date: 2021-03-13
updateDate: 2023-03-24
evolution: 1 2 3 (pick one, 1 lowest, 3 highest)
previewImage: previewimage.png - the name of the preview image in the same folder, 200x200px, there is a designerbase-file - else fallback
urlbase: '/articles/20240901_counting_cash/' - all articles (preview image, type sample) the folder name including "articles" 
fontname: AD-Digiwatch-Regular - typesample only, the name of the type
sampletext: 0.123456789 09:22 - this is the text that will be shown in the typesample
tags:
  - textiles
  - pattern
  - 11nty
  - html
  - css
  - mustard
  - cooking
  - typography
  - gadgets
  - light
---

## Title

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
