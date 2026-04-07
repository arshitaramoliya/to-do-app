# To-Do App

A clean, interactive task management app built with vanilla JavaScript — no frameworks, no dependencies.

## Features

- Add tasks via input field
- Delete individual tasks with one click
- Tasks rendered dynamically into the DOM
- Lightweight and fast — zero build step required

## Technical Highlights

- **Event delegation** — single listener on the task list handles delete for all items, including dynamically added ones
- **DOM CRUD** — create, read, and delete `<li>` elements entirely through JavaScript
- **Clean separation** — HTML structure, CSS styling, and JS logic each in their own file

## Tech Stack

![HTML](https://img.shields.io/badge/HTML5-dc2626?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-dc2626?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-dc2626?style=flat-square&logo=javascript&logoColor=white)

## Files

| File | Description |
|---|---|
| `todoapp.html` | App structure |
| `todoapp.css` | Styling |
| `todoapp.js` | Task add/delete logic with event delegation |

## Run Locally

Just open `todoapp.html` in any browser — no setup needed.
