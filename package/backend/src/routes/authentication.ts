import { Router } from "express"
import User from "../models/User"
import { hashString, createRandomString, compareHash } from "../utils/security"
import { jwtCreation, verifyUserToken } from "../utils/authentication"
const router = Router()

router.post("/logout", verifyUserToken, async (req, res) => {
    try {
        res.clearCookie("token", { httpOnly: true, sameSite: "none", secure: true })
        res.send("Successfully logged out!")
    } catch (err) {
        res.status(400).send("Unknown Error has Occured!")
    }
})


export default router