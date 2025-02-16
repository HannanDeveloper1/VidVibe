import { Router } from 'express'
import authenticateMiddleware from "../middlewares/authenticate.middleware.js";
import {changePassword, getProfile, updateProfile} from "../controllers/profile.controller.js";
import {body} from "express-validator";
import validator from "../middlewares/validator.middleware.js";
import authRateLimiter from "../middlewares/authRateLimiter.js";

const router = Router();

router.get('/', authenticateMiddleware, getProfile)

router.put('/change/password', [
    body('oldPassword').optional(),
    body('newPassword').isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    }).withMessage("Please enter a strong password").notEmpty().withMessage("Please enter the Password"),
], authRateLimiter, authenticateMiddleware, validator, changePassword)

router.put('/update', [
    body('profilePicture').isURL().withMessage('The image is corrupted or the address is not correct').optional(),
    body('username').optional(),
    body('name').isLength({ min: 3 }).withMessage("Name must be at least 3 characters").optional(),
    body('bio').optional(),
], authRateLimiter, authenticateMiddleware, validator,  updateProfile);

export default router;
