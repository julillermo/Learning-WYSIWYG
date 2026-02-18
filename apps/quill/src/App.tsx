import { EditorContainer } from "./components/EditorContainer.tsx";
import { Renderer } from "./components/Renderer.tsx";

import * as styles from "./App.css.ts";
import QuillApp from "./components/quill-reference/QuillApp.tsx";

function App() {
  const showQuillReferenece = false; // change as needed
  return (
    <main className={styles.shell}>
      {showQuillReferenece ? (
        <QuillApp />
      ) : (
        <>
          <EditorContainer />
          <Renderer />
        </>
      )}
    </main>
  );
}

export default App;
