export type Tile = 'wall' | 'floor'

export type GameMap = {
    cols: number
    rows: number
    tiles: Tile[][] // tiles[y][x]: rows first, then columns
}

// Turns a level drawn as text into a grid of tiles.
export function parseMap(text: string): GameMap {
    const lines = text.trim().split('\n')
    const cols = lines[0].length

    lines.forEach((line, y) => {
        if (line.length !== cols) {
            throw new Error(`Map line ${y + 1} has ${line.length} chars, expected ${cols}`)
        }
    })

    const tiles = lines.map((line) => [...line].map((char) => (char === '#' ? 'wall' : 'floor')))

    return { cols, rows: lines.length, tiles }
}