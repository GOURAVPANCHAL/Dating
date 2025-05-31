"use client";
import "./step6.css";

const drink = [
  {
    key: "drink",
    title: "Do Drink ",
    description: "Drinker",
    color: "#674D66",
  },
  {
    key: "Never Drink",
    title: "Never Drink",
    description: "Never Drink earlier",
    color: "#CD5E78",
  },
  {
    key: "Occasionally",
    title: "Occasionally Drink",
    description: "I Drink Some Special Events",
    color: "#08566E",
  },
];

export default function Step6({ formData, setFormData }) {
  const selected = formData.drink;

  const handleSelect = (drinkKey) => {
    setFormData({ ...formData, drink: drinkKey });
  };

  return (
    <div className="step6-container">
      <h2 className="step6-title">Do You Drink Alcohol</h2>
      <p className="step6-subtitle">for making strong Relationship </p>

      <div className="step6-list">
        {drink.map((drink) => (
          <div
            key={drink.key}
            className={`step6-option ${selected === drink.key ? "selected" : ""}`}
            style={{
              backgroundColor: selected === drink.key ? drink.color : "#f5f5f5",
              color: selected === drink.key ? "#fff" : "#000",
            }}
            onClick={() => handleSelect(drink.key)}
          >
            <div>
              <div
                className="step6-title-text"
                style={{ color: selected === drink.key ? "#fff" : drink.color }}
              >
                {drink.title}
              </div>
              <div className="step6-desc">{drink.description}</div>
            </div>
            <div className="step6-check">{selected === drink.key ? "✔" : "○"}</div>
          </div>
        ))}
      </div>

      <button
        className="step6-continue"
        style={{
          backgroundColor: drink.find((g) => g.key === selected)?.color || "#ccc",
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
