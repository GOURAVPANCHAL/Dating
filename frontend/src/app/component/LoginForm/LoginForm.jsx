'use client';
import './login-form.css';
import Image from 'next/image';
import pic1 from '@/app/Images/img1.jpg';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    // Connect to backend here
  };

  return (
    <>
 


    <div className="login-container">
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 50 }}
      transition={{ duration: 0.5 }}
      className="login-container"
    >
      <div className="login-card">
        <div className="login-left">
          <Image src={pic1} alt="Pattern" className="login-bg" />
        </div>
        <div className="login-right">
          <h2><span className="highlight">Hello,</span> Guyss!</h2>
          <div className="tab-switch">
            <span className="active-tab">Login</span>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="password-field">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>

            <div className="forgot-password">
              <a href="/pages/forgot-password">Forgot Password?</a>
            </div>

            <button type="submit" className="login-btn">Login</button>
          </form>

          <p className="or-divider">Or</p>

          <div className="social-icons">
            <img src="/google-icon.svg" alt="Google" />
            <img src="/facebook-icon.svg" alt="Facebook" />
          </div>
        </div>
      </div>
    </motion.div>
    </div>

    </>
  );
}
