import { useState } from "react";
import { students } from "../data/studentData";
import CandidateCard from "./CandidateCard";
import VoteBar from "./VoteBar";
import VoteSummary from "./VoteSummary";

// dua kandidat pertama dari data yang sudah ada
const candidates = students.slice(0, 2);
const initialVotes = Object.fromEntries(candidates.map((s) => [s.id, 0]));

function StudentVoting() {
  const [votes, setVotes] = useState(initialVotes);

  function handleVote(id) {
    setVotes((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  }

  function handleUnvote(id) {
    setVotes((prev) => ({ ...prev, [id]: Math.max(0, prev[id] - 1) }));
  }

  function handleReset() {
    setVotes(initialVotes);
  }

  const total = Object.values(votes).reduce((sum, n) => sum + n, 0);
  const topScore = Math.max(...Object.values(votes));
  const leaders = candidates.filter((s) => votes[s.id] === topScore);
  const hasLeader = total > 0;

  return (
    <div className="voting">
      <h2>🗳️ Student Voting</h2>
      <div className="voting-candidates">
        {candidates.map((student) => (
          <CandidateCard
            key={student.id}
            student={student}
            votes={votes[student.id]}
            isLeading={
              hasLeader && leaders.length === 1 && leaders[0].id === student.id
            }
            onVote={handleVote}
            onUnvote={handleUnvote}
          />
        ))}
      </div>
      <VoteBar
        votesA={votes[candidates[0].id]}
        votesB={votes[candidates[1].id]}
      />
      <VoteSummary total={total} leaders={leaders} onReset={handleReset} />
    </div>
  );
}

export default StudentVoting;
