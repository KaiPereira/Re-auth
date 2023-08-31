import { useState } from "react"
import { signup, signin, logout, verifyEmail } from "@/lib/auth"
import { fetchProfileDetails } from "@/lib/user"

const useAuth = () => {
    const [error, setError] = useState<string>("")
    const [response, setResponse] = useState<string>("")

    const handleSignup = (email: string, password: string) => {
        signup(email, password)
            .then(res => {
                setResponse("An email was sent to your inbox")
            })
            .catch(err => {
                setError(err.response.data)
            })
    }

    const handleLogin = (email: string, password: string) => {
        signin(email, password)
            .then(res => {
                setResponse("Successfully logged-in!")
                window.location.href = "/dashboard"
            })
            .catch(err => {
                setError(err.response.data)
            })
    }

    const handleLogout = () => {
        logout()
    }

    const isSignedIn = async () => {
        const data = await fetchProfileDetails();
        const profileDetails = data.data;

        return profileDetails
    }

    const handleVerification = (userId: string, authToken: string) => {
        verifyEmail(userId, authToken)
            .then(res => {
                setResponse("Successfully verified your email, please login now!")
            })
            .catch(err => {
                setError(err.response.data)
            })
    }

    return {
        handleLogin,
        handleLogout,
        handleSignup,
        isSignedIn,
        error,
        response,
        handleVerification
    }
}

export default useAuth