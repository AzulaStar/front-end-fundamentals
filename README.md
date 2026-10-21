# Frontend Fundamentals Course

A standalone, repo-ready course on how the browser turns code into a page: HTML, CSS, JavaScript, a first look at React, the build tooling around it, and the dev tools you use to debug it. This is Week 2 of the [Agentic Coding Training Plan](../) and follows on from the [Systems Fundamentals Course](../systems-fundamentals-course/).

## Why this exists

An agent can generate a React component in seconds. Whether that component is correct, accessible, fast, and maintainable is a judgment call that depends on understanding what the browser is actually doing with it. This course builds that understanding so you can supervise generated frontend code instead of just accepting it.

## Who this is for

Developers with some coding experience but uneven frontend depth. No prior HTML, CSS, JavaScript, or React knowledge is assumed.

## How to use this repo

Each numbered folder is a module with a `README.md` that mixes concepts, diagrams, and code to run. Work through them in order. The `starter/` folder has a small working project you will extend in the labs. `exercises/` has the labs, and `resources.md` lists further reading.

```bash
git clone <this-repo-url>
cd frontend-fundamentals-course
```

Reading about a CSS rule is not the same as changing it and watching the page move. Keep a browser and an editor open side by side.

## Course map

| # | Module | After this you can |
| --- | --- | --- |
| 01 | [How the Browser Works](01-how-the-browser-works/README.md) | Explain what happens between a URL and pixels on screen |
| 02 | [HTML](02-html/README.md) | Structure a page semantically and accessibly |
| 03 | [CSS](03-css/README.md) | Lay out and style a responsive page using the box model, Flexbox and Grid |
| 04 | [JavaScript](04-javascript/README.md) | Read and write JS, manipulate the DOM, handle events, and call an API with `fetch` |
| 05 | [React Fundamentals](05-react-fundamentals/README.md) | Build components with props and state and explain how React updates the DOM |
| 06 | [Tooling and Build](06-tooling-and-build/README.md) | Use npm, `package.json`, scripts and a bundler (Vite) to run and ship a project |
| 07 | [DevTools and Debugging](07-devtools-and-debugging/README.md) | Debug layout, JavaScript and network problems methodically |

## Labs

| Lab | Covers |
| --- | --- |
| [01 — Build a Static Page](exercises/01-static-page-lab.md) | Modules 01-04 |
| [02 — Your First React App](exercises/02-react-app-lab.md) | Modules 05-06 |
| [03 — Debugging Clinic](exercises/03-debugging-clinic.md) | Modules 03, 04, 07 |

## Prerequisites

- A modern browser (Chrome, Edge or Firefox) with developer tools
- A code editor (VS Code recommended)
- Node.js 20 or newer and npm (`node --version` works)
- Git, from the Systems Fundamentals Course

## Contributing

Found an error or want to add an exercise? Open a pull request.
