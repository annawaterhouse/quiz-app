import { useState } from "react";
export default function Switch() {
  const [mode, setMode] = useState(false);
  return (
    <section>
      <label htmlFor="switch">
        <span>Learn</span>
        <input
          type="checkbox"
          id="switch"
          checked={mode}
          onChange={() => setMode(!mode)} />
        <span>Quiz</span>
      </label>
    </section>
  );
}
