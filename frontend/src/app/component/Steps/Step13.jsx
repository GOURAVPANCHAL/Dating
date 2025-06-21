"use client";
import React from "react";

const Step13 = ({ formData, handleChange }) => {
  return (
    <div className="step11Sec container py-4">
      <h4 className="mb-4 text-primary">Step 13: Personal Details</h4>

      <div className="mb-3">
        <label htmlFor="sexualOrientation" className="form-label fw-semibold">
          Education Level
        </label>
        <select
          className="form-select p-2 form-select-sm"
          name="Figure"
          value={formData.Figure || ""}
          onChange={handleChange}
        >
          <option value="">Not Selected Yet</option>
          <option value="Heterosexual">High School</option>
          <option value="Homosexual">Graduate</option>
          <option value="Bisexual">Masters</option>
          <option value="Bisexual">None of These</option>
        
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="height" className="form-label fw-semibold">
        What You Think About Relationship
        </label>
        <select
          className="form-select  p-2 form-select-sm"
          name="height"
          value={formData.height || ""}
          onChange={handleChange}
        >
          <option value="">Select </option>
          <option value="Serious">Looking for a Serious Relationship</option>
          <option value="casual">Casual Dating / No Strings Attached</option>
          <option value="Friendship"> Open to Friendship First</option>
          <option value="Marriage">Marriage / Life Partner</option>
          <option value="Not sure">Not Sure Yet / Exploring</option>
          <option value="only Chat">Just Want to Chat / Make Friends</option>
          <option value="relationship">Open Relationship / Ethical Non-Monogamy</option>
          <option value="long distance Relationship">Long-Distance Relationship (Optional)</option>
        </select>
      </div>
    </div>
  );
};

export default Step13;
