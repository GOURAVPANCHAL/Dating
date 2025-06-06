"use client";
import "./step7.css";

const Merital = [
  {
    key: "Single",
    title: "Single ",
    description: "Enjoying independence and open to new connections.",
    color: "#E56B6F",
  },
  {
    key: "Married",
    title: "Married   ",
    description: "Committed in a long-term relationship with a partner.",
    color: "#355070",
  },
  {
    key: "Widowed",
    title: "Widowed",
    description: "Lost a partner, open to healing and future possibilities.",
    color: "#A5678E",
  },
  {
    key: "Divorced",
    title: "Divorced",
    description: "Experienced past commitments, ready for a new journey.",
    color: "#F26CA7",
  },
  {
    key: "Seprated",
    title: "Seprated",
    description: "Taking time apart to rediscover myself and move forward.",
    color: "#5E4AE3",
  },
];

export default function Step7({ formData, setFormData }) {
  const selected = formData.Merital;

  const handleSelect = (MeritalKey) => {
    setFormData({ ...formData, Merital: MeritalKey });
  };

  return (
    <div className="step7-container">
      <h2 className="step7-title">Whats Your Merital Status</h2>
      <p className="step7-subtitle">for making strong Relationship </p>

      <div className="step7-list">
        {Merital.map((Merital) => (
          <div
            key={Merital.key}
            className={`step7-option ${selected === Merital.key ? "selected" : ""}`}
            style={{
              backgroundColor: selected === Merital.key ? Merital.color : "#f5f5f5",
              color: selected === Merital.key ? "#fff" : "#000",
            }}
            onClick={() => handleSelect(Merital.key)}
          >
            <div>
              <div
                className="step7-title-text"
                style={{ color: selected === Merital.key ? "#fff" : Merital.color }}
              >
                {Merital.title}
              </div>
              <div className="step7-desc">{Merital.description}</div>
            </div>
            <div className="step7-check">{selected === Merital.key ? "✔" : "○"}</div>
          </div>
        ))}
      </div>

      <button
        className="step7-continue"
        style={{
          backgroundColor: Merital.find((g) => g.key === selected)?.color || "#ccc",
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
