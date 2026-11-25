function StudentCard({ name, grade, role, skills, avatar}) {
  return (
    <article>
      <h2>{name}</h2>
      <p>Grade: {grade}</p>
      <p>{role}</p>
    </article>
  );
}

export default StudentCard;
