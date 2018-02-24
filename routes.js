const express = require('express');
const router = express.Router();
const BlogPosts = require('./models').BlogPosts;

router.get('/', (req, res) => {
  res.send(BlogPosts.get());
});

router.post('/', (req, res) => {

  let {body} = req;
  let requiredFields = ['title', 'content', 'author'];

  for(let i = 0; i < requiredFields.length; i++) {
    const field = requiredFields[i];

    if(Object.keys(body).indexOf(field) === -1) {
      const error = field + ' is missing in the request';
      console.error(error);
      return res.status(400).send(error);
    }
  }

  let post = BlogPosts.create(body.title, body.content, body.author);
  res.status(201).json(post);
});

router.delete('/:id', (req, res) => {

  let {params} = req;

  BlogPosts.delete(params.id);
  res.status(201).json(BlogPosts.get(params.id));
});

router.put('/:id', (req, res) => {

  const requiredFields = ['id', 'title', 'content', 'author', 'publishDate'];
  const {params, body} = req;

  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in body)) {
      const message = `Missing \`${field}\` in request body`
      console.error(message);
      return res.status(400).send(message);
    }
  }

  if (params.id !== body.id) {
    const message = (
    `Request path id (${params.id}) and request body id `
    `(${body.id}) must match`);
    console.error(message);
    return res.status(400).send(message);
  }

  console.log(`Updating blog post with id \`${params.id}\``);

  const updatedItem = BlogPosts.update({
    id: params.id,
    title: body.title,
    content: body.content,
    author: body.author,
    publishDate: body.publishDate
  });

  res.status(204).end();
});

module.exports = router;
