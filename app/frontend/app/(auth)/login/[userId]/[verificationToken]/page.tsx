"use client"

import useAuth from "@/hooks/useAuth"
import { useEffect } from "react"
import { useRouter } from 'next/navigation'
import { useListenForError } from "@/hooks/useListenForError"

export default function Page({ params }: {
    params: {
        userId: string,
        verificationToken: string
    }
}) {
    const { handleVerification, response, error } = useAuth()
    const router = useRouter()
    useListenForError({error: error, success: response})

    useEffect(() => {
        handleVerification(params.userId, params.verificationToken)

        if (error) {
            setTimeout(() => {
                router.push("/")
            }, 3000)
        } else if (response) {
            router.push("/login")
        }
    }, [response, error])


    return (
        <>
        
        </>
    )
}