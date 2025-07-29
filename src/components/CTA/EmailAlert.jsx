import { FaEnvelopeOpenText } from "react-icons/fa";
import "./CTA.css";

const EmailAlerts = () => {
  return (
    <div className="cta-card">
      <div className="cta-icon">
        <FaEnvelopeOpenText />
      </div>
      <h4>Email Alerts</h4>
      <p>Get notified when new listings match your search.</p>
      <button className="cta-btn">Subscribe</button>
    </div>
  );
};

export default EmailAlerts;
