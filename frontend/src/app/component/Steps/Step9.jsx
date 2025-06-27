"use client";
import "./step9.css";

const Religion = [
  {
    key: "Hindu",
    title: "Hindu ",
    description: "Following the ancient spiritual traditions of Hinduism.",
    color: "#E56B6F",
  },
  {
    key: "Islam",
    title: "Islam",
    description: "Believing in the teachings of Jesus Christ.",
    color: "#014421",
  },
  {
    key: "Christian",
    title: "Christian",
    description: "Believing in the teachings of Jesus Christ.",
    color: "#844421",
  },
  {
    key: "Jewish",
    title: "Jewish",
    description: "Following the Jewish faith and traditions.",
    color: "#0504AA",
  },
  {
    key: "Buddhist",
    title: "Buddhist",
    description: "Practicing the path to enlightenment through Buddhism.",
    color: "#997C80",
  },
  {
    key: "Others",
    title: "None of these",
    description: "Religion not mentioned",
    color: "#944C80",
  },
];

export default function Step9({ formData, setFormData }) {
  const selected = formData.religion;

  const handleSelect = (ReligionKey) => {
    setFormData({ ...formData, religion: ReligionKey });
  };   

  return (
    <div className="step9-container">
      <h2 className="step9-title">What's Your  Religion </h2>
      <p className="step9-subtitle">for making strong Relationship </p>

      <div className="step9-list">
        {Religion.map((Religion) => (
          <div
            key={Religion.key}
            className={`step9-option ${selected === Religion.key ? "selected" : ""}`}
            style={{
              backgroundColor: selected === Religion.key ? Religion.color : "#f5f5f5",
              color: selected === Religion.key ? "#fff" : "#000",
            }}
            onClick={() => handleSelect(Religion.key)}
          >
            <div>
              <div
                className="step9-title-text"
                style={{ color: selected === Religion.key ? "#fff" : Religion.color }}
              >
                {Religion.title}
              </div>
              <div className="step9-desc">{Religion.description}</div>
            </div>
            <div className="step9-check">{selected === Religion.key ? "✔" : "○"}</div>
          </div>
        ))}
      </div>

      <button
        className="step9-continue"
        style={{
          backgroundColor: Religion.find((g) => g.key === selected)?.color || "#ccc",
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
