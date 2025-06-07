"use client";
import { useState } from "react";

export default function Step2({ formData, handleChange, setFormData }) {
  const handleInterestChange = (interest) => {
    setFormData({ ...formData, interestedIn: interest });
  };

  const handleAgeChange = (index, value) => {
    const updatedAgeRange = [...formData.ageRange];
    updatedAgeRange[index] = value;
    setFormData({ ...formData, ageRange: updatedAgeRange });
  };

  return (
    <div>
      {/* <h5>Email:</h5>
      <input
        name="email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        className="form-input mb-6"
      /> */}

      {/* Interested In */}
      {/* <div className="mb-6">
          <b className="">I'm interested in...</b>
        <div className="flex gap-2">
          {["Women", "Men", "Everyone"].map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => handleInterestChange(label)}
              className={`px-6 m-2 py-2  rounded border ${
                formData.interestedIn === label
                  ? "bg-warning text-white"
                  : "bg-info text-black"
              }`}
            style={{width:"120px"}}
            >
              {label}
            </button>
          ))}
        </div>
      </div> */}

      {/* Age Range */}
      {/* <div className="mb-6">
        <b>Age</b>
        <p className="mb-2">
          Between {formData.ageRange?.[0] || 18} and {formData.ageRange?.[1] || 30}
        </p>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min="18"
            max="100"
            value={formData.ageRange?.[0] || 18}
            onChange={(e) => handleAgeChange(0, parseInt(e.target.value))}
            className="w-full"
          />
          <input
            type="range"
            min="18"
            max="100"
            value={formData.ageRange?.[1] || 30}
            onChange={(e) => handleAgeChange(1, parseInt(e.target.value))}
            className="w-full"
          />
        </div>
      </div> */}
    </div>
  );
}
