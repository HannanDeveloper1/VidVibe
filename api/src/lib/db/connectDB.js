import mongoose from 'mongoose'

const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URI)
        .then((conn) => {
            console.log('Connected to DB at', conn.connection.host)
        })
        .catch((err) => {
            console.log('Error connecting to DB:', err.message)
        })
}

export default connectDB;