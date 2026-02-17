import Quill, { Delta, Range } from "quill";
import "quill/dist/quill.snow.css"; // Import the styles for the Quill snow theme
import { forwardRef, useEffect, useLayoutEffect, useRef } from "react";

type QuillEditorProps = {
  readOnly: boolean;
  defaultValue: Delta;
  onTextChange: React.Dispatch<React.SetStateAction<Delta | undefined>>;
  onSelectionChange: React.Dispatch<React.SetStateAction<Range | undefined>>;
};

// Editor is an uncontrolled React component
const QuillEditor = forwardRef(
  (
    {
      readOnly,
      defaultValue,
      onTextChange,
      onSelectionChange,
    }: QuillEditorProps,
    ref: React.ForwardedRef<Quill>,
  ) => {
    const typedRef = ref as React.RefObject<Quill>;
    const containerRef = useRef<HTMLDivElement>(null);
    const defaultValueRef = useRef(defaultValue);
    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);

    useLayoutEffect(() => {
      onTextChangeRef.current = onTextChange;
      onSelectionChangeRef.current = onSelectionChange;
    });

    useEffect(() => {
      typedRef.current?.enable(!readOnly);
    }, [ref, readOnly, typedRef]);

    useEffect(() => {
      const container = containerRef.current;
      if (container !== null) {
        const editorContainer = container.appendChild(
          container.ownerDocument.createElement("div"),
        );
        const quill = new Quill(editorContainer, {
          modules: {
            history: {
              delay: 1000,
              maxStack: 500,
              userOnly: true,
            },
            syntax: false,
            toolbar: [
              ["bold", "italic", "underline", "strike"], // toggled buttons
              ["blockquote", "code-block"],
              ["link", "image", "video", "formula"],

              [{ header: 1 }, { header: 2 }], // custom button values
              [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
              [{ script: "sub" }, { script: "super" }], // superscript/subscript
              [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
              [{ direction: "rtl" }], // text direction

              [{ size: ["small", false, "large", "huge"] }], // custom dropdown
              [{ header: [1, 2, 3, 4, 5, 6, false] }],

              [{ color: [] }, { background: [] }], // dropdown with defaults from theme
              [{ font: [] }],
              [{ align: [] }],

              ["clean"], // remove formatting button
            ],
          },
          placeholder: "Compose an epic...",
          theme: "snow",
        });

        typedRef.current = quill;

        if (defaultValueRef.current) {
          quill.setContents(defaultValueRef.current);
        }

        quill.on(Quill.events.TEXT_CHANGE, (delta) => {
          onTextChangeRef.current?.(delta);
        });

        quill.on(Quill.events.SELECTION_CHANGE, (args) => {
          onSelectionChangeRef.current?.(args);
        });

        return () => {
          (ref as { current: Quill | null }).current = null;
          container.innerHTML = "";
        };
      }
    }, [ref, typedRef]);
    return <div ref={containerRef}></div>;
  },
);

QuillEditor.displayName = "QuillEditor";

export default QuillEditor;
