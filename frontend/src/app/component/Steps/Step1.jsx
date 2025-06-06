"use client";
import { useState, useEffect, useRef } from "react";

export default function Step1({ formData, handleChange, setFormData }) {
  const MAX_PHOTOS = 6;
  const [previews, setPreviews] = useState([]);
  const fileInputs = useRef([]);

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
      </div>

      <div className="mb-2 fw-bold text-primary">Upload Your Photos:</div>

      <div className="d-flex flex-wrap gap-2" style={{ maxWidth: "330px" }}>
        {[...Array(MAX_PHOTOS)].map((_, index) => (
          <div
            key={index}
            className="position-relative border border-secondary rounded d-flex justify-content-center align-items-center bg-light"
            style={{
              width: "100px",
              height: "100px",
              cursor: "pointer",
              overflow: "hidden",
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
