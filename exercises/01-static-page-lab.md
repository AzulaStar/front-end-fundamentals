# Lab 01 — Build a Static Page

Covers: Modules [01](../01-how-the-browser-works/README.md) to [04](../04-javascript/README.md). Time: 2 to 2.5 hours. Work in pairs.

You will extend the working starter in [`starter/static-page/`](../starter/static-page/). It fetches a list of people from a public API and shows them as cards with a live filter.

## Setup

```bash
cd starter/static-page
python3 -m http.server 8000      # or: npx serve .
```

Open `http://localhost:8000`. (Module scripts need to be served over HTTP; opening the file directly can fail.)

## Part 1 — Read before you change (20 min)

Without editing anything, answer in your notes:

1. In `index.html`, which landmark elements are used, and why is the `<label>` linked to the input?
2. In `style.css`, which rule makes the cards reflow as you resize the window? Which rule pushes the "Data source" link to the right?
3. In `app.js`, trace what happens from page load to cards appearing. Which function is called first, and where are the loading and error states set?
4. In dev tools **Network**, find the request to `jsonplaceholder.typicode.com/users`. What is its status code and the `content-type` response header?

## Part 2 — Add features (60 min)

1. **Company name.** Show each person's company on their card (the field is `user.company.name`). Use `textContent`, not `innerHTML`.
2. **Sort button.** Add a "Sort A-Z" button above the list. Clicking it sorts the currently shown people by name. (Hint: `[...users].sort((a, b) => a.name.localeCompare(b.name))`. Why copy the array first?)
3. **Empty state.** Make sure the "No people match your filter." message appears when the filter matches nothing.
4. **Responsive check.** Use the device toolbar in dev tools to view the page at 360px wide. Fix anything that overflows or looks cramped.

## Part 3 — Break it on purpose (20 min)

1. Change `API_URL` to `https://jsonplaceholder.typicode.com/does-not-exist`. What does the user see? Is it a helpful message?
2. In dev tools **Network**, set throttling to **Offline** and reload. What does the user see?
3. Restore the URL, then improve the error message so it tells the user what to do next (for example "Check your connection and reload").

## Part 4 — Accessibility pass (15 min)

1. Use only the keyboard (Tab, Shift+Tab, Enter) to reach the filter box and your new button. Is the focus visible?
2. Run **Lighthouse** (Accessibility category). Record the score and fix one issue it reports.

## Stretch goals

- Persist the filter text in `localStorage` so it survives a reload
- Add a "Retry" button that appears with the error message

## Submit

Commit your changes on a branch named `lab-frontend-1-<yourname>`, open a pull request, and put your Part 1 answers in the description. Your partner reviews it using the checklist from Week 1.
