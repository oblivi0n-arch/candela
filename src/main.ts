import './style.css'
import { createInitialState } from './game/state'
import { setupCanvas, render } from './render/render'
import { tryMove } from './game/move'
import { endTurn } from './game/turn'
import { parseMap } from './game/map'
import level1 from './levels/level-1.txt?raw'

const canvas = document.querySelector<HTMLCanvasElement>('#game')
if (!canvas) throw new Error('Canvas #game not found')

const state = createInitialState(parseMap(level1))
const ctx = setupCanvas(canvas, state)
render(ctx, state)

window.addEventListener('keydown', (event) => {
    let acted = false

    switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
            acted = tryMove(state, 0, -1)
            break
        case 'ArrowDown':
        case 'KeyS':
            acted = tryMove(state, 0, +1)
            break
        case 'ArrowLeft':
        case 'KeyA':
            acted = tryMove(state, -1, 0)
            break
        case 'ArrowRight':
        case 'KeyD':
            acted = tryMove(state, +1, 0)
            break
        case 'Space':
            acted = true // waiting is always a valid action
            break
        default:
            return // not a game key: let the browser handle it
    }

    event.preventDefault()

    if (acted) {
        endTurn(state)
        console.log('turn', state.turn)
    }

    render(ctx, state)
})