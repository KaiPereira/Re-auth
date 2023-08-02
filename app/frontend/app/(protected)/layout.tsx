'use client'

import DashboardLayout from "@/components/dashboard-layout"
import UserDetailsProvider from "@/components/user-detail-provider"


interface ProtectedLayoutProps {
    children: React.ReactNode
}


export default async function MarketingLayout({
    children,
}: ProtectedLayoutProps) {
    return (
        <UserDetailsProvider>
            <DashboardLayout>
                {children}
            </DashboardLayout>
        </UserDetailsProvider>  
    )
}