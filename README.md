# Osudoku 🪐

A kid-friendly, solar-system-themed Sudoku game for iPad. The original version
lives in one file (`index.html`), with no dependencies or build step.

The repository also includes `modern.html`, a visually restrained version for
adult players. It offers four standard 9×9 difficulty levels with the same notes,
scoring, sound, feedback, dialogs, saved progress, and offline support while
replacing the space theme and playful imagery with a clean, neutral interface.
Entries are validated against the current row, column, and box rather than the
generated solution; rejected entries highlight every visible conflict.

**[Play Osudoku](https://pencilsmith.com/osudoku/)**

- 9 difficulty levels from 🌑 Moon (4×4) to Black Hole (9×9), picked via the
  top-left button — every puzzle is generated fresh with exactly one solution
- Pencil notes, cell clear, star rewards, and gentle mistake feedback (wrong
  numbers wiggle away, nothing is ever "game over")
- Completing a row, column, or box sets off a golden wave with a little
  sparkle chime; starting over mid-puzzle asks for confirmation first
- An astronomically accurate solar system background with a tap-to-open
  sky guide (🔭 button)
- Works offline after the first load (service worker; requires HTTPS —
  see below)

## Play on iPad

Open [pencilsmith.com/osudoku](https://pencilsmith.com/osudoku/) in Safari.
The game is hosted with GitHub Pages and works anywhere.

### Make it feel like a real app

In Safari on the iPad, with the game open:

1. Tap the **Share** button (square with an arrow).
2. Tap **Add to Home Screen**, then **Add**.

That gives it a home-screen icon and launches it full screen, without
Safari's address bar. Progress (stars, best scores, last level) is saved
on the iPad automatically.

## Offline play

The hosted game uses HTTPS, so a service worker caches it on the first load.
After that it launches and plays with no internet at all (airplane mode, road
trips). Updates take care of themselves: the next online launch downloads the
new version in the background, and the launch after that runs it.

To verify: load the game once online, enable Airplane Mode, and launch it
again — it should come up instantly.

## Development

Each version is self-contained in its own HTML file (`index.html` and
`modern.html`). There is no build step; clone the repository and serve it with
any static server:

```sh
git clone https://github.com/jorgexun/osudoku.git
cd osudoku
python3 -m http.server 8642
```

Open `http://localhost:8642/modern.html` for the modern interface.
