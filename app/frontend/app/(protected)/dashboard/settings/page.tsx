'use client'

import { DashboardHeader } from "@/components/dashboard-layout"
import ProgressBar from "@/components/ui/progress-bar"
import { LineChart, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import useForm from "@/hooks/useForm"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { changePassword } from "@/lib/user"
import useObjState from "@/hooks/useObjState"
import { useListenForError } from "@/hooks/useListenForError"
import useUserDetails from "@/hooks/useUserDetails"


const Settings = () => {
    const { values, handleChange, resetForm } = useForm({oldPassword: "", newPassword: ""})
    const [errAndRes, setErrAndRes] = useObjState({error: "", response: ""})
    useListenForError({error: errAndRes.error, success: errAndRes.response})
    const userDetails = useUserDetails()
    const userApplicationsLength = userDetails.applications.length
    // The 10 is the max amount of applications
    const userApplicationsUsed = (userApplicationsLength / 10) * 100

    const changePasswordHandler = (e: any) => {
        e.preventDefault()

        changePassword(values.oldPassword, values.newPassword)
            .then(res => {
                setErrAndRes({response: res})
                resetForm()
            })
            .catch(err => {
                setErrAndRes({error: err.response.data})
            })
    }

    return (
        <>
            <DashboardHeader header="Settings" />
            <div className="grid gap-4">
                <div className="rounded-lg border p-4">
                    <div className="flex gap-2 items-center">
                        <User className="w-5" />
                        <h2 className="font-bold text-md text-secondary-foreground">Your account</h2>
                    </div>
                    <div className="mt-4 grid gap-4">
                        <div>
                            <p className="font-medium text-muted-foreground text-sm">Email address</p>
                            <div className="mt-2 flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm">
                                <p>{userDetails.email}</p>
                            </div>
                        </div>
                        <form onSubmit={changePasswordHandler}>
                            <p className="font-medium text-muted-foreground text-sm">Change password</p>
                            <div className="flex gap-2 mt-2">
                                <div className="grid gap-1 w-full">
                                    <Label className="sr-only" htmlFor="oldPassword">
                                        Old password
                                    </Label>
                                    <Input
                                        id="oldPassword"
                                        placeholder="Old password"
                                        type="password"
                                        autoCapitalize="none"
                                        autoCorrect="off"
                                        value={values.oldPassword}
                                        onChange={handleChange}
                                        name="oldPassword"
                                        required
                                    />
                                </div>
                                <div className="grid gap-1 w-full">
                                    <Label className="sr-only" htmlFor="newPassword">
                                        New password
                                    </Label>
                                    <Input
                                        id="newPassword"
                                        placeholder="New password"
                                        type="password"
                                        autoCapitalize="none"
                                        autoCorrect="off"
                                        value={values.newPassword}
                                        onChange={handleChange}
                                        name="newPassword"
                                        required
                                    />
                                </div>
                            </div>
                            <button className={cn(buttonVariants({ variant: "default", size: "sm" }), "mt-3")}>
                                Change Password!
                            </button>
                        </form>
                    </div>
                </div>
                <div className="rounded-lg border p-4">
                    <div className="flex gap-2 items-center">
                        <LineChart className="w-5" />
                        <h2 className="font-bold text-md text-secondary-foreground">Usage Details</h2>
                    </div>
                    <div className="mt-4">
                        <p className="font-medium text-muted-foreground text-sm">Applications</p>
                        <p className="mt-1 font-medium text-sm">{userApplicationsLength} / 10</p>
                        <ProgressBar 
                            progressPercent={userApplicationsUsed}
                            className="mt-2 w-80 h-3.5"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings