import { FaTruckMoving } from "react-icons/fa";
import "./CTA.css";

const MovingServices = () => {
  return (
    <div className="cta-card">
      <div className="cta-icon">
        <FaTruckMoving />
      </div>
      <h4>Moving Soon?</h4>
      <p>Book affordable moving services and start planning early.</p>
      <button className="cta-btn">Plan Move</button>
    </div>
  );
};

export default MovingServices;
