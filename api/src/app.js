import express from 'express'
import cors from 'cors'
import morgan from 'morgan';
import requestIp from 'request-ip';

import errorMiddleware from "./middlewares/error.middleware.js";
import logger from './lib/error/winston.js'
import authRoute from "./routes/auth.route.js";

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('combined', {stream: {write: message => logger.info(message.trim())}}));

app.use(requestIp.mw());

app.use('/api/auth', authRoute)

export default app;

app.use(errorMiddleware);