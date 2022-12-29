import express, { Request, Response } from 'express';
import "reflect-metadata";
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req: Request, res: Response) {
  res.send('hello world');
});
app.listen(process.env.HTTP_PORT || 4002)