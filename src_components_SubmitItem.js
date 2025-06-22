import React, { useState } from "react";

const types = ["Plastic", "Metal", "Glass", "Paper", "Electronics"];

function SubmitItem({ onSubmit }) {
  const [name, setName] = useState("");
  const [type, setType] = useState(types[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;
    onSubmit({ name, type });
    setName("");
    setType(types[0]);
  };

  return (
    <div>
      <h2>Submit Item for Recycling</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Item Name:{" "}
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g., Water Bottle" />
          </label>
        </div>
        <div style={{ marginTop: 10 }}>
          <label>
            Type:{" "}
            <select value={type} onChange={(e) => setType(e.target.value)}>
              {types.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
        </div>
        <button style={{ marginTop: 20 }} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SubmitItem;