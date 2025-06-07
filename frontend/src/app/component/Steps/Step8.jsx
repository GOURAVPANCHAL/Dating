"use client";
import "./step8.css";

export default function Step8({ formData, setFormData }) {
  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const today = new Date();

    const age = today.getFullYear() - selectedDate.getFullYear();
    const hasHadBirthdayThisYear =
      today.getMonth() > selectedDate.getMonth() ||
      (today.getMonth() === selectedDate.getMonth() && today.getDate() >= selectedDate.getDate());

    const actualAge = hasHadBirthdayThisYear ? age : age - 1;

    if (actualAge < 18) {
      alert("You must be at least 18 years old to continue.");
      return;
    }

    setFormData({ ...formData, dob: e.target.value });
  };

  return (
    <div className="step8-container">
      <h2 className="step8-title">What is your Date of Birth?</h2>
      <p className="step8-subtitle">Knowing your age helps us personalize your experience.</p>

      <div className="step8-input-wrapper">
        <input
          type="date"
          className="step8-input"
          value={formData.dob || ""}
          onChange={handleDateChange}
          max={new Date().toISOString().split("T")[0]} // Prevent future dates
        />
      </div>

      <button
        className="step8-continue"
        style={{
          backgroundColor: formData.dob ? "#355070" : "#ccc",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "10px",
          cursor: "default",
        }}
        disabled
      >
        Date of Birth: {formData.dob ? formData.dob : "None"}
      </button>
    </div>
  );
}
