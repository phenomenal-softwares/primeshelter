import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-column brand">
          <h2 className="logo">PrimeShelter</h2>
          <p>Your trusted partner in finding homes, lands, and real estate opportunities across Nigeria.</p>
          <div className="social-icons">
            <button type="button"><FaFacebookF /></button>
            <button type="button"><FaTwitter /></button>
            <button type="button"><FaInstagram /></button>
            <button type="button"><FaLinkedinIn /></button>
          </div>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>
          <ul>
            <li><button type="button">For Sale</button></li>
            <li><button type="button">For Rent</button></li>
            <li><button type="button">Shortlets</button></li>
            <li><button type="button">Lands</button></li>
            <li><button type="button">Featured Properties</button></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><button type="button">About Us</button></li>
            <li><button type="button">Our Agents</button></li>
            <li><button type="button">Contact</button></li>
            <li><button type="button">Careers</button></li>
            <li><button type="button">Media</button></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><button type="button">FAQs</button></li>
            <li><button type="button">How It Works</button></li>
            <li><button type="button">Help Center</button></li>
            <li><button type="button">Terms & Conditions</button></li>
            <li><button type="button">Privacy Policy</button></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li><strong>Email:</strong> info@primeshelter.ng</li>
            <li><strong>Phone:</strong> +234 801 234 5678</li>
            <li><strong>Address:</strong> 123, Blue Street, Victoria Island, Lagos</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} PrimeShelter. All rights reserved.</p>
        <p>
          A product of{' '}
          <a
            href="https://phenomenalproductions.com.ng"
            target="_blank"
            rel="noreferrer noreferrer"
          >
            Phenomenal Productions
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
