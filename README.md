# Carbon Voyage

Senior Design Project for the Stevens Institute of Technology.

## What's inside?

This turborepo uses [pnpm](https://pnpm.io/) as a package manager. It includes the following packages/apps:

### Apps and Packages

-   `extension`: a React app that is the Chrome/Firefox extension
-   `web`: a [Next.js](https://nextjs.org) app, which is the main web application
    -   `api`: a [Next.js API route](https://nextjs.org/docs/api-routes/introduction) for the `web` application
    -   This app is deployed to [Vercel](https://vercel.com/)
    -   This app leverages [Supabase](https://supabase.io/) for its database/authentication and [Stripe](https://stripe.com/) for its payment processing
-   `ui`: a stub React component library shared by both the `extension` and `web` applications
-   `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
-   `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

-   [TypeScript](https://www.typescriptlang.org/) for static type checking
-   [ESLint](https://eslint.org/) for code linting
-   [Prettier](https://prettier.io) for code formatting

### Getting Started

Use [nvm](https://github.com/nvm-sh/nvm) to install Node.js v18.12.1 and [pnpm](https://pnpm.io/) to install the dependencies:

```bash
nvm install         # installs Node.js v18.12.1
nvm use             # uses Node.js v18.12.1
npm install -g pnpm # installs pnpm
pnpm install        # installs dependencies
```

Note: We recommend using [Visual Studio Code](https://code.visualstudio.com/) on Mac or Linux for development.

### Build

To build all apps and packages, run the following command:

```bash
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```bash
pnpm dev
```

If you'd like to develop a specific app or package, you can run the following command:

```bash
pnpm dev --filter <app-or-package-name>
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```bash
cd carbon-voyage
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```bash
npx turbo link
```

## Useful Links

-   [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
-   [Caching](https://turborepo.org/docs/core-concepts/caching)
-   [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
-   [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
-   [Configuration Options](https://turborepo.org/docs/reference/configuration)
-   [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)

## Credits

Core technologies, libraries, and tools used in this project:

-   [Turborepo](https://turborepo.org/)
-   [Next.js](https://nextjs.org/)
-   [React](https://reactjs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io)
-   [pnpm](https://pnpm.io/)
-   [Vercel](https://vercel.com/)
-   [Supabase](https://supabase.io/)
-   [Stripe](https://stripe.com/)

Templates used as the basis for this project:

-   [Turborepo Starter](https://github.com/vercel/turbo/tree/main/examples/basic)
-   [React Typescript Web Extension Starter](https://github.com/aeksco/react-typescript-web-extension-starter)
-   [Next.js Subscription Payments Starter](https://github.com/vercel/nextjs-subscription-payments)
