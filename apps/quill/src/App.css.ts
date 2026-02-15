import { globalStyle, style } from "@vanilla-extract/css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("body", {
  margin: 0,
});

globalStyle("#root", {
  minHeight: "100vh",
  width: "100vw",
  margin: 0,
  fontFamily: "Inter, system-ui, sans-serif",
  backgroundColor: "#020617",
  color: "#e2e8f0",
});

export const shell = style({
  width: "100%",
  minHeight: "100vh",
  borderRadius: "0",
  background: "#0f172a",
  padding: "1.5rem",
  display: "flex",
  gap: "1.5rem",
  boxShadow: "0 20px 60px rgba(2, 6, 23, 0.65)",
  border: "none",
});
