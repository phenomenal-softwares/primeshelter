import { FaMapMarkerAlt, FaUserCircle, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Agents.css";

const AgentCard = ({ agent }) => {
  return (
    <div className="agent-card">
      <img src={agent.photo} alt={agent.company} className="agent-photo" />
      <div className="agent-info">
        <h3>{agent.company}</h3>
        <p className="agent-location"><FaMapMarkerAlt /> {agent.location}</p>
        <div className="agent-actions">
          <button><FaUserCircle /> Profile</button>
          <button><FaEnvelope /> Email</button>
          <button><FaPhone /> Phone</button>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
