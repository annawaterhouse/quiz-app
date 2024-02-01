import { useState } from "react";
export default function Switch() {
    const [mode, setMode] = useState(false);
  return (
    <section>
        <h1>Switch</h1>
        <button onClick={()=>{setMode(!mode)}}>mode switch</button>
    </section>
  );
}