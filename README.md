# Osudoku 🪐

A kid-friendly, solar-system-themed Sudoku game for iPad. One file (`index.html`),
no dependencies, no build step.

- 8 difficulty levels from 🌑 Moon (4×4) to Black Hole (9×9), picked via the
  top-left button — every puzzle is generated fresh with exactly one solution
- Pencil notes, cell clear, star rewards, and gentle mistake feedback (wrong
  numbers wiggle away, nothing is ever "game over")
- An astronomically accurate solar system background with a tap-to-open
  sky guide (🔭 button)

## Getting it onto the iPad

### Option A — quick play over Wi-Fi (Mac must stay on)

1. On the Mac, start a server in this folder:

   ```sh
   cd ~/Dev/osudoku
   python3 -m http.server 8642
   ```

2. Find the Mac's address:

   ```sh
   ipconfig getifaddr en0
   ```

3. On the iPad (same Wi-Fi network), open Safari and go to
   `http://<that address>:8642` — e.g. `http://192.168.1.23:8642`.

The game only loads while the Mac is on the same network with the server
running, so use this for trying it out and Option B for keeps.

### Option B — put it online with GitHub Pages (works anywhere, free)

1. Create an empty repository on GitHub, then from this folder:

   ```sh
   git remote add origin https://github.com/<your-username>/osudoku.git
   git push -u origin main
   ```

2. On GitHub: **Settings → Pages → Branch: `main` / root → Save**.
3. After a minute the game is live at
   `https://<your-username>.github.io/osudoku/` — open that on the iPad.

### Make it feel like a real app (either option)

In Safari on the iPad, with the game open:

1. Tap the **Share** button (square with an arrow).
2. Tap **Add to Home Screen**, then **Add**.

That gives it a home-screen icon and launches it full screen, without
Safari's address bar. Progress (stars, best scores, last level) is saved
on the iPad automatically.

> Note: there is no offline support yet — the home-screen app still needs
> to reach the server (or GitHub Pages) when it launches.

## Development

Everything lives in `index.html` (styles, puzzle engine, UI). Open it via any
static server, e.g. `python3 -m http.server 8642`.
