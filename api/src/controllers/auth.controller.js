import catchAsyncErrors from "../middlewares/catchAsyncErrors.middleware.js";
import ErrorHandler from "../lib/error/ErrorHandler.js";
import UserModel from "../models/user.model.js";
import sendMail from "../lib/extras/sendMail.js";
import {
    emailVerifiedMail,
    forgetPasswordMail,
    loginMail,
    passwordChangedMail,
    verifyEmailMail,
    welcomeMail
} from "../../public/mailTemplates.js";
import validateToken from "../lib/validation/validateToken.js";

export const usernameAvailable = catchAsyncErrors(async (req, res, next) => {
    const { username } = req.params;
    const isExists = await UserModel.findOne({ username });
    if (isExists) {
        return next(new ErrorHandler("Username not available", 404));
    }
    return res.status(200).json({
        success: true,
        message: "Username is available",
    });
});

export const signUp = catchAsyncErrors(async (req, res, next) => {
    const emailExists = await UserModel.findOne({ email: req.body.email });
    if (emailExists) {
        return next(new ErrorHandler("An email is only used for one account", 400));
    }
    const user = await UserModel.create(req.body);
    const authToken = await user.generateToken("30d");
    res.status(201).json({
        success: true,
        authToken,
    });
    const verifyToken = await user.generateToken("30m");
    sendMail({
        from: process.env.EMAIL_FROM,
        to: user.email,
        subject: "Welcome to VidVibe!",
        text: `Welcome to VidVibe, ${user.name}!`,
        html: welcomeMail(user.username, verifyToken),
    }, 3000);
});

export const login = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    const os = req.headers['os'];
    const dateTime = new Date();
    const ip = req.clientIp;
    const user = await UserModel.findOne({ email });
    if (!user) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }
    const authToken = user.generateToken("30d");
    res.status(200).json({
        success: true,
        authToken,
    });
    sendMail({
        from: process.env.EMAIL_FROM,
        to: user.email,
        subject: `New Login from ${os}`,
        priority: 'high',
        text: `We noticed a new login to VidVibe!`,
        html: loginMail(user.username, {
            dateTime,
            os,
            ip
        }),
    }, 2000);
});

export const sendEmailVerification = catchAsyncErrors(async (req, res, next) => {
    const { email } = req.params;
    const user = await UserModel.findOne({ email, 'isVerified.emailVerified': false });
    if (!user) {
        return next(new ErrorHandler("No Unverified Account found with this email", 401));
    }
    const verifyToken = await user.generateToken("30m");
    sendMail({
        from: process.env.EMAIL_FROM,
        to: user.email,
        subject: `Verify your email with ${email}`,
        priority: 'high',
        text: `Verify your email with ${email}`,
        html: verifyEmailMail(user.username, verifyToken),
    }, 500);
    return res.status(200).json({
        success: true,
        message: `Email verification link sent to ${email}`,
    });
});

export const verifyEmail = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.params;
    const decodedId = await validateToken(token, next);
    if (!decodedId) {
        return null;
    }
    const user = await UserModel.findOne({ _id: decodedId, 'isVerified.emailVerified': false });
    if (!user) {
        return next(new ErrorHandler("Invalid or Expired Link", 401));
    }
    await user.updateOne({ 'isVerified.emailVerified': true });
    if (!res.headersSent) {
        res.status(200).json({
            success: true,
            message: 'Email Verified successfully!',
        });
    }
    sendMail({
        from: process.env.EMAIL_FROM,
        to: user.email,
        subject: `Email Verified Successfully`,
        priority: 'high',
        text: `Your email has been verified successfully!`,
        html: emailVerifiedMail(user.username),
    }, 1200);
});

export const forgetPassword = catchAsyncErrors(async (req, res, next) => {
    const { email } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
        return next(new ErrorHandler("No account found. Please sign up to create an account.", 401));
    }
    const forgetPasswordToken = await user.generateToken("30m");
    sendMail({
        from: process.env.EMAIL_FROM,
        to: user.email,
        subject: `Reset Your Password for VidVibe`,
        priority: 'high',
        text: `Reset Your Password for VidVibe`,
        html: forgetPasswordMail(user.username, forgetPasswordToken),
    }, 500);
    user.verifyToken.token = forgetPasswordToken;
    user.verifyToken.expiresIn = Date.now() + 30 * 60 * 1000; // 30 minutes from now
    await user.save();
    return res.status(200).json({
        success: true,
        message: `Password reset link sent to ${email}`,
    });
});

export const checkResetPasswordLink = catchAsyncErrors(async (req, res, next) => {
    return res.status(200).json({
        success: true,
        id: req.user._id
    });
});

export const resetPassword = catchAsyncErrors(async (req, res, next) => {
    const os = req.headers['os'];
    const dateTime = new Date();
    const ip = req.clientIp;
    const { password } = req.body;
    const { id } = req.params;
    const user = await UserModel.findOne({ _id: id });
    if (!user) {
        return next(new ErrorHandler("Invalid or Expired Link", 401));
    }
    user.password = password;
    user.verifyToken.token = null; // Clear token
    user.verifyToken.expiresIn = null; // Clear token expiry
    await user.save();
    res.status(200).json({
        success: true,
        message: "Your Password Has Been Successfully Changed",
    });
    sendMail({
        from: process.env.EMAIL_FROM,
        to: user.email,
        subject: `Your Password Has Been Successfully Changed`,
        priority: 'high',
        text: `Your Password Has Been Changed`,
        html: passwordChangedMail(user.username, {
            dateTime,
            os,
            ip
        }),
    }, 500);
});