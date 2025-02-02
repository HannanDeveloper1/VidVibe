import catchAsyncErrors from "../middlewares/catchAsyncErrors.middleware.js";
import ErrorHandler from "../lib/error/ErrorHandler.js";
import userModel from "../models/user.model.js";
import UserModel from "../models/user.model.js";
import sendMail from "../lib/extras/sendMail.js";
import {loginMail, welcomeMail} from "../../public/mailTemplates.js";



export const usernameAvailable = catchAsyncErrors(async (req, res, next) => {
    const { username } = req.params;

    const isExists = await userModel.findOne({ username });
    if (isExists) {
        return next(new ErrorHandler("Username not available", 404));
    } else {
        return res.status(200).json({
            success: true,
            message: "Username is available",
        });
    }
});

export const signUp = catchAsyncErrors(async (req, res, next) => {
    const emailExists = await userModel.findOne({ email: req.body.email });
    if (emailExists) {
        return next(new ErrorHandler("An email is only used for one account", 400));
    } else {
        const user = await userModel.create(req.body);
        const authToken = await user.generateToken();
        res.status(201).json({
            success: true,
            authToken,
        });
        await sendMail({
            from: '"Hannan from VidVibe" <hannandeveloper1@gmail.com>',
            to: user.email,
            subject: "Welcome to VidVibe!",
            text: `Welcome to VidVibe, ${user.name}!`,
            html: welcomeMail(user.username),
        }, 3000)
    }
});

export const login = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    const os = req.headers['os'];
    const user = await UserModel.findOne({ email });
    if (!user) {
        return next(new ErrorHandler("Invalid email or password", 401));
    } else {
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return next(new ErrorHandler("Invalid email or password", 401));
        } else {
            const authToken = user.generateToken();
            res.status(200).json({
                success: true,
                authToken,
            });
            sendMail({
                from: '"Hannan from VidVibe" <hannandeveloper1@gmail.com>',
                to: user.email,
                subject: `New Login from ${os}`,
                priority: 'high',
                text: `We noticed a new login to VidVibe!`,
                html: loginMail(user.username, os),
            }, 2000)
        }
    }
});