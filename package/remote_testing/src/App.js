import { useAuth } from "re-authenticate";

function App() {
  const { 
    registerUserWithEmailPassword, 
    loginUserWithEmailPassword, 
    getUserDetails, 
    logoutUser 
  } = useAuth()

  const registerUser = async () => {
    const newUser = await registerUserWithEmailPassword("kaipereira2020@gmail.com", "password")
  
    console.log(newUser)
  }

  const userDetailsHandler = async () => {
    const allUserDetails = await getUserDetails()

    console.log(allUserDetails)
  }

  const loginUser = async () => {
    const loggedInUser = await loginUserWithEmailPassword("kaipereira2020@gmail.com", "password")

    console.log(loggedInUser)
  }

  const logoutHandler = async () => {
    const loggedOutUser = await logoutUser()

    console.log(loggedOutUser)
  }

  return (
    <>
      <button onClick={registerUser}>Register User!</button>
      <button onClick={userDetailsHandler}>Get User Details!</button>
      <button onClick={loginUser}>Logging user</button>
      <button onClick={logoutHandler}>Logout user</button>
    </>
  );
}

export default App;
