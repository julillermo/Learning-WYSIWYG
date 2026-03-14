import type Quill from "quill";
import type { Delta } from "quill";
import { useEffect, useRef, useState } from "react";
import * as layout from "../App.css.ts";
import { useQDelta } from "../hooks/useQDelta.ts";
import { ExternalLinkIcon, SquareCodeIcon } from "../icons/index.tsx";
import * as stylesCommon from "../style/index.ts";
import * as styles from "./EditorContainer.css.ts";
import QEditor from "./QEditor.tsx";

export function EditorContainer() {
  const { delta, setDelta } = useQDelta();
  const [liveDelta, setLiveDelta] = useState<Delta | null>(null);
  const quillEditorRef = useRef<Quill | null>(null);

  const handleTextChange = (contents: Delta) => {
    setLiveDelta(contents);
  };

  const handlePublish = () => {
    setDelta(quillEditorRef.current?.getContents() ?? null);
  };

  useEffect(() => {
    /**
     * Observe live delta state.
     *
     * The `quillEditorRef` is only really necessary when you want to use the
     *  the quill methods like `get.Contents()` externally. Otherwise, you can
     *  pass in a function that would siphon out the info handled from within.
     *
     * The contents can ge retrieved this way, without need for forwardRef.
     */
    console.log("live delta:", liveDelta);
  }, [liveDelta]);

  return (
    <section className={layout.sidePanel}>
      <div className={styles.panelHeaderContainer}>
        <h1 className={styles.panelHeaderTitle}>Quill Editor</h1>
        <div className={styles.panelHeaderContainerRight}>
          <a
            className={styles.subTextContainer}
            href="https://quilljs.com/"
            target="_blank"
          >
            <p className={stylesCommon.typography.subText}>Documentation</p>
            <div style={{ marginBottom: "-2px" }}>
              <ExternalLinkIcon size={20} />
            </div>
          </a>
          <a
            className={styles.subTextContainer}
            href="https://github.com/slab/quill"
            target="_blank"
          >
            <p className={stylesCommon.typography.subText}>GitHub</p>
            <div style={{ marginBottom: "-2px" }}>
              <ExternalLinkIcon size={20} />
            </div>
          </a>
          <a
            className={stylesCommon.container.card}
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "4px 10px",
            }}
            href="https://github.com/julillermo/Learning-WYSIWYG"
            target="_blank"
          >
            <p className={stylesCommon.typography.subText}>
              Learning-WYSIWYG Source
            </p>
            <SquareCodeIcon />
          </a>
        </div>
      </div>

      <QEditor
        ref={quillEditorRef}
        defaultValue={delta || undefined}
        onTextChange={handleTextChange}
      />
      <button className={stylesCommon.button.button} onClick={handlePublish}>
        Publish
      </button>
    </section>
  );
}
