import axios, { AxiosInstance } from "axios"

const baseUrl = process.env.BASE_URL || "https://"

var apiKeyConfig: string | null = null

export const config = (apiKey: string) => {
    apiKeyConfig = apiKey
    axios.defaults.baseURL = baseUrl; // Replace with your API base URL
    axios.defaults.headers.common["Authorization"] = apiKey;
}

export const checkApiKey = () => {
    if (!apiKeyConfig) throw "No api key was specified in the config file. Remember to create one on the platform!"
}


export const login = async (email: string, password: string) => {
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

export const register = async (email: string, password: string) => {
    try {
        checkApiKey()

        const user = await axios.post("/auth/register", {
            email: email,
            password: password
        }, { withCredentials: true })

        return user.data
    } catch (err) {
        throw err
    }
}

export const logout = async () => {
    try {
        checkApiKey()

        await axios.post("/auth/logout", {}, { withCredentials: true })

        return "User successfully logged out!"
    } catch (err) {
        throw err
    }
}

export const userDetails = async () => {
    try {
        checkApiKey()

        const user = await axios.post("/user/user-details", {}, { withCredentials: true })

        return user
    } catch (err) {
        throw err
    }
}

