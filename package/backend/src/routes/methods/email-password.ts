import { Router } from "express"
import User from "../../models/User"
import { hashString, compareHash } from "../../utils/security"
import { jwtCreation } from "../../utils/authentication"
const router = Router()


router.post("/register", async (req, res) => {
    try {
        const email: string = req.body.email
        const password: string = req.body.password
        const passwordHashed = hashString(password)

        // First we make sure the user doesn't already exist
        const userExists = await User.findOne({email: email})

        if (userExists) return res.status(400).send("A user with that email already exists!")

        // Second we create a new user
        const newUser = await new User({
            email: email,
            password: passwordHashed
        }).save()

        jwtCreation(res, newUser, "Successfully created and logged in!")
    } catch (err) {
        console.log("ERROR: ", err)
        res.status(400).send(err)
    }
})


router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        })

        // Check if user exists
        if (!user) return res.status(400).send("Invalid username or password!")

        const validPass = await compareHash(req.body.password, user.password);

        // Check if password is right
        if (!validPass) return res.status(400).send("Invalid username or password!")

        jwtCreation(res, user, "Successfully logged in!")
    } catch (err) {
        console.log(err)
        res.status(400).send("Unknown Error has Occured!")
    }
})

export default router