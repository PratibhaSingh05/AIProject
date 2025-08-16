import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { API_URL } from "./config";

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("Checking backend...");

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
            <p>Backend says: {message}</p> {/* ✅ Added here */}
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
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
  )
}

export default App
