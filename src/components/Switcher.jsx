import React, { useState } from "react";

function Switcher() {
  const [sw, setSw] = useState(false);
  const [one, setOne] = useState("hello");
  const [two, setTwo] = useState("hello again");

  return (
    <div>
      {sw ? <span>Dark</span> : <span>Light</span>}
      <br />

      <input
        type="text"
        key={sw ? "dark" : "light "}
        placeholder={sw ? one : two}
        value={sw ? one : two}
        onChange={
          sw ? (e) => setOne(e.target.value) : (e) => setTwo(e.target.value)
        }
      />
      <button onClick={() => setSw((s) => !s)}>Switch</button>
    </div>
  );
}

export default Switcher;
