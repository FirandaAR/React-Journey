import { students } from "../data/studentData";
import StudentProfile from "./StudentProfile";

function StudentList() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {students.map((student) => (
        <StudentProfile
          key={student.id}
          name={student.name}
          grade={student.grade}
          role={student.role}
          skills={student.skills}
          avatar={student.avatar}
          isActive={student.isActive}
        />
      ))}
    </div>
  );
}

export default StudentList;
