import { describe, it, expect } from 'vitest'
import { createInitialState } from './state'
import { endTurn } from './turn'
import {parseMap} from "./map.ts";

describe('endTurn', () => {
    it('advances the turn counter by one', () => {
        const state = createInitialState(parseMap('###\n#@#\n###'))

        endTurn(state)

        expect(state.turn).toBe(1)
    })
})