// Our libraries
import axios from "axios"

// Our files
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"

export const createApp = async (appName: string, srvString: string) => {
    try {
        const apiKey = await axios.post(`${apiUrl}/apps/create-app`, {
            appName: appName,
            srvString: srvString
        }, { withCredentials: true })

        return apiKey
    } catch (err) {
        throw err
    }
}


export const getSpecificApp = async (appId: string) => {
    try {
        const specificApp = await axios.post(`${apiUrl}/apps/get-app`, {
            id: appId
        }, { withCredentials: true })

        return specificApp.data
    } catch (err) {
        throw err
    }
}


export const deleteApiKey = async (apiKey: string) => {
    try {
        const deletedKey = await axios.post(`${apiUrl}/apps/delete-key`, {
            hashedKey: apiKey
        }, { withCredentials: true })

        return deletedKey
    } catch (err) {
        throw err
    }
}

export const createApiKey = async (appName: string) => {
    try {
        const createdKey = await axios.post(`${apiUrl}/apps/create-key`, {
            appName: appName
        }, { withCredentials: true })

        return createdKey.data
    } catch (err) {
        throw err
    }
}

export const deleteApp = async (appId: string) => {
    try {
        const deletedApp = await axios.post(`${apiUrl}/apps/delete-app`, {
            appId: appId
        }, { withCredentials: true })

        return deletedApp
    } catch (err) {
        throw err
    }
}