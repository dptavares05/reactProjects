# React Tic-Tac-Toe

A small tic-tac-toe game built with React and Vite. This project is part of a React learning exercise and demonstrates component composition, state management, controlled inputs, and event handling.

## Features

- 3 x 3 tic-tac-toe board
- Alternating turns between Player 1 (`X`) and Player 2 (`O`)
- Active-player highlighting
- Editable player names
- Responsive board styling with a hand-drawn visual theme

## Tech Stack

- React 19
- React DOM
- Vite
- JavaScript (JSX)
- CSS

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

From this project directory, install the dependencies:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

## Available Scripts

- `npm run dev` - Start the Vite development server
- `npm run build` - Create a production build
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint checks

## Project Structure

```text
src/
  App.jsx                 # Main application and active-player state
  index.jsx               # React entry point
  index.css               # Global and game styles
  components/
    GameBoard.jsx         # Board rendering and square selection
    Player.jsx            # Player name editing and active state
```

## How It Works

`App.jsx` stores the active player and passes the current symbol and turn-change handler to `GameBoard`. `GameBoard.jsx` stores the board as a two-dimensional array and updates a selected square when a button is clicked. `Player.jsx` manages each player's editable name and displays which player is active.

## Current Scope

This version focuses on the core board and turn logic. Win detection, draw detection, preventing moves in occupied squares, game-over feedback, and a reset-game action can be added as future improvements.
