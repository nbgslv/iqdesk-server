const express = require('express');
const ItemModel = require('../../../models/items');

const route = express.Router();

const itemsRouter = app => {
  app.use('/items', route);

  // Create
  route.post('/', async (req, res) => {
    const { name, category } = req.body;

    if (!name) res.status(404).send(JSON.stringify({
      success: false,
      data: {
        error: {
          message: 'Must provide item name'
        }
      }
    }));

    const itemModel = new ItemModel(name);

    if (category) {
      itemModel.category = category;
    }

    req.app.db.get('items').push(itemModel.toObject()).write();

    res.status(200).send(JSON.stringify({
      success: true,
      data: itemModel.toObject(),
    }));
  })

  // Read
  route.get('/', async (req, res) => {
    const { id } = req.params;

    if (id) {
      const item = req.app.db.get('items').find({ id }).value();
      if (item) res.status(200).send(JSON.stringify({
        success: true,
        data: item
      }));
      res.status(404).send(JSON.stringify({
        success: false,
        data: {
          error: {
            message: 'Item not found'
          }
        }
      }));
    } else {
      res.status(200).send(JSON.stringify({
        success: true,
        data: req.app.db.get('items').value(),
      }));
    }
  });

  // Update
  route.put('/', async (req, res) => {
    const { id, name, category } = req.body;

    const item = req.app.db.get('items').find({ id }).assign({
      name,
      category,
    }).write();

    if (item && !item.id)
      res.status(404).send(JSON.stringify({
        success: false,
        data: {
          error: {
            message: 'Item not found'
          }
        }
      }));
    else
      res.status(200).send(JSON.stringify({
        success: true,
        data: item,
      }));
  });

  // Delete
  route.delete('/', async (req, res) => {
    const { id } = req.body;

    if (!id)
      res.status(404).send(JSON.stringify({
        success: false,
        data: {
          error: {
            message: 'Item not found'
          }
        }
      }));
    else {
      req.app.db.get('items').remove({ id }).write();

      res.status(200).send(JSON.stringify({
        success: true,
        data: null,
      }));
    }
  });
}

module.exports = itemsRouter;
