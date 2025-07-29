import { FaHome } from "react-icons/fa";
import "./CTA.css";

const ListProperty = () => {
  return (
    <div className="cta-card">
      <FaHome className="cta-icon" />
      <h4>Are You an Estate Agent or Developer?</h4>
      <p>
        List your property for FREE and get connected with buyers and renters instantly.
      </p>
      <button className="cta-btn">Get Started</button>
    </div>
  );
};

export default ListProperty;
