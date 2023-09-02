import express from "express"
import User from "../models/User";
import Token from "../models/VerificationToken"
import crypto from "crypto"
import sendEmail from "../utils/authentication"
import { hashString, compareHash } from "../utils/security"
import { verifyUserToken, jwtCreation } from "../utils/authentication.js"
import { TokenType, UserType } from "../types/models";
import { Request, Response } from "express";

const router = express.Router()


// Routes
router.post("/register", async (req: Request, res: Response) => {
    try {

        // Test to see if the user already exists
        const emailExists = await User.findOne({
            email: req.body.email
        })

        if (emailExists) return res.status(400).send("Email already exists!")
        
        // Hash password
        const hashedPassword = hashString(req.body.password)

        // Create User
        const newUser: UserType = await new User({
            email: req.body.email.toLowerCase(),
            password: hashedPassword 
        }).save()

        // Create token
        const newToken = await new Token({
            userId: newUser._id,
            token: crypto.randomBytes(32).toString("hex"),
        }).save()

        // Send the verification email
        const message = `${req.headers.origin}/login/${newUser._id}/${newToken.token}`;
        await sendEmail(newUser.email, "Verify Email", message);

        res.send("A verification email was sent!");

    } catch (err) {
        console.log(err)
        res.status(400).send("Unknown Error has Occured!")
    }
})

router.post("/verify/:id/:token", async (req: Request, res: Response) => {
    try {
        const user: UserType = await User.findOne({ _id: req.params.id });

        if (!user) return res.status(400).send("Invalid link");

        const token = await Token.findOne({
            userId: user._id,
            token: req.params.token,
        }) as TokenType;

        if (!token) return res.status(400).send("Invalid link");

        await User.updateOne({ _id: user._id}, {verified: true});
        await Token.findByIdAndRemove(token._id);
        
        jwtCreation(res, user, "Successfully verified and logged in!")
    } catch (err) {
        console.log(err)
        res.status(400).send("An error occured");
    }
});


router.post("/login", async (req: Request, res: Response) => {
    try {
        const user: UserType = await User.findOne({
            email: req.body.email.toLowerCase()
        });

        if (!user) return res.status(400).send("Invalid username or password!")

        if (!user.verified) return res.status(400).send("Please verify your email first!")

        const validPass = await compareHash(req.body.password, user.password);

        if (!validPass) return res.status(400).send("Invalid username or password!")

        jwtCreation(res, user, "Successfully logged in!")
    } catch (err) {
        console.log(err)
        res.status(400).send("Unknown Error has Occured!")
    }
})


router.post("/logout", verifyUserToken, async (req: Request, res: Response) => {
    try {
        res.clearCookie("token", { httpOnly: true, sameSite: "none", secure: true })
        res.send("Successfully logged out!")
    } catch (err) {
        res.status(400).send("Unknown Error has Occured!")
    }
})


export default router