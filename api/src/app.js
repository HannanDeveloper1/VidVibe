import express from 'express'
import cors from 'cors'
import morgan from 'morgan';
import requestIp from 'request-ip';

import errorMiddleware from "./middlewares/error.middleware.js";
import logger from './lib/error/winston.js'
import authRoute from "./routes/auth.routes.js";
import profileRoutes from "./routes/profile.routes.js";

const app = express()

app.use(cors(['exp://192.168.100.2:8081'])) // Local client expo url
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('combined', {stream: {write: message => logger.info(message.trim())}}));

app.use(requestIp.mw());

app.use('/api/auth', authRoute)
app.use('/api/profile', profileRoutes)

export default app;

app.use(errorMiddleware);