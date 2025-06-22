import React, { useState, useEffect } from "react";

const rewardRates = {
  plastic: 0.5,
  paper: 0.2,
  metal: 1.0,
  glass: 0.3,
};

function getInitialUser(username) {
  return (
    JSON.parse(localStorage.getItem(`user:${username}`)) || {
      username,
      totalRewards: 0,
      history: [],
    }
  );
}

function saveUser(user) {
  localStorage.setItem(`user:${user.username}`, JSON.stringify(user));
}

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [wasteType, setWasteType] = useState("plastic");
  const [weight, setWeight] = useState("");
  const [reward, setReward] = useState(null);

  useEffect(() => {
    if (user) saveUser(user);
  }, [user]);

  const handleLogin = (e) => {
    e.preventDefault();
    const loadedUser = getInitialUser(username);
    setUser(loadedUser);
    setReward(null);
  };

  const handleDropoff = (e) => {
    e.preventDefault();
    const w = parseFloat(weight);
    if (!rewardRates[wasteType] || isNaN(w) || w <= 0) return;
    const earned = rewardRates[wasteType] * w;
    const newRecord = {
      type: wasteType,
      weight: w,
      reward: earned,
      date: new Date().toISOString(),
    };
    const updatedUser = {
      ...user,
      totalRewards: user.totalRewards + earned,
      history: [...user.history, newRecord],
    };
    setUser(updatedUser);
    setReward(earned);
    setWeight("");
  };

  if (!user) {
    return (
      <div style={{ margin: 40 }}>
        <h2>Recycling Rewards App</h2>
        <form onSubmit={handleLogin}>
          <input
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p style={{ color: "#666", marginTop: 16 }}>
          Your data is stored only in your browser.
        </p>
      </div>
    );
  }

  return (
    <div style={{ margin: 40, maxWidth: 500 }}>
      <h2>Welcome, {user.username}!</h2>
      <h3>Total Rewards: ${user.totalRewards.toFixed(2)}</h3>

      <form onSubmit={handleDropoff} style={{ marginBottom: 20 }}>
        <label>
          Waste Type:&nbsp;
          <select
            value={wasteType}
            onChange={(e) => setWasteType(e.target.value)}
          >
            <option value="plastic">Plastic</option>
            <option value="paper">Paper</option>
            <option value="metal">Metal</option>
            <option value="glass">Glass</option>
          </select>
        </label>
        <br />
        <label>
          Weight (kg):&nbsp;
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit" style={{ marginTop: 10 }}>
          Drop Off
        </button>
      </form>
      {reward !== null && (
        <div style={{ color: "green", marginBottom: 20 }}>
          Reward for this drop-off: ${reward.toFixed(2)}
        </div>
      )}
      <h4>Your Drop-off History:</h4>
      <ul>
        {user.history
          .slice()
          .reverse()
          .map((rec, i) => (
            <li key={i}>
              [{new Date(rec.date).toLocaleString()}] {rec.weight}kg {rec.type} — Reward: ${rec.reward.toFixed(2)}
            </li>
          ))}
      </ul>
      <button
        onClick={() => {
          setUser(null);
          setUsername("");
        }}
        style={{ marginTop: 20 }}
      >
        Logout
      </button>
    </div>
  );
}

export default App;