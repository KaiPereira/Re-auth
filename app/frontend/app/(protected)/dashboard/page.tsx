'use client'

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { AppWindow, Plus, Users } from "lucide-react"
import { DialogRoot, DialogClose, DialogMain, DialogTrigger, DialogButtons, DialogContent } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import useForm from "@/hooks/useForm";
import useObjState from "@/hooks/useObjState";
import { createApp } from "@/lib/application";
import { useListenForError } from "@/hooks/useListenForError";
import { Key, useEffect, useState } from "react";
import CopyText from "@/components/ui/copy-text";
import { userType } from "@/types/user"
import { DashboardHeader } from "@/components/dashboard-layout"
import Link from "next/link"
import { TableHeader, TableRow, TableElement, TableButton, TableRoot } from "@/components/ui/table"
import useUserDetails from "@/hooks/useUserDetails"



type ApplicationProps = {
    name: string,
    date: string,
    id: string
}

const Application = ({
    name,
    date,
    id
}: ApplicationProps) => {
    return (
        <TableRow>
            <TableElement className="flex gap-2 items-center">
                <AppWindow className="w-4" />
                <p>{name}</p>
            </TableElement>
            <TableElement>
                {date}
            </TableElement>
            <TableButton>
                <Link href={`/dashboard/app/${id}`}>
                    <p>View</p>            
                </Link>
            </TableButton>
        </TableRow>
    )
}

const Dashboard = () => {
    const { values, handleChange, resetForm } = useForm({ name: "", dbString: ""})
    const [createAppRes, setCreateAppRes] = useObjState({err: "", success: ""})
    const [apiKey, setApiKey] = useState("")
    const userDetails = useUserDetails()

    useListenForError({error: createAppRes.err, success: createAppRes.success})


    const createAppHandler = async (e: any) => {
        e.preventDefault();

        createApp(values.name, values.dbString)
            .then(res => {
                const resMessage = res.data

                setApiKey(resMessage)
                setCreateAppRes({success: "Successfully created a new application!"})
            })
            .catch(err => {
                setCreateAppRes({err: err.response.data})
            })
    }


    const applicationElements = userDetails.applications.map((application: userType["applications"][number], index: Key) => {
        return (
            <Application 
                name={application.name}
                key={index}
                date={application.creationDate}
                id={application._id}
            />
        )
    })
    
    return (
        <>
            <DashboardHeader header="Applications">
                <DialogRoot>
                    <DialogTrigger>
                        <div className={cn(
                            buttonVariants({ variant: "default", size: "sm" }),
                            "px-4 flex gap-2"
                        )}>
                            <Plus className="w-4"/>
                            <p className="text-sm font-medium">Create</p>
                        </div>
                    </DialogTrigger>
                    { apiKey ?
                    <DialogMain 
                        title="Save your API Key" 
                        description="Note: Your key will only be shown ONCE. Remember to save your API key somewhere safe."
                    >
                        <DialogContent>
                            <CopyText text={apiKey} />
                        </DialogContent>
                    </DialogMain>
                    :
                    <DialogMain 
                        title="Create a new application" 
                        description="Receive an API key for your application. Simply enter your application name and SRV string."
                    >
                        <form onSubmit={createAppHandler}>
                            <DialogContent>
                                <div className="grid gap-2">
                                    <div className="grid gap-1">
                                        <Label className="sr-only" htmlFor="name">
                                            Name
                                        </Label>
                                        <Input
                                            id="name"
                                            placeholder="Application Name"
                                            type="text"
                                            autoCapitalize="none"
                                            autoCorrect="off"
                                            value={values.name}
                                            onChange={handleChange}
                                            name="name"
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-1">
                                        <Label className="sr-only" htmlFor="dbString">
                                            dbString
                                        </Label>
                                        <Input
                                            id="dbString"
                                            placeholder="MongoDB SRV String"
                                            type="text"
                                            autoCapitalize="none"
                                            autoCorrect="off"
                                            value={values.dbString}
                                            onChange={handleChange}
                                            name="dbString"
                                            required
                                        />
                                    </div>
                                </div>
                            </DialogContent>

                            <DialogButtons>
                                <button className={cn(
                                    buttonVariants({ variant: "default", size: "xs" }),
                                    "px-4 flex gap-2"
                                )} type="submit">
                                    Create Now
                                </button>
                                <DialogClose asChild>
                                    <button className={cn(
                                        buttonVariants({ variant: "secondary", size: "xs" }),
                                        "px-4 flex gap-2"
                                    )}>
                                        Cancel
                                    </button>
                                </DialogClose>
                            </DialogButtons>
                        </form>
                    </DialogMain>
                    }
                </DialogRoot>
            </DashboardHeader>
            <TableRoot>
                <TableHeader headers={["Name", "Created"]} />
                {applicationElements}
            </TableRoot>
        </>
    )   
}

export default Dashboard