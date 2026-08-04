import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function VerifyOTPForm() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const verifyOTP = (e) => {
    e.preventDefault();

    // Backend API Here

    alert("OTP Verified Successfully");

    navigate("/reset-password");
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h2>Verify OTP</h2>

        <p>
          Enter the OTP sent to your registered email.
        </p>

        <form onSubmit={verifyOTP}>

          <div className="input-group">
            <label>OTP</label>

            <input
              type="text"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={6}
              required
            />
          </div>

          <button className="login-btn">
            Verify OTP
          </button>

        </form>

        <div className="bottom-link">
          Didn't receive the OTP?
          <Link to="#"> Resend OTP</Link>
        </div>

      </div>
    </div>
  );
}

export default VerifyOTPForm;