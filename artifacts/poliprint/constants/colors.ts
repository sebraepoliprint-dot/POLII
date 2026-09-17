/**
 * Semantic design tokens for the mobile app.
 *
 * These tokens mirror the naming conventions used in web artifacts (index.css)
 * so that multi-artifact projects share a cohesive visual identity.
 *
 * Replace the placeholder values below with values that match the project's
 * brand. If a sibling web artifact exists, read its index.css and convert the
 * HSL values to hex so both artifacts use the same palette.
 *
 * To add dark mode, add a `dark` key with the same token names.
 * The useColors() hook will automatically pick it up.
 */

const colors = {
  light: {
    // Legacy aliases (kept for backward compatibility)
    text: '#0a0a0a',
    tint: '#0072ff',

    // Core surfaces
    background: '#f4f6f9',
    foreground: '#0a0a0a',

    // Cards / elevated surfaces
    card: '#ffffff',
    cardForeground: '#0a0a0a',

    // Primary action color (buttons, links, active states)
    primary: '#0072ff',
    primaryForeground: '#ffffff',

    // Secondary / less-emphasis interactive surfaces
    secondary: '#e8f4fd',
    secondaryForeground: '#1a1a1a',

    // Muted / subdued elements (dividers, timestamps, placeholders)
    muted: '#eaf0f6',
    mutedForeground: '#737373',

    // Accent highlights (badges, selected items, focus rings)
    accent: '#ffd700',
    accentForeground: '#1a1a1a',

    // Destructive actions (delete, error states)
    destructive: '#d93025',
    destructiveForeground: '#ffffff',

    // Borders and input outlines
    border: '#e5e5e5',
    input: '#e5e5e5',
  },

  // Border radius (in px). Sync from the sibling web artifact's --radius
  // CSS variable. This value applies to cards, buttons, inputs, and modals.
  radius: 8,
};

export default colors;
