import { Router } from 'express';
import {
    checkResetPasswordLink,
    forgetPassword,
    login,
    resetPassword,
    sendEmailVerification,
    signUp,
    usernameAvailable,
    verifyEmail
} from "../controllers/auth.controller.js";
import { body, header, param } from "express-validator";
import validator from "../middlewares/validator.middleware.js";
import authenticateMiddleware from "../middlewares/authenticate.middleware.js";
import authRateLimiter from "../middlewares/authRateLimiter.js";

const router = Router();

router.get('/available/:username', [
    param('username').notEmpty().withMessage("Please enter a username"),
], validator, usernameAvailable);

router.post('/signup', [
    body('fName').notEmpty().withMessage("Please enter the Name").isLength({ min: 3 }).withMessage("First Name must be at least 3 characters"),
    body('lName').optional(),
    body('email').isEmail().withMessage("Please enter a valid email").notEmpty().withMessage("Please enter the Email"),
    body('password').isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    }).withMessage("Please enter a strong password").notEmpty().withMessage("Please enter the Password"),
], validator, authRateLimiter, signUp);

router.post('/login', [
    body('email').isEmail().withMessage("Please enter a valid email").notEmpty().withMessage("Please enter the Email"),
    body('password').notEmpty().withMessage("Please enter the Password"),
], validator, authRateLimiter, login);

router.get('/verify/:email', [
    param('email').isEmail().withMessage("Please enter a valid email").notEmpty().withMessage("Please enter the Email")
], authRateLimiter, validator, sendEmailVerification);

router.put('/verify/email/:token', [
    param('token').notEmpty().withMessage("Invalid or Expired link")
], validator, verifyEmail);

router.post('/forget/password', [
    body('email').isEmail().withMessage("Please enter a valid email").notEmpty().withMessage("Please enter the Email")
], validator, forgetPassword);

router.get('/check/reset', [
    header('authorization').notEmpty().withMessage("Invalid or Expired link").contains('bearer ').withMessage("Invalid token")
], validator, authenticateMiddleware, checkResetPasswordLink);

router.put('/reset/password/:id', [
    body('password').isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    }).withMessage("Please enter a strong password").notEmpty().withMessage("Please enter the Password"),
    param('id').notEmpty().withMessage("No account found. Please sign up to create an account")
], validator, resetPassword);

export default router;