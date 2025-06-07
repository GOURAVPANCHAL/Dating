"use client";
import { useState, useEffect, useRef } from "react";

export default function Step1({ formData, handleChange, setFormData }) {
  const MAX_PHOTOS = 6;
  const [previews, setPreviews] = useState([]);
  const fileInputs = useRef([]);

  const handleAgeChange = (index, value) => {
    const currentAgeRange = Array.isArray(formData.ageRange) && formData.ageRange.length === 2
      ? [...formData.ageRange]
      : [18, 30];
    currentAgeRange[index] = value;
    setFormData({ ...formData, ageRange: currentAgeRange });
  };

  useEffect(() => {
    if (formData.photos?.length) {
      const urls = formData.photos.map((file) =>
        typeof file === "string" ? file : URL.createObjectURL(file)
      );
      setPreviews(urls);
    }
  }, [formData.photos]);

  const handleImageSelect = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const newPhotos = [...(formData.photos || [])];
    const newPreviews = [...previews];

    newPhotos[index] = file;
    newPreviews[index] = URL.createObjectURL(file);

    setFormData({ ...formData, photos: newPhotos });
    setPreviews(newPreviews);
  };

  const handleRemoveImage = (index) => {
    const updatedPhotos = [...(formData.photos || [])];
    const updatedPreviews = [...previews];

    updatedPhotos.splice(index, 1);
    updatedPreviews.splice(index, 1);

    setFormData({ ...formData, photos: updatedPhotos });
    setPreviews(updatedPreviews);
  };

  return (
    <div className="container mt-3">
      <h4 className="text-center mb-3">Step 1 :</h4>

      <div className="mb-3">
        <label className="form-label fw-bold text-primary">Name:</label>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
        />

         {/* adddeed email */}
        <label className="form-label fw-bold text-primary mt-3 mb-0">Email:</label>
      <input
        name="email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        className="form-input mb-6"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
      />

      {/* added genderqwhb */}

      {/* <div className="mb-6">
        <label className="form-label fw-bold text-primary mt-3 mb-0">Prefered Age Range:</label>
        <p className="mb-2">
          Between {(formData.ageRange && formData.ageRange[0] !== undefined ? formData.ageRange[0] : 18)} and {(formData.ageRange && formData.ageRange[1] !== undefined ? formData.ageRange[1] : 30)}
        </p>
        <div className="flex items-center gap-9">
          <input
            type="range"
            min="18"
            max="100"
            value={(formData.ageRange && formData.ageRange[0] !== undefined) ? formData.ageRange[0] : 18}
            onChange={(e) => handleAgeChange(0, parseInt(e.target.value))}
            className="w-full"
          />
          <input
            type="range"
            min="18"
            max="100"
            value={(formData.ageRange && formData.ageRange[1] !== undefined) ? formData.ageRange[1] : 30}
            onChange={(e) => handleAgeChange(1, parseInt(e.target.value))}
            className="w-full"
          />
        </div>
      </div> */}
      </div>

      <div className="mb-2 fw-bold text-primary ">Upload Your Photos:</div>

      <div className="d-flex flex-wrap gap-2 justify-content-center" style={{ maxWidth: "100%" }}>
        {[...Array(MAX_PHOTOS)].map((_, index) => (
          <div
            key={index}
            className="position-relative rounded d-flex justify-content-center align-items-center bg-light border-dotted"
            style={{
              width: "100px",
              height: "100px",
              cursor: "pointer",
              overflow: "hidden",
              border: "2px dashed #ccc",
            }}
            onClick={() => fileInputs.current[index]?.click()}
          >
            {previews[index] ? (
              <>
                <img
                  src={previews[index]}
                  alt={`preview-${index}`}
                  className="w-100 h-100 object-fit-cover"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveImage(index);
                  }}
                  className="btn btn-sm btn-danger position-absolute top-0 end-0 m-1 p-1 rounded-circle"
                  title="Remove"
                >
                  ✕
                </button>
              </>
            ) : (
              <span className="fs-1 text-muted">+</span>
            )}
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              ref={(el) => (fileInputs.current[index] = el)}
              onChange={(e) => handleImageSelect(e, index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
