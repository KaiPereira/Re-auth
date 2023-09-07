import express from "express"
import User from "../models/User"
import { verifyUserToken } from "../utils/authentication.js"
import { createApiKey, encryptString, hashString, compareHash, decryptString } from "../utils/security"
import { creationDate } from "../utils/utils"
import { Request, Response } from "express"
import { UserType } from "../types/models"

const router = express.Router()



router.post("/create-app", verifyUserToken, async (req: Request, res: Response) => {
    try {
        // Create the API Key
        const { raw, encrypted, partiallyUnencrypted } = createApiKey()

        const srvString = req.body.srvString
        const appName = req.body.appName
        const date = creationDate()


        // Make sure you don't have more than 10 applications
        let user: UserType = await User.findOne({_id: req.user._id})
        const allApps = user.applications

        if (allApps.length == 10) return res.status(400).send("Unfortunately you can't have more than 10 applications!")

        // Validation
        // App name validation type string and length < 25
        if ((typeof(appName) != "string") && appName.length < 25) return res.status(400).send("App name too long (25 chars max) or invalid!")

        const isNameInArray = allApps.some(app => app.name == appName)
        
        if (isNameInArray) return res.status(400).send("Unfortunately your app can't be named the same thing as another app!")

        // Basic regular string mongodb validation, if they somehow bypass it, it still won't work properly
        const srvStringValidation = /^mongodb\+srv:\/\/(\w+):(\w+)@([\w.-]+)\/(\?[\w=&]+)?$/;

        if ((typeof(appName) != "string") || (!srvString.match(srvStringValidation))) return res.status(400).send("Srv string invalid! Must follow: mongodb+srv://name:pass@cluster.example.com/?retryWrites=true&w=majority")

        // Encrypt SRV string
        const encryptedSrv = encryptString(srvString)

        // Add the new application to the user via user id
        await User.findByIdAndUpdate(req.user._id, {
            "$push": {
                "applications": {
                    "name": appName,
                    "srvString": encryptedSrv,
                    "apiKeys": [
                        {
                            "hashed": encrypted,
                            "partiallyUnencrypted": partiallyUnencrypted,
                            "created": date
                        }
                    ],
                    "creationDate": date
                }
            }
        })

        res.send(raw)
    } catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
})


router.post("/get-app", verifyUserToken, async (req: Request, res: Response) => {
    try {
        const user: UserType = await User.findOne({_id: req.user._id})
        
        const specificApp = user.applications.find(app => app._id == req.body.id)

        res.send(specificApp)
    } catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
})

router.post("/delete-key", verifyUserToken, async (req: Request, res: Response) => {
    try {
        // Make sure we aren't deleting our last key
        const apiKeys = await User.findOne({_id: req.user._id, "applications.apiKeys.hashed": req.body.hashedKey}, { "applications.apiKeys.$": 1 })

        if (apiKeys.applications[0].apiKeys.length == 1) return res.status(400).send("You cannot delete any more API Key's as you only have 1 left!")

        // Adding a new key
        await User.updateOne({_id: req.user._id, "applications.apiKeys.hashed": req.body.hashedKey}, {
            "$pull": {
                "applications.$.apiKeys": {
                        "hashed": req.body.hashedKey
                }
            }
        })

        res.send("Successfully deleted the key!")
    } catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
})

router.post("/create-key", verifyUserToken, async (req: Request, res: Response) => {
    try {
        const { raw, encrypted, partiallyUnencrypted } = createApiKey()
        const date = creationDate()

        // Make sure we don't have too many keys
        const apiKeys = await User.findOne({_id: req.user._id, "applications.name": req.body.appName}, { "applications.apiKeys.$": 1 })
       
        if (apiKeys.applications[0].apiKeys.length == 10) return res.status(400).send("Unfortunately you can't have more than 10 API Keys!")

        // Add the new application to the user via user id
        await User.updateOne({_id: req.user._id, "applications.name": req.body.appName}, {
            "$push": {
                "applications.$.apiKeys": {
                        "hashed": encrypted,
                        "partiallyUnencrypted": partiallyUnencrypted,
                        "created": date
                }
            }
        })

        res.send(raw)
    } catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
})


router.post("/delete-app", verifyUserToken, async (req: Request, res: Response) => {
    try {
        await User.updateOne({_id: req.user._id, "applications._id": req.body.appId}, {
            "$pull": {
                "applications": {
                    "_id": req.body.appId
                }
            }
        })

        res.send("Successfully deleted the application!")
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})


router.post("/get-app-via-key", async (req: Request, res: Response) => {
    try {

        var appDetails;
        const users: UserType[] = await User.find()

        // The api key is encrypted when it comes in so we decrypt it
        let apiKey = req.body.apiKey

        for (let z = 0; z < users.length; z++) {
            for (let y = 0; y < users[z].applications.length; y++) {

                await Promise.all(
                    users[z].applications[y].apiKeys.map(async (appApiKey: any) => {
                        const apiKeyTest = await compareHash(apiKey, appApiKey.hashed)
                        console.log(apiKeyTest)
    
                        appDetails = users[z].applications[y]
                        return apiKeyTest
                    })
                )

            }
        }

        if (!appDetails) res.status(400).send("No application found for this key!")
        
        res.send(appDetails)
    } catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
})


export default router