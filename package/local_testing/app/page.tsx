"use client"

import { loginUserWithEmailPassword, getUserDetails, logoutUser, registerUserWithEmailPassword } from "re-authenticate"


export default function Home() {
  const loginHandler = async () => {
    const user = await loginUserWithEmailPassword("kaipereira2020@gmail.com", "password")

    console.log(user)
  }

  const userDetailsHandler = async () => {
    const user = await getUserDetails()

    console.log(user)
  }

  const logoutHandler = async () => {
    await logoutUser()

    location.reload()
  }

  const registerHandler = async () => {
    const newUser = await registerUserWithEmailPassword("kaipereira2020@gmail.com", "password")

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
