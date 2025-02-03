import {Router} from 'express'
import {login, sendEmailVerification, signUp, usernameAvailable, verifyEmail} from "../controllers/auth.controller.js";
import {body, param} from "express-validator";
import validator from "../middlewares/validator.middleware.js";

const router = Router();

router.get('/available/:username', usernameAvailable);

router.post('/signup', [
    body("profilePicture").isURL().withMessage("Profile picture must be provided in Url form").optional(),
    body('name').notEmpty().withMessage("Please enter the Name").isLength({min: 3}).withMessage("Name must be at least 3 characters"),
    body('headline').optional(),
    body('email').isEmail().withMessage("Please enter a valid email").notEmpty().withMessage("Please enter the Email"),
    body('password').isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    }).withMessage("Please enter a strong password").notEmpty().withMessage("Please enter the Password"),
    body('status.isOnline').isBoolean().withMessage("Value must be either True or False").optional(),
    body('status.thought').optional(),
], validator, signUp);

router.post('/login', [
    body('email').isEmail().withMessage("Please enter a valid email").notEmpty().withMessage("Please enter the Email"),
    body('password').notEmpty().withMessage("Please enter the Password"),
], validator, login);

router.get('/verify/:email', [
    param('email').isEmail().withMessage("Please enter a valid email").notEmpty().withMessage("Please enter the Email")
], validator, sendEmailVerification);

router.put('/verify/email/:token', [
    param('token').notEmpty().withMessage("Please enter the Token")
], validator, verifyEmail)


export default router;