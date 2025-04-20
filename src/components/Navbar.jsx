import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import './Navbar.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const servicesDropdownRef = useRef(null);
  
  // Handle scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location]);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <span>Bliss</span>
          <span className="salon-name">SALON OF GLENVIEW</span>
        </Link>
        
        <button 
          className="navbar-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li className="dropdown-container" ref={servicesDropdownRef}>
            <div 
              className={`dropdown-toggle ${location.pathname === '/services' ? 'active' : ''}`}
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
            >
              <Link to="/services" className="services-link">Services</Link> <FaChevronDown className="dropdown-icon" />
            </div>
            <ul className={`dropdown-menu ${servicesDropdownOpen ? 'show' : ''}`}>
              <li>
                <Link to="/services#hair">Hair Services</Link>
              </li>
              <li>
                <Link to="/services#color">Color Services</Link>
              </li>
              <li>
                <Link to="/services#nails">Nail Services</Link>
              </li>
              <li>
                <Link to="/services#waxing">Waxing Services</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Link>
          </li>
          <li className="btn-container">
            <a 
              href="https://blissglenview.com/booking" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-filled"
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;