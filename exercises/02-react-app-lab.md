# Lab 02 — Your First React App

Covers: Modules [05](../05-react-fundamentals/README.md) and [06](../06-tooling-and-build/README.md). Time: 2.5 to 3 hours. Work in pairs.

You will rebuild the Team Directory from Lab 01 as a React app, so you can compare the two approaches directly.

## Part 1 — Scaffold (20 min)

```bash
npm create vite@latest team-directory-react -- --template react
cd team-directory-react
npm install
npm run dev
```

1. Open the printed URL. Edit the heading in `src/App.jsx` and watch it update.
2. Open `package.json`. Name the three scripts you will use and say what each does.
3. Check `.gitignore`: is `node_modules` listed? Why does that matter?

## Part 2 — Components (60 min)

Create these in `src/`:

| Component | Props | Renders |
| --- | --- | --- |
| `UserCard` | `name`, `email`, `company` | One card |
| `UserList` | `users` | A `<ul>` of `UserCard`s, or "No people match your filter." |
| `SearchBox` | `value`, `onChange` | A labelled search input |
| `App` | none | Owns the state, fetches the data, composes the rest |

Requirements:

1. `App` holds `users`, `query`, and a `status` of `"loading" | "error" | "ready"` in state.
2. Fetch from `https://jsonplaceholder.typicode.com/users` inside `useEffect`, check `response.ok`, and handle failure.
3. Filter in render: `users.filter(u => u.name.toLowerCase().includes(query.toLowerCase()))`. Do **not** store the filtered list in state. Why not?
4. Give every list item a stable `key` (use `user.id`).

## Part 3 — Compare (20 min)

Answer in your notes:

1. How many lines of DOM-manipulation code (`createElement`, `append`, `replaceChildren`) did you write in React? What replaced them?
2. When the filter text changes, which components re-render? Use the React DevTools **Components** panel to check.
3. Where would you put code that two components both need (for example the sort order)? Why?

## Part 4 — Build and ship (30 min)

```bash
npm run build
npm run preview
```

1. Look inside `dist/`. What files are there and how large is the JavaScript bundle?
2. Add a `.env.local` with `VITE_API_URL=https://jsonplaceholder.typicode.com/users` and read it with `import.meta.env.VITE_API_URL`. Why must this file be gitignored, and why can it still never hold a secret?
3. Run `npm audit`. Report what it says.

## Stretch goals

- Add a "Sort A-Z" toggle held in state
- Add a `UserCard` unit test using Vitest and React Testing Library

## Submit

Push your app to a branch named `lab-frontend-2-<yourname>` and open a pull request with your Part 3 answers. Do not commit `node_modules`.
