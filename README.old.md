# aspect-ratio.el

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
<link rel=stylesheet href="https://cdn.jsdelivr.net/gh/u1ui/aspect-ratio.el@x.x.x/aspect-ratio.min.css">
<script src="https://cdn.jsdelivr.net/gh/u1ui/aspect-ratio.el@x.x.x/aspect-ratio.min.js" type=module></script>

<u1-aspect-ratio style="--u1-ratio:1; max-height:100vh; min-height:200px; border:2px solid red">
    Some Content
</u1-aspect-ratio>
```

## Demos
https://raw.githack.com/u1ui/aspect-ratio.el/main/tests/minimal.html  
https://raw.githack.com/u1ui/aspect-ratio.el/main/tests/test.html  

## Note

- To make the element work with border and padding, the element has a forced `box-sizing:content-box`
