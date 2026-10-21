import { describe, it, expect } from 'vitest'
import { parseMap } from './map'

describe('parseMap', () => {
    it('reads size and tiles from text', () => {
        const map = parseMap(`
###
#@#
###
`)

        expect(map.cols).toBe(3)
        expect(map.rows).toBe(3)
        expect(map.tiles[0][0]).toBe('wall')
        expect(map.tiles[1][1]).toBe('floor')
    })

    it('rejects lines of different length', () => {
        expect(() => parseMap('###\n##')).toThrow()
    })

    it('finds the player start', () => {
        const map = parseMap(`
###
#@#
###
`)

        expect(map.start).toEqual({ x: 1, y: 1 })
    })

    it('rejects a map without a start', () => {
        expect(() => parseMap('###\n#.#\n###')).toThrow()
    })

    it('rejects a map with two starts', () => {
        expect(() => parseMap('#@@#')).toThrow()
    })
})