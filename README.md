# NFT basic app

This app is a basic NFT blockchain app build using [the Lisk SDK](https://lisk.com/documentation/lisk-sdk/index.html)

## Setup

Follow this steps to install & run the app:

1. Clone the repo on your local machine by running on your terminal:

   ```bash
   $ g clone https://github.com/ClementeSerrano/nft-app.git
   ```

2. Step into the app and install the dependencies:

   ```bash
   $ cd nft-app && npm i
   ```

3. Add the corresponding `env` variables by coping and pasting the `.env.example` configs.

   ```bash
   $ cp .env.example .env
   ```

   You can edit this variables in the `env` file.

4. Start the app.
   ```bash
   $ npm start:server
   ```

The app runs with [Nodemon](https://www.npmjs.com/package/nodemon), so it will restart on every file change.

## Authors

- [Clemente Sutil](https://github.com/ClementeSerrano)
