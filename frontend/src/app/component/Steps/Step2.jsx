"use client";
import { useState } from "react";
import "../Steps/step2.css";

export default function Step2({ formData, setFormData }) {
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="step2-wrapper">
      <div className="step2-header">
        <h2 className="step2-title">Let’s Get to Know You</h2>
        <p className="step2-subtitle">Answer a few fun questions to personalize your profile.</p>
      </div>

      {/* Perfect Weekend */}
      <div className="step2-field">
        <label className="step2-label">Write a short bio here</label>
        <textarea
          value={formData.weekend || ""}
          onChange={(e) => handleChange("weekend", e.target.value)}
          placeholder="like: “Tell us about yourself in 150 characters” "
          className="step2-textarea"
          rows={3}
        />
      </div>

      {/* Communication Style */}
      <div className="step2-field">
        <label className="step2-label">How do you usually communicate?</label>
        <select
          value={formData.communicationStyle || ""}
          onChange={(e) => handleChange("communicationStyle", e.target.value)}
          className="step2-select"
        >
          <option value="">Select one</option>
          <option value="texts">Texts</option>
          <option value="calls">Phone calls</option>
          <option value="video">Video chats</option>
          <option value="inPerson">In-person only</option>
        </select>
      </div>

      {/* Love Language */}
      <div className="step2-field">
        <label className="step2-label">What’s your Diet?</label>
        <select
          value={formData.diet || ""}
          onChange={(e) => handleChange("diet", e.target.value)}
          className="step2-select"
        >
          <option value="">Choose one</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Non-Veg">Non-Veg</option>
          <option value="Vegan">Vegan</option>
        </select>
      </div>

      {/* Dealbreaker */}
      <div className="step2-field">
        <label className="step2-label">What Your Point of View About RelationShip ?</label>
        <textarea
          value={formData.dealbreaker || ""}
          onChange={(e) => handleChange("dealbreaker", e.target.value)}
          placeholder="e.g., dishonesty, poor hygiene, etc."
          className="step2-textarea step2-danger"
          rows={3}
        />
      </div>
    </div>
  );
}
