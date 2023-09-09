import { useAuth } from "re-authenticate";
import { useState } from "react";

function App() {
  const [loginStuff, setLoginStuff] = useState({
    email: "",
    password: ""
  })


  const handleInputs = (event) => {
    const { name, value } = event.target;

    setLoginStuff((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  console.log(loginStuff)


  const { 
    registerUserWithEmailPassword, 
    loginUserWithEmailPassword, 
    getUserDetails, 
    logoutUser 
  } = useAuth()

  const registerUser = async () => {
    const newUser = await registerUserWithEmailPassword(loginStuff.email, loginStuff.password)
  
    console.log(newUser)
  }

  const userDetailsHandler = async () => {
    const allUserDetails = await getUserDetails()

    console.log(allUserDetails)
  }

  const loginUser = async () => {
    const loggedInUser = await loginUserWithEmailPassword(loginStuff.email, loginStuff.password)

    console.log(loggedInUser)
  }

  const logoutHandler = async () => {
    const loggedOutUser = await logoutUser()

    console.log(loggedOutUser)
  }

  return (
    <>
      <input type="text" name="email" placeholder="email" onChange={handleInputs} />
      <input type="password" name="password" placeholder="password" onChange={handleInputs} /> <br /><br />
      <button onClick={registerUser}>Register User!</button>
      <button onClick={userDetailsHandler}>Get User Details!</button>
      <button onClick={loginUser}>Logging user</button>
      <button onClick={logoutHandler}>Logout user</button>
    </>
  );
}

export default App;
