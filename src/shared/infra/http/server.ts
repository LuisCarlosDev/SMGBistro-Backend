import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors'
import '../../container';
import '../typeorm';

import { router } from './routes';
import { AppError } from '../../errors/AppError';
import { Logger } from '../../Logger';

const app = express();
const logger = new Logger();

app.use(express.json());

app.use(cors());
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  },
);

app.listen(3333, () =>  logger.info('Server is running on port 3333'))
