//app.ts
import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { pcRoutes } from './app/PcProduct/pcProduct.route';
import routes from './app/routes';
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', routes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
