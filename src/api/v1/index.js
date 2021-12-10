const express = require('express');
const itemsRouter = require('./routes/items');
const categoriesRouter = require('./routes/categories');

const router = () => {
  const app = express.Router();
  itemsRouter(app);
  categoriesRouter(app);

  return app;
};

module.exports = router;
