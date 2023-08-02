import { UserDetailsContext } from "@/components/user-detail-provider"
import { userType } from "@/types/user"
import { useContext } from "react"

const useUserDetails = () => {
    const { userDetails } = useContext(UserDetailsContext) as { userDetails: userType}

    return userDetails
}

export default useUserDetails