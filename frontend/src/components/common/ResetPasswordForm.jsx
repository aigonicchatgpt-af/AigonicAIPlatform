import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function ResetPasswordForm() {

    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(password !== confirmPassword){
            alert("Passwords do not match");
            return;
        }

        // Backend API

        alert("Password Reset Successfully");

        navigate("/login");
    };

    return (

        <div className="login-page">

            <div className="login-card">

                <h2>Reset Password</h2>

                <p>Create a new password for your account.</p>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <label>New Password</label>

                        <input
                            type="password"
                            placeholder="Enter new password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Confirm Password</label>

                        <input
                            type="password"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button className="login-btn">
                        Reset Password
                    </button>

                </form>

                <div className="bottom-link">
                    Back to
                    <Link to="/login"> Login</Link>
                </div>

            </div>

        </div>

    );
}

export default ResetPasswordForm;