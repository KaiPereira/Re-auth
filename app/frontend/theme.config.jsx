import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { marketingConfig } from "@/config/marketing"
import "tailwindcss/tailwind.css";
import "./styles/globals.css"

export default {
    navbar: {
        component: (
            <header className="box-content container z-40 bg-background px-6">
                <div className="flex h-20 items-center justify-between py-6">
                <MainNav items={marketingConfig.mainNav} />
                <nav>
                    <Link
                    href="/login"
                    className={cn(
                        buttonVariants({ variant: "secondary", size: "sm" }),
                        "px-4"
                    )}
                    >
                    Login
                    </Link>
                </nav>
                </div>
            </header>
        )
    }

}