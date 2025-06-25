"use client";
import React, { useState } from "react";
import "./couple-form.css";
import countryData from "../../data/countrydata";
import Image from "next/image";
import maleImage from "../../Images/couple2.png";
import femaleImage from "../../Images/couple1.png";

const CoupleForm = () => {
  const [formData, setFormData] = useState({
    ageFrom: "18",
    ageTo: "50",
    gender: "Men",
    interestedIn: "Women",
    country: ""
  });

  // Generic update function
  const updateFormData = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Form Data:", formData);
    // You can send formData to backend here
  };

  return (
    <section className="couple-fullscreen">
      <div className="couple-wrapper">
        {/* Desktop Left Image */}
        <div className="side-image left desktop-only">
          <Image src={maleImage} alt="Man" />
        </div>

        {/* Mobile Image */}
        <div className="mobile-image mobile-only">
          <img src="/mobile.png" alt="Mobile Couple" />
        </div>

        {/* Form */}
        <div className="form-box">
          <h1>YOUR TRUE LOVE START HERE</h1>
          <p>Join the dating site where you could meet anyone, anywhere!</p>

          <form onSubmit={handleSubmit}>
            {/* Gender */}
            <div className="form-group genderSec">
              <label>I am:</label>
              <div className="radio-group">
                {["Men", "Women", "Nonbinary"].map((label) => (
                  <button
                    key={label}
                    type="button"
                    className={`radio-btn ${
                      formData.gender === label ? "active" : ""
                    }`}
                    onClick={() => updateFormData("gender", label)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Interested In */}
            <div className="form-group">
              <label>Interested In:</label>
              <div className="radio-group">
                {["Men", "Women", "Nonbinary"].map((label) => (
                  <button
                    key={label}
                    type="button"
                    className={`radio-btn ${
                      formData.interestedIn === label ? "active" : ""
                    }`}
                    onClick={() => updateFormData("interestedIn", label)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Age Range and Country */}
            <div className="form-group d-flex">
              <div className="Age-section">
                <label>Age From :</label>
                <div className="age-range">
                  <input
                    type="number"
                    value={formData.ageFrom}
                    onChange={(e) =>
                      updateFormData("ageFrom", e.target.value)
                    }
                  />
                  <span>to</span>
                  <input
                    type="number"
                    value={formData.ageTo}
                    onChange={(e) =>
                      updateFormData("ageTo", e.target.value)
                    }
                  />
                </div>
                <input
                  type="range"
                  min="18"
                  max="100"
                  value={formData.ageTo}
                  onChange={(e) =>
                    updateFormData("ageTo", e.target.value)
                  }
                />
              </div>

              {/* Country */}
              <div className="form-group countrySec">
                <label>Country:</label>
                <select
                  value={formData.country}
                  onChange={(e) =>
                    updateFormData("country", e.target.value)
                  }
                >
                  <option value="">Select Country</option>
                  {countryData.map((item, index) => (
                    <option
                      key={index}
                      value={typeof item === "string" ? item : item.name}
                    >
                      {typeof item === "string" ? item : item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="find-btn">
              Find Your Partner
            </button>
          </form>
        </div>

        {/* Desktop Right Image */}
        <div className="side-image right desktop-only">
          <Image src={femaleImage} alt="Woman" />
        </div>
      </div>
    </section>
  );
};

export default CoupleForm;
