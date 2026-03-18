export default function WordDisplay({ word, guessedLetters, isLoser }) {
  return (
    <div className="word">
      {word.split("").map((letter, index) => {
        const isGuessed = guessedLetters.includes(letter);

        let className = "word-letter";

        if (isGuessed) {
          className += " correct";
        } else if (isLoser) {
          className += " missed";
        }

        return (
          <span key={index} className={className}>
            {isGuessed || isLoser ? letter : "_"}
          </span>
        );
      })}
    </div>
  );
}