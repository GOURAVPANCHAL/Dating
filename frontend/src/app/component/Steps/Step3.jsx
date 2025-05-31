"use client";
import "./step3.css";

const genders = [
  {
    key: "male",
    title: "Male",
    description: "Identify as Male",
    color: "#ffc400",
  },
  {
    key: "female",
    title: "Female",
    description: "Identify as Female",
    color: "#00bcd4",
  },
  {
    key: "others",
    title: "Others",
    description: "Identify outside the binary",
    color: "#ff5722",
  },
];

export default function Step3({ formData, setFormData }) {
  const selected = formData.gender;

  const handleSelect = (genderKey) => {
    setFormData({ ...formData, gender: genderKey });
  };

  return (
    <div className="step3-container">
      <h2 className="step3-title">Choose Your Gender</h2>
      <p className="step3-subtitle">For making all kinds of connections!</p>

      <div className="step3-list">
        {genders.map((gender) => (
          <div
            key={gender.key}
            className={`step3-option ${selected === gender.key ? "selected" : ""}`}
            style={{
              backgroundColor: selected === gender.key ? gender.color : "#f5f5f5",
              color: selected === gender.key ? "#fff" : "#000",
            }}
            onClick={() => handleSelect(gender.key)}
          >
            <div>
              <div
                className="step3-title-text"
                style={{ color: selected === gender.key ? "#fff" : gender.color }}
              >
                {gender.title}
              </div>
              <div className="step3-desc">{gender.description}</div>
            </div>
            <div className="step3-check">{selected === gender.key ? "✔" : "○"}</div>
          </div>
        ))}
      </div>

      <button
        className="step3-continue"
        style={{
          backgroundColor: genders.find((g) => g.key === selected)?.color || "#ccc",
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
