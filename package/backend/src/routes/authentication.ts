import { Router } from "express"
import User from "../models/User"
import VerificationToken from "../models/VerificationToken"
import { hashString, createRandomString, compareHash } from "../utils/security"
import { sendEmail, jwtCreation, verifyUserToken } from "../utils/authentication"
const router = Router()


router.post("/register", async (req, res) => {
    try {
        const email: string = req.body.email
        const password: string = req.body.password
        const passwordHashed = hashString(password)

        // First we make sure the user doesn't already exist
        const userExists = await User.findOne({email: email})

        if (userExists) return res.status(400).send("A user with that email already exists!")

        // Second we create a new user that's not verified
        const newUser = await new User({
            email: email,
            password: passwordHashed,
            verified: false
        }).save()

        const newToken = await new VerificationToken({
            userId: newUser._id,
            token: createRandomString(),
        }).save()

        // Finally we send them a verification email
        const message = `${req.headers.origin}/login/${newUser.id}/${newToken.token}`;
        await sendEmail(newUser.email, "Verify Email", message);

        res.send("User successfully created!")
    } catch (err) {
        console.log("ERROR: ", err)
        res.status(400).send(err)
    }
})


router.get("/verify/:id/:token", async (req, res) => {
    try {

        const idParam = req.params.id
        const tokenParam = req.params.token

        // First we make sure that a user and token exist with these details
        
        // Double security
        // Making sure the user exists
        const user = await User.findOne({ _id: idParam });
        const userId = user._id

        if (!user) return res.status(400).send("Invalid link");

        // Making sure the token exists
        const token = await VerificationToken.findOne({
            userId: userId,
            token: tokenParam,
        });
        const tokenId = token._id

        if (!token) return res.status(400).send("Invalid link");

        // Second, we make the user verified and remove the verification token
        await User.updateOne({ _id: userId}, {verified: true});
        await VerificationToken.findByIdAndRemove(tokenId);
        
        // Third we create and send back a jwt token to the app
        jwtCreation(res, user, "Successfully registered!")
    } catch (err) {
        console.log(err)
        res.status(400).send("An error occured");
    }
});


router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email.toLowerCase()
        })

        if (user) {

            if (!user.verified) return res.status(400).send("Please verify your email first!")

            const validPass = await compareHash(req.body.password, user.password);

            if (!validPass) return res.status(400).send("Invalid username or password!")

            jwtCreation(res, user, "Successfully logged in!")
        } else {
            res.status(400).send("Invalid username or password!")
        }
    } catch (err) {
        console.log(err)
        res.status(400).send("Unknown Error has Occured!")
    }
})


router.post("/logout", verifyUserToken, async (req, res) => {
    try {
        res.clearCookie("token", { httpOnly: true, sameSite: "none", secure: true })
        res.send("Successfully logged out!")
    } catch (err) {
        res.status(400).send("Unknown Error has Occured!")
    }
})


export default router