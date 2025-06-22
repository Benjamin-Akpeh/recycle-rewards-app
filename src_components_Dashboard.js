import React from "react";

function Dashboard({ items }) {
  const recycled = items.filter((item) => item.status === "Recycled").length;
  const pending = items.filter((item) => item.status === "Pending").length;

  return (
    <div>
      <h2>Welcome to Recycle App Simulation</h2>
      <div style={{ marginTop: 20 }}>
        <h3>Statistics</h3>
        <ul>
          <li>Total Items Submitted: {items.length}</li>
          <li>Recycled: {recycled}</li>
          <li>Pending: {pending}</li>
        </ul>
      </div>
      <div style={{ marginTop: 32 }}>
        <h4>About</h4>
        <p>
          This simulation lets you experience how a recycling app could work. Submit items, track their recycling status, and see your impact!
        </p>
      </div>
    </div>
  );
}

export default Dashboard;