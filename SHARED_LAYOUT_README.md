# Shared Header/Footer Setup

This repo now uses shared layout components instead of repeating the navigation and footer in every HTML file.

## New files

```text
components/header.html
components/footer.html
js/layout.js
```

## How pages use them

Each full page now has:

```html
<div id="site-header"></div>
...
<div id="site-footer"></div>
<script src="/js/layout.js"></script>
```

Edit navigation once in:

```text
components/header.html
```

Edit footer once in:

```text
components/footer.html
```

`layout.js` automatically adds the active navigation class based on the current URL.
