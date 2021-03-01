import * as express from 'express';
import { environment } from './environments/environment';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to preference-api!' });
});

const port = environment.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
