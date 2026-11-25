function VoteSummary({ total, leaders, onReset }) {
  let message;
  if (total === 0) {
    message = "Belum ada vote.";
  } else if (leaders.length > 1) {
    message = `🤝 Seri! ${leaders.map((s) => s.name).join(" & ")}`;
  } else {
    message = `🏆 Tertinggi: ${leaders[0].name}`;
  }

  return (
    <div className="vote-summary">
      <p>
        Total vote: <strong>{total}</strong>
      </p>
      <p>{message}</p>
      <button onClick={onReset} disabled={total === 0}>
        Reset
      </button>
    </div>
  );
}

export default VoteSummary;
