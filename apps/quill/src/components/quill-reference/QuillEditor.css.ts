import { globalStyle, style } from "@vanilla-extract/css";

export const quillEditor = style({
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  flex: 1,
  minHeight: 0,
  height: "100%",
});

globalStyle(".ql-toolbar", {
  backgroundColor: "#ffffff",
  borderRadius: "8px 8px 0 0",
});

globalStyle(".ql-container", {
  backgroundColor: "#ffffff",
  borderRadius: "0 0 8px 8px",
  display: "flex",
  flexDirection: "column",
  flex: 1,
  color: "black",
  minHeight: 0,
});

globalStyle(".ql-container .ql-editor", {
  flex: 1,
  minHeight: 0,
});
