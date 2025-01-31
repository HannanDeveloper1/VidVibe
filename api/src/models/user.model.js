import mongoose, { Schema } from 'mongoose'

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

const userModel = mongoose.model('User', userSchema);

export default userModel;