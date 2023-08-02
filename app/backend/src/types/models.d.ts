export type UserType = {
    email: string,
    password: string,
    verified: boolean,
    _id: string,
    applications: {
        name: string,
        srvString: string,
        creationDate: string,
        _id: string,
        apiKeys: {
            hashed: string,
            unencrypted: string,
            created: string,
            _id: string
        }[]
    }[]
}

export type TokenType = {
    userId: string,
    token: string,
    _id: string
}