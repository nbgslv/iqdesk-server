const { v4: uuid } = require('uuid');

class IndexModel {
  constructor() {
    this._id = uuid();
    this._createdAt = new Date();
    this._updatedAt = new Date();
  }

  get id() {
    return this._id;
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  set updatedAt(time) {
    this._updatedAt = time;
  }
}

module.exports = IndexModel;
