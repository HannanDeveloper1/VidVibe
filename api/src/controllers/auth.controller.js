import catchAsyncErrors from "../middlewares/catchAsyncErrors.middleware.js";
import ErrorHandler from "../lib/error/ErrorHandler.js";
import userModel from "../models/user.model.js";

export const usernameExist = catchAsyncErrors( async (req, res, next) => {
    const { username } = req.body;
    const isExists = await userModel.findOne({ username })
    if (isExists) {
        return next(new ErrorHandler("Username not found", 404));
    }
    else {
        return res.status(100).json({
            success: true,
            message: "Username is available"
        })
    }
})

export const signUp  = catchAsyncErrors(async (req, res, next) => {
    const emailExists = await userModel.findOne( { email: req.body.email } );
    if(emailExists) {
        next( new ErrorHandler("An email is only used for one account", 400) );
    }
    else{
    await userModel.create(req.body);
    const authToken = await userModel.generateToken();
    return res.status(201).json({
        success: true,
        authToken,
    })
    }
})
