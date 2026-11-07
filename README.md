# Candela

> **Status: paused**. I may come back to it, or I may not.

A turn-based game in the browser, drawn as a grid of letters on a canvas. *Candela* is Latin for a candle.

**Play the current build:** [oblivi0n-arch.github.io/candela](https://oblivi0n-arch.github.io/candela/)

## Where it stopped (v0.1.0)

- One level, loaded from a plain text file (`#` is a wall, `.` is floor, `@` is where you start).
- Move with the arrow keys or WASD; `Space` waits a turn.
- Walls block movement; every move or wait counts as a turn.

That's all for now. It's a foundation, not a game yet.

## How it was made

Written with Claude, at a slower pace than my other projects: I went through it part by part to learn TypeScript, testing and a small game loop.

## Running it

```bash
npm install
npm run dev        # local server
npm run test:run   # tests (Vitest)
npm run build      # a single HTML file in dist/
```

Every push to `main` runs the tests, builds the game and deploys it to GitHub Pages.

## Built with

TypeScript, Vite (bundled into one HTML file), Vitest, the Canvas API. No game engine and no runtime dependencies.

## Licence

All rights reserved. The code is public to read, not to reuse.
