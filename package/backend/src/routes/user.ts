import { Router } from "express"
import { verifyUserToken } from "../utils/authentication"


const router = Router()

router.post("/user-details", verifyUserToken, async (req, res) => {
    try {
        const user = req.user

        res.send(user)
    } catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
})

export default router