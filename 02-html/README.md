# Module 02 — HTML

HTML describes the **structure and meaning** of content. It is not about appearance (that is CSS) or behaviour (that is JavaScript).

## 1. Anatomy of a page

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>My first page</title>
    <link rel="stylesheet" href="style.css" />
    <script src="app.js" defer></script>
  </head>
  <body>
    <h1>Hello</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

- `<!DOCTYPE html>` switches the browser into standards mode
- `<head>` holds metadata that is not displayed
- `<meta name="viewport" ...>` is required for pages to behave on phones
- `<body>` holds everything the user sees

## 2. Elements, attributes, nesting

```html
<a href="https://example.com" target="_blank" rel="noopener">Visit</a>
```

An element is an opening tag, content and a closing tag. **Attributes** (`href`, `target`) configure it. Elements nest, and each must be closed in the reverse order it was opened.

## 3. The elements you will use constantly

| Purpose | Elements |
| --- | --- |
| Headings | `<h1>` to `<h6>` (one `<h1>` per page, do not skip levels) |
| Text | `<p>`, `<strong>`, `<em>`, `<code>`, `<pre>`, `<blockquote>` |
| Lists | `<ul>`, `<ol>`, `<li>` |
| Links and media | `<a href>`, `<img src alt>`, `<video>`, `<audio>` |
| Grouping | `<div>` (generic block), `<span>` (generic inline) |
| Tables | `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>` |
| Forms | `<form>`, `<label>`, `<input>`, `<select>`, `<textarea>`, `<button>` |

## 4. Semantic HTML

Prefer elements that say what the content *is* over a pile of `<div>`s.

```html
<header>
  <nav><a href="/">Home</a> <a href="/about">About</a></nav>
</header>
<main>
  <article>
    <h1>Article title</h1>
    <p>...</p>
  </article>
  <aside>Related links</aside>
</main>
<footer>© 2026</footer>
```

Why it matters: screen readers and search engines use these landmarks, and an agent generating markup that is all `<div>` is a code review comment waiting to happen.

## 5. Forms

```html
<form action="/signup" method="post">
  <label for="email">Email</label>
  <input id="email" name="email" type="email" required />

  <label for="plan">Plan</label>
  <select id="plan" name="plan">
    <option value="free">Free</option>
    <option value="pro">Pro</option>
  </select>

  <button type="submit">Sign up</button>
</form>
```

- Every input needs a `<label>` linked by `for`/`id`; this is both usability and accessibility
- `type="email"` and `required` give you free browser validation, but **always validate again on the server**; the browser check is a convenience, not security

## 6. Accessibility basics

- `alt` text on every meaningful image (`alt=""` for decorative ones)
- Use real `<button>` for actions and `<a>` for navigation, not clickable `<div>`s
- Make sure the page works with the keyboard alone (Tab, Enter, Space)
- Sufficient colour contrast (checked with the dev tools, Module 07)

## Try it yourself

Create `index.html` with a header, a main section containing a form with a labelled email field, and a footer. Open it in a browser (double-click the file), then use **Tab** to move through it with the keyboard only.

## Key takeaways

- HTML is structure and meaning, not looks
- Semantic elements and labelled inputs are the cheapest accessibility wins
- Client-side validation is for convenience; server-side validation is for safety

**Next:** [Module 03 — CSS](../03-css/README.md)
