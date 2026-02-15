import { globalStyle, style } from '@vanilla-extract/css'

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

globalStyle('body', {
  margin: 0,
})

globalStyle('#root', {
  minHeight: '100vh',
  width: '100vw',
  margin: 0,
  fontFamily: 'Inter, system-ui, sans-serif',
  backgroundColor: '#020617',
  color: '#e2e8f0',
})

export const shell = style({
  width: '100%',
  minHeight: '100vh',
  borderRadius: '0',
  background: '#0f172a',
  padding: '1.5rem',
  display: 'flex',
  gap: '1.5rem',
  boxShadow: '0 20px 60px rgba(2, 6, 23, 0.65)',
  border: 'none',
})

export const sidePanel = style({
  borderRadius: '16px',
  padding: '1.25rem',
  background: 'linear-gradient(180deg, #1e293b, #111827)',
  border: '1px solid rgba(226, 232, 240, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  flex: 1,
  minWidth: 0,
})

export const mainPanel = style({
  borderRadius: '16px',
  padding: '1.5rem',
  background: '#020617',
  border: '1px solid rgba(148, 163, 184, 0.3)',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
  flex: 1,
  minWidth: 0,
})

export const panelHeader = style({
  margin: 0,
  fontSize: '1.45rem',
  fontWeight: 600,
})

export const subText = style({
  margin: 0,
  color: '#cbd5f5',
  lineHeight: 1.6,
})

export const stackList = style({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.65rem',
})

export const stackItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  fontSize: '0.95rem',
  color: '#dbeafe',
})

export const stackBadge = style({
  padding: '0.35rem 0.85rem',
  borderRadius: '999px',
  fontSize: '0.75rem',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
  fontWeight: 600,
  backgroundColor: '#2563eb',
  color: '#e0f2fe',
})

export const card = style({
  padding: '1.25rem',
  borderRadius: '14px',
  border: '1px solid rgba(148, 163, 184, 0.4)',
  backgroundColor: 'rgba(148, 163, 184, 0.08)',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
})

export const button = style({
  alignSelf: 'flex-start',
  borderRadius: '10px',
  border: 'none',
  padding: '0.65rem 1.4rem',
  fontSize: '0.95rem',
  fontWeight: 600,
  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
  color: '#fff',
  cursor: 'pointer',
  transition: 'transform 160ms ease, box-shadow 160ms ease',
  selectors: {
    '&:hover': {
      transform: 'translateY(-1px)',
      boxShadow: '0 10px 20px rgba(99, 102, 241, 0.35)',
    },
    '&:active': {
      transform: 'translateY(1px)',
    },
  },
})
