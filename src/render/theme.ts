// The single place for the game's look: palette, fonts and grid size.
// Change a value here and both the canvas and the page follow.

// Base palette (from mechanika.md).
export const PALETTE = {
    ink: '#08080a', // background
    paper: '#ece8df', // text and glyphs
    gold: '#d6ae55', // highlights, the seam
    danger: '#c8574a', // threats, attack warnings
} as const

// What each thing on the board is drawn with.
// Eight-digit hex adds transparency: the last two digits are the alpha.
export const COLORS = {
    background: PALETTE.ink,
    wall: `${PALETTE.paper}8c`, // paper at ~55%
    floor: `${PALETTE.paper}26`, // paper at ~15%
    player: PALETTE.paper,
} as const

export const FONTS = {
    // IBM Plex Mono and EB Garamond are planned (ADR-035); system fonts until then.
    grid: 'ui-monospace, Menlo, monospace',
} as const

// Size of one grid cell in CSS pixels.
export const CELL = 20

// Copies the palette into CSS variables (--color-ink, --color-paper, ...)
// so the page around the canvas uses exactly the same colors.
export function applyThemeToPage(): void {
    const root = document.documentElement
    for (const [name, value] of Object.entries(PALETTE)) {
        root.style.setProperty(`--color-${name}`, value)
    }
}
