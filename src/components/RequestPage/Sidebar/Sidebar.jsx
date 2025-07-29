import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="request-sidebar-box">
      <h3>Why Request?</h3>
      <ul>
        <li>✅ Save time searching</li>
        <li>✅ Get matched with trusted agents</li>
        <li>✅ Get notified instantly</li>
      </ul>
      <div className="tip">
        🛡️ Your request is shared *only* with verified professionals.
      </div>
    </aside>
  );
};

export default Sidebar;
