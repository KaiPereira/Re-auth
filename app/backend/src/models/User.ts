const mongoose = require("mongoose")

const ApiKeySchema = mongoose.Schema({
    hashed: {
        type: String,
        required: true
    },
    partiallyUnencrypted: {
        type: String,
        required: true
    },
    created: {
        type: String,
        required: true
    }
})

const ApplicationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    srvString: {
        type: String,
        required: true
    },
    creationDate: {
        type: String,
        required: true
    },
    apiKeys: [
        ApiKeySchema
    ]
})

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    applications: [
        ApplicationSchema
    ]
})


export default mongoose.model("users", UserSchema)