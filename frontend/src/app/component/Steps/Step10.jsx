import { useState } from "react";

const allHobbies = [
  "Reading", "Traveling", "Cooking", "Sports", "Music", "Photography",
  "Movies", "Gym", "Gaming", "Drawing", "Dancing", "Writing", "Blogging",
  "Biryani", "Anime", "Cricket", "Foodie", "Meditation", "Skincare"
];

export default function Step10({ formData, handleChange, setFormData }) {
  const [aadhaarOtp, setAadhaarOtp] = useState("");
  const [aadhaarStatus, setAadhaarStatus] = useState("");

  const handleAadhaarChange = (e) => {
    const aadhaar = e.target.value.replace(/\D/g, "").slice(0, 12);
    setFormData({ ...formData, aadhaar });
  };

  const sendAadhaarOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setAadhaarOtp(otp);
    alert(`Simulated Aadhaar OTP sent: ${otp}`);
    setAadhaarStatus("");
  };

  const verifyAadhaarOtp = () => {
    if (formData.aadhaarOtp === aadhaarOtp) {
      setAadhaarStatus("success");
    } else {
      setAadhaarStatus("error");
    }
  };

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
    <div className="container py-4">
      <h4 className="mb-4 text-primary">Step 10: Aadhaar, City & Hobbies</h4>

      {/* Aadhaar Input */}
      <div className="form-floating mb-3" style={{ position: "relative" }}>
        <input
          type="text"
          className="form-control"
          id="aadhaarInput"
          placeholder="Enter Aadhaar"
          value={formData.aadhaar || ""}
          onChange={handleAadhaarChange}
          style={{ paddingRight: "100px" }}
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

      {/* Aadhaar OTP Verification */}
      <div className="d-flex align-items-center gap-2 mb-2">
        <div style={{ position: "relative", maxWidth: "150px", flexGrow: 1 }}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Aadhaar OTP"
            value={formData.aadhaarOtp || ""}
            onChange={(e) => setFormData({ ...formData, aadhaarOtp: e.target.value })}
            style={{ paddingRight: "75px" }}
          />
          <button
            type="button"
            onClick={verifyAadhaarOtp}
            className="btn btn-success"
            style={{
              position: "absolute",
              right: "2px",
              top: "50%",
              transform: "translateY(-50%)",
              height: "calc(100% - 4px)",
              borderRadius: "0.25rem",
              padding: "0 10px",
              fontSize: "0.9rem",
            }}
          >
            Verify
          </button>
        </div>
      </div>
      {aadhaarStatus && (
        <p className={`mt-1 ${aadhaarStatus === "success" ? "text-success" : "text-danger"}`}>
          {aadhaarStatus === "success" ? "✅ Aadhaar verified successfully!" : "❌ Invalid Aadhaar OTP"}
        </p>
      )}

      {/* City Input */}
      <div className="mb-3 mt-3">
        <label className="form-label fw-semibold">Your City</label>
        <input
          type="text"
          name="location"
          className="form-control"
          placeholder="Where Are You From"
          value={formData.location || ""}
          onChange={handleChange}
        />
      </div>

      {/* Hobbies Section */}
      <div className="mb-3 mt-4">
        <label className="form-label fw-semibold">Select Your Hobbies (max 10)</label>
        <div className="d-flex flex-wrap gap-2">
          {allHobbies.map((hobby) => {
            const selected = formData.hobbies || [];
            const isSelected = selected.includes(hobby);
            return (
              <button
                key={hobby}
                type="button"
                className={`btn btn-sm ${isSelected ? 'btn-primary' : 'btn-outline-secondary'}`}
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
              <span key={i} className="badge bg-primary me-2">{hobby}</span>
            ))
          ) : (
            <small className="text-muted">No hobbies selected yet</small>
          )}
        </div>
      </div>
    </div>
  );
}
