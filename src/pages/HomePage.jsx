import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCut, FaPaintBrush, FaHandSparkles, FaSprayCan, FaSpa, FaGem, FaPalette } from 'react-icons/fa';
import './HomePage.scss';

const HomePage = () => {
  const servicesRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // Check if element is in viewport
        if(position.top < window.innerHeight && position.bottom >= 0) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        {/* Decorative elements */}
        <div className="hero-decor hero-decor-1"></div>
        <div className="hero-decor hero-decor-2"></div>
        <div className="hero-decor hero-decor-3"></div>
        
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover Your Inner Bliss
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Luxury hair, beauty, and nail services tailored to enhance your natural beauty and elevate your self-care experience
          </motion.p>
          <motion.div
            className="btn-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/services" className="btn btn-filled">Explore Services</Link>
            <a href="https://blissglenview.com/booking" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Book Appointment</a>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section welcome">
        <div className="container">
          <div className="section-title">
            <h2>Welcome to Bliss Salon of Glenview</h2>
            <p>Where beauty meets tranquility in the heart of Glenview, Illinois</p>
          </div>
          
          <div className="welcome-content">
            <div className="welcome-text fade-in">
              <p>At Bliss Salon of Glenview, we believe that every client deserves a personalized beauty experience that leaves them feeling refreshed, confident, and beautiful.</p>
              <p>Our skilled team of professionals is dedicated to providing exceptional services in a relaxing, upscale environment where your satisfaction is our highest priority.</p>
              <Link to="/about" className="btn-outline">About Us</Link>

            </div>
            <div className="welcome-image fade-in">
              <div className="image-container">
                {/* Image placeholder - replace with actual salon interior image */}
                <div className="placeholder-image"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section services-overview" ref={servicesRef}>
        <div className="container">
          <div className="section-title">
            <h2>Our Premium Services</h2>
            <p>We offer a wide range of premium beauty services to help you look and feel your best</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card fade-in">
              <div className="service-icon">
                <FaCut />
              </div>
              <h3>Hair</h3>
              <p>Expert cuts, styling, and treatments by our master stylists to suit your unique style and needs.</p>
              <Link to="/services#hair">Learn More</Link>
            </div>
            
            <div className="service-card fade-in">
              <div className="service-icon">
                <FaPaintBrush />
              </div>
              <h3>Color</h3>
              <p>From subtle highlights to bold transformations, our color specialists create your perfect look.</p>
              <Link to="/services#color">Learn More</Link>
            </div>
            
            <div className="service-card fade-in">
              <div className="service-icon">
                <FaHandSparkles />
              </div>
              <h3>Nails</h3>
              <p>Luxurious manicures and pedicures using premium products for beautiful, healthy nails.</p>
              <Link to="/services#nails">Learn More</Link>
            </div>
            
            <div className="service-card fade-in">
              <div className="service-icon">
                <FaSprayCan />
              </div>
              <h3>Waxing & Threading</h3>
              <p>Gentle, effective hair removal services for smooth, flawless skin.</p>
              <Link to="/services#waxing">Learn More</Link>
            </div>
            
            <div className="service-card fade-in">
              <div className="service-icon">
                <FaSpa />
              </div>
              <h3>Facials</h3>
              <p>Revitalize and nourish your skin with our custom facial treatments.</p>
              <Link to="/services#facials">Learn More</Link>
            </div>
            
            <div className="service-card fade-in">
              <div className="service-icon">
                <FaGem />
              </div>
              <h3>Eyelashes</h3>
              <p>Enhance your natural beauty with our expert lash extensions and lifts.</p>
              <Link to="/services#eyelashes">Learn More</Link>
            </div>
            
            <div className="service-card fade-in">
              <div className="service-icon">
                <FaPalette />
              </div>
              <h3>Makeup</h3>
              <p>Professional makeup application for special events or everyday glamour.</p>
              <Link to="/services#makeup">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="decor decor-1"></div>
        <div className="decor decor-2"></div>
        <div className="container">
          <div className="cta-content fade-in">
            <h2>Ready to Experience Bliss?</h2>
            <p>Book your appointment today and treat yourself to the luxury you deserve.</p>
            <a href="https://blissglenview.com/booking" target="_blank" rel="noopener noreferrer" className="btn btn-filled">Book Now</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;