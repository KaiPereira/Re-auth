import { useContext } from "react";
import AuthContext from "./AuthContext";
import axios, { AxiosRequestConfig } from "axios";

const useAuth = () => {
    
    const { apiKey } = useContext(AuthContext)

    const baseUrl = process.env.BASE_URL || "https://re-auth-production.up.railway.app/"

    axios.defaults.baseURL = baseUrl; // Replace with your API base URL
    axios.defaults.headers.common["Authorization"] = apiKey;


    const checkApiKey = () => {           
        if (!apiKey) throw `No API Key was found! Remember to configure it with the AuthProvider!`
    }


    const loginUserWithEmailPassword = async (email: string, password: string) => {
        try {
            checkApiKey()

            const user = await axios.post("/auth/login", {
                email: email,
                password: password
            }, { withCredentials: true } as AxiosRequestConfig)

            return user.data
        } catch (err) {
            throw err
        }
    }

    const registerUserWithEmailPassword = async (email: string, password: string) => {
        try {
            checkApiKey()

            const user = await axios.post("/auth/register", {
                email: email,
                password: password,
                loginUrl: process.env.LOGIN_URL
            }, { withCredentials: true } as AxiosRequestConfig)

            return user.data
        } catch (err) {
            throw err
        }
    }

    const logoutUser = async () => {
        try {
            checkApiKey()

            await axios.post("/auth/logout", {}, { withCredentials: true } as AxiosRequestConfig)

            return "User successfully logged out!"
        } catch (err) {
            throw err
        }
    }

    const getUserDetails = async () => {
        try {
            checkApiKey()

            const user = await axios.post("/user/user-details", {}, { withCredentials: true } as AxiosRequestConfig)

            return user.data
        } catch (err) {
            throw err
        }
    }

    return {
        loginUserWithEmailPassword,
        getUserDetails,
        logoutUser,
        registerUserWithEmailPassword
    }
}

export default useAuth