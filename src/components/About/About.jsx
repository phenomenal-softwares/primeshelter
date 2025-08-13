import './About.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only run once
    threshold: 0.2,    // Trigger when 20% of the element is visible
  });

  return (
    <section className="about-section" ref={ref}>
      <div className="about-container">
        <div className="about-text">
          <h2 className="section-title">About PrimeShelter</h2>
          <p>
            We are Nigeria’s trusted source for real estate — connecting buyers, renters, and property developers with verified listings nationwide.
            Our platform ensures transparency, ease, and professionalism every step of the way.
          </p>

          <div className="stats">
            <div className="stat">
              <h3>
                {inView && <CountUp end={142} duration={3} />}+
              </h3>
              <p>Agents & Developers</p>
            </div>
            <div className="stat">
              <h3>
                {inView && <CountUp end={521} duration={3} />}+
              </h3>
              <p>Property Listings</p>
            </div>
            <div className="stat">
              <h3>
                {inView && <CountUp end={15} duration={3} />}+
              </h3>
              <p>Areas Covered</p>
            </div>
          </div>
        </div>

        <div className="why-choose-us">
          <h3>Why Choose Us</h3>
          <ul>
            <li>Verified listings with real-time updates</li>
            <li>Transparent dealings with zero hidden charges</li>
            <li>Vast network of trusted agents and developers</li>
            <li>Seamless user experience from search to contact</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
