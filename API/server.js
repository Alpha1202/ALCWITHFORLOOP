import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import db from '../models';

const port = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', routes);

db.sequelize.sync().then(() => {
  app.listen(port, () => console.log('server is running'));
});

