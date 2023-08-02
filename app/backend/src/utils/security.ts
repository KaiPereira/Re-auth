import crypto from "crypto"
import CryptoJS from "crypto-js"
import bcrypt from "bcryptjs"

// Hash any string as param
const hashString = (string: string) => {
    const hashedString = bcrypt.hashSync(string, 8);

    return hashedString
}

const compareHash = (string1: string, string2: string) => {
    const comparedStrings = bcrypt.compare(string1, string2)

    return comparedStrings
}


// Encrypt any string as param
const encryptString = (string: string) => {
    if (!process.env.ENCRYPTION_PASS) throw "An encryption password wasn't specified on the backend!"

    const encryptedString = CryptoJS.AES.encrypt(string, process.env.ENCRYPTION_PASS);

    return encryptedString.toString()
}


// Decrypt and string as param
const decryptString = (string: string) => {
    if (!process.env.ENCRYPTION_PASS) throw "An encryption password wasn't specified on the backend!"

    const decryptedString = CryptoJS.AES.decrypt(string, process.env.ENCRYPTION_PASS);

    return decryptedString.toString(CryptoJS.enc.Utf8)
}

// Create api key through UUID and hashing the UUID with sha256
const createApiKey = () => {
    const rawKey = crypto.randomUUID();
    const encryptedKey = hashString(rawKey)
    const partiallyUnencrypted = rawKey.substring(0, 4);

    return {
        raw: rawKey,
        encrypted: encryptedKey,
        partiallyUnencrypted: partiallyUnencrypted
    }
}

export {
    hashString,
    createApiKey,
    encryptString,
    decryptString,
    compareHash
}