import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import SubmitItem from "./components/SubmitItem";
import RecycleHistory from "./components/RecycleHistory";

function App() {
  const [page, setPage] = useState("dashboard");
  const [items, setItems] = useState([]);

  const handleSubmit = (item) => {
    setItems([
      ...items,
      {
        ...item,
        id: Date.now(),
        status: "Pending",
        submittedAt: new Date().toLocaleString(),
      },
    ]);
    setPage("history");
  };

  const handleProcess = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, status: "Recycled", recycledAt: new Date().toLocaleString() } : item
      )
    );
  };

  return (
    <div>
      <Navigation setPage={setPage} current={page} />
      <div style={{ padding: "24px" }}>
        {page === "dashboard" && <Dashboard items={items} />}
        {page === "submit" && <SubmitItem onSubmit={handleSubmit} />}
        {page === "history" && <RecycleHistory items={items} onProcess={handleProcess} />}
      </div>
    </div>
  );
}

export default App;