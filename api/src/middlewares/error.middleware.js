import logger from "../lib/error/winston.js";

const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    if (err.name === 'CastError') {
        err.message = 'Resource not found';
        err.statusCode = 404;
    } else if (err.code === 11000) {
        err.message = 'Duplicate field value entered';
        err.statusCode = 400;
    } else if (err.name === 'ValidationError') {
        err.message = Object.values(err.errors).map(val => val.message).join(', ');
        err.statusCode = 400;
    }

    logger.error(`${err.statusCode} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
}

export default errorMiddleware;
