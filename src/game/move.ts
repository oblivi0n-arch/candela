import type { GameState } from './state'

// For now the map is an empty room: everything on or past the border is wall.
export function isWall(state: GameState, x: number, y: number): boolean {
    return x <= 0 || y <= 0 || x >= state.cols - 1 || y >= state.rows - 1
}

// Moves the player by (dx, dy) unless a wall is in the way.
// Returns true if the player actually moved.
export function tryMove(state: GameState, dx: number, dy: number): boolean {
    const x = state.player.x + dx
    const y = state.player.y + dy
    if (isWall(state, x, y)) return false
    state.player = { x, y }
    return true
}