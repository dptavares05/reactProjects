// export default function GameOver({ winner, onRestart }) {
export default function GameOver({ winner, winnerName, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winnerName} won!</p>}
      {!winner && <p> It's a draw!</p>}
      <p>
        <button onClick={onRestart}> Rematch?</button>
      </p>
    </div>
  );
}