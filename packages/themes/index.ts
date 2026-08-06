export type ThemeName = 'minimal' | 'bold' | 'classic'

export interface ThemeConfig {
  name: ThemeName
  colors: {
    primary: string
    primaryHover: string
    secondary: string
    accent: string
    background: string
    surface: string
    text: string
    textMuted: string
    border: string
    success: string
    warning: string
    error: string
  }
  fonts: {
    heading: string
    body: string
    mono: string
  }
  radius: {
    sm: string
    md: string
    lg: string
    full: string
  }
  hero: {
    height: string
    overlay: string
    textAlign: 'left' | 'center' | 'right'
  }
}

export const themes: Record<ThemeName, ThemeConfig> = {
  minimal: {
    name: 'minimal',
    colors: {
      primary: '#18181b',
      primaryHover: '#27272a',
      secondary: '#f4f4f5',
      accent: '#a1a1aa',
      background: '#ffffff',
      surface: '#fafafa',
      text: '#18181b',
      textMuted: '#71717a',
      border: '#e4e4e7',
      success: '#22c55e',
      warning: '#f59e0b',
      error: '#ef4444',
    },
    fonts: {
      heading: '"Inter", system-ui, sans-serif',
      body: '"Inter", system-ui, sans-serif',
      mono: '"JetBrains Mono", monospace',
    },
    radius: { sm: '0.25rem', md: '0.5rem', lg: '0.75rem', full: '9999px' },
    hero: { height: '80vh', overlay: 'rgba(0,0,0,0.3)', textAlign: 'center' },
  },
  bold: {
    name: 'bold',
    colors: {
      primary: '#dc2626',
      primaryHover: '#b91c1c',
      secondary: '#fef2f2',
      accent: '#f97316',
      background: '#0a0a0a',
      surface: '#171717',
      text: '#fafafa',
      textMuted: '#a3a3a3',
      border: '#262626',
      success: '#22c55e',
      warning: '#f59e0b',
      error: '#ef4444',
    },
    fonts: {
      heading: '"Bebas Neue", "Oswald", system-ui, sans-serif',
      body: '"Inter", system-ui, sans-serif',
      mono: '"JetBrains Mono", monospace',
    },
    radius: { sm: '0', md: '0', lg: '0', full: '9999px' },
    hero: { height: '100vh', overlay: 'rgba(0,0,0,0.5)', textAlign: 'left' },
  },
  classic: {
    name: 'classic',
    colors: {
      primary: '#78350f',
      primaryHover: '#92400e',
      secondary: '#fef3c7',
      accent: '#d97706',
      background: '#fffbeb',
      surface: '#fef9ee',
      text: '#292524',
      textMuted: '#78716c',
      border: '#e7e5e4',
      success: '#16a34a',
      warning: '#ca8a04',
      error: '#dc2626',
    },
    fonts: {
      heading: '"Playfair Display", "Georgia", serif',
      body: '"Source Sans 3", "Source Sans Pro", system-ui, sans-serif',
      mono: '"JetBrains Mono", monospace',
    },
    radius: { sm: '0.125rem', md: '0.375rem', lg: '0.5rem', full: '9999px' },
    hero: { height: '70vh', overlay: 'rgba(0,0,0,0.25)', textAlign: 'center' },
  },
}

export function themeToCSS(theme: ThemeConfig): string {
  return `
    --color-primary: ${theme.colors.primary};
    --color-primary-hover: ${theme.colors.primaryHover};
    --color-secondary: ${theme.colors.secondary};
    --color-accent: ${theme.colors.accent};
    --color-bg: ${theme.colors.background};
    --color-surface: ${theme.colors.surface};
    --color-text: ${theme.colors.text};
    --color-text-muted: ${theme.colors.textMuted};
    --color-border: ${theme.colors.border};
    --color-success: ${theme.colors.success};
    --color-warning: ${theme.colors.warning};
    --color-error: ${theme.colors.error};
    --font-heading: ${theme.fonts.heading};
    --font-body: ${theme.fonts.body};
    --font-mono: ${theme.fonts.mono};
    --radius-sm: ${theme.radius.sm};
    --radius-md: ${theme.radius.md};
    --radius-lg: ${theme.radius.lg};
    --radius-full: ${theme.radius.full};
    --hero-height: ${theme.hero.height};
    --hero-overlay: ${theme.hero.overlay};
  `.trim()
}
