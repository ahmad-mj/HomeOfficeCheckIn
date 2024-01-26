import React, { useState } from "react";
import axios from "axios";

function LoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const plainPassword = "ahmad";
      const userId = "Ahmad Mj";
      const response = await axios.post(`http://localhost:3000/login`, {
        user_name: userId,
        password: plainPassword,
      });
      console.log("Request data:", { user_name: userId, password: plainPassword });
      console.log("Response from server:", response.data);

      console.log("Response from server:", response.data);
      if (response.data.message === "Login success") {
        setError("");
        alert("Login successful!");
        // redirect to homeoffice start?
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error("Login error:", error.message);
      setError("Internal Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <header>Login</header>
      <div className="wrapper">
        <h3>HomeOffice CheckIn - Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="content">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="content">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="content btn">
            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
          {error && <div className="error-message">{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;
