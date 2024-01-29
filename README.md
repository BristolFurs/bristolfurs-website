# BristolFurs website

The website for the BristolFurs. Built on [Eleventy](https://www.11ty.dev/), because why overcomplicate things.

## Setting up developer environment

### Prerequisites

Most things run through [Node](https://nodejs.org/) and npm. Download and install Node 18 or newer from the Node website to get both.

If you want or need to have multiple Node versions installed at the same time, install [nvm](https://github.com/nvm-sh/nvm) as well.

If you're a Windows user, you may need to install a proper Unix command line for the following commands to work properly. The easiest way to do this is with [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install).

### Clone this repo

In your command line, run each of these commands to copy down the repo and navigate into it.

```shell
git clone git@github.com:bristolfurs/bristolfurs-website.git
cd bristolfurs-website
```

### Install everything you need

> If you're using nvm, run `nvm install` before any other commands to ensure you're using the right Node version. You may get errors if you don't. If you've already done this in the past, you can get away with running `nvm use` instead.

Run the following in your command line to install and prep all of the project dependencies.

```shell
npm install
npm run prepare
```

### Developing

Start a local development server:

```shell
npm start
```

The development server will watch for any changes to files and re-compile the parts of the site that need it on-the-fly, automatically refreshing any open browsers. It's swish.

In an ideal world, everything from Sass compilation to image minification should run through Eleventy's task runner, so you shouldn't need to run anything else but this.

#### Committing

When committing to git, pre-commit hooks will lint the code to correct any minor issues (excess spaces and the like). If something is too egregious to be fixed automatically, it'll throw an error in the command line and will abort the commit. You have been warned.

#### Useful/required reading

The Eleventy docs might come in useful, obviously.

- [Eleventy website](https://www.11ty.dev/)
- [Eleventy documentation](https://www.11ty.dev/docs/)

Most HTML-adjacent stuff is written in the Nunjucks templating language. It doesn't have to be HTML, Nunjucks and Eleventy combined can generate basically anything.

Nunjucks is like Handlebars and Liquid, but more powerful (IMO) as it has the concept of blocks and extends, which allow you to take an existing template and only replace certain aspects of it whilst preserving the others. It's surprisingly useful.

- [Nunjucks website](https://mozilla.github.io/nunjucks/)
- [Nunjucks documentation](https://mozilla.github.io/nunjucks/templating.html)

CSS is written in the Sass language, specifically the Dart Sass flavour, which is the newest and shiniest. Upon being compiled, this passes through PostCSS, which adds any additional code that's needed for browser support purposes.

This allows you to write code that contains functions, mixins, loops, namespaces, fancy mathematics, and all the whizzy shiniest CSS, but which ends up as plain ol' CSS that any decently modern browser can handle effortlessly.

Only the `src/assets/styles.scss` file is compiled. Everything else should be included via that file.

- [Sass website](https://sass-lang.com/)
- [Sass documentation](https://sass-lang.com/documentation/)
- [PostCSS website](https://postcss.org/)
- [Shiny things PostCSS will deal with](https://preset-env.cssdb.org/features/#stage-2)

JavaScript is written pretty much vanilla, but with modules and classes, as is the style at the time.

This then get shoved through Rollup to get compiled into a self-executing IIFE-compatible version of itself that can be included in a webpage. Don't ask me how it does this, it's basically magic.

Only the `src/assets/all.mjs` file is compiled. Everything else should be included via that file.

- [Modules documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Classes documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Rollup website](https://rollupjs.org/)
- [Rollup documentation]()

### Deploying

### Deployment to development environment

There is a Continuous Integration (CI) pipeline set up to automatically build and deploy the website to [dev.bristolfurs.co.uk](https://dev.bristolfurs.co.uk/). Use this to ensure that content changes look good before pushing them to the live website.

This version of the site is publicly viewable, but is configured to not be indexed by search engines. It also shows a big banner at the top pointing out that this isn't the actual, proper website.

### Deployment to live (production) environment

Deployments to live are not automated and must always be performed manually.

Do so from the 'Run workflow' dropdown menu in the ['Deploy to live' Action](https://github.com/BristolFurs/bristolfurs-website/actions/workflows/deploy-prod.yml).
