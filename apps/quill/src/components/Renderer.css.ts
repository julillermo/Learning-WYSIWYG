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

export const card = style({
  padding: "1.25rem",
  borderRadius: "14px",
  border: "1px solid rgba(148, 163, 184, 0.4)",
  backgroundColor: "rgba(148, 163, 184, 0.08)",
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
});

export const button = style({
  alignSelf: "flex-start",
  borderRadius: "10px",
  border: "none",
  padding: "0.65rem 1.4rem",
  fontSize: "0.95rem",
  fontWeight: 600,
  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
  color: "#fff",
  cursor: "pointer",
  transition: "transform 160ms ease, box-shadow 160ms ease",
  selectors: {
    "&:hover": {
      transform: "translateY(-1px)",
      boxShadow: "0 10px 20px rgba(99, 102, 241, 0.35)",
    },
    "&:active": {
      transform: "translateY(1px)",
    },
  },
});
