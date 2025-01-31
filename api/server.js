import dotenv from 'dotenv'
dotenv.config()

import server from './src/app.js'
import connectDB from "./src/lib/db/connectDB.js";

const PORT = process.env.PORT || 5001

server.listen(PORT, () => {
    console.log(`VidVibe API server is listening on port ${PORT}`);
    connectDB();
})