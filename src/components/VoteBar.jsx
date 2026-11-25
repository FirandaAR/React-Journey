function VoteBar({ votesA, votesB }) {
  const total = votesA + votesB;
  // belum ada vote: bar terbagi rata 50/50
  const percentA = total === 0 ? 50 : (votesA / total) * 100;

  return (
    <div
      className="vote-bar"
      role="progressbar"
      aria-valuenow={Math.round(percentA)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="vote-bar-a" style={{ width: `${percentA}%` }} />
      <div className="vote-bar-b" />
    </div>
  );
}

export default VoteBar;
