# Lab 03 — Debugging Clinic

Covers: Modules [03](../03-css/README.md), [04](../04-javascript/README.md) and [07](../07-devtools-and-debugging/README.md). Time: 1.5 to 2 hours. Work in pairs.

Each case below is a small page with a deliberate bug. For each one: **reproduce**, **name the layer** (HTML, CSS, JS, network), **state your hypothesis**, **fix it with one change**, and **verify**. Record what you did in your notes.

Create a folder `clinic/` with one HTML file per case, paste the code, and open each via a local server (`python3 -m http.server 8000`).

## Case 1 — The box that is too wide (CSS)

```html
<style>
  .box { width: 100%; padding: 24px; border: 4px solid #333; background: #eef; }
</style>
<div class="box">Why does this make the page scroll sideways?</div>
```

Use the **Computed** panel's box-model diagram to find the real width. What one rule fixes it for the whole site?

## Case 2 — The button that does nothing (JavaScript)

```html
<button id="save">Save</button>
<script>
  document.querySelector("#sav").addEventListener("click", () => {
    alert("Saved");
  });
</script>
```

Read the Console error first. What does it say, and what is the fix?

## Case 3 — The page that shows "undefined" (data)

```html
<ul id="out"></ul>
<script type="module">
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  document.querySelector("#out").innerHTML = users
    .map((u) => `<li>${u.fullName}</li>`)
    .join("");
</script>
```

Use `console.table(users)` to see the real field names. Fix it. Then answer: why is `innerHTML` with API data a risk, and how would you change the code to avoid it?

## Case 4 — The 404 that was not an error (network)

```html
<pre id="out"></pre>
<script type="module">
  const res = await fetch("https://jsonplaceholder.typicode.com/users/9999");
  const data = await res.json();
  document.querySelector("#out").textContent = JSON.stringify(data);
</script>
```

It prints `{}` with no error. In the **Network** panel, what status code came back? Add the missing check so the page shows a useful message.

## Case 5 — The stale counter (React)

In your Lab 02 app (or a fresh Vite app), add:

```jsx
function Counter() {
  let count = 0;
  return <button onClick={() => { count++; console.log(count); }}>Clicked {count}</button>;
}
```

The console number goes up but the button text never changes. Explain why in one sentence using the words "state" and "re-render", then fix it.

## Wrap-up discussion

1. Which layer was most often the culprit? How did you find it?
2. Which of these bugs could an AI assistant plausibly introduce when generating code, and which review check would catch each?

## Submit

Post your notes for each case and the discussion answers in the team channel.
