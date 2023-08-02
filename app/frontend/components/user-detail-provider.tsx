import { fetchProfileDetails } from '@/lib/user';
import { userType } from '@/types/user';
import { useRouter } from 'next/navigation';
import { createContext, useState, ReactNode, useEffect } from 'react';

export const UserDetailsContext = createContext({})



// We use a context for the user details because then we can automatically
// add loading to the page while also making the data globally accessible
type UserDetailsProviderProps = {
    children: ReactNode
}

const UserDetailsProvider = ({
    children
}: UserDetailsProviderProps) => {
    const [userDetails, setUserDetails] = useState<userType>()
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        fetchProfileDetails()
            .then(res => {
                setUserDetails(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                router.push("/")
                setLoading(false)
            })
    }, [])

    return (
        <UserDetailsContext.Provider value={{ userDetails }}>
            { !loading &&
                <>{children}</>
            }
            
        </UserDetailsContext.Provider>
    )
}

export default UserDetailsProvider