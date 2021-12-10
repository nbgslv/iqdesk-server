const expressLoader = require('./express');
const lowdbLoader = require('./lowdb');

const indexLoader = {
  init: async ({ app }) => {
    const db = lowdbLoader();
    app.db = db;
    console.log('lowdb Initialized');
    await expressLoader({ app });
    console.log('Express Initialized');
  },
};

module.exports = indexLoader;
