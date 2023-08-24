import axios from "axios"


const baseUrl = process.env.BASE_URL || "https://re-auth-production.up.railway.app/"

var apiKey: string | undefined = process.env.REAUTH_API_KEY

axios.defaults.baseURL = baseUrl; // Replace with your API base URL
axios.defaults.headers.common["Authorization"] = apiKey;


export const checkApiKey = () => {
    if (!apiKey) throw "No API Key was found! Remember to add it to your .env file under REAUTH_API_KEY"
}


export const loginUserWithEmailPassword = async (email: string, password: string) => {
    try {
        checkApiKey()

        const user = await axios.post("/auth/login", {
            email: email,
            password: password
        }, { withCredentials: true })

        return user.data
    } catch (err) {
        throw err
    }
}

export const registerUserWithEmailPassword = async (email: string, password: string) => {
    try {
        checkApiKey()

        const user = await axios.post("/auth/register", {
            email: email,
            password: password,
            loginUrl: process.env.LOGIN_URL
        }, { withCredentials: true })

        return user.data
    } catch (err) {
        throw err
    }
}

export const logoutUser = async () => {
    try {
        checkApiKey()

        await axios.post("/auth/logout", {}, { withCredentials: true })

        return "User successfully logged out!"
    } catch (err) {
        throw err
    }
}

export const getUserDetails = async () => {
    try {
        checkApiKey()

        const user = await axios.post("/user/user-details", {}, { withCredentials: true })

        return user
    } catch (err) {
        throw err
    }
}