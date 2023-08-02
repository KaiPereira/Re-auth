// Our files
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"

// Libraries
import axios from "axios"


export const fetchProfileDetails = async () => {
    try {
        const userProfile = await axios.post(`${apiUrl}/user/online`, {}, { withCredentials: true })

        return userProfile
    } catch (err) {
        throw err
    }
}


export const changePassword = async (oldPassword: string, newPassword: string) => {
    try {
        const updatedPasswordRes = await axios.post(`${apiUrl}/user/change-password`, {
            oldPassword: oldPassword,
            newPassword: newPassword
        }, { withCredentials: true })

        return updatedPasswordRes.data
    } catch (err) {
        throw err
    }
}