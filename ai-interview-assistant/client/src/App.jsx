import React, { useEffect, useState } from "react";
import './App.css';
import { API_URL } from "./config";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Checking backend...");

  // ✅ Backend connection test
  useEffect(() => {
    fetch(`${API_URL}/`)
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => setMessage("❌ Error: " + err.message));
  }, []);

  return (
    <>
      <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
        <h1>AI Interview Assistant</h1>
        <h2>Frontend ↔ Backend Test</h2>
        <p>Backend says: {message}</p>
      </div>

      {/* ✅ Keep the Vite + React boilerplate demo */}
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
