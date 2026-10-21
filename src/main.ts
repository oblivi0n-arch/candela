import './style.css'
import { createInitialState } from './game/state'
import { setupCanvas, render } from './render/render'

const canvas = document.querySelector<HTMLCanvasElement>('#game')
if (!canvas) throw new Error('Canvas #game not found')

const state = createInitialState()
const ctx = setupCanvas(canvas, state)
render(ctx, state)
