# &lt;u1-aspect-ratio&gt; - element
(soon deprecated) especially because of safari

CSS now has the property: aspect ratio".
Instead of waiting for safari we have Element.

## Features

- No `overflow:hidden`
- No `position:relative` or `position:absolute`
- `min-height` and `max-height` wins over the aspect-ratio (behavoir not possible with native CSS `aspect-ratio`!?)
- Use the class '-body' to fill the available height
- CSS only fallback
- If the content is heighter than calculated by aspect-ratio, the content-height wins
- Performant and responsive, because the aspect ratio is generated with css

## Ussage

```html
<u1-aspect-ratio>
    <div class=-body>
        Hello world
    </div>
</u1-aspect-ratio>
```

## Install

```html
<link href="https://cdn.jsdelivr.net/gh/u1ui/aspect-ratio.el@3.0.0/aspect-ratio.min.css" rel=stylesheet>
<script src="https://cdn.jsdelivr.net/gh/u1ui/aspect-ratio.el@3.0.0/aspect-ratio.min.js" type=module>
```

## Demos

https://raw.githack.com/u1ui/aspect-ratio.el/main/tests/minimal.html  
https://raw.githack.com/u1ui/aspect-ratio.el/main/tests/test.html  

## Note

- To make the element work with border and padding, the element has a forced `box-sizing:content-box`

## About

- MIT License, Copyright (c) 2022 <u1> (like all repositories in this organization) <br>
- Suggestions, ideas, finding bugs and making pull requests make us very happy. ♥

