import { Router } from 'express'
import {signUp} from "../controllers/auth.controller.js";
import {body} from "express-validator";
import validator from "../middlewares/validator.middleware.js";

const router = Router();

router.post('/signup', [
    body("profilePicture").isURL().withMessage("Profile picture must be provided in Url form").optional(),
    body('name').notEmpty().withMessage("Please enter the Name").isLength({min : 3}).withMessage("Name must be at least 3 characters"),
    body('headline').optional(),
    body('email').isEmail().withMessage("Please enter a valid email").notEmpty().withMessage("Please enter the Email"),
    body('password').isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    }).withMessage("Please enter a strong password").notEmpty().withMessage("Please enter the Password"),
    body('status.isOnline').isBoolean().withMessage("Value must be either True or False"),
    body('status.thought').optional(),
], validator, signUp);

export default router;