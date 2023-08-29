import { createContext } from "react";

const initialContext = {
    apiKey: ""
}

const AuthContext = createContext(initialContext)

export default AuthContext