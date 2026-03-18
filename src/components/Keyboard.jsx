export default function Keyboard({
  letters,
  guessedLetters,
  onGuess,
  isGameOver,
  word,
  isLoser,
}) {
  return (
    <div className="keyboard">
      {letters.map((letter) => {
        const isUsed = guessedLetters.includes(letter);
        const isCorrect = word.includes(letter);

        let className = "letter-btn";

        if (isUsed && isCorrect) {
          className += " used-correct";
        } else if (isUsed && !isCorrect) {
          className += " used-wrong";
        }

        if (isLoser && !isUsed && isCorrect) {
          className += " reveal-correct";
        }

        return (
          <button
            key={letter}
            className={className}
            onClick={() => onGuess(letter)}
            disabled={isUsed || isGameOver}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}