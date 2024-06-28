# My site

## :octocat: 2024 version of my web site

A simple pesonal site.

### 📝 TODO List

- [x] 404 Page
- [ ] 404 Game
- [ ] Projects page
- [ ] Language selector

## 🚀 Project Structure

Inside of my Astro project you will see:

```text
/
├── public/
│   ├── fonts/
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── locales/
│   ├── components/
│   │   ├── 404/
│   │   └── common/
│   ├── constants/
│   ├── interfaces/
│   ├── layouts/
│   └── pages/
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where I put any Astro/React/Vue/Svelte/Preact components.

For the base of the app I use the `layout/`.

Any static assets, like images, can be placed in the `public/` directory.

Plain text and icons goes in the `assets/` directory.

And `constant/` and `interfaces/` are self explanatory.

## 🧞 Commands

This project was made with `node: 20.15.0` and `npm: 10.8.1`.

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more about Astro?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
