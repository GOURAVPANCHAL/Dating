"use client";
import { useState } from "react";

const allHobbies = [
  "Reading", "Traveling", "Cooking", "Sports", "Music", "Photography",
  "Movies", "Gym", "Gaming", "Drawing", "Dancing", "Writing", "Blogging",
  "Biryani", "Anime", "Cricket", "Foodie", "Meditation", "Skincare"
];

export default function Step10({ formData, handleChange, setFormData }) {
  const [localOtp, setLocalOtp] = useState("");
  const [aadhaarError, setAadhaarError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpInputError, setOtpInputError] = useState("");
  const [verificationMessage, setVerificationMessage] = useState("");

  // Handle Aadhaar input change (numbers only, max 12)
  const handleAadhaarChange = (e) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 12);
    setFormData({ ...formData, aadhaar: val, aadhaarStatus: "", aadhaarOtp: "" });
    setAadhaarError("");
    setOtpSent(false);
    setVerificationMessage("");
  };

  // Send OTP
  const sendAadhaarOtp = () => {
    if (!formData.aadhaar || formData.aadhaar.length !== 12) {
      setAadhaarError("❌ Aadhaar number must be exactly 12 digits.");
      return;
    }
    setAadhaarError("");
    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setLocalOtp(otp);
    setOtpSent(true);
    setVerificationMessage("");
    setFormData({ ...formData, aadhaarOtp: "", aadhaarStatus: "" });
    alert(`Simulated Aadhaar OTP sent: ${otp}`);
  };

  // Verify OTP entered by user
  const verifyAadhaarOtp = () => {
    if (!formData.aadhaarOtp || formData.aadhaarOtp.trim() === "") {
      setOtpInputError("Please enter the OTP");
      setVerificationMessage("");
      setFormData({ ...formData, aadhaarStatus: "" });
      return;
    }

    if (formData.aadhaarOtp === localOtp) {
      setFormData({ ...formData, aadhaarStatus: "success" });
      setVerificationMessage("✅ Aadhaar verified successfully!");
      setOtpInputError("");
    } else {
      setFormData({ ...formData, aadhaarStatus: "error" });
      setVerificationMessage("❌ Invalid Aadhaar OTP. Please try again.");
      setOtpInputError("");
    }
  };

  // Hobby toggle logic, max 10
  const toggleHobby = (hobby) => {
    const selected = formData.hobbies || [];
    const isSelected = selected.includes(hobby);

    if (isSelected) {
      setFormData({
        ...formData,
        hobbies: selected.filter((h) => h !== hobby),
      });
    } else if (selected.length < 10) {
      setFormData({
        ...formData,
        hobbies: [...selected, hobby],
      });
    }
  };

  return (
    <div className="container pt-4">
      <h4 className="mb-4 text-primary">Step 10: Aadhaar, City & Hobbies</h4>

      {/* Aadhaar Input */}
      <div className="form-floating mb-2" style={{ position: "relative" }}>
        <input
          type="text"
          className="form-control"
          id="aadhaarInput"
          placeholder="Enter Aadhaar"
          value={formData.aadhaar || ""}
          onChange={handleAadhaarChange}
          style={{ paddingRight: "110px" }}
        />
        <button
          type="button"
          onClick={sendAadhaarOtp}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            padding: "0.375rem 0.75rem",
            fontSize: "0.875rem",
            border: "none",
            backgroundColor: "#0d6efd",
            color: "white",
            borderRadius: "0.25rem",
            cursor: "pointer",
          }}
        >
          Send OTP
        </button>
        <label htmlFor="aadhaarInput">Aadhaar Number</label>
      </div>
      {aadhaarError && <p className="text-danger mt-1">{aadhaarError}</p>}

      {/* OTP Input and Verify */}
      {otpSent && (
        <div className="d-flex align-items-center gap-2 mb-2" style={{ maxWidth: "250px" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Aadhaar OTP"
            value={formData.aadhaarOtp || ""}
            onChange={(e) =>
              setFormData({ ...formData, aadhaarOtp: e.target.value })
            }
            style={{ paddingRight: "90px" }}
          />
          <button
            type="button"
            onClick={verifyAadhaarOtp}
            className="btn btn-success"
            style={{
              position: "relative",
              height: "38px",
              borderRadius: "0.25rem",
              padding: "0 10px",
              fontSize: "0.9rem",
              flexShrink: 0,
            }}
          >
            Verify
          </button>
        </div>
      )}
      {otpInputError && <p className="text-danger">{otpInputError}</p>}
      {verificationMessage && (
        <p className={formData.aadhaarStatus === "success" ? "text-success" : "text-danger"}>
          {verificationMessage}
        </p>
      )}

      {/* City Input */}
      <div className="mb-3 mt-3">
        <label className="form-label fw-semibold" htmlFor="locationInput">
          Your City
        </label>
        <input
          type="text"
          id="locationInput"
          name="location"
          className="form-control"
          placeholder="Where Are You From"
          value={formData.location || ""}
          onChange={handleChange}
        />
      </div>

      {/* Hobbies Section */}
      <div className="mb-3 mt-4">
        <label className="form-label fw-semibold">
          Select Your Hobbies (max 10)
        </label>
        <div className="d-flex flex-wrap gap-2">
          {allHobbies.map((hobby) => {
            const selected = formData.hobbies || [];
            const isSelected = selected.includes(hobby);
            return (
              <button
                key={hobby}
                type="button"
                className={`hobbybtn ${isSelected ? "btn-primary" : "btn-outline-secondary"}`}
                onClick={() => toggleHobby(hobby)}
              >
                {hobby}
              </button>
            );
          })}
        </div>

        <div className="mt-2">
          {(formData.hobbies || []).length > 0 ? (
            formData.hobbies.map((hobby, i) => (
              <span key={i} className="badge bg-primary me-2">
                {hobby}
              </span>
            ))
          ) : (
            <small className="text-muted">No hobbies selected yet</small>
          )}
        </div>
      </div>
    </div>
  );
}
