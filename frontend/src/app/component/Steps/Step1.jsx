"use client";
import { useState, useEffect } from "react";

export default function Step1({ formData, handleChange, setFormData }) {
  const [previews, setPreviews] = useState([]);
  const MAX_PHOTOS = 6;

  // Load previews if returning to this step
  useEffect(() => {
    if (formData.photos?.length) {
      const urls = formData.photos.map((file) =>
        typeof file === "string" ? file : URL.createObjectURL(file)
      
      ); 
      setPreviews(urls);
    }
  }, []);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const total = (formData.photos?.length || 0) + files.length;

    if (total > MAX_PHOTOS) {
      alert(`You can upload up to ${MAX_PHOTOS} photos.`);
      return;
    }

    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPreviews((prev) => [...prev, ...newPreviews]);
    setFormData((prev) => ({
      ...prev,
      photos: [...(prev.photos || []), ...files],
    }));
  };

  const handleRemoveImage = (index) => {
    const updatedPreviews = [...previews];
    const updatedPhotos = [...formData.photos];

    updatedPreviews.splice(index, 1);
    updatedPhotos.splice(index, 1);

    setPreviews(updatedPreviews);
    setFormData({ ...formData, photos: updatedPhotos });
  };

  return (
    <div>
      <h4 className="text-center text-xl font-semibold mb-2">Step 1</h4>
      
       <b className="text-info">Name :</b>
      <input
        name="name"
        placeholder="Enter Your Name"
        value={formData.name}
        onChange={handleChange}
        className="form-input w-full p-2 border rounded mb-1"
      />

      <p className="text-sm mb-6">This is how you'll appear on our website.</p>

      {/* Image Upload */}
      <div className="mb-4">
        <b className="text-info">User Photos :</b>
        <input
          type="file"
          accept="image/*"
          multiple 
          onChange={handleImageUpload}
          disabled={formData.photos?.length >= MAX_PHOTOS}
          className="form-input border-none"
        />
        <p className="text-success">
          Max {MAX_PHOTOS} images. You have uploaded {formData.photos?.length || 0}.
        </p>
      </div>

      {/* Preview Grid */}
      <div className="mt-1 d-flex">
        {previews.map((src, index) => (
          <div key={index} className="relative ">
            <img
              src={src}
              alt={`preview-${index}`}
              style={{height:"100px" , width:"100px"}}
              className="object-cover rounded shadow"
            />
            <button
        onClick={() => handleRemoveImage(index)}
        className="absolute top-1 right-1   rounded-full px-2 py-0.5"
      >
        ✕
      </button>
          </div>
        ))}
      </div>
    </div>
  );
}
