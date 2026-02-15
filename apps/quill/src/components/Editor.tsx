import * as styles from "./Editor.css";

export function Editor() {
  return (
    <section>
      <h1 className={styles.panelHeader}>Left Component</h1>
      <p className={styles.subText}>
        This column highlights controls and reference notes for the editor
        experiment. Keep ideas or quick checklists here as you iterate on the
        toolkit.
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
    </section>
  );
}
