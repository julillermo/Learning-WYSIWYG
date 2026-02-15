import * as styles from "./App.css.ts";
import { Editor } from "./components/Editor.tsx";
import { Renderer } from "./components/Renderer.tsx";

function App() {
  return (
    <main className={styles.shell}>
      <Editor />
      <Renderer />
    </main>
  );
}

export default App;
