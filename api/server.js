import dotenv from 'dotenv'
import app from './src/app.js'
import connectDB from "./src/lib/db/connectDB.js";
import logger from './src/lib/error/winston.js'

dotenv.config()

const PORT = process.env.PORT || 3001


const server = app.listen(PORT, () => {
    console.log(`VidVibe API server is listening on port ${PORT}`);
    connectDB();
})

const gracefulShutdown = () => {
    console.log('Shutting down the server');
    server.close(() => {
        console.log('Closed out remaining connections.');
        process.exit(0);
    });

    setTimeout(() => {
        console.error('Could not close connections in time, forcefully shutting down.');
        process.exit(1);
    }, 10000)
}


process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);
process.on('uncaughtException', (err) => {
    console.error(`Uncaught Exception: ${err.message}`);
    logger.error(`Uncaught Exception: ${err.stack}`);
    gracefulShutdown();
});
process.on('unhandledRejection', (err) => {
    console.error(`Unhandled Rejection: ${err.message}`);
    logger.error(`Unhandled Rejection: ${err.stack}`);
    gracefulShutdown();
});