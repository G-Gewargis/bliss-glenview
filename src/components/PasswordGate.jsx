import { useState } from "react";

const CORRECT_PASSWORD = import.meta.env.VITE_SITE_PASSWORD;

export default function PasswordGate({ children }) {
  const [entered, setEntered] = useState(false);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === CORRECT_PASSWORD) {
      setEntered(true);
    } else {
      alert("Wrong password");
    }
  };

  if (entered) return children;

  return (
    <div style={{ textAlign: "center", marginTop: "20vh" }}>
      <h2>🔒 Site in Preview Mode</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" style={{ marginLeft: "10px" }}>Enter</button>
      </form>
    </div>
  );
}
