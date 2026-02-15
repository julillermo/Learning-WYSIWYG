import { useState } from "react";
import * as layout from "../App.css.ts";
import * as styles from "./Renderer.css.ts";

export function Renderer() {
  const [count, setCount] = useState(0);

  return (
    <section className={layout.mainPanel}>
      <h2 className={styles.panelHeader}>Right Component</h2>
      <p className={styles.subText}>
        This space is for the living canvas or editor itself. Use it to
        prototype a rich surface, preview layouts, or test interactions.
      </p>
      <div className={styles.card}>
        <p>Count how many drafts you create while iterating.</p>
        <button
          type="button"
          className={styles.button}
          onClick={() => setCount((value) => value + 1)}
        >
          Draft count: {count}
        </button>
      </div>
    </section>
  );
}
