# Osudoku 🪐

A kid-friendly, solar-system-themed Sudoku game.

**[Play Osudoku](https://pencilsmith.com/osudoku/)**

- 9 difficulty levels, from 4×4 to 9×9
- Fresh puzzles with a unique solution
- Notes, scoring, sound, and saved progress
- Offline play after the first visit

For the minimal edition, see [Sudoku](https://github.com/jorgexun/sudoku).

## Run locally

The game is self-contained in `index.html` and has no build step:

```sh
git clone https://github.com/jorgexun/osudoku.git
cd osudoku
python3 -m http.server 8642
```

Then open `http://localhost:8642/`.
