import { useState } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"

import './Login.css'

const Login = (props) => {
  const [usernameInput, setUsernameInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const history = useHistory()

  const [login, setLogin] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!usernameInput || !passwordInput) return alert("Invalid input")

    const route = login ? "login" : "register"

    axios({
      method: "POST",
      data: {
        username: usernameInput,
        password: passwordInput
      },
      url: `https://space-learn.herokuapp.com/${route}`,
      withCredentials: true,
    }).then((res) => {
      switch (res.data.message) {
        case ("Logged in"):
          props.setIsLoggedIn(true)
          props.setUserInfo({ username: usernameInput })
          history.push("/tasks")
          break
        case ("No user"):
          alert("User does not exist")
          break
        case ("Exists"):
          alert("User Exists")
          break
        case ("Added"):
          alert("User added")
      }
    })
  }

  return (
    <div className="login-form">
      <form>

        <h2>{login ? "Login" : "Register"}</h2>

        <label>Username:</label>
        <input onChange={(e) => setUsernameInput(e.target.value)} value={usernameInput} type="text" placeholder="Ex: John Doe" />

        <label>Password:</label>
        <input onChange={(e) => setPasswordInput(e.target.value)} value={passwordInput} type="text" placeholder="Ex: 12345" />

        <button onClick={handleSubmit}>{login ? "Login" : "Register"}</button>

        <a href="#" onClick={() => setLogin(!login)}>{login ? "Sign up instead" : "Log in instead"}</a>

      </form>

      <div className="image"></div>
    </div>
  )
}

export default Login