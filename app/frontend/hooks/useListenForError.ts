import { useEffect } from 'react';
import { toast } from "@/components/ui/use-toast"


type listenForErrorArgs = {
  error?: string,
  success?: string
}

export const useListenForError = ({
  error, 
  success
}: listenForErrorArgs) => {
    useEffect(() => {
      if (error) {
        toast({
          title: 'Something went wrong.',
          description: error,
          variant: 'destructive',
        });
      } else if (success) {
        toast({
          title: 'Success!',
          description: success,
          variant: 'default',
        });
      }
    }, [success, error])
};