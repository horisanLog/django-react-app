"use client"
import instance from "@/api/axios"
import { useState } from "react"

const UserForm: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<boolean>()
  const [registrationToggle, setRegistrationToggle] = useState(false)
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    instance
      .post("/api/login", {
        email: email,
        password: password,
      })
      .then(function (res) {
        setCurrentUser(true)
      })
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
        <div>{currentUser && "ログイン成功"}</div>
      </form>
    </div>
  )
}

export default UserForm
