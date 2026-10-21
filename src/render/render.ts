import type { GameState } from '../game/state'
import { isWall } from '../game/map'
import { CELL, COLORS, FONTS } from './theme'

// Prepares the canvas once: size, pixel density and text settings.
export function setupCanvas(canvas: HTMLCanvasElement, state: GameState): CanvasRenderingContext2D {
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('2D context not available')

    const dpr = window.devicePixelRatio || 1
    canvas.width = state.map.cols * CELL * dpr
    canvas.height = state.map.rows * CELL * dpr
    canvas.style.width = `${state.map.cols * CELL}px`
    canvas.style.height = `${state.map.rows * CELL}px`
    ctx.scale(dpr, dpr)

    ctx.font = `${CELL * 0.8}px ${FONTS.grid}`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    return ctx
}

// Paints the whole frame from scratch, based only on the state.
export function render(ctx: CanvasRenderingContext2D, state: GameState): void {
    ctx.fillStyle = COLORS.background
    ctx.fillRect(0, 0, state.map.cols * CELL, state.map.rows * CELL)

    for (let y = 0; y < state.map.rows; y++) {
        for (let x = 0; x < state.map.cols; x++) {
            const wall = isWall(state.map, x, y)
            drawGlyph(ctx, wall ? '#' : '.', x, y, wall ? COLORS.wall : COLORS.floor)
        }
    }

    drawGlyph(ctx, '@', state.player.x, state.player.y, COLORS.player)
}

function drawGlyph(ctx: CanvasRenderingContext2D, char: string, x: number, y: number, color: string): void {
    ctx.fillStyle = color
    ctx.fillText(char, x * CELL + CELL / 2, y * CELL + CELL / 2)
}