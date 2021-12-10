const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')
const { join } = require('path');

const lowdbLoader = () => {
  const adapter = new FileSync('db.json');
  const db = new low(adapter);
  db
    .defaults({
      items: [],
      categories: [],
    })
    .write();
  return db;
};

module.exports = lowdbLoader;
