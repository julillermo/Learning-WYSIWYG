import { assignInlineVars } from "@vanilla-extract/dynamic";
import Quill, { Delta } from "quill";
import "quill/dist/quill.snow.css"; // Import the styles for the Quill snow theme
import { forwardRef, useEffect, useRef } from "react";
import * as styles from "./QEditor.css";

type QEditorProps = {
  readOnly?: boolean;
  defaultValue?: Delta;
  placeholder?: string;
  showToolbar?: boolean;
  extraCSS?: {
    qEditorBorderRadiusVar?: string;
    qlToolbarBorderRadiusVar?: string;
    qlEditorBorderRadiusVar?: string;
  };
};

const QEditor = forwardRef(
  (
    {
      readOnly,
      defaultValue,
      placeholder,
      showToolbar = true,
      extraCSS,
    }: QEditorProps,
    ref: React.ForwardedRef<Quill>,
  ) => {
    const typedRef = ref as React.RefObject<Quill | null>;
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(
      function updateReadOnlyExternally() {
        if (ref) {
          typedRef.current?.enable(!readOnly);
        }
      },
      [readOnly, ref, typedRef],
    );

    useEffect(
      function setupQuill() {
        const container = containerRef.current;
        if (container === null) return;

        // hook into the DOM
        const editorContainer = container.appendChild(
          container.ownerDocument.createElement("div"),
        );

        const quill = new Quill(editorContainer, {
          theme: "snow",
          placeholder: placeholder || "Start typing here...",
          readOnly: readOnly,
          modules: {
            history: {
              delay: 1000,
              maxStack: 500,
              userOnly: true,
            },
            syntax: false, // requires https://highlightjs.org/
            toolbar: showToolbar && [
              ["bold", "italic", "underline", "strike"],
              ["blockquote", "code-block"],
              ["link", "image", "video", "formula"],

              [{ header: 1 }, { header: 2 }],
              [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
              [{ script: "sub" }, { script: "super" }],
              [{ indent: "-1" }, { indent: "+1" }],
              [{ direction: "rtl" }],

              [{ size: ["small", false, "large", "huge"] }],
              [{ header: [1, 2, 3, 4, 5, 6, false] }],

              [{ color: [] }, { background: [] }],
              [{ font: [] }],
              [{ align: [] }],

              ["clean"],
            ],
          },
        });
        if (ref) typedRef.current = quill;

        if (defaultValue) {
          quill.setContents(defaultValue);
        }

        return () => {
          if (ref) {
            typedRef.current = null;
            (ref as { current: Quill | null }).current = null;
          }
          container.innerHTML = "";
        };
      },
      [defaultValue, placeholder, readOnly, ref, showToolbar, typedRef],
    );

    return (
      <div
        ref={containerRef}
        className={styles.qEditor}
        style={assignInlineVars({
          [styles.qEditorBorderRadiusVar]:
            extraCSS?.qEditorBorderRadiusVar ?? "8px",
          [styles.qlToolbarBorderRadiusVar]:
            extraCSS?.qlToolbarBorderRadiusVar ?? "8px 8px 0px 0px",
          [styles.qlEditorBorderRadiusVar]:
            extraCSS?.qlEditorBorderRadiusVar ?? "0px 0px 8px 8px",
        })}
      ></div>
    );
  },
);

QEditor.displayName = "QEditor";

export default QEditor;
