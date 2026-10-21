import './style.css'

// Grid size in cells and the size of one cell in CSS pixels.
const COLS = 40
const ROWS = 20
const CELL = 20

const canvas = document.querySelector<HTMLCanvasElement>('#game')
if (!canvas) throw new Error('Canvas #game not found')

const ctx = canvas.getContext('2d')
if (!ctx) throw new Error('2D context not available')

// Render at the screen's real pixel density so letters stay sharp on Retina.
const dpr = window.devicePixelRatio || 1
canvas.width = COLS * CELL * dpr
canvas.height = ROWS * CELL * dpr
canvas.style.width = `${COLS * CELL}px`
canvas.style.height = `${ROWS * CELL}px`
ctx.scale(dpr, dpr)

ctx.font = `${CELL * 0.8}px ui-monospace, Menlo, monospace`
ctx.textAlign = 'center'
ctx.textBaseline = 'middle'

function drawGlyph(char: string, x: number, y: number, color: string): void {
    ctx!.fillStyle = color
    ctx!.fillText(char, x * CELL + CELL / 2, y * CELL + CELL / 2)
}

for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
        const isWall = x === 0 || y === 0 || x === COLS - 1 || y === ROWS - 1
        drawGlyph(isWall ? '#' : '.', x, y, isWall ? '#8a8a8a' : '#2e2e2e')
    }
}

drawGlyph('@', 5, 5, '#f0e6d2')