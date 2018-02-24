const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
const seed = require('./seed');

app.use(morgan('common')); // http logging
app.use('/blog-posts', bodyParser.json(), routes);

app.listen(8080, () => {
  console.log('App listening on port 8080!');
});
