import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GaveOver";

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const PLAYERS = {
  'X' : 'Player 1',
  'O' : 'Player 2'
}

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function deriveGameBoard(gameTurns) {
  const gameBoard = INITIAL_GAME_BOARD.map((row) => [...row]);

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function deriveWinner(gameBoard) {
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

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
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard);

  const hasDraw = gameTurns.length === 9 && !winner; // boolean value, all squares filled and no winner = a draw

  function handlePlayernameChange(symbol, newName){
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      }
  });
  }

  function handleRestart(){
    setGameTurns([]);
  }

  function handleTurnChange(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
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

        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        {(winner || hasDraw) && (
          <GameOver
            winner={winner}
            winnerName={winner ? players[winner] : null}
            onRestart={handleRestart}
          />
        )}

        <GameBoard onSelectSquare={handleTurnChange} board={gameBoard} />
      </div>

      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
