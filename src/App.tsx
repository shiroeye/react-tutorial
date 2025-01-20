import Board from "./components/Board";
import { useState } from "react";

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];
  // console.log(history);
  // console.log(currentSquares);

  function handlePlay(nextSquares: string[]): void {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    //...
  }

  const moves = history.map((squares, index) => {
    let description: string;
    if (index > 0) {
      description = "Go to move #" + index;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={index}>
        <button onClick={() => jumpTo(index)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
