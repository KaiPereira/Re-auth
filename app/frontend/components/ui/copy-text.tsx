import * as React from "react"
import { Copy } from "lucide-react"
import { cn } from "@/lib/utils"
import { copyText } from "@/lib/utils"
import { toast } from "./use-toast"


export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    text: string
  }

const CopyText = ({ className, text }: InputProps) => {

    const copyHandler = () => {
        copyText(text)

        toast({
            title: 'Successfully copied text!',
            description: `${text} has been successfully copied to the clipboard!`,
            variant: 'default',
          });
    }

    return (
        <button
            className={cn(
                "flex cursor-pointer justify-between h-10 w-full rounded-md border border-input bg-secondary px-3 py-2 text-sm ring-offset-background",
                className
            )}
            onClick={copyHandler}
        >
            <p>{text}</p>
            <Copy className="w-4" />
        </button>
    )
}

export default CopyText
