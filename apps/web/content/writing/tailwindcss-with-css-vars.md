---
title: "Customizing Tailwind CSS with CSS variables"
date: "2022-08-20"
excerpt: "Using the new tailwind `alpha-value`."
---

## How to easily configure your CSS variable colors

Since [Tailwind CSS v3.1](https://tailwindcss.com/blog/tailwindcss-v3-1#easier-css-variable-color-configuration) we can include the opacity value like you are used without too much effort.

```js
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      brand: "rgb(var(--example-brand) / <alpha-value>)",
      // ...
    },
  },
};
```

We can break it down in 3 important parts:

- `var(--example-brand)` will access the css variable
- `<alpha-value>` provides us a simple way to access the correct utility variable. Same as `text-blue-500/10`.
- `rgb(var / alpha)` is a [valid css color syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb#syntax) where alpha is the `opacityValue`.

In case you'd like to prefer more granular access to the newly set colors, you could only extend text, border or background colors:

```js
// tailwind.config.js
module.exports = {
  theme: {
    textColor: {
      brand: "rgb(var(--example-brand) / <alpha-value>)",
    },
    backgroundColor: {
      brand: "rgb(var(--example-brand) / <alpha-value>)",
    },
    // ...
  },
};
```

The beauty now is, that Tailwind CSS is not dependant on a fixed value to build your styles and you can allow customization much easier.

To include your styles, you'll need to extend your main css file with:

```css
/* main.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --example-brand: 255 0 0;
    /* ... */
  }
}
```

If you want to know how to include `hsl` values or read more, check out tailwinds documentation about ["Using CSS variables"](https://tailwindcss.com/docs/customizing-colors#using-css-variables).

### How do I then dynamically change the color?

Changing the color can happen (globally) with JavaScript via

```js
document.documentElement.style.setProperty("--example-brand", "0 255 0");
// or locally with tagElemment.style.setProperty(...)
```

Or you can overwrite the styles by injecting an `html`-tag deeper in the tree:

```jsx
// Example.tsx
<div style={{ "--example-brand": "0 255 0" } as React.CSSProperties}>
  /* only the children will access the new `--example-brand` color */
  <button className="text-brand bg-brand/10" />
</div>
```

The [Example](/examples/tailwind-css-vars) updates the property globally on update:

```tsx
// examples/tailwind-css-vars.tsx
React.useEffect(() => {
  document.documentElement.style.setProperty("--example-brand", cssVars[style]);
}, [style]);
```

### What could be use cases?

If you provide website/dashboard personalization you can allow your users to choose an `rgb` code they wish to have as primary color.

If you provide a widget, the users could customize the colors of it and brand it with their own styles.

> 🚨 - Styling a widget with tailwindcss might not be the use case. If the widget is injected in a website also using tailwindcss, they could overwrite the default styles of `border`, `text-sm`,... and the widget might break.
