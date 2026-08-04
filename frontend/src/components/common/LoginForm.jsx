import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "./InputField";
import Button from "./Button";
import API from "../../api/authApi";
import "./Auth.css";

function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await API.post("/auth/login", {
        email,
        password,
      });

      if (response.data.success) {
        // Save JWT
        localStorage.setItem("token", response.data.access_token);

        // Optional
        localStorage.setItem("isLoggedIn", "true");

        alert("Login Successful");

        navigate("/dashboard");
      }
    } catch (error) {
      alert(error.response?.data?.detail || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h2>Welcome Back</h2>
        <p>Login to your AIGONIC AI account</p>

        <form onSubmit={handleLogin}>

          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="login-options">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>

            <Link to="/forgot-password">
              Forgot Password?
            </Link>
          </div>

          <Button
            text={loading ? "Logging in..." : "Login"}
            disabled={loading}
          />

        </form>

        <div className="register-link">
          <p>
            Don't have an account?
            <Link to="/register"> Register</Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default LoginForm;