"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // <-- Add this line
import './signup-form.css';

export default function SignupForm() {
    const router = useRouter(); // <-- Add this line

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/signup.css";
        document.head.appendChild(link);
        return () => document.head.removeChild(link);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.username) newErrors.username = "Username is required";
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Email is invalid";
        if (!formData.password) newErrors.password = "Password is required";
        if (!formData.confirmPassword)
            newErrors.confirmPassword = "Confirm password is required";
        else if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match";
        if (!formData.name) newErrors.name = "Name is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log("Sign up data:", formData);
            alert("Signup successful!");
            router.push("/pages/login"); // <-- Redirect to login page
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="signup-bg">
            <div className="card signup-card">
                <div className="card-header text-center signup-header">
                    <h5 className="m-0">SIGN UP</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="section-label">Account Details</div>

                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                name="username"
                                className={`form-control ${errors.username ? "is-invalid" : ""}`}
                                value={formData.username}
                                onChange={handleChange}
                            />
                            {errors.username && (
                                <div className="invalid-feedback">{errors.username}</div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && (
                                <div className="invalid-feedback">{errors.email}</div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Choose a Password</label>
                            <input
                                type="password"
                                name="password"
                                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && (
                                <div className="invalid-feedback">{errors.password}</div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                            {errors.confirmPassword && (
                                <div className="invalid-feedback">{errors.confirmPassword}</div>
                            )}
                        </div>

                        <div className="section-label">Profile Details</div>

                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                name="name"
                                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && (
                                <div className="invalid-feedback">{errors.name}</div>
                            )}
                            <div className="form-text mt-1">This field can be seen by: Everyone</div>
                        </div>

                        <p className="terms-text text-center">
                            By creating an account you agree to our{" "}
                            <a href="#">Terms and Conditions</a> and our{" "}
                            <a href="#">Privacy Policy</a>.
                        </p>

                        <div className="d-grid gap-2">
                            <button type="submit" className="login-btn">
                                SIGN UP
                            </button>
                            <button type="button" onClick={() => router.push('/pages/login')} className="register-btn">
                                LOG IN
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
