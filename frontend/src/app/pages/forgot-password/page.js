"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./forgot-password.css";

const ForgotPassword = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const router = useRouter();

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!email) {
            setError("Email is required.");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        // Simulate sending OTP
        setTimeout(() => {
            setStep(2);
        }, 500);
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (otp !== "123456") {
            setError("Invalid OTP. Please try again.");
            return;
        }

        setStep(3);
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!password || password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        setSuccess("Password updated successfully!");
        setTimeout(() => router.push("/pages/login"), 1500);
    };

    return (
        <div className="d-flex justify-content-center align-items-center forgot-bg">
            <div className="card forgot-card">
                <div className="card-header text-center forgot-header">
                    <h5 className="m-0">FORGOT PASSWORD</h5>
                </div>
                <div className="card-body">
                    {step === 1 && (
                        <form onSubmit={handleEmailSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Enter your email address</label>
                                <input
                                    type="email"
                                    className={`form-control ${error ? "is-invalid" : ""}`}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {error && <div className="invalid-feedback">{error}</div>}
                            </div>
                            <div className="text-center">
                                <button type="submit" className="login-btn">Send OTP</button>
                            </div>
                        </form>
                    )}

                    {step === 2 && (
                        <form onSubmit={handleOtpSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Enter the OTP sent to your email</label>
                                <input
                                    type="text"
                                    className={`form-control ${error ? "is-invalid" : ""}`}
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                                {error && <div className="invalid-feedback">{error}</div>}
                            </div>
                            <div className="text-center">
                                <button type="submit" className="login-btn">Verify OTP</button>
                            </div>
                        </form>
                    )}

                    {step === 3 && (
                        <form onSubmit={handlePasswordSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Enter New Password</label>
                                <input
                                    type="password"
                                    className={`form-control ${error ? "is-invalid" : ""}`}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {error && <div className="invalid-feedback">{error}</div>}
                                {success && <div className="text-success mt-2">{success}</div>}
                            </div>
                            <div className="text-center">
                                <button type="submit" className="login-btn">Update Password</button>
                            </div>
                        </form>
                    )}

                    {step > 1 && (
                        <button
                            className="btn btn-outline-dark w-100 mt-3"
                            onClick={() => router.push("/pages/login")}
                        >
                            Back to Login
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;