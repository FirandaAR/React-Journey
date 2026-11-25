import StudentProfile from "./StudentProfile";

function CandidateCard({ student, votes, isLeading, onVote, onUnvote }) {
  return (
    <div className={`candidate ${isLeading ? "candidate-leading" : ""}`}>
      <StudentProfile
        name={student.name}
        grade={student.grade}
        role={student.role}
        skills={student.skills}
        avatar={student.avatar}
        isActive={student.isActive}
      />
      <p className="vote-count">{votes} vote</p>
      <div className="vote-actions">
        <button onClick={() => onVote(student.id)}>👍 Vote</button>
        {/* challenge: tidak boleh negatif */}
        <button onClick={() => onUnvote(student.id)} disabled={votes === 0}>
          − Undo
        </button>
      </div>
    </div>
  );
}

export default CandidateCard;
