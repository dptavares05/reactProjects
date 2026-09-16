import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GaveOver";

// This is the empty board used as the starting point for every derived board.
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// These are the default display names, indexed by the player's symbol.
const PLAYERS = {
  'X' : 'Player 1',
  'O' : 'Player 2'
}

// Derives whose turn it is from the recorded turns instead of storing
// another piece of state that could become inconsistent with gameTurns.
function deriveActivePlayer(gameTurns) {
  // X starts the game and is also the fallback when there are no turns.
  let currentPlayer = "X";

  // Turns are stored newest first. After X has played the latest turn, O is next.
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

// Rebuilds the visible board from the history of turns.
function deriveGameBoard(gameTurns) {
  // Copy every row so the constant starting board is not mutated.
  const gameBoard = INITIAL_GAME_BOARD.map((row) => [...row]);

  // Apply each recorded turn to its row and column.
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

// Returns the winning symbol, or null when no winning combination exists.
function deriveWinner(gameBoard) {
  // Check every possible row, column, and diagonal.
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    // A winner exists when all three squares contain the same symbol.
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      return firstSquareSymbol;
    }
  }

  return null;
}

function App() {
  // Stores the current names associated with X and O.
  const [players, setPlayers] = useState(PLAYERS);

  // Stores turns in reverse chronological order: the newest turn is first.
  const [gameTurns, setGameTurns] = useState([]);

  // These values are derived from state and do not need their own state variables.
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard);

  // A draw occurs when all nine squares are filled and nobody has won.
  const hasDraw = gameTurns.length === 9 && !winner;

  // Updates only the name belonging to the edited symbol.
  function handlePlayernameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName
      }
  });
  }

  // Clears the turn history so the board can be played again.
  function handleRestart() {
    setGameTurns([]);
  }

  // Adds a new turn to the front of the turn history.
  function handleTurnChange(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      // Derive the player from the previous history to avoid stale state.
      const currentPlayer = deriveActivePlayer(prevTurns);

      return [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
    });
  }

  return (
    <main>
      <div id="game-container">
        {/* Show both players and highlight the player whose turn it is. */}
        <ol id="players" className="highlight-player">
          <Player 
            initialName={PLAYERS.X} 
            symbol="X" 
            isActive={activePlayer === "X"}
              onChangeName={handlePlayernameChange} 
          />
          <Player 
            initialName={PLAYERS.O}
            symbol="O" 
            isActive={activePlayer === "O"} 
              onChangeName={handlePlayernameChange}
          />
        </ol>

        {/* Show the result only after a win or a full-board draw. */}
        {(winner || hasDraw) && (
          <GameOver
            winner={winner}
            winnerName={winner ? players[winner] : null}
            onRestart={handleRestart}
          />
        )}

        {/* Render the board using the current state derived from gameTurns. */}
        <GameBoard onSelectSquare={handleTurnChange} board={gameBoard} />
      </div>

      {/* Display the complete history of turns. */}
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
