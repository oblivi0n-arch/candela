import type { GameMap, Position } from './map'

// Everything the game needs to remember between frames.
export type GameState = {
    map: GameMap
    player: Position
    turn: number
}

export function createInitialState(map: GameMap): GameState {
    return {
        map,
        player: { ...map.start }, // a copy, so moving the player never touches the map
        turn: 0,
    }
}