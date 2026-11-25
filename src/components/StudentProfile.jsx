import ProfileImage from "./ProfileImage";
import SkillsBadge from "./SkillsBadge";
import StatusBadge from "./StatusBadge";
import StudentInformation from "./StudentInformation";

function StudentProfile({ name, grade, role, skills, avatar, isActive }) {
  return (
    <div className="student-card">
      <ProfileImage avatar={avatar} />
      <StudentInformation name={name} grade={grade} role={role} />
      <SkillsBadge skills={skills} />
      <StatusBadge isActive={isActive} />
    </div>
  );
}

export default StudentProfile;
