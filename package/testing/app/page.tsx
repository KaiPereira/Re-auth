"use client"

import { config, login, userDetails, logout, register } from "cipher"
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    config("209cb638-daf2-43d1-99b8-8053390e6580")
  }, [])

  const loginHandler = async () => {
    const user = await login("kaipereira2020@gmail.com", "password")

    console.log(user)
  }

  const userDetailsHandler = async () => {
    const user = await userDetails()

    console.log(user)
  }

  const logoutHandler = async () => {
    await logout()

    location.reload()
  }

  const registerHandler = async () => {
    const newUser = await register("kaipereira2020test2@gmail.com", "password")

    console.log(newUser)
  }

  return (
    <>  
      <button onClick={loginHandler}>Login</button>
      <button onClick={userDetailsHandler}>User Details</button>
      <button onClick={logoutHandler}>Logout</button>
      <button onClick={registerHandler}>Register</button>
    </>
  )
}
