import './CTASection.css';
import { FaHome, FaUserTie, FaBullhorn } from 'react-icons/fa';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">

        <div className="cta-box">
          <FaBullhorn className="cta-icon" />
          <h3>Post a Property Request</h3>
          <p>Looking for something specific? Tell us what you need and let the right property find you.</p>
          <button className="cta-btn">Post a Property</button>
        </div>

        <div className="cta-box">
          <FaUserTie className="cta-icon" />
          <h3>Find an Estate Agent</h3>
          <p>We’ll connect you with verified agents and developers in your area — fast and hassle-free.</p>
          <button className="cta-btn">Find an Agent</button>
        </div>

        <div className="cta-box">
          <FaHome className="cta-icon" />
          <h3>Are You an Estate Agent or Developer?</h3>
          <p>List your property for FREE and get connected with buyers and renters instantly.</p>
          <button className="cta-btn">Get Started</button>
        </div>

      </div>
    </section>
  );
};

export default CTASection;
