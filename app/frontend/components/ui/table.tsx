import { cn } from "@/lib/utils"
import { Key, ReactNode } from "react"
import { buttonVariants } from "./button"


type TableRootProps = {
    children: ReactNode
}

const TableRoot = ({
    children
}: TableRootProps) => {
    return (
        <table className="border-spacing-y-3 w-full border-separate">
            {children}
        </table>
    )
}


type TableHeaderProps = {
    headers: string[]
}

const TableHeader = ({
    headers
}: TableHeaderProps) => {
    const headerElements = headers.map((header: string, index: Key) => {
        return (
            <td key={index} className="w-full">{header}</td>
        )
    })

    return (
        <thead>
            <tr className="border bg-background rounded-md py-1 px-3 flex text-xs font-medium text-muted-foreground bg-secondary">
                {headerElements}
            </tr>
        </thead>
    )
}


type TableRowProps = {
    onClick?: any
    children: ReactNode
}

const TableRow = ({
    children
}: TableRowProps) => {
    return (
        <tbody>
            <tr className="relative w-full rounded-md border bg-background h-11 items-center px-3 text-sm font-medium text-secondary-foreground flex">
                {children}
            </tr>
        </tbody>
    )
}


type TableElementProps = {
    children: ReactNode,
    className?: string
}

const TableElement = ({
    children,
    className
}: TableElementProps) => {
    return (
        <td className={cn("w-full", className)}>
            {children}
        </td>
    )
}


type TableButtonProps = {
    children: ReactNode
}

const TableButton = ({
    children
}: TableButtonProps) => {
    return (
        <td className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "absolute right-2 h-7 text-muted-foreground")}>
            {children}
        </td>
    )
}




export {
    TableHeader,
    TableRow,
    TableElement,
    TableButton,
    TableRoot
}