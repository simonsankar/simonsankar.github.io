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
```jsx
import ReactDom from 'react-dom'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'

// Did you know you can use tildes instead of backticks for code in markdown? ✨
const markdown = `Here is some JavaScript code:

~~~js
console.log('It works!')
~~~
`

ReactDom.render(
  <ReactMarkdown
    children={markdown}
    components={{
      code({node, inline, className, children, ...props}) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
          <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            style={dark}
            language={match[1]}
            PreTag="div"
            {...props}
          />
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        )
      }
    }}
  />,
  document.body
)
```

