# HTML

Hyper Text Markup Language

Structuring the webpage, not styling it.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body></body>
</html>
```

- `<!DOCTYPE html>` : is to tell the browser that it is HTML5
- `<html></html>` : content of the website
- `<head></head>` : metadata about the page that is useful for the browser when displaying the page. e.g. to link the css
- `<title></title>` : title of the page
- `<body></body>` : body of the page

### Paragraph `<p></p>`

```html
<p>This is a paragraph of information.</p>
```

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p

### Headings `<h1></h1><h2></h2> ... <h6></h6>`

```html
<h1>My Fine Website</h1>

<h2>An Article Title</h2>

<h3>A Subhead Within the Article</h3>
```

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements

### Unordered list `<ul></ul>`

Used for lists where the items have no critical order of execution

_Always_ contains `<li>` tags!

```html
<ul>
  <li>Something</li>
  <li>Another thing</li>
  <li>Also this one</li>
</ul>
```

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul

### Ordered list `<ol></ol>`

Used for lists where the order is important (like a list of instructions). Often called a "number list" - but remember there's no formatting in HTML!

_Always_ contains `<li>` tags!

```html
<ol>
  <li>Something</li>
  <li>Another thing</li>
  <li>Also this one</li>
</ol>
```

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol

### Line break `<br>`

Used where breaks in lines are critical: Poem, address, etc.

```html
<p>
  Line of poem<br />
  Another line of the poem
</p>
```

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br

### Links and anchors `<a></a>`

Links can go anywhere: to pages on your site, to pages on other sites, or to files (like a PDF).

```html
<a href="http://www.google.com">Go to Google</a>
<a href="about.html">Go to About Page</a>
```

Anchors are useful for navigating within a single web page. You need to code an anchor and a link pointing to the anchor to make this work. The anchor is placed where you want the user to start reading. The link is placed where you wish the user to click to skip to that anchor. "Back to top" links are a typical example.

Anchor: `<a id="top"></a>`

Link to an anchor: `<a href="#top">Back to top</a>`

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a

### Image `<img>`

Displays an image on your page.

src = image source (a file path to the image)

alt = alternative text. Displays if the image does not. Read by search engines and screen readers. It should fully describe the image, so you could imagine what the image looked like if you could not see it.

```html
<img src="http://placepuppy.net/300/300" alt="A puppy." />
```

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
