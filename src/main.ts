import './style.css'
import { createInitialState } from './game/state'
import { setupCanvas, render } from './render/render'

const canvas = document.querySelector<HTMLCanvasElement>('#game')
if (!canvas) throw new Error('Canvas #game not found')

const state = createInitialState()
const ctx = setupCanvas(canvas, state)
render(ctx, state)

window.addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
            state.player.y -= 1
            break
        case 'ArrowDown':
        case 'KeyS':
            state.player.y += 1
            break
        case 'ArrowLeft':
        case 'KeyA':
            state.player.x -= 1
            break
        case 'ArrowRight':
        case 'KeyD':
            state.player.x += 1
            break
        default:
            return // not a movement key: ignore it
    }

    render(ctx, state)
})