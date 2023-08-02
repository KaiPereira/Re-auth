import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode, forwardRef } from "react"
import { cn } from "@/lib/utils"
import { X } from 'lucide-react';

const DialogRoot = Dialog.Root
const DialogTrigger = Dialog.Trigger
const DialogClose = Dialog.Close


// Extend the DialogMain to include the description to make the Dialog dialog more simple
interface DialogMainProps extends React.ComponentPropsWithoutRef<typeof Dialog.Portal> {
    description?: string
}

const DialogMain = forwardRef<
    React.ElementRef<typeof Dialog.Portal>,
    DialogMainProps
>(({children, title, description }) => (
    <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="shadow-modal data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            
            <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                {title}
            </Dialog.Title>

            {/* Only if the description exists do we add it in */}
            { description &&
            <Dialog.Description className="text-mauve11 mt-4 text-[15px] leading-normal">
                {description}
            </Dialog.Description>
            }

            {children}

            <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <X className="w-4" />
          </button>
        </Dialog.Close>
        </Dialog.Content>
    </Dialog.Portal>
))



type DialogButtonsProps = {
    children: ReactNode
}

const DialogButtons = ({ 
    children
}: DialogButtonsProps) => {
    return (
        <div className="flex gap-2 mt-5">
            {children}
        </div>
    )
}



type DialogContentProps = {
    children: ReactNode
}

const DialogContent = ({
    children
}: DialogContentProps) => {
    return (
        <div className="pt-5">
            {children}
        </div>
    )
}


export {
    DialogRoot,
    DialogTrigger,
    DialogClose,
    DialogMain,
    DialogButtons,
    DialogContent
}