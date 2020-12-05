# create-vite-app

Create an app powered by [Vite](https://github.com/vitejs/vite).

```bash
$ npm init vite-app <project-name>
$ cd <project-name>
$ npm install
$ npm run dev
```

If using Yarn:

```bash
$ yarn create vite-app <project-name>
$ cd <project-name>
$ yarn
$ yarn dev
```

## Templates

Available templates:

- `vue` (default)
- `vue-ts` (experimental)
- `react`
- `react-ts`
- `preact`
- `preact-ts`
- `reason-react`

To scaffold with specific template:

```bash
$ npm init vite-app my-react-project -- --template react
```

If using Yarn:
``` bash
$ yarn create vite-app my-react-project --template react
```

For use with Svelte, check out [Svite](https://github.com/dominikg/svite) which is built on top of Vite.

## Project Scope

This tool is solely providing an easy way to scaffold an official template, and that is its defined scope. It has no intention of becoming another `vue-cli` so it intentionally does not handle:

- Installing dependencies
- Initializing git
- Using custom templates (just use [degit](https://github.com/Rich-Harris/degit) to fetch your own repo)
