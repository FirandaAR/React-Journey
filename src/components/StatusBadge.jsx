function StatusBadge({ isActive }) {
  return (
    <span className="badge" style={{ color: isActive ? "green" : "red" }}>
      {isActive ? "🟢 Active" : "🔴 Inactive"}
    </span>
  );
}

export default StatusBadge;
