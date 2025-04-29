import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYelp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.scss';
import logoImage from '../assets/images/glenview.png';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <img src={logoImage} alt="Bliss Salon of Glenview" className="footer-logo" />
            <p>A luxury salon providing exceptional services in hair styling, color, nails, and more for over 40 years.</p>
            <div className="social-links">
              <a href="https://www.facebook.com/BlissWinnetka/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://www.instagram.com/blisssalonofwinnetka/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.yelp.com/" target="_blank" rel="noopener noreferrer"><FaYelp /></a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services#hair">Hair</Link></li>
              <li><Link to="/services#color">Color</Link></li>
              <li><Link to="/services#nails">Nails</Link></li>
              <li><Link to="/services#waxing">Waxing/Threading</Link></li>
              <li><Link to="/services#facials">Facials</Link></li>
              <li><Link to="/services#eyelashes">Eyelashes</Link></li>
              <li><Link to="/services#makeup">Makeup</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="https://blissglenview.com/booking" target="_blank" rel="noopener noreferrer">Book Online</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Contact Us</h4>
            <ul className="contact-info">
              <li>
                <FaMapMarkerAlt />
                <span>1877 Waukegan Road, Glenview, Illinois</span>
              </li>
              <li>
                <FaPhone />
                <span>(773) 550-3730</span>
              </li>
              <li>
                <FaEnvelope />
                <span>info@blissglenview.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Bliss Salon of Glenview | All Rights Reserved</p>
          <p>Designed with ❤️ for beauty</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;