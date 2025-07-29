import { FaUserTie } from "react-icons/fa";
import "./CTA.css";

const FindAgents = () => {
  return (
    <div className="cta-card">
      <FaUserTie className="cta-icon" />
      <h4>Find an Estate Agent</h4>
      <p>
        We’ll connect you with verified agents and developers in your area — fast and hassle-free.
      </p>
      <button className="cta-btn">Find an Agent</button>
    </div>
  );
};

export default FindAgents;
