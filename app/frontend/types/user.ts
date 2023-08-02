export type userType = {
    email: string,
    password: string,
    verified: boolean,
    applications: {
        name: string,
        srvString: string,
        apiKeys: {
            hashed: string,
            partiallyUnencrypted: string,
            created: string
        }[],
        creationDate: string,
        _id: string
    }[]
}