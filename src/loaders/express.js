const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const config = require('../config');
const router = require('../api/v1');

const expressLoader = ({ app }) => {
  app.use(helmet());

  app.use(
    cors({
      credentials: true,
      origin: [
        'http://localhost:3000',
      ],
    })
  );
  app.use(bodyParser.json());
  app.use('/api/v1', router());

  return app;
};

module.exports = expressLoader;
