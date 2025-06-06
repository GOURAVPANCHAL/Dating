'use client';
import React, { useState, useEffect } from 'react';

const Step12 = ({ formData, handleChange }) => {
  const [error, setError] = useState("");

  const validateStep = () => {
    if (stepNumber === 12) {
      return (
        formData.password.trim() !== "" &&
        formData.confirmPassword.trim() !== "" &&
        formData.password === formData.confirmPassword
      );
    }
    return true;
  };
  

  useEffect(() => {
    if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  }, [formData.password, formData.confirmPassword]);

  return (
    <div className="step12Sec container py-4">
      <h4 className="mb-4 text-primary">Step 12: Create Password</h4>

      <div className="mb-3">
        <label htmlFor="password" className="form-label fw-semibold">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={formData.password || ""}
          onChange={handleChange}
          className="form-control form-control-sm"
          placeholder="Enter password"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label fw-semibold">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword || ""}
          onChange={handleChange}
          className="form-control form-control-sm"
          placeholder="Re-enter password"
        />
        {error && (
          <p className="text-danger mt-1" style={{ fontSize: "14px" }}>{error}</p>
        )}
      </div>
    </div>
  );
};

export default Step12;
