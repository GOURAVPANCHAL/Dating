"use client";
import "./step5.css";

const smokes = [
  {
    key: "smoke",
    title: "Do Smoke ",
    description: "Smoker",
    color: "#674D66",
  },
  {
    key: "Not Smoke",
    title: "Don't Smoke",
    description: "Never Smoke earlier",
    color: "#CD5E78",
  },
  {
    key: "Occasionally",
    title: "Occasionally Smoke",
    description: "I Somke Some Special Events",
    color: "#08566E",
  },
];

export default function Step5({ formData, setFormData }) {
  const selected = formData.smoke;

  const handleSelect = (smokeKey) => {
    setFormData({ ...formData, smoke: smokeKey });
  };

  return (
    <div className="step5-container">
      <h2 className="step5-title">Do You Smoke</h2>
      <p className="step5-subtitle">For making all kinds of connections!</p>

      <div className="step5-list">
        {smokes.map((smoke) => (
          <div
            key={smoke.key}
            className={`step5-option ${selected === smoke.key ? "selected" : ""}`}
            style={{
              backgroundColor: selected === smoke.key ? smoke.color : "#f5f5f5",
              color: selected === smoke.key ? "#fff" : "#000",
            }}
            onClick={() => handleSelect(smoke.key)}
          >
            <div>
              <div
                className="step5-title-text"
                style={{ color: selected === smoke.key ? "#fff" : smoke.color }}
              >
                {smoke.title}
              </div>
              <div className="step5-desc">{smoke.description}</div>
            </div>
            <div className="step5-check">{selected === smoke.key ? "✔" : "○"}</div>
          </div>
        ))}
      </div>

      <button
        className="step5-continue"
        style={{
          backgroundColor: smokes.find((g) => g.key === selected)?.color || "#ccc",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "10px",  
          cursor: "default",
        }}
        disabled
      >
        Selected: {selected ? selected.charAt(0).toUpperCase() + selected.slice(1) : "None"}
      </button>
    </div>
  );
}
 
