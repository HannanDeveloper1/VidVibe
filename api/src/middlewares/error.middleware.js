import ErrorHandler from '../lib/error/ErrorHandler.js'
import logger from "../lib/error/winston.js";


const Error = (err, req, res, next) => {
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;


    logger.error(`${err.status || 500} - ${err.message || "Internal Server Error"} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

    if (err.name === 'CastError') {
        const message = `Resource not found`;
        next(new ErrorHandler(message, 404));
    } else if (err.code === 11000) {
        const message = 'Duplicate field value entered';
        next(new ErrorHandler(message, 400));
    } else if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message);
        next(new ErrorHandler(message, 400));
    } else {
        res.status(err.statusCode).json({
            success: false,
            message: err.message,
        })
    }
}

export default Error;