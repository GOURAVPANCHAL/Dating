"use client";
import React from "react";

const Step11 = ({ formData, handleChange }) => {
  return (
    <div className="step11Sec container py-4">
      <h4 className="mb-4 text-primary">Step 11: Personal Details</h4>

      <div className="mb-3">
        <label htmlFor="sexualOrientation" className="form-label fw-semibold">
          Sexual Orientation
        </label>
        <select
          className="form-select form-select-sm"
          name="sexualOrientation"
          value={formData.sexualOrientation || ""}
          onChange={handleChange}
        >
          <option value="">Not Selected Yet</option>
          <option value="Heterosexual">Heterosexual</option>
          <option value="Homosexual">Homosexual</option>
          <option value="Bisexual">Bisexual</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="height" className="form-label fw-semibold">
          Height
        </label>
        <select
          className="form-select form-select-sm"
          name="height"
          value={formData.height || ""}
          onChange={handleChange}
        >
          <option value="">Select height</option>
          <option value="Less than 139cm">Less than 139cm</option>
          <option value="140cm - 149cm">140cm - 149cm</option>
          <option value="150cm - 159cm">150cm - 159cm</option>
          <option value="160cm - 169cm">160cm - 169cm</option>
          <option value="170cm - 179cm">170cm - 179cm</option>
          <option value="180cm - 189cm">180cm - 189cm</option>
          <option value="190cm - 199cm">190cm - 199cm</option>
          <option value="200cm - 209cm">200cm - 209cm</option>
          <option value="210cm - 219cm">210cm - 219cm</option>
          <option value="Greater than 220cm">Greater than 220cm</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="weight" className="form-label fw-semibold">
          Weight
        </label>
        <select
          className="form-select form-select-sm"
          name="weight"
          value={formData.weight || ""}
          onChange={handleChange}
        >
          <option value="">Select Your Weight</option>
          <option value="Less than 40kg">Less than 40kg</option>
          <option value="40kg - 49kg">40kg - 49kg</option>
          <option value="50kg - 59kg">50kg - 59kg</option>
          <option value="60kg - 69kg">60kg - 69kg</option>
          <option value="70kg - 79kg">70kg - 79kg</option>
          <option value="80kg - 89kg">80kg - 89kg</option>
          <option value="90kg - 99kg">90kg - 99kg</option>
          <option value="More than 100kg">More than 100kg</option>
        </select>
      </div>
    </div>
  );
};

export default Step11;
