import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "./InputField";
import Button from "./Button";
import API from "../../api/authApi";
import "./Auth.css";

function RegisterForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });

  const [registered, setRegistered] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ==========================
  // Register
  // ==========================
  const register = async (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.mobile ||
      !form.password ||
      !form.confirmPassword
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await API.post("/auth/register", {
        full_name: form.name,
        email: form.email,
        mobile: form.mobile,
        password: form.password,
      });

      alert(response.data.message);
      setRegistered(true);

    } catch (error) {
      alert(error.response?.data?.detail || "Registration Failed");
    }
  };

  // ==========================
  // Verify OTP
  // ==========================
  const verifyOTP = async () => {
    if (!form.otp) {
      alert("Enter OTP");
      return;
    }

    try {
      const response = await API.post("/auth/verify-otp", {
        email: form.email,
        otp: form.otp,
      });

      alert(response.data.message);

      navigate("/login");

    } catch (error) {
      alert(error.response?.data?.detail || "OTP Verification Failed");
    }
  };

  return (
    <div className="login-page">
      <div className="register-card">

        <h2>Create Account</h2>

        <p>Register your AIGONIC AI account</p>

        <form onSubmit={register}>

          <div className="row">
            <InputField
              label="Full Name"
              name="name"
              placeholder="Enter Full Name"
              value={form.name}
              onChange={handleChange}
            />

            <InputField
              label="Email Address"
              type="email"
              name="email"
              placeholder="Enter Email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <InputField
              label="Mobile Number"
              name="mobile"
              placeholder="Enter Mobile Number"
              value={form.mobile}
              onChange={handleChange}
            />

            <InputField
              label="Password"
              type="password"
              name="password"
              placeholder="Enter Password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <InputField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>

          {registered && (
            <div className="otp-row">
              <InputField
                label="OTP"
                name="otp"
                placeholder="Enter OTP"
                value={form.otp}
                onChange={handleChange}
              />

              <button
                type="button"
                className="verify-btn"
                onClick={verifyOTP}
              >
                Verify OTP
              </button>
            </div>
          )}

          <Button
            text={registered ? "OTP Sent Successfully" : "Register"}
          />

        </form>

        <div className="register-link">
          Already have an account?
          <Link to="/login"> Login</Link>
        </div>

      </div>
    </div>
  );
}

export default RegisterForm;