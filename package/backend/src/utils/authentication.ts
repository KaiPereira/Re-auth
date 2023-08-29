import { NextFunction, Request, Response } from "express"
import jwt, { JwtPayload } from 'jsonwebtoken';
import User from "../models/User"
import { Resend } from "resend"

// Takes the cookie and verifies it
export const verifyUserToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.token

        // Check for JWT Secret
        if (!process.env.JWT_SECRET) return res.status(400).send("JWT Secret not specified")

        const jwtSecret = process.env.JWT_SECRET

        // Check of the token in request
        if (!token) return res.status(401).send("JWT Invalid!")

        // Verify the token was issues by the app
        const verification: JwtPayload = jwt.verify(token, jwtSecret) as JwtPayload;

        if (!verification) return res.status(401).send("Invalid authorization!")

        // Get the id from the jwt values
        const user = await User.findById(verification.id)

        // Assign the user to the req.user property
        req.user = user

        // Grab our user details from the JWT if it passes all calls
        next()

    } catch (err) {
        console.log(err)
        res.status(400).send("Authentication failed!")
    }
}

export const jwtCreation = async (res: Response, user: any, message: string) => {
    try {
        const jwtPayload = {
            id: user._id,
            email: user.email.toLowerCase()
        }

        // Check for JWT Secret
        if (!process.env.JWT_SECRET) return res.status(400).send("JWT Secret not specified")

        const token = jwt.sign(jwtPayload, process.env.JWT_SECRET, {expiresIn: '7d'})

        res.cookie('token', token, { httpOnly: true, sameSite: "none", secure: true }).send(message)
    } catch (err) {
        console.log(err)
        res.status(400).send("Authentication failed!")
    }
}