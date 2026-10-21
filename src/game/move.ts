import type { GameState } from './state'
import { isWall } from './map'

// Moves the player by (dx, dy) unless a wall is in the way.
// Returns true if the player actually moved.
export function tryMove(state: GameState, dx: number, dy: number): boolean {
    const x = state.player.x + dx
    const y = state.player.y + dy
    if (isWall(state.map, x, y)) return false
    state.player = { x, y }
    return true
}
