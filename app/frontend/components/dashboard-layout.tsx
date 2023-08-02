'use client'

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Home, AppWindow, KeyRound, LineChart, ExternalLink, Settings, MoreHorizontal, LayoutTemplate, User, LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { buttonVariants } from "./ui/button"
import { ReactNode, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { userType } from "@/types/user"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import useAuth from "@/hooks/useAuth"
import useUserDetails from "@/hooks/useUserDetails"
import { AlignRightIcon, X } from "lucide-react"
import { MobileNav } from "./mobile-nav"



const SidebarLink = ({ href, header, icon }: {
    href: string,
    header: string,
    icon: any
}) => {
    const pathname = usePathname()

    const isActiveLink = pathname === href;

    return (
        <Link href={href}>
            <div className={cn("hover:bg-secondary px-2 rounded-md flex gap-2 items-center h-8", isActiveLink && "bg-secondary")}>
                {icon}
                <div className="text-sm font-medium text-secondary-foreground">{header}</div>
            </div>
        </Link>
    )
}


export const DashboardHeader = ({
    header,
    children
}: {header: string, children?: ReactNode}) => {
    return (
        <div className="flex items-center justify-between w-full mb-4">
            <h1 className="text-2xl font-bold">{header}</h1>
            {children}
        </div>  
    )
}


type DashboardProps = {
    children: ReactNode
}

const DashboardLayout = ({ 
    children 
}: DashboardProps) => {
    const { handleLogout, isSignedIn } = useAuth()
    const router = useRouter()
    const userDetails = useUserDetails()
    const [menu, setMenu] = useState(false)

    const changePage = (href: string) => {
        router.push(href)
    }

    const menuHandler = () => {
        setMenu(!menu)
    }
        
    return (
        <div className="flex">
            <nav className="relative w-64 h-screen flex-none hidden md:block">
                <div className="p-5 border-r border-slate-6 h-full fixed flex flex-col w-64 h-screen">
                    <p className="font-semibold text-lg">{siteConfig.name}</p>
                    <div className="mt-10 flex flex-col justify-between w-full h-full">
                        <div className="flex flex-col gap-2 w-full">
                            <SidebarLink 
                                href="/dashboard"
                                header="Applications"
                                icon={<AppWindow className="w-4"/>}
                            />
                            <SidebarLink 
                                href="/dashboard/settings"
                                header="Settings"
                                icon={<Settings className="w-4"/>}
                            />
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                            <div className="cursor-pointer flex justify-between gap-4 items-center py-1 px-2 hover:bg-secondary rounded-md">
                                <img src="/rainbow gradient.png" alt="Profile Image" className="w-8 h-8 rounded-full" />
                                <p className="text-ellipsis overflow-hidden whitespace-nowrap text-sm font-medium text-secondary-foreground">{userDetails.email}</p>
                                <MoreHorizontal />
                            </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start">
                                <DropdownMenuItem onClick={() => changePage("/")}>
                                    <LayoutTemplate className="mr-2 h-4 w-4" />
                                    <span>Homepage</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => changePage("/dashboard/settings")}>
                                    <User className="mr-2 h-4 w-4" />
                                    <span>Profile</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleLogout()}>
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </nav>
            <div className="w-full">
                <nav className="justify-end pr-5 gap-5 items-center h-16 py-6 border-b border-slate-6 w-full hidden md:flex">
                    <Link href="/help">
                        <p className="text-sm font-medium text-muted-foreground hover:text-secondary-foreground">Help</p>
                    </Link>
                    <a
                        href="/docs"
                        target="_blank"
                        className={cn(
                            buttonVariants({ variant: "secondary", size: "sm" }),
                            "px-4 flex gap-2"
                        )}
                    >
                        <p className="text-sm font-medium text-muted-foreground">Docs</p>
                        <ExternalLink className="w-4"/>
                    </a>
                </nav>
                <nav className="items-center h-16 px-6 border-b border-slate-6 w-full flex md:hidden justify-between">
                    <p className="font-semibold text-lg">{siteConfig.name}</p>
                    <button onClick={menuHandler}>
                        { menu?
                            <X />
                            :   
                            <AlignRightIcon />
                        }
                    </button>
                </nav>
                { menu &&
                    <MobileNav items={[
                        {
                            title: "Applications",
                            href: "/dashboard"
                        },
                        {
                            title: "Settings",
                            href: "/dashboard/settings"
                        },
                        {
                            title: "Docs",
                            href: "/docs"
                        },
                        {
                            title: "Homepage",
                            href: "/"
                        },
                        {
                            title: "Profile",
                            href: "/dashboard/settings"
                        }
                    ]}>
                        <button 
                            className={cn(buttonVariants({variant: "secondary", size: "sm"}))}
                            onClick={handleLogout}
                        >Logout</button>
                    </MobileNav>
                }
                <div className="w-full h-28 flex justify-center px-6 py-8">
                    <div className="w-full max-w-5xl">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout