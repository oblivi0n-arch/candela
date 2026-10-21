import type { GameState } from './state'

// Anything outside the map counts as wall.
export function isWall(state: GameState, x: number, y: number): boolean {
    const row = state.map.tiles[y]
    if (row === undefined) return true
    return row[x] !== 'floor'
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