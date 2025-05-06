import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import './Navbar.scss';
import logoImage from '../assets/images/glenview.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const servicesDropdownRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.navbar-menu') && !event.target.closest('.navbar-toggle')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Close menu when clicking on a link (for mobile)
  const closeMenuOnClick = () => {
    if (isMobile) {
      setMenuOpen(false);
      setServicesDropdownOpen(false);
    }
  };
  
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logoImage} alt="Bliss Salon of Glenview" className="logo-image" />
        </Link>
        
        <button 
          className="navbar-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          {/* Main navigation items */}
          <div className="nav-items-group">
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
                onClick={closeMenuOnClick}
              >
                Home
              </Link>
            </li>
            <li
              className="dropdown-container"
              ref={servicesDropdownRef}
              onMouseEnter={() => !isMobile && setServicesDropdownOpen(true)}
              onMouseLeave={() => !isMobile && setServicesDropdownOpen(false)}
            >
              <div
                className={`dropdown-toggle ${location.pathname === '/services' ? 'active' : ''}`}
                onClick={() => isMobile && setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                <div className="dropdown-flex">
                  <Link 
                    to="/services" 
                    className={`services-link ${location.pathname === '/services' ? 'active' : ''}`}
                    onClick={closeMenuOnClick}
                  >
                    Services
                  </Link>
                  <FaChevronDown 
                    className={`dropdown-icon ${servicesDropdownOpen ? 'active' : ''}`} 
                  />
                </div>
              </div>

              <ul className={`dropdown-menu ${servicesDropdownOpen ? 'show' : ''}`}>
                <li><Link to="/services#hair" onClick={closeMenuOnClick}>Hair Services</Link></li>
                <li><Link to="/services#color" onClick={closeMenuOnClick}>Color Services</Link></li>
                <li><Link to="/services#nails" onClick={closeMenuOnClick}>Nail Services</Link></li>
                <li><Link to="/services#waxing" onClick={closeMenuOnClick}>Waxing Services</Link></li>
                <li><Link to="/services#facials" onClick={closeMenuOnClick}>Facial Services</Link></li>
                <li><Link to="/services#eyelashes" onClick={closeMenuOnClick}>Eyelash Services</Link></li>
                <li><Link to="/services#makeup" onClick={closeMenuOnClick}>Makeup Services</Link></li>
                <li><Link to="/services#packages" onClick={closeMenuOnClick}>Packages</Link></li>
              </ul>
            </li>

            <li>
              <Link 
                to="/about" 
                className={location.pathname === '/about' ? 'active' : ''}
                onClick={closeMenuOnClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={location.pathname === '/contact' ? 'active' : ''}
                onClick={closeMenuOnClick}
              >
                Contact
              </Link>
            </li>
            {/* commenting out the policies page for now */}
            
            {/*
            <li>
              <Link 
                to="/policies" 
                className={location.pathname === '/policies' ? 'active' : ''}
                onClick={closeMenuOnClick}
              >
                Policies
              </Link>
            </li>
            */}

          </div>
          
          {/* Action buttons */}

          {/* commenting out the gift cards button for now */}
          
          <div className="action-buttons-group">
            {/*
            <li className="btn-container">
              <a 
                href="https://shop.blissglenview.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
              >
                Shop Products
              </a>
            </li>
            */}
            
            {/* commenting out the gift cards button for now */}

            {/*
            <li className="btn-container">
              <a 
                href="https://blissglenview.com/gift-cards" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
              >
                Gift Cards
              </a>
            </li>
            */}

            <li className="btn-container">
              <a 
                href="https://online.rosysalonsoftware.com/onlineBooking?id=52733" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-filled"
              >
                Book Now
              </a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;