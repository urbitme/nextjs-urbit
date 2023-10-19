
## Getting Started

Clone this repo and run:

```bash
npm install
# or
yarn
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000/apps/myappname](http://localhost:3000/apps/myappname) with your browser to see the result.

## Local Development

1. Setup and run a local fake Urbit ship containing your app, see the resources below for Urbit development guides.
1. Allow cross-origin requests on your ship.  This project loads at `localhost:3000` by default so run the following in your urbit dojo:
    ```hoon
    |cors-approve 'http://localhost:3000'
    ```
1. Set the environment variables for your local ship in `.env.development.local`.  Copy the example file from this project, or use the following example below.  Adjust the values to match your local setup.
    ```
    NEXT_PUBLIC_URBIT_SHIP_NAME=zod
    NEXT_PUBLIC_URBIT_SHIP_URL=localhost:8080
    NEXT_PUBLIC_URBIT_SHIP_CODE=lidlut-tabwed-pillex-ridrup
    ```
1. Edit `basePath` in `next.config.mjs` to match your app name:
    ```js
    const basePath = '/apps/myappname'
    ```
    You will need to visit `localhost:3000/apps/myappname` to view your app during development.

## Production Build

Build and export your project by running:

```bash
npm run build
# or
yarn build
```

This is a client side only app, so the server side features of Next.js are not supported, and `next export` is used in the build process.  This document explains what features are supported with this approach:

* [Next.js - Static HTML Export](https://nextjs.org/docs/advanced-features/static-html-export)

Your project will be exported to `out/` in the project directory.  This is the client side bundle you will include in your app.

Glob the `out/` directory following the instructions at: [Urbit Developers - Glob](https://developers.urbit.org/reference/additional/dist/glob)

## Learn More

To learn app development on Urbit, follow the guides here:

- [Urbit Developers](https://developers.urbit.org)

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Support

You are welcome to bring questions and comments to `~nodreb-borrus` on Urbit or [𝕏](https://twitter.com/urbitceo).  Thank you for supporting [urbit.me](https://urbit.me).
