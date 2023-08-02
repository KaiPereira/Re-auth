import express from "express"
import User from "../models/User"
import { verifyUserToken } from "../utils/authentication"
import { hashString, compareHash } from "../utils/security"
import { Request, Response } from "express"
import { UserType } from "../types/models"


const router = express.Router()


router.post("/online", verifyUserToken, async (req: Request, res: Response) => {
    try {
        // Grab the user added to req from verifyUserToken
        const user = req.user

        res.send(user)
    } catch (err) {
        console.log(err)
        res.status(400).send("Unknown error has occured!")
    }
})


router.post("/change-password", verifyUserToken, async (req: Request, res: Response) => {
    try {
        const user = req.user

        // Check if the password inputed matches your current password
        const passwordsMatch = await compareHash(req.body.oldPassword, user.password)
        
        if (passwordsMatch) {
            const newPasswordHashed = hashString(req.body.newPassword)

            await User.findByIdAndUpdate(user._id, {
                password: newPasswordHashed
            })
        } else {
            return res.status(400).send("Your password doesn't seem to match with what you put in!")
        }

        res.send("Password successfully updated!")
    } catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
})


export default router