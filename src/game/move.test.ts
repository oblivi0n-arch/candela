import { describe, it, expect } from 'vitest'
import { createInitialState } from './state'
import { tryMove } from './move'

describe('tryMove', () => {
    it('moves the player onto a free cell', () => {
        // Given: player in the middle of the room
        const state = createInitialState()
        state.player = { x: 5, y: 5 }

        // When: moving right
        tryMove(state, 1, 0)

        // Then: player is one cell to the right
        expect(state.player).toEqual({ x: 6, y: 5 })
        expect(tryMove(state, 1, 0)).toBe(true)
    })

    it('does not move the player into a wall', () => {
        const state = createInitialState()
        state.player = { x: 1, y: 5 } // right next to the left wall

        tryMove(state, -1, 0)

        expect(state.player).toEqual({ x: 1, y: 5 })
        expect(tryMove(state, -1, 0)).toBe(false)
    })
})