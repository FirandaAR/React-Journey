function ProfileImage({ avatar }) {
  return (
    <div className="profile-image-container">
      {/* pake avatar placeholder */}
      <img
        src={ avatar }
        alt="Student Avatar"
        width="150"
        height="150"
        className="avatar-img"
      />
    </div>
  );
}

export default ProfileImage;
