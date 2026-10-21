import { describe, it, expect } from 'vitest'
import { createInitialState } from './state'
import { endTurn } from './turn'

describe('endTurn', () => {
    it('advances the turn counter by one', () => {
        const state = createInitialState()

        endTurn(state)

        expect(state.turn).toBe(1)
    })
})