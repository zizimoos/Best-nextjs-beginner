import { useState } from "react";
import Seo from "../components/Seo";

export default function About() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Seo title="ABOUT"></Seo>
      <h1>About {count}</h1>

      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
}
