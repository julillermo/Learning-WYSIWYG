import Quill, { Delta } from "quill";
import { forwardRef, useEffect, useRef } from "react";

type QEditorProps = {
  readOnly?: boolean;
  defaultValue?: Delta;
  placeholder?: string;
};

const QEditor = forwardRef(
  (
    { readOnly, defaultValue, placeholder }: QEditorProps,
    ref: React.ForwardedRef<Quill>,
  ) => {
    const typedRef = ref as React.RefObject<Quill | null>;
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(
      function updateReadOnlyExternally() {
        typedRef.current?.enable(!readOnly);
      },
      [readOnly, typedRef],
    );

    useEffect(
      function setupQuill() {
        const container = containerRef.current;
        if (container === null) return;

        const quill = new Quill(container, {
          theme: "snow",
          placeholder: placeholder || "Start typing here...",
          modules: {
            history: {
              delay: 1000,
              maxStack: 500,
              userOnly: true,
            },
            syntax: false, // requires https://highlightjs.org/
            toolbar: [
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

        if (defaultValue) {
          quill.setContents(defaultValue);
        }

        return () => {
          typedRef.current = null;
          (ref as { current: Quill | null }).current = null;
          container.innerHTML = "";
        };
      },
      [defaultValue, placeholder, ref, typedRef],
    );

    return <div ref={containerRef}></div>;
  },
);

QEditor.displayName = "QEditor";

export default QEditor;
