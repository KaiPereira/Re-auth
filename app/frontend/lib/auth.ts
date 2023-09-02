// Our libraries
import axios from "axios"

// Our files
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"


export const signup = async (
    email: string,
    password: string
) => {
    try {
        const newUser = await axios.post(`${apiUrl}/auth/register`, {
            email: email,
            password: password
        }, { withCredentials: true })

        return newUser
    } catch (err) {
        throw err
    }
}

export const signin = async (
    email: string,
    password: string
) => {
    try {
        const user = await axios.post(`${apiUrl}/auth/login`, {
            email: email,
            password: password
        }, { withCredentials: true })


        return user
    } catch (err) {
        throw err
    }
}


export const logout = async () => {
    try {
        const logout = await axios.post(`${apiUrl}/auth/logout`, {}, { withCredentials: true })

        // Reload the page to change the page
        window.location.href="/"

        return logout
    } catch (err) {
        throw err
    }
}

export const verifyEmail = async (userId: string, token: string) => {
    try {
        const verify: {data: object} = await axios.post(`${apiUrl}/auth/verify/${userId}/${token}`, {},{ withCredentials: true })

        return verify.data
    } catch (err) {
        throw err
    }
}