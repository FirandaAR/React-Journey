function StudentInformation({ name, grade, role }) {
  return (
    <div className="student-info">
      <h2>{name}</h2>
      <p>Grade: {grade}</p>
      <p>Role: {role}</p>
    </div>
  );
}

export default StudentInformation;
