const IndexModel = require('../models');

class ItemModel extends IndexModel {
  constructor(name) {
    super();
    this._name = name;
    this._category = null;
  }

  get name() {
    return this._name;
  }

  set category(category) {
    this._category = category;
  }

  toObject() {
    return {
      id: this._id,
      name: this._name,
      category: this._category,
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
    }
  }
}

module.exports = ItemModel;
