
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
1. Edit the `basePath` property in `next.config.js` to match your app name:
    ```js
    module.exports = {
      basePath: '/apps/myappname'
    }
    ```
    You will need to visit `localhost:3000/apps/myappname` to view your app during development.

## Production Build

Build and export your project by running:

```bash
npm run build
# or
yarn build
```

This is a client side only app, so we cannot use the server side features of Next.js, and we use `next export` in our build process.  The following document explains what features can and cannot be used with this approach:

* [Next.js - Static HTML Export](https://nextjs.org/docs/advanced-features/static-html-export)

Your project will be exported to `out/` in your project directory.  This is the client side bundle you will include in your app.

### Using glob-ames

To add this bundle to your Urbit app, visit `http://localhost:8080/docket/upload`.  Select the desk for your app, and choose your apps `out/` directory for upload.

### Using glob-http

Some modifications are required since clay does not accept file names containing capital letters:

1. Add the `generateBuildId` property to `next.config.js`:
    ```js
    module.exports = {
      basePath: '/apps/myappname',
      generateBuildId: async () => {
        // This value must be a valid urbit knot
        return 'unique-build-id'
      },
    }
    ```
1. After building, rename any files in `out/` so they do not contain capital letters, and update all links in the HTML referring to these files.
1. Proceed to glob using the `out/` directory, following the instructions at: [Urbit Developers - Glob](https://developers.urbit.org/reference/additional/dist/glob)

## Learn More

To learn app development on Urbit, follow the guides here:

- [Urbit Developers](https://developers.urbit.org)

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Support

You are welcome to bring questions and comments to the [urbit.me Discord](https://discord.gg/ehRV6yj) or to `~nodreb-borrus` on Urbit.  Thank you for supporting [urbit.me](https://urbit.me).
