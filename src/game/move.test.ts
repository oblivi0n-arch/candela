import { describe, it, expect } from 'vitest'
import { createInitialState } from './state'
import { tryMove } from './move'

describe('tryMove', () => {
    it('moves the player onto a free cell', () => {
        // Given: player in the middle of the room
        const state = createInitialState()
        state.player = { x: 5, y: 5 }

        // When: moving right
        const moved = tryMove(state, 1, 0)

        // Then: player is one cell to the right
        expect(moved).toBe(true)
        expect(state.player).toEqual({ x: 6, y: 5 })
    })

    it('does not move the player into a wall', () => {
        // Given: player right next to the left wall
        const state = createInitialState()
        state.player = { x: 1, y: 5 }

        // When: moving left, into the wall
        const moved = tryMove(state, -1, 0)

        // Then: player stays where it was
        expect(moved).toBe(false)
        expect(state.player).toEqual({ x: 1, y: 5 })
    })
})