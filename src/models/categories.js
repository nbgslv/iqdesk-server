const IndexModel = require('../models');

class CategoryModel extends IndexModel {
  constructor(name) {
    super();
    this._name = name;
  }

  get name() {
    return this._name;
  }

  toObject() {
    return {
      id: this._id,
      name: this._name,
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
    }
  }
}

module.exports = CategoryModel;
