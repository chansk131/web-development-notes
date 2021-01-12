# Modifying HTML and CSS

```jsx
document.querySelector("selector");
```

- `document` is the global variable in the browser to interact with HTML and CSS
- Method `querySelector` in `document` object can find the first element of your HTML which matches the **selector** you input.

### Example

```jsx
<div class="calc-button"></div>;

const calcButton = document.querySelector(".calc-button");
calcButton.style.backgrounColor = "yellow";
calcButton.innerText = "Modified by JavaScript";
```

- This example shows how to query an element with classname `calc-button`
- `style` object stores all the CSS style of this HTML element
- CSS properties in `style` object are in **camelCase** e.g. `backgroundColor`, `borderRadius`, `marginBottom`.
- We can change it's background colour to `yellow` by changing the value of `backgroundColor` in `style` object to be `yellow`
- We can change the text inside `<div></div>` by changing its `innerText` value

### Example

```jsx
<div class="calc-button"></div>;

const calcButton = document.querySelector(".calc-button");
calcButton.style.backgrounColor = "yellow";
calcButton.innerText = "Modified by JavaScript";
```

- This example shows how to query an element with classname `calc-button`
- `style` object stores all the CSS style of this HTML element
- CSS properties in `style` object are in **camelCase** e.g. `backgroundColor`, `borderRadius`, `marginBottom`.
- We can change it's background colour to `yellow` by changing the value of `backgroundColor` in `style` object to be `yellow`
- We can change the text inside `<div></div>` by changing its `innerText` value

### Example

```jsx
<div class="calc-button"></div>;

const calcButton = document.querySelector(".calc-button");
calcButton.style.backgrounColor = "yellow";
calcButton.innerText = "Modified by JavaScript";
```

- This example shows how to query an element with classname `calc-button`
- `style` object stores all the CSS style of this HTML element
- CSS properties in `style` object are in **camelCase** e.g. `backgroundColor`, `borderRadius`, `marginBottom`.
- We can change it's background colour to `yellow` by changing the value of `backgroundColor` in `style` object to be `yellow`
- We can change the text inside `<div></div>` by changing its `innerText` value
