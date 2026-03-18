export default function RestartButton({ onRestart }) {
  return (
    <button className="restart-btn" onClick={onRestart}>
      Restart
    </button>
  );
}