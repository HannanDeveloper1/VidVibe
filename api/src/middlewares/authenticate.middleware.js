import jwt from 'jsonwebtoken';
import ErrorHandler from '../lib/error/ErrorHandler.js';
import UserModel from "../models/user.model.js";

const authenticateMiddleware = async (req, res, next) => {
    const token = req.header('authorization')?.replace('bearer ', '');
    if (!token) {
        return next(new ErrorHandler('Please authenticate', 401));
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await UserModel.findById(decoded._id).select(['-password', '-verifyToken.token', '-verifyToken.expiresIn']);

        if (!user) {
            return next(new ErrorHandler("Invalid or expired token", 401));
        }
        req.user = user;
        next();
    } catch (error) {
        return next(new ErrorHandler('Invalid token or expired token. Please authenticate again.', 401));
    }
};

export default authenticateMiddleware;
