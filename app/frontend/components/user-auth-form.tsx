'use client'

import * as React from "react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import useForm from "@/hooks/useForm"
import useAuth from "@/hooks/useAuth"
import { useListenForError } from "@/hooks/useListenForError"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  type: "login" | "register"
}


export function UserAuthForm({ className, type, ...props }: UserAuthFormProps) {
  const { values, resetForm, handleChange } = useForm({email: "", password: ""})
  const { error, handleLogin, handleSignup, response, isSignedIn } = useAuth()
  useListenForError({error: error, success: response})
  const router = useRouter()

  console.log(values)
  
  const handleAuth = (e: any) => {
    e.preventDefault()

    type == "login" ? 
      handleLogin(values.email, values.password)
    :
      handleSignup(values.email, values.password)

    resetForm()
  }

  // Just to see if the user is logged in
  useEffect(() => {
    isSignedIn()
      .then(res => {
        res && router.push("/dashboard")
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleAuth}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              value={values.email}
              onChange={handleChange}
              name="email"
              required
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="************"
              type="password"
              name="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              value={values.password}
              onChange={handleChange}
              required
            />
          </div>
          <button className={cn(buttonVariants())}>
            Sign In Now!
          </button>
        </div>
      </form>
      {/* <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
      >
        <Icons.gitHub className="mr-2 h-4 w-4" />
        Github
      </button> */}
    </div>
  )
}
