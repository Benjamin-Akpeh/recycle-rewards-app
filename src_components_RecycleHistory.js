import React from "react";

function RecycleHistory({ items, onProcess }) {
  return (
    <div>
      <h2>Recycle History</h2>
      {items.length === 0 && <p>No items submitted yet.</p>}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Type</th>
            <th>Status</th>
            <th>Submitted At</th>
            <th>Recycled At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} style={{ background: item.status === "Recycled" ? "#e8f5e9" : "#fff" }}>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.status}</td>
              <td>{item.submittedAt}</td>
              <td>{item.recycledAt || "-"}</td>
              <td>
                {item.status === "Pending" && (
                  <button onClick={() => onProcess(item.id)}>Simulate Recycle</button>
                )}
                {item.status === "Recycled" && "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecycleHistory;