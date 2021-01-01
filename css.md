# CSS

## Terminology

- selector
- property
- value

```
[selector] {
    [property]: [value];
}

body {
    font-weight: bold;
}
```

## Ways to include CSS in your document

**External stylesheet** : attach a separate document in the `<head>` of your HTML.

```
<link href="css/styles.css" rel="stylesheet" />
```

**Internal stylesheet** or **embedded stylesheet** : Include styles in the `<style>` tag in the `<head>` of your HTML

```
<style>
    body {
        font-family: Arial, Helvetica, sans-serif;
    }
</style>
```

**Inline styles** : occur in the HTML tag itself

```html
<p style="color: purple;">I am a purple paragraph!</p>
```

## Which should you use?

99.999% of the time: External stylesheet

It is rare that you will need inline or embedded/internal styles, but you should know they are possible.

## CSS Selectors

We will cover four simple ways to include CSS in your document:

- Elements: HTML tags as selectors
- Classes
- IDs
- Descendant selector

### Element selectors

Simply list the HTML tag and how you&#39;d like it styled.

```
body {
    font-family: Arial, Helvetica, sans-serif;
}
```

### Class selectors `.classname`

Create a class and attach it to an HTML tag to make the class appear.

- You may have more than one class per tag.
- You may use a class several times in a document.
- Classes are more specific than HTML elements and will generally override them.

```html
<style>
  .warning {
    color: orange;
    font-weight: bold;
  }
</style>

<p class="warning">This paragraph displays a warning!</p>
```

### ID selectors `#idname`

Create an ID and attach it to an HTML tag to make the styling appear.

- You may use the ID only once per page.
- Each element may have only one ID.
- IDs are the most specific, overriding styles from elements and classes.
- IDs are not commonly used in CSS these days. They are more commonly used with JavaScript.

```html
<style>
  #danger {
    color: red;
    font-weight: bold;
    text-transform: uppercase;
  }
</style>

<p id="danger">
  This text is uppercase, bold, and red, and you better pay attention because
  you're in danger only once on this web page!
</p>
```

### Descendant selectors `.classname element {}`

This is a combination of one or more classes, IDs, or elements, separated by spaces, to indicate a family relationship.

```html
<style>
  .warning p {
    color: violet;
  }
</style>

<article class="warning">
  <p>All paragraphs in this article will have a color of violet.</p>
  <p>This paragraph too! No more classes needed!</p>
</article>
```

## Grouping selectors

Make all `h4` AND `h5` red:

```html
<style>
  h4,
  h5 {
    color: green;
  }
</style>

<h4>I'm Green</h4>
<h5>I'm Green Too!</h5>
```

Make only the `h6`'s in `<section>` blue:

```html
<style>
  section h6 {
    color: blue;
  }
</style>

<section>
  <h6>I'm blue!!</h6>
</section>
<h6>I'm NOT blue</h6>
```

Make the `h4`'s and `h5`'s inside `<section>` pink:

```html
<style>
  section h4,
  section h5 {
    color: pink;
  }
</style>

<section>
  <h4>I'm pink!!</h4>
  <h5>I'm pink too</h5>
</section>
<h4>I'm NOT pink</h4>
```

For easier reading, you may wish to write selectors on separate lines:

```
section h4,
section h5 {
    color: pink;
}
```

Note that this is NOT the same as the above selector. This says "make all `h4`'s in sections have a black background, and make ALL `h5`'s have a black background."

```
section h4,
h5 {
    background-color: black;
}
```

## Common CSS properties and values

### `font-family`

Establishes the font family/families. Standard choices include:

- **sans-serif**: `Arial, Helvetica, Trebuchet MS, Verdana`
- **serif**: `Times, Times New Roman, Georgia`
- **monospace**: `Courier`

```html
<style>
  p.example-family {
    font-family: Courier;
  }
</style>

<p class="example-family">The quick brown fox jumps over the lazy dog.</p>
```

### `font-size`

Default browser size is `16px = 1em = 1 rem`

```html
<style>
  p.example-fontsize {
    font-size: 1rem;
  }
</style>

<p class="example-fontsize">The quick brown fox jumps over the lazy dog.</p>
```

### `font-style`

Should the font be `italic` or `normal`?

```html
<style>
  p.example-fontstyle {
    font-style: italic;
  }
</style>

<p class="example-fontstyle">The quick brown fox jumps over the lazy dog.</p>
```

### `font-weight`

Should the font be `bold` or `normal`?

```html
<style>
  p.example-fontweight {
    font-weight: bold;
  }
</style>

<p class="example-fontweight">The quick brown fox jumps over the lazy dog.</p>
```

### `font`

Shorthand for multiple `font` properties.

```html
<style>
  p.example-fontshorthand {
    font: italic bold 1rem/1.3rem Arial, Helvetica, sans-serif;
  }
</style>

<p class="example-fontshorthand">
  Font is Arial/Helvetica/sans-serif, italic, and bold, and 1rem in size, with
  1.3rem line spacing.
</p>
```

### `line-height`

Distance between lines.

```html
<style>
  p.example-lineheight {
    line-height: 1.3rem;
  }
</style>

<p class="example-lineheight">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
```

### `color`

Text color.

```html
<style>
  p.example-color {
    color: #d74f25;
  }
</style>

<p class="example-color">The quick brown fox jumps over the lazy dog.</p>
```

### `background`

- `background-color`
- `background-image`
- `background-position`
- `background-repeat`

Dealing with background images and colors. `background` property is shorthand for all of the other properties.

By default, background images repeat.

`background-color: lightblue;` sets the background to lightblue.

```html
<style>
  p.example-background1 {
    background-color: lightblue;
  }
</style>

<p class="example-background1">The quick brown fox jumps over the lazy dog.</p>
```

While `background: lightblue url(image.jpg) no-repeat left top;` means a background color of light blue, background image of `image.jpg`, display it once at the left top corner, no repeat of the image.

```html
<style>
  p.example-background2 {
    background: lightblue url(http://placepuppy.net/300/300) no-repeat left top;
    height: 300px;
  }
</style>

<p class="example-background2">The quick brown fox jumps over the lazy dog.</p>
```

Image will display over the color. You may specify a color in case the image doesn't display.

### `text-decoration`

Turns off the underline in links.

Values include `none`, `underline`.

```html
<style>
  a.padding {
    padding: initial;
  }
  a.example-textdecoration {
    text-decoration: none;
  }
</style>

<p>
  The quick brown
  <a
    class="example-textdecoration padding"
    href="https://www.youtube.com/watch?v=jofNR_WkoCE"
    >fox jumps</a
  >
  over the
  <a
    class="padding"
    href="https://giphy.com/gifs/cheezburger-dog-dogs-FdWU4HtO5vTGw"
    >lazy dog</a
  >.
</p>
```

### Link Pseudo-classes

Pseudo-classes: specify styling in these states.

- `:link` — unvisited link
- `:visited` — visited state
- `:focus` — the currently "focused" (selected) element
- `:hover` — hover your mouse over this
- `:active` — the time between the link is selected and the time the page loads. (Not used much today.)

If you are using these pseudo-classes, they MUST go in the order listed.

To remember:

**L**ord **V**ader **F**ormer **H**andle **A**nakin

`:link`, `:visited`, `:active` are used almost exclusively on links (the **`A`** tag).

The pseudo-classes `:focus` and `:hover` are used with links and with any other element on the page. `:focus` is especially useful with forms and in accessibility contexts.

```html
<style>
  a.example:link {
    color: #c02d28;
  }
  a.example:visited {
    color: blue;
  }
  a.example:focus {
    border: 3px dotted black;
  }
  a.example:hover {
    color: purple;
    font-weight: bold;
  }
  a.example:active {
    color: #7c8e88;
  }
</style>

<p>
  The quick brown
  <a class="example" href="https://www.youtube.com/watch?v=jofNR_WkoCE"
    >fox jumps</a
  >
  over the
  <a
    class="example"
    href="https://giphy.com/gifs/cheezburger-dog-dogs-FdWU4HtO5vTGw"
    >lazy dog</a
  >.
</p>
```
