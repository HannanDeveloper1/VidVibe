import {validationResult} from 'express-validator';
import ErrorHandler from "../lib/error/ErrorHandler.js";

const validator = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new ErrorHandler(errors.errors[0].msg, 400));
    } else {
        next();
    }
}

export default validator;
