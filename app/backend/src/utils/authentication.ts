import { NextFunction, Request, Response } from "express"
import env from "dotenv/config"
import jwt from "jsonwebtoken"
import User from "../models/User.js"
import { JwtPayload } from "../types/security.js"
import { UserType } from "../types/models.js"


// This is our main authentication
// Takes the cookie and verifies it
const verifyUserToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.token
        const jwtSecret = process.env.JWT_SECRET

        if (!token) return res.status(401).send("JWT Invalid!")

        if (!jwtSecret) return res.status(400).send("No JWT token specified on the backend!")

        const verification = jwt.verify(token, jwtSecret) as JwtPayload

        if (!verification) {
            return res.status(401).send("Invalid authorization!")
        }

        const user = await User.findById(verification.id)

        req.user = user

        // Grab our user details from the JWT if it passes all calls
        next()

    } catch (err) {
        console.log(err)
        res.status(400).send("Authentication failed!")
    }
}

const jwtCreation = async (res: Response, user: UserType, message: string) => {
    try {
        const jwtSecret = process.env.JWT_SECRET

        if (!jwtSecret) return res.status(400).send("A JWT secret was not specified on the backend!")

        const jwtPayload = {
            id: user._id,
            email: user.email.toLowerCase()
        }

        const token = jwt.sign(jwtPayload, jwtSecret, {expiresIn: '7d'})

        res.cookie('token', token, { httpOnly: true, sameSite: "none", secure: true }).send(message)
    } catch (err) {
        console.log(err)
        res.status(400).send("Authentication failed!")
    }
}

export {
    verifyUserToken,
    jwtCreation
}

import { Resend } from "resend"

const sendEmail = async (email: string, subject: string, text: string) => {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    resend.emails.send({
      from: process.env.RESEND_EMAIL as string,
      to: email,
      subject: subject,
      html: text
    });

    console.log("email sent sucessfully");
  } catch (err) {
    console.log("email not sent");
    throw err
  }
};

export default sendEmail;