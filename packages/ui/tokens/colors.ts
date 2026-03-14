import './colors.css';


// === Purple Gray atomic tokens (NEW) ===
export const pg = {
  50: 'var(--pg-50)',
  100: 'var(--pg-100)',
  200: 'var(--pg-200)',
  300: 'var(--pg-300)',
  400: 'var(--pg-400)',
  500: 'var(--pg-500)',
  600: 'var(--pg-600)',
  700: 'var(--pg-700)',
  800: 'var(--pg-800)',
  900: 'var(--pg-900)',
  primary: 'var(--pg-primary)',
  primaryHover: 'var(--pg-primary-hover)',
} as const;

// === Semantic color tokens (NEW) ===
export const semantic = {
  heading: 'var(--color-heading)',
  body: 'var(--color-body)',
  secondary: 'var(--color-secondary)',
  primary: 'var(--color-primary)',
  primaryHover: 'var(--color-primary-hover)',
  background: 'var(--color-background)',
  surface: 'var(--color-surface)',
  border: 'var(--color-border)',
} as const;
