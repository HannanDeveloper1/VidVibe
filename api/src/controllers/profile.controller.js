import sendMail from "../lib/extras/sendMail.js";
import {passwordChangedMail, profileUpdated} from "../../public/mailTemplates.js";
import userModel from "../models/user.model.js";
import ErrorHandler from "../lib/error/ErrorHandler.js";

export const getProfile = async (req, res) => {
    return res.status(200).json({success: true, user: req.user});
}

export const changePassword = async (req, res, next) => {
    const os = req.headers['os'];
    const dateTime = new Date();
    const ip = req.clientIp;
    const { oldPassword, newPassword } = req.body;

    const user = await userModel.findById(req.user._id);
    if (!user) {
        return next(new ErrorHandler("Unauthorized user", 401));
    }
    else{
        const isMatch = await user.comparePassword(oldPassword);
        if (!isMatch) {
            return next(new ErrorHandler("Invalid Password", 401));
        }
        else {
            user.password = newPassword;
            await user.save();

            res.status(200).json({
                success: true,
                message: 'Password changed successfully',
            })
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
        }
    }
}

export const updateProfile = async (req, res, next) => {
    const {profilePicture, name, username, bio} = req.body;
    req.user.profilePicture = profilePicture || req.user.profilePicture;
    req.user.name = name || req.user.name;
    req.user.username = username || req.user.username;
    req.user.bio = bio || req.user.bio;
    await req.user.save();
    res.status(200).json({success: true, message: "Profile Updated successfully"});
    sendMail({
        from: process.env.EMAIL_FROM,
        to: req.user.email,
        subject: `Your Profile Has Been Successfully Updated`,
        priority: 'high',
        text: `Your Profile Has Been Updated`,
        html: profileUpdated(req.user.username),
    }, 1000);
}