"use client";
import React from "react";

const Step12 = ({ formData, handleChange }) => {
  return (
    <div className="step11Sec container py-4">
      <h4 className="mb-4 text-primary">Step 12: Personal Details</h4>

      <div className="mb-3">
        <label htmlFor="sexualOrientation" className="form-label fw-semibold">
          Figure
        </label>
        <select
          className="form-select form-select-sm"
          name="Figure"
          value={formData.Figure || ""}
          onChange={handleChange}
        >
          <option value="">Not Selected Yet</option>
          <option value="Heterosexual">Athletic</option>
          <option value="Homosexual">Muscular</option>
          <option value="Bisexual">Slim</option>
          <option value="Bisexual">Normal</option>
          <option value="Bisexual">Curvy</option>
          <option value="Bisexual">Overweight</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="height" className="form-label fw-semibold">
          Hair Color
        </label>
        <select
          className="form-select form-select-sm"
          name="height"
          value={formData.height || ""}
          onChange={handleChange}
        >
          <option value="">Select height</option>
          <option value="Brown">Brown</option>
          <option value="Blonde">Blonde</option>
          <option value="Black"> Black</option>
          <option value="Red">Red</option>
          <option value="Grey">Grey</option>
          <option value="Other">Other</option>
          <option value="No Hair">No Hair</option>
          <option value="no Answer">no Answer</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="weight" className="form-label fw-semibold">
          Eye Color
        </label>
        <select
          className="form-select form-select-sm"
          name="eyeColor"
          value={formData.weight || ""}
          onChange={handleChange}
        >
          <option value="">Select Eye Color</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="Brown">Brown</option>
          <option value="Grey">Grey</option>
          <option value="Black">Black</option>
          <option value="Hazel">Hazel</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>
  );
};

export default Step12;
