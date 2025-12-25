import { useState } from "react"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  function handleLogin() {
    if (!email || !password) {
      setError("All fields are required")
      return
    }

    setError("")
    alert("Login successful")
  }

  return (
    <div>
      <h2>Login Form</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button onClick={handleLogin}>Login</button>

      {error && <p>{error}</p>}
    </div>
  )
}

export default Login
