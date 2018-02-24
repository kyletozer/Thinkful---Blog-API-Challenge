const BlogPosts = require('./models').BlogPosts;

BlogPosts.create(
  'post #1',
  'Etiam ultricies nisi vel augue.',
  'kyle'
);

BlogPosts.create(
  'post #2',
  'Etiam ultricies nisi vel augue. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.',
  'kyle'
);

BlogPosts.create(
  'post #3',
  'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.',
  'kyle'
);
