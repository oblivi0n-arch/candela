// A cell on the grid. (0, 0) is the top-left corner.
export type Position = { x: number; y: number }

export type Tile = 'wall' | 'floor'

export type GameMap = {
    cols: number
    rows: number
    tiles: Tile[][] // tiles[y][x]: rows first, then columns
    start: Position // where the player begins, marked with @
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

    let start: Position | undefined

    const tiles = lines.map((line, y) =>
        [...line].map((char, x): Tile => {
            if (char === '@') {
                if (start) throw new Error(`Map has a second start (@) on line ${y + 1}`)
                start = { x, y }
                return 'floor' // the player stands on floor
            }
            return char === '#' ? 'wall' : 'floor'
        }),
    )

    if (!start) throw new Error('Map has no start (@)')

    return { cols, rows: lines.length, tiles, start }
}

// Anything outside the map counts as wall.
export function isWall(map: GameMap, x: number, y: number): boolean {
    const row = map.tiles[y]
    if (row === undefined) return true
    return row[x] !== 'floor'
}
