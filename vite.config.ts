import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Bundle the whole game (JS, CSS, levels) into a single index.html.
export default defineConfig({
    plugins: [viteSingleFile()],
})