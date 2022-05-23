import express, { application } from 'express';
import 'express-async-errors';

const app = express.Router();

app.use('/', (req, res, next) => {
  res.send('tweets');
});

export default app;
