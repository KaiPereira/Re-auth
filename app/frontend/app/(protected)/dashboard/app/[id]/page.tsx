'use client'

import { DashboardHeader } from "@/components/dashboard-layout"
import { useSearchParams } from 'next/navigation'
import { Key, ReactNode, useEffect, useState } from "react"
import { TableHeader, TableRow, TableElement, TableButton, TableRoot } from "@/components/ui/table"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Plus } from "lucide-react"
import { userType } from "@/types/user"
import { deleteApiKey, createApiKey, getSpecificApp, deleteApp } from "@/lib/application"
import { DialogMain, DialogContent, DialogRoot, DialogTrigger } from "@/components/ui/dialog"
import CopyText from "@/components/ui/copy-text"
import { useListenForError } from "@/hooks/useListenForError"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"



const App = ({ params }: { params: { id: string } }) => {
    const [apiKeyElements, setApiKeyElements] = useState<ReactNode[]>([])
    const [apiKey, setApiKey] = useState("")
    const [errors, setErrors] = useState("")
    useListenForError({error: errors})
    const router = useRouter()

    const [appData, setAppData] = useState<userType["applications"][number]>({
        name: "",
        srvString: "",
        apiKeys: [],
        creationDate: "",
        _id: ""
    })

    const id = params.id


    const deleteApiKeyHandler = (apiKey: string) => {
        deleteApiKey(apiKey)
            .catch(err => {
                setErrors(err.response.data)
            })
        
        window.location.reload();
    }

    const createApiKeyHandler = () => {
        createApiKey(appData.name)
            .then(res => setApiKey(res))
            .catch(err => {
                setErrors(err.response.data)
            })
    }

    
    const deleteAppHandler = () => {
        deleteApp(appData._id)
            .catch(err => {
                setErrors(err.response.data)
            })
        
        // We want to reload the full page too
        window.location.href = "/dashboard"
    }


    useEffect(() => {
        const getSpecificAppHandler = async () => {
            const specificApp: userType["applications"][number] = await getSpecificApp(id);

            const apiKeyElementsMapped: ReactNode[] = specificApp.apiKeys.map((apiKey: userType["applications"][0]["apiKeys"][0], index: Key) => {
                return (
                    <TableRow>
                        <TableElement>Secret Key</TableElement>
                        <TableElement>
                            <div className="p-1 bg-secondary rounded w-max">{apiKey.partiallyUnencrypted}...</div>
                        </TableElement>
                        <TableElement>{apiKey.created}</TableElement>
                        <TableButton>
                            <button onClick={() => deleteApiKeyHandler(apiKey.hashed)}>
                                <p>Delete</p>            
                            </button>
                        </TableButton>
                    </TableRow>
                )
            })
            
            setApiKeyElements(apiKeyElementsMapped)
            setAppData(specificApp);
        };

        getSpecificAppHandler()
    }, [])

    

    return (
        <>
            <DashboardHeader header={appData.name}>
                <DialogRoot>
                    <DialogTrigger>
                        <button 
                            className={cn(
                                buttonVariants({ variant: "default", size: "sm" }),
                                "px-4 flex gap-2"
                            )}
                            onClick={createApiKeyHandler}
                        >
                            <Plus className="w-4"/>
                            <p className="text-sm font-medium">Create API Key</p>
                        </button>
                    </DialogTrigger>
                    { apiKey &&
                        <DialogMain 
                            title="Save your API Key" 
                            description="Note: Your key will only be shown ONCE. Remember to save your API key somewhere safe."
                        >
                            <DialogContent>
                                <CopyText text={apiKey} />
                            </DialogContent>
                        </DialogMain>
                    }
                </DialogRoot>
            </DashboardHeader>
            <TableRoot>
                <TableHeader headers={["Name", "Key", "Date"]} />
                {apiKeyElements}
            </TableRoot>
            <DialogRoot>
                <DialogTrigger>
                    <button 
                        className={cn(
                            buttonVariants({ variant: "destructive", size: "sm" }),
                            "mt-4 flex gap-2"
                        )}
                    >
                        <X className="w-4"/>
                        <p className="text-sm font-medium">Delete {appData.name}</p>
                    </button>
                </DialogTrigger>
                    <DialogMain 
                        title="Confirm the deletion!" 
                        description="Note: This is an irreversible action, are you sure?"
                    >
                        <DialogContent>
                            <button 
                                className={cn(
                                    buttonVariants({ variant: "destructive", size: "sm" }),
                                    "flex gap-2"
                                )}
                                onClick={deleteAppHandler}
                            >
                                <X className="w-4"/>
                                <p className="text-sm font-medium">Confirm Deletion</p>
                            </button>
                        </DialogContent>
                    </DialogMain>
            </DialogRoot>
        </>
    )
}

export default App