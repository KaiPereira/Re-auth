import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"
import { connectToUserDb } from "./utils/security"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
dotenv.config()


const app = express()
const port = process.env.PORT || 4000

// Custom CORS middleware to set the origin dynamically
app.use((req, res, next) => {
    const allowedOrigins = [req.headers.origin]; // Use the request origin as the allowed origin    
    cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
    })(req, res, next);
});
app.use(bodyParser.json());
app.use(cookieParser());

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

app.use(connectToUserDb);

import authentication from "./routes/authentication"
app.use("/auth/", authentication)

import user from "./routes/user"
app.use("/user/", user)