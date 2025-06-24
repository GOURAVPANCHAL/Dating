"use client";
import React, { useState } from "react";
import "./couple-form.css";
import countryData from "../../data/countrydata";
import Image from "next/image";
import maleImage from "../../Images/couple2.png"; // Replace with correct path
import femaleImage from "../../Images/couple1.png"; // Replace with correct path

const CoupleForm = () => {
  const [ageFrom, setAgeFrom] = useState(18);
  const [ageTo, setAgeTo] = useState(50);
  const [iam, setIam] = useState("Men");
  const [interestedIn, setInterestedIn] = useState("Women");

  const handleFromChange = (e) => {
    const value = Number(e.target.value);
    setAgeFrom(value);
    if (value > ageTo) setAgeTo(value);
  };

  const handleToChange = (e) => {
    const value = Number(e.target.value);
    setAgeTo(value);
  };

  const handleSliderChange = (e) => {
    setAgeTo(Number(e.target.value));
  };

  return (
    <section className="couple-fullscreen">
      <div className="couple-wrapper">
        <div className="side-image left">
          <Image src={maleImage} alt="Man" />
        </div>

        <div className="form-box">
          <h1>YOUR TRUE LOVE START HERE</h1>
          <p>Join the dating site where you could meet anyone, anywhere!</p>

          <form>
            <div className="form-group">
              <label>I am:</label>
              <div className="radio-group">
                {["Men", "Women", "Nonbinary"].map((label) => (
                  <button
                    key={label}
                    type="button"
                    className={`radio-btn ${iam === label ? "active" : ""}`}
                    onClick={() => setIam(label)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Interested In:</label>
              <div className="radio-group">
                {["Men", "Women", "Nonbinary"].map((label) => (
                  <button
                    key={label}
                    type="button"
                    className={`radio-btn ${interestedIn === label ? "active" : ""}`}
                    onClick={() => setInterestedIn(label)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Age:</label>
              <div className="age-range">
                <input type="number" value={ageFrom} onChange={handleFromChange} />
                <span>to</span>
                <input type="number" value={ageTo} onChange={handleToChange} />
              </div>
              <input
                type="range"
                min="18"
                max="100"
                value={ageTo}
                onChange={handleSliderChange}
              />
            </div>

            <div className="form-group">
              <label>Country:</label>
              <select>
                <option>Select Country</option>
                {countryData.map((item, index) => (
                  <option key={index}>
                    {typeof item === "string" ? item : item.name}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="find-btn">
              Find Your Partner
            </button>
          </form>
        </div>

        <div className="side-image right">
          <Image src={femaleImage} alt="Woman" />
        </div>
      </div>
    </section>
  );
};

export default CoupleForm;
