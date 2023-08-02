import { Express } from "express"
import { UserType } from "./models"

declare global {
    namespace Express {
        interface Request {
            user: UserType
        }
    }
}