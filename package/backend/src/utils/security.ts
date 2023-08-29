import { NextFunction, Request, Response } from "express"
import CryptoJS from "crypto-js"
import axios from "axios"
import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import crypto from "crypto"


// Decrypt and string as param
export const decryptString = (string: string) => {
    if (!process.env.ENCRYPTION_PASS) throw "No encryption pass specified"
    
    const decryptedString = CryptoJS.AES.decrypt(string, process.env.ENCRYPTION_PASS);

    return decryptedString.toString(CryptoJS.enc.Utf8)
}


export const connectToUserDb = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let apiKey = req.headers.authorization

        if (!apiKey) return res.status(401).send("An api key is required!")

        const platformApi = process.env.PLATFORM_API

        const { data } = await axios.post(`${platformApi}/apps/get-app-via-key`, {
            apiKey: apiKey
        })

        if (!data) return res.status(401).send("A valid api key is required!")

        const mongoDbSrv = decryptString(data.srvString)

        await mongoose.connect(mongoDbSrv)

        next()
    } catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
}

// Hash any string as param
export const hashString = (string: string) => {
    const hashedString = bcrypt.hashSync(string, 8);

    return hashedString
}

export const compareHash = (string1: string, string2: string) => {
    const comparedStrings = bcrypt.compare(string1, string2)

    return comparedStrings
}


// Encrypt any string as param
export const encryptString = (string: string) => {
    if (!process.env.ENCRYPTION_PASS) throw "No encryption password specified on the backend."

    const encryptedString = CryptoJS.AES.encrypt(string, process.env.ENCRYPTION_PASS);

    return encryptedString.toString()
}


export const createRandomString = () => {
    return crypto.randomBytes(32).toString("hex")
}