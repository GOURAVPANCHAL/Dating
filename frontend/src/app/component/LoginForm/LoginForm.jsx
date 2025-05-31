"use client";
import { useState, useEffect } from "react";
import './login-form.css'
import {useRouter} from "next/navigation";
import Link from "next/link";
export default function LoginForm() {
    const router=useRouter()
    const Createaccount = () =>{
        router.push("/pages/register")
    }
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        // Load custom CSS from /public
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/login.css";
        document.head.appendChild(link);
        return () => document.head.removeChild(link);
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length === 0) {
            console.log("Login success", formData);
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 login-bg">
            <div className="card login-card">
                <div className="card-header text-center login-header">
                    <h5 className="m-0">LOGIN</h5>
                </div>
                <div className="card-body login-body">
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="mb-3">
                            <label className="form-label">Username or Email</label>
                            <input
                                type="email"
                                name="email"
                                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                        </div>

                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                name="remember"
                                className="form-check-input"
                                checked={formData.remember}
                                onChange={handleChange}
                            />
                            <label className="form-check-label">Remember Me</label>
                        </div>

                        <div className="d-flex justify-content-between">
                            <button type="submit" className="login-btn">
                                <i className="bi bi-box-arrow-in-right me-2"></i> LOG IN
                            </button>
                            <button type="button" className="register-btn" onClick={Createaccount}>
                                <i className="bi bi-pencil me-2"></i> CREATE ACCOUNT
                            </button>
                        </div>

                        <div className="text-center mt-3">
                            <Link href="/pages/forgot-password" className="lost-password">Lost password?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
