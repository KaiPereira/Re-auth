import { useAuth } from "re-authenticate";

function App() {
  const { 
    loginUserWithEmailPassword, 
    getUserDetails, 
    logoutUser, 
    registerUserWithEmailPassword 
  } = useAuth()

  const registerUser = async () => {
    const registeredUser = await registerUserWithEmailPassword("kaipereira2020@gmail.com", "password")
  
    console.log(registeredUser)
  }

  const logUserDetails = async () => {
    const userDetails = await getUserDetails()
    
    console.log(userDetails)
  }

  const logoutUserLog = async () => {
    const loggedOutUser = await logoutUser()

    console.log(loggedOutUser)
  }

  const loginUserHandler = async () => {
    const loggedInUser = await loginUserWithEmailPassword("kaipereira2020@gmail.com", "password")

    console.log(loggedInUser)
  }

  return (
    <>
      <button onClick={registerUser}>Register User!</button><br />
      <button onClick={logUserDetails}>Get user details</button><br />
      <button onClick={logoutUserLog}>Logout User!</button><br />
      <button onClick={loginUserHandler}>Login User!</button>
    </>
  );
}

export default App;