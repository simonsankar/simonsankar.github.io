---
templateKey: blog-post
title: Hackerman
date: 2021-09-20T21:43:00.952Z
description: is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type
  specimen book. It has survived not only five centuries, but also the leap into
  electronic
image: https://upload.wikimedia.org/wikipedia/en/1/10/Black_Sabbath_Sabotage.jpg
tags:
  - hacking
  - mrrobot
---
# Markdown Test File
**See the raw source of [TEST.md](https://raw.githubusercontent.com/mxstbr/markdown-test-file/master/TEST.md) for the deets!** ([this is the test file rendered](./TEST.md))
This repo contains a markdown file which covers a lot of the syntax. We use it for testing our markdown support.
## Inspiration
```javascript
var Markdown = window.reactMarkdown
var markdown = `
# Code test

Here's that code block:

\`\`\`javascript
var total = [1, 2, 3, 4, 5]
  .map(num => num * 3)
  .filter(num => num < 9)
  .reduce((sum, num) => sum += num, 0)
 
\`\`\`

Neat, eh?`


ReactDOM.render(
  <Markdown source={markdown} />,
  document.getElementById('root'),
  function loadPrism() {
    var scr = document.createElement('script')
    scr.src = 'https://unpkg.com/prismjs@1.6.0/prism.js'
    document.head.appendChild(scr)
  }
)
```

