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

You can interact with the app via 2 REST APIs. Bellow both of them are detailed.

### HTTP base API for the blockchain nodes

The HTTP base API for the blockchain nodes runs on `http://localhost:4000`, for which you can see all the endpoints [here](https://lisk.com/documentation/api/lisk-node-http.html).

An example of request for this API could be (run on your terminal):

```bash
curl --location --request GET 'http://localhost:4000/api/node/info'
```

### NFT API

The NFT API is the custom one developed on this repo. Runs on `http://localhost:8080`.

| Method | URL                   | Example                                                                                                         |
| ------ | --------------------- | --------------------------------------------------------------------------------------------------------------- |
| `GET`  | `/api/nft_tokens`     | `curl --location --request GET 'http://localhost:8080/api/nft_tokens'`                                          |
| `GET`  | `/api/nft_tokens/:id` | `curl --location --request GET 'http://localhost:8080/api/nft_tokens/657f610728eef97d55e50212871f0993bb7cc700'` |
| `GET`  | `/api/transactions`   | `curl --location --request GET 'http://localhost:8080/api/transactions'`                                        |

## Authors

- [Clemente Sutil](https://github.com/ClementeSerrano)
