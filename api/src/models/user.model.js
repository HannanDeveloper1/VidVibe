import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


const userSchema = new Schema({
    profilePicture: String,
    name:{
        type: String,
        required: true,
        minLength: 3
    },
    username:{
        type: String,
        required: true,
    },
    headline: String,
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
    status: {
        isOnline: {
            type: Boolean,
            default: false
        },
        thought: String,
    }
})

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

userSchema.statics.comparePassword = async function (password) {
   return await bcrypt.compare(password, this.password);
}

userSchema.statics.generateToken = async function () {
    return await jwt.sign({_id: this._id}, process.env.JWT_SECRET,{
        expiresIn: "30d"
    });
}

const userModel = mongoose.model('User', userSchema);

export default userModel;