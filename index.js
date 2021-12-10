const express = require('express');
const dotenv = require('dotenv');
const indexLoader = require('./src/loaders');

dotenv.config();

async function startServer() {
  const app = express();

  await indexLoader.init({ app });

  app.listen(process.env.PORT, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Server is ready, listening to port: ${process.env.PORT}`);
  });
}

startServer()
  .then()
  .catch(e => console.error(e));
