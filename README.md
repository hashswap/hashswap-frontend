# Hashswap Webapp

  This repository contains the UI code for the Hashswap dApp.

  The webapp is hosted on canonical url: [https://app.hashswap.io](https://app.hashswap.io).

## Development

The Hashswap webapp is built using React. Simply install Node.js and node package dependencies to begin.

```bash
yarn install
yarn start
```

The webapp will be running on [http://localhost:3000](http://localhost:3000) by default

## Deployment

Pushing code to staging / master deploys to [staging](https://staging.hashswap.io) and [prod](https://app.hashswap.io) respectively.

Please ensure to check that your code passes the linter with **no warnings** by running `yarn lint` before deploying. You will need to have eslint installed: `npm i -g eslint`.

