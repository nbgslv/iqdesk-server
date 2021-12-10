const express = require('express');
const CategoryModel = require('../../../models/categories');

const route = express.Router();

const categoriesRouter = app => {
  app.use('/categories', route);

  // Create
  route.post('/', async (req, res) => {
    const { name } = req.body;

    const categoryModel = new CategoryModel(name);

    req.app.db.get('categories').push(categoryModel.toObject()).write();

    res.status(200).send(JSON.stringify({
      success: true,
      data: categoryModel.toObject(),
    }));
  })

  // Read
  route.get('/', async (req, res) => {
    const { id } = req.params;

    if (id) {
      const category = req.app.db.get('categories').find({ id }).value();
      if (category) res.status(200).send(JSON.stringify({
        success: true,
        data: category,
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
        data: req.app.db.get('categories').value(),
      }));
    }
  });

  // Update
  route.put('/', async (req, res) => {
    const { id, name } = req.body;

    const category = req.app.db.get('categories').find({ id }).assign({ name }).write();

    res.status(200).send(JSON.stringify({
      success: true,
      data: category,
    }));
  });

  // Delete
  route.delete('/', async (req, res) => {
    const { id } = req.body;

    req.app.db.get('categories').remove({ id }).write();
    req.app.db.get('items').find({ category: id }).assign({ category: '' }).write();

    res.status(200).send(JSON.stringify({
      success: true,
      data: null,
    }));
  });
}

module.exports = categoriesRouter;
