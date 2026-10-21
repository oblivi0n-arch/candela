import type { Position } from './map'

// Everything the game needs to remember between frames.
export type GameState = {
    cols: number
    rows: number
    player: Position
    turn: number
}

export function createInitialState(): GameState {
    return {
        cols: 40,
        rows: 20,
        player: { x: 5, y: 5 },
        turn: 0
    }
}