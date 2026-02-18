import { style } from "@vanilla-extract/css";

export const panelHeader = style({
  margin: 0,
  fontSize: "1.45rem",
  fontWeight: 600,
});

export const subText = style({
  margin: 0,
  color: "#cbd5f5",
  lineHeight: 1.6,
});

export const stackList = style({
  margin: 0,
  padding: 0,
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: "0.65rem",
});

export const stackItem = style({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  fontSize: "0.95rem",
  color: "#dbeafe",
});

export const stackBadge = style({
  padding: "0.35rem 0.85rem",
  borderRadius: "999px",
  fontSize: "0.75rem",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  fontWeight: 600,
  backgroundColor: "#2563eb",
  color: "#e0f2fe",
});
