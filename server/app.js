import express from 'express';

const app = express();

app.use(express.json());

app.get('/tweets', (req, res, next) => {
  res.send(req.query);
});
app.get('/tweets/:id', (req, res, next) => {
  res.send(req.params.id);
});
app.post('/tweets', (req, res, next) => {
  res.send(req.body);
});
app.put('/tweets/:id', (req, res, next) => {
  res.send(req.params.id);
});
app.delete('/tweets/:id', (req, res, next) => {
  res.send(req.params.id);
});

app.listen(8080);
