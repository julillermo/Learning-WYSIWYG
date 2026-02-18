import { EditorContainer } from "./components/EditorContainer.tsx";
import { RendererContainer } from "./components/RendererContainer.tsx";

import { Delta } from "quill";
import { useState } from "react";
import * as styles from "./App.css.ts";
import QuillApp from "./components/quill-reference/QuillApp.tsx";
import { QDeltaProvider } from "./providers/QDelta.tsx";

function App() {
  const showQuillReferenece = false; // replace boolean value as needed
  const [deltaDocument, setDeltaDocument] = useState<Delta | null>(null);

  return (
    <main className={styles.shell}>
      {showQuillReferenece ? (
        <QuillApp />
      ) : (
        <QDeltaProvider delta={deltaDocument} setDelta={setDeltaDocument}>
          <EditorContainer />
          <RendererContainer />
        </QDeltaProvider>
      )}
    </main>
  );
}

export default App;
