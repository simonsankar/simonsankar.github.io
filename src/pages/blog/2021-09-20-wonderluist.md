---
templateKey: blog-post
title: Wonderluist
date: 2021-09-20T21:43:00.952Z
description: is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type
  specimen book. It has survived not only five centuries, but also the leap into
  electronic
image: https://images.unsplash.com/photo-1606166325683-e6deb697d301?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1185&q=80
tags:
  - PATD
---
# stupidly-simple-blog [![npm version](https://badge.fury.io/js/stupidly-simple-blog.svg)](https://badge.fury.io/js/stupidly-simple-blog)
A really simple flat file blog thing
![Sample](https://cloud.githubusercontent.com/assets/175278/22441507/9525f26c-e72f-11e6-877e-67b83101c1a7.gif)
## Another markdown blog project!?
I wanted to write a blog post, so naturally had to make something that'd turn markdown into html. Some requirements were:
* Watch mode
* Compiled code blocks
* No runtime scripts necessary
* Themeable
* Templates
## Usage
```
  $ <filename>
  Options
    --template, -t  The template file to use (must be handlebars)
    --watch, -w  Watch files for changes
    --stdout, -s  Output the html to stdout
    --output, -o  The .html file name (will be written to if stdout not specified)
    --title, -t  The title for the html file (filename used instead)
  Example
    $ simple-blog my-amazing-post.md
    $ simple-blog --watch --template main.mustache my-amazing-post.md
```
