// Dependencies
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import path from "path"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
dotenv.config()

// Our MIDDLEware
const app = express()
const corsOrigins = [process.env.AUTH_SERVER, process.env.ORIGIN]
app.use(cors({
    origin: function (origin, callback) {
        if (corsOrigins.indexOf(origin) !== -1 || !origin) {
          callback(null, true)
        } else {
          callback(new Error('Not allowed by CORS'))
        }
      }
    ,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json())
app.use(cookieParser());


// Our server
app.listen(process.env.PORT, () => {
    console.log("Server running on port 5000")
})


// Routers
import authentication from "./routes/authentication.js"
app.use("/auth/", authentication)

import user from "./routes/user.js"
app.use("/user/", user)

import applications from "./routes/applications.js"
app.use("/apps/", applications)

// Our Mongo db
mongoose.connect(process.env.SRV_URL as string)