import express from 'express'
import cors from 'cors'
import morgan from 'morgan';

import errorMiddleware from "./middlewares/error.middleware.js";
import logger from './lib/error/winston.js'
import ErrorHandler from "./lib/error/ErrorHandler.js";

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }));

export default app;

app.use(errorMiddleware);