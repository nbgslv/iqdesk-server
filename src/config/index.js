const dotenv = require('dotenv');

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

dotenv.config();

const config = {
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT, 10),
};

module.exports = config;
