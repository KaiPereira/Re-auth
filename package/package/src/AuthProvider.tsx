import React, { ReactNode } from "react"
import AuthContext from "./AuthContext";

type AuthProviderProps = {
    children: ReactNode, 
    apiKey: string       
};

const AuthProvider = ({
    children,
    apiKey
}: AuthProviderProps) => {
    return (
        <AuthContext.Provider value={{apiKey: apiKey}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider