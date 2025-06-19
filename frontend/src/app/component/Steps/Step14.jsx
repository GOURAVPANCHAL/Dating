"use client";
import { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import "./step14.css";

const PhotoVerification = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [faceDetected, setFaceDetected] = useState(false);

  useEffect(() => {
    const loadModelsAndStartCamera = async () => {
      try {
        // ✅ Load face detection model
        await faceapi.nets.tinyFaceDetector.loadFromUri("/models");

        // ✅ Start webcam
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      } catch (err) {
        setError("Unable to access camera or load face detection models.");
        console.error(err);
      }
    };

    loadModelsAndStartCamera();
  }, []);

  const capturePhoto = async () => {
    setLoading(true);
    setFaceDetected(false);
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, 320, 240);
    const imageData = canvas.toDataURL("image/png");

    // Detect face
    const detection = await faceapi.detectSingleFace(canvas, new faceapi.TinyFaceDetectorOptions());

    if (!detection) {
      alert("❌ No face detected. Please try again.");
      setPhoto(null);
      setLoading(false);
      return;
    }

    setFaceDetected(true);
    setPhoto(imageData);
    setLoading(false);
  };

  const uploadPhoto = async () => {
    if (!photo) return;
    try {
      const res = await fetch("/api/upload-photo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: photo }),
      });
      const result = await res.json();
      if (res.ok) alert("✅ " + result.message);
      else alert("❌ Upload failed: " + result.message);
    } catch (error) {
      alert("Upload error");
      console.error(error);
    }
  };

  return (
    <div className="photo-verification">
      <h2>Photo Verification</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!photo ? (
        <>
          <video ref={videoRef} width="320" height="240" autoPlay muted />
          <br />
          <button onClick={capturePhoto} disabled={loading}>
            {loading ? "Detecting..." : "📸 Take Photo"}
          </button>
        </>
      ) : (
        <>
          <img src={photo} alt="Captured" width="320" />
          {faceDetected && <p>✅ Face detected! You can now upload.</p>}
          <button onClick={uploadPhoto}>✅ Upload</button>
          <button onClick={() => setPhoto(null)} style={{ marginLeft: 10 }}>
            🔁 Retake
          </button>
        </>
      )}

      <canvas ref={canvasRef} width="320" height="240" style={{ display: "none" }} />
    </div>
  );
};

export default PhotoVerification;
