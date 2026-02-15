import { useState } from 'react'
import * as styles from './App.css.ts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className={styles.shell}>
      <aside className={styles.sidePanel}>
        <h1 className={styles.panelHeader}>Left Component</h1>
        <p className={styles.subText}>
          This column highlights controls and reference notes for the editor experiment.
          Keep ideas or quick checklists here as you iterate on the toolkit.
        </p>
        <ul className={styles.stackList}>
          <li className={styles.stackItem}>
            <span className={styles.stackBadge}>Idea</span>
            Wireframe the new toolbar layout
          </li>
          <li className={styles.stackItem}>
            <span className={styles.stackBadge}>Note</span>
            Track keystroke shortcuts and interactions
          </li>
          <li className={styles.stackItem}>
            <span className={styles.stackBadge}>Todo</span>
            Capture visual styles for both panes
          </li>
        </ul>
      </aside>
      <section className={styles.mainPanel}>
        <h2 className={styles.panelHeader}>Right Component</h2>
        <p className={styles.subText}>
          This space is for the living canvas or editor itself. Use it to prototype a
          rich surface, preview layouts, or test interactions.
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
    </main>
  )
}

export default App
