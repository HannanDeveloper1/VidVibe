import mongoose, {Schema} from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const userSchema = new Schema({
    profilePicture: String,
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    username: {
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
    phone: String,
    isVerified: {
        emailVerified: {
          type: Boolean,
          default: false,
        },
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
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});


userSchema.methods.comparePassword = async function (inputPassword) {
    return await bcrypt.compare(inputPassword, this.password);
};

userSchema.methods.generateToken = function (expiresIn) {
    return jwt.sign({_id: this._id}, process.env.JWT_SECRET, { expiresIn });
};

const userModel = mongoose.model('User', userSchema);

export default userModel;