"use client";
import "./step4.css";

const modes = [
  {
    key: "date",
    title: "Romance/Dating",
    description: "Find that spark in an empowered community",
    color: "#6D073A",
  },
  {
    key: "bff",
    title: "FriendShip",
    description: "Make new friends at every stage of your life",
    color: "#5A1A32",
  },
  {
    key: "bizz",
    title: "Bizz",
    description: "Move your career forward the modern way",
    color: "#4D376D",
  },
];

export default function Step4({ formData, setFormData }) {
  const selected = formData.mode;

  const handleSelect = (modeKey) => {
    setFormData({ ...formData, mode: modeKey });
  };

  return (
    <div className="mode-container">
      <h2 className="mode-title">Choose a mode to get started</h2>
      <p className="mode-subtitle">
        For making all kinds of connections! You ll be able to switch modes once you're all set up.
      </p>

      <div className="mode-list">
        {modes.map((mode) => (
          <div
            key={mode.key}
            className={`mode-option ${selected === mode.key ? "selected" : ""}`}
            style={{
              backgroundColor: selected === mode.key ? mode.color : "#f5f5f5",
              color: selected === mode.key ? "#fff" : "#000",
            }}
            onClick={() => handleSelect(mode.key)}
          >
            <div>
              <div
                className="mode-title-text"
                style={{ color: selected === mode.key ? "#fff" : mode.color }}
              >
                {mode.title}
              </div>
              <div className="mode-desc">{mode.description}</div>
            </div>
            <div className="mode-check">
              {selected === mode.key ? "✔" : "○"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
