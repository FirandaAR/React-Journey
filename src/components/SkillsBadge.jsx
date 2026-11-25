function SkillsBadge({ skills }) {
  return (
    <div className="skills-container">
      {skills.map((skills) => (
        <span key={skills} className="badge">
          {skills}
        </span>
      ))}
    </div>
  );
}

export default SkillsBadge;
