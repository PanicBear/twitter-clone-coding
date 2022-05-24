import express from 'express';
import 'express-async-errors';

let tweets = [
  {
    id: '1',
    text: 'test',
    createdAt: Date.now().toString(),
    name: 'Bob',
    username: 'bob',
    url: 'https://picsum.photos/64/64',
  },
  {
    id: '2',
    text: 'test2',
    createdAt: Date.now().toString(),
    name: 'Clarko',
    username: 'clarko',
    url: 'https://picsum.photos/64/64',
  },
];

const router = express.Router();

router.get('/', (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? tweets.filter((tweet) => {
        return tweet.username === username;
      })
    : tweets;
  res.status(200).json(data);
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const data = tweets.find((tweet) => tweet.id === id);

  if (data) {
    return res.status(200).json(data);
  }
  return res.status(404).json({ message: `Tweet id ${id} not found` });
});

router.post('/', (req, res, next) => {
  const { text, name, username } = req.body;
  const tweet = {
    id: Date.now().toString(),
    text,
    name,
    username,
    createdAt: Date.now(),
  };
  tweets = [tweet, ...tweets];
  res.status(201).json(tweet);
});

router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
    return res.status(200).json(tweet);
  }
  return res.status(404).json({ message: `Tweet id ${id} not found` });
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  tweets = tweets.filter((tweet) => tweet.id !== id);
  res.sendStatus(204);
});

export default router;
