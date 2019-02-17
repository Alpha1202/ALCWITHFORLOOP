import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => res.status(200).send({ message: 'Server is running' }));

export default app;
