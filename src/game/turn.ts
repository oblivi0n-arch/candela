import type { GameState } from './state'

// Everything that happens after the player has acted.
// Later: enemies move, VIGOR regenerates, candles burn.
export function endTurn(state: GameState): void {
    state.turn += 1
}