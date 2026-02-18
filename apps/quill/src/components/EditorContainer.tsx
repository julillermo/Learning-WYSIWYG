import type Quill from "quill";
import { useRef } from "react";
import * as layout from "../App.css.ts";
import QuillEditor from "./quill-reference/QuillEditor.tsx";
// import * as styles from "./EditorContainer.css.ts";

export function EditorContainer() {
  // const [readOnly, setReadOnly] = useState(false);
  const quillEditorRef = useRef<Quill | null>(null);

  return (
    <section className={layout.sidePanel}>
      <QuillEditor
        ref={quillEditorRef}
        // readOnly={readOnly}
        // defaultValue={new Delta().insert("Start typeing here...\n")}
        // onTextChange={function (
        //   value: SetStateAction<Delta | undefined>,
        // ): void {
        //   throw new Error("Function not implemented.");
        // }}
        // onSelectionChange={function (
        //   value: SetStateAction<Range | undefined>,
        // ): void {
        //   throw new Error("Function not implemented.");
        // }}
      />
      <button>Publish</button>
    </section>
  );
}
