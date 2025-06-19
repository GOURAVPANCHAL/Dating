'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import pic1 from '@/app/Images/img1.jpg';
import { motion } from 'framer-motion';
import './forgot-password.css'; // Reusing the login page styles

export default function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email) return setError('Email is required.');
    if (!/\S+@\S+\.\S+/.test(email)) return setError('Enter a valid email.');

    setTimeout(() => setStep(2), 500); // Simulate OTP sending
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (otp !== '123456') return setError('Invalid OTP.');
    setStep(3);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!password || password.length < 6) return setError('Minimum 6 characters.');

    setSuccess('Password updated successfully!');
    setTimeout(() => router.push('/pages/login'), 1500);
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
          <Image src={pic1} alt="Reset Password" className="login-bg" />
        </div>

        <div className="login-right">
          <h2 className="text-center mb-3">
            <span className="highlight">Forgot</span> Password
          </h2>

          {step === 1 && (
            <form onSubmit={handleEmailSubmit}>
              <label className="form-label">Enter your email</label>
              <input
                type="email"
                className={error ? 'form-control is-invalid' : 'form-control'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && <div className="invalid-feedback">{error}</div>}

              <button type="submit" className="login-btn mt-3 w-100">Send OTP</button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleOtpSubmit}>
              <label className="form-label">Enter the OTP sent to your email</label>
              <input
                type="text"
                className={error ? 'form-control is-invalid' : 'form-control'}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              {error && <div className="invalid-feedback">{error}</div>}

              <button type="submit" className="login-btn mt-3 w-100">Verify OTP</button>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handlePasswordSubmit}>
              <label className="form-label">Enter New Password</label>
              <input
                type="password"
                className={error ? 'form-control is-invalid' : 'form-control'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <div className="invalid-feedback">{error}</div>}
              {success && <div className="text-success mt-2">{success}</div>}

              <button type="submit" className="login-btn mt-3 w-100">Update Password</button>
            </form>
          )}

          {step > 1 && (
            <button
              className="btn btn-outline-dark w-100 mt-4"
              onClick={() => router.push('/pages/login')}
            >
              Back to Login
            </button>
          )}
        </div>
      </div>
    </motion.div>
    </div>
    </>

  );
}
