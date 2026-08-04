import { Link } from "react-router-dom";
import { useState } from "react";
import "./Auth.css";

function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  const sendOTP = (e) => {
    e.preventDefault();

    // Backend API here
    alert("OTP Sent Successfully");
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h2>Forgot Password</h2>

        <p>
          Enter your registered email address to receive an OTP.
        </p>

        <form onSubmit={sendOTP}>

          <div className="input-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
          </div>

          <button className="login-btn">
            Send OTP
          </button>

        </form>

        <div className="bottom-link">
          Remember your password?
          <Link to="/login"> Login</Link>
        </div>

      </div>
    </div>
  );
}

export default ForgotPasswordForm;