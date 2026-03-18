export default function GameStatus({ isWinner, isLoser, word }) {
  if (isWinner) {
    return <p className="status win">You won!</p>;
  }

  if (isLoser) {
    return (
      <p className="status lose">
        You lost! The word was: <strong>{word}</strong>
      </p>
    );
  }

  return null;
}