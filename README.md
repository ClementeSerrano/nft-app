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

## Development

You can interact with the app via its REST API. The app listen to 2 ports, each one with the following endpoints:

### HTTP base API

The HTTP plugin runs on `http://localhost:4000`, for which you have the following endpoints (no headers are required):

| Method | URL                                      | Example                                                                                                       |
| ------ | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `GET`  | `http://localhost:4000/api/node/info`    | -                                                                                                             |
| `GET`  | `http://localhost:4000/api/accounts/:id` | `curl --location --request GET 'http://localhost:4000/api/accounts/657f610728eef97d55e50212871f0993bb7cc700'` |
| `GET`  | `http://localhost:4000/api/transactions` | -                                                                                                             |

### NFT API

## Authors

- [Clemente Sutil](https://github.com/ClementeSerrano)
