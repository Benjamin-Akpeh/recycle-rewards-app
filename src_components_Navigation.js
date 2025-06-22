import React from "react";

function Navigation({ setPage, current }) {
  return (
    <nav style={{ background: "#1976d2", padding: "12px", color: "#fff" }}>
      <button
        style={{ marginRight: 10, background: current === "dashboard" ? "#1565c0" : "#1976d2", color: "#fff" }}
        onClick={() => setPage("dashboard")}
      >
        Dashboard
      </button>
      <button
        style={{ marginRight: 10, background: current === "submit" ? "#1565c0" : "#1976d2", color: "#fff" }}
        onClick={() => setPage("submit")}
      >
        Submit Item
      </button>
      <button
        style={{ background: current === "history" ? "#1565c0" : "#1976d2", color: "#fff" }}
        onClick={() => setPage("history")}
      >
        Recycle History
      </button>
    </nav>
  );
}

export default Navigation;