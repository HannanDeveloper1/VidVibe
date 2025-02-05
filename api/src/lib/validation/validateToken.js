import jwt from "jsonwebtoken";
import ErrorHandler from "../error/ErrorHandler.js";

const validateToken = async (token, next) => {
    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        return decoded._id;
    } catch (error) {
        return next(new ErrorHandler('Invalid or Expired link'));
    }
};

export default validateToken;
