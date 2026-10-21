import './style.css'
import { createInitialState } from './game/state'
import { setupCanvas, render } from './render/render'
import { tryMove } from './game/move'

const canvas = document.querySelector<HTMLCanvasElement>('#game')
if (!canvas) throw new Error('Canvas #game not found')

const state = createInitialState()
const ctx = setupCanvas(canvas, state)
render(ctx, state)

window.addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
            tryMove(state, 0, -1)
            break
        case 'ArrowDown':
        case 'KeyS':
            tryMove(state, 0, +1)
            break
        case 'ArrowLeft':
        case 'KeyA':
            tryMove(state, -1, 0)
            break
        case 'ArrowRight':
        case 'KeyD':
            tryMove(state, +1, 0)
            break
        default:
            return // not a movement key: ignore it
    }

    render(ctx, state)
})