import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import './ServicesPage.scss';
import servicesHeaderImage from '../assets/images/services-header.jpg'; // Import the image

const ServicesPage = () => {
  const location = useLocation();
  const servicesRef = useRef(null);
  
  useEffect(() => {
    // Scroll to specific service section if URL has hash
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
    
    // Use IntersectionObserver for better performance when scrolling
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      if (fadeElements) {
        fadeElements.forEach(element => {
          observer.unobserve(element);
        });
      }
    };
  }, [location]);

  return (
    <>
      <SEO 
        title="Our Services"
        description="Explore our premium salon services including haircuts, color, styling, nails, facials, waxing, threading, and makeup at Bliss Salon of Glenview."
        keywords="hair services, salon services, hair coloring, nail services, facials, beauty services"
        image="/images/og-image.jpg"
        canonical="https://blissglenview.com/services"
      />
      
      <div className="services-page" ref={servicesRef}>
        {/* Page Header */}
        <header className="page-header" style={{ 
          backgroundImage: `url(${servicesHeaderImage})`, // Use the imported image
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%'
        }}>
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover our wide range of premium beauty services designed to enhance your natural beauty
            </motion.p>
          </div>
        </header>

        {/* Services Navigation */}
        <div className="services-nav">
          <div className="container">
            <ul>
              <li><a href="#hair">Hair</a></li>
              <li><a href="#color">Color</a></li>
              <li><a href="#nails">Nails</a></li>
              <li><a href="#waxing">Waxing & Threading</a></li>
              <li><a href="#facials">Facials</a></li>
              <li><a href="#eyelashes">Eyelashes</a></li>
              <li><a href="#makeup">Makeup</a></li>
              <li><a href="#packages">Packages</a></li>
            </ul>
          </div>
        </div>

        {/* Services Content */}
        <div className="container">
          {/* Hair Services */}
          <section id="hair" className="service-section">
            <div className="service-header fade-in">
              <h2>Hair Services</h2>
              <div className="accent-line"></div>
              <p>Our skilled stylists create personalized looks that enhance your unique style and features</p>
            </div>
            
            <div className="service-content">
              <div className="service-image fade-in">
                <div className="placeholder-image hair-image"></div>
              </div>
              
              <div className="service-details fade-in">
                <div className="service-item">
                  <div className="service-name">Women's Cut & Style</div>
                  {/* <div className="service-price">$65+</div> */}
                  <div className="service-description">Includes consultation, shampoo, conditioning, cut and style.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Men's Cut & Style</div>
                  {/* <div className="service-price">$45+</div> */}
                  <div className="service-description">Classic or contemporary styles with attention to detail.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Children's Cut</div>
                  {/* <div className="service-price">$35+</div> */}
                  <div className="service-description">For children 12 and under.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Blowout & Style</div>
                  {/* <div className="service-price">$50+</div> */}
                  <div className="service-description">Professional blowdry and styling for any occasion.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Special Occasion Style</div>
                  {/* <div className="service-price">$85+</div> */}
                  <div className="service-description">Elegant updo or special event styling.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Deep Conditioning Treatment</div>
                  {/* <div className="service-price">$30+</div> */}
                  <div className="service-description">Intensive repair and hydration for damaged hair.</div>
                </div>
                
                <div className="service-note">
                  <p>* Prices may vary based on hair length, thickness, and stylist experience level.</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Color Services */}
          <section id="color" className="service-section">
            <div className="service-header fade-in">
              <h2>Color Services</h2>
              <div className="accent-line"></div>
              <p>From subtle highlights to bold transformations, our color specialists create your perfect look</p>
            </div>
            
            <div className="service-content reverse">
              <div className="service-details fade-in">
                <div className="service-item">
                  <div className="service-name">Single Process Color</div>
                  {/* <div className="service-price">$75+</div> */}
                  <div className="service-description">Full coverage color to enhance or completely change your look.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Partial Highlights</div>
                  {/* <div className="service-price">$95+</div> */}
                  <div className="service-description">Dimensional color focused around the face and crown.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Full Highlights</div>
                  {/* <div className="service-price">$135+</div> */}
                  <div className="service-description">Complete dimensional color throughout the hair.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Balayage</div>
                  {/* <div className="service-price">$150+</div> */}
                  <div className="service-description">Hand-painted highlights for a natural, sun-kissed look.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Ombre</div>
                  {/* <div className="service-price">$165+</div> */}
                  <div className="service-description">Gradual color transition from roots to ends.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Color Correction</div>
                  {/* <div className="service-price">Consultation Required</div> */}
                  <div className="service-description">Professional solutions for previous color issues.</div>
                </div>
                
                <div className="service-note">
                  <p>* Prices may vary based on hair length, thickness, and color correction requirements.</p>
                </div>
              </div>
              
              <div className="service-image fade-in">
                <div className="placeholder-image color-image"></div>
              </div>
            </div>
          </section>
          
          {/* Nail Services */}
          <section id="nails" className="service-section">
            <div className="service-header fade-in">
              <h2>Nail Services</h2>
              <div className="accent-line"></div>
              <p>Luxurious manicures and pedicures using premium products for beautiful, healthy nails</p>
            </div>
            
            <div className="service-content">
              <div className="service-image fade-in">
                <div className="placeholder-image nails-image"></div>
              </div>
              
              <div className="service-details fade-in">
                <div className="service-item">
                  <div className="service-name">Classic Manicure</div>
                  {/* <div className="service-price">$35</div> */}
                  <div className="service-description">Nail shaping, cuticle care, hand massage, and polish.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Gel Manicure</div>
                  {/* <div className="service-price">$50</div> */}
                  <div className="service-description">Long-lasting gel polish application with classic manicure.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Classic Pedicure</div>
                  {/* <div className="service-price">$55</div> */}
                  <div className="service-description">Foot soak, exfoliation, nail care, and polish.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Deluxe Pedicure</div>
                  {/* <div className="service-price">$75</div> */}
                  <div className="service-description">Extended massage, paraffin treatment, and premium products.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Nail Art</div>
                  {/* <div className="service-price">$10+</div> */}
                  <div className="service-description">Custom designs and embellishments per nail.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Polish Change (Hands/Feet)</div>
                  {/* <div className="service-price">$20/$25</div> */}
                  <div className="service-description">Quick color refresh for hands or feet.</div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Waxing/Threading Services */}
          <section id="waxing" className="service-section">
            <div className="service-header fade-in">
              <h2>Waxing & Threading Services</h2>
              <div className="accent-line"></div>
              <p>Gentle, effective hair removal services for smooth, flawless skin</p>
            </div>
            
            <div className="service-content reverse">
              <div className="service-details fade-in">
                <div className="service-item">
                  <div className="service-name">Eyebrow Waxing/Threading</div>
                  {/* <div className="service-price">$25</div> */}
                  <div className="service-description">Precise shaping to enhance your natural features.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Lip or Chin</div>
                  {/* <div className="service-price">$15</div> */}
                  <div className="service-description">Quick and gentle facial hair removal.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Full Face</div>
                  {/* <div className="service-price">$60</div> */}
                  <div className="service-description">Complete facial hair removal, excludes eyebrows.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Underarm</div>
                  {/* <div className="service-price">$30</div> */}
                  <div className="service-description">Thorough underarm hair removal.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Half Arm/Full Arm</div>
                  {/* <div className="service-price">$40/$60</div> */}
                  <div className="service-description">Smooth, hair-free arms.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Half Leg/Full Leg</div>
                  {/* <div className="service-price">$55/$90</div> */}
                  <div className="service-description">Silky smooth legs with long-lasting results.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Bikini</div>
                  {/* <div className="service-price">$50+</div> */}
                  <div className="service-description">Various options available for bikini area hair removal.</div>
                </div>
              </div>
              
              <div className="service-image fade-in">
                <div className="placeholder-image waxing-image"></div>
              </div>
            </div>
          </section>

          {/* Facials Services */}
          <section id="facials" className="service-section">
            <div className="service-header fade-in">
              <h2>Facial Services</h2>
              <div className="accent-line"></div>
              <p>Revitalize and nourish your skin with our custom facial treatments</p>
            </div>
            
            <div className="service-content">
              <div className="service-image fade-in">
                <div className="placeholder-image facials-image"></div>
              </div>
              
              <div className="service-details fade-in">
                <div className="service-item">
                  <div className="service-name">Bliss Facial</div>
                  {/* <div className="service-price">$85</div> */}
                  <div className="service-description">Our signature facial customized for your skin type, includes cleansing, exfoliation, mask, and relaxing massage.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Teen Facial</div>
                  {/* <div className="service-price">$65</div> */}
                  <div className="service-description">Specially formulated for younger skin to address acne concerns and establish proper skincare habits.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Anti-Aging Facial</div>
                  {/* <div className="service-price">$110</div> */}
                  <div className="service-description">Advanced treatment with premium products to target fine lines, wrinkles, and loss of elasticity.</div>
                </div>
              </div>
            </div>
          </section>

          {/* Eyelashes Services */}
          <section id="eyelashes" className="service-section">
            <div className="service-header fade-in">
              <h2>Eyelash Services</h2>
              <div className="accent-line"></div>
              <p>Enhance your natural beauty with our expert lash extensions and treatments</p>
            </div>
            
            <div className="service-content reverse">
              <div className="service-details fade-in">
                <div className="service-item">
                  <div className="service-name">Eyelash Extensions</div>
                  {/* <div className="service-price">$150+</div> */}
                  <div className="service-description">Full set of premium quality lash extensions individually applied for a natural yet dramatic look.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Eyelash Fill In</div>
                  {/* <div className="service-price">$70+</div> */}
                  <div className="service-description">Maintenance service recommended every 2-3 weeks to fill in grown-out lashes.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Eyelash Curl</div>
                  {/* <div className="service-price">$65</div> */}
                  <div className="service-description">Semi-permanent curl that lifts and enhances your natural lashes for up to 8 weeks.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Eyelash Tinting</div>
                  {/* <div className="service-price">$35</div> */}
                  <div className="service-description">Semi-permanent color enhancement for your natural lashes, perfect for those with light colored lashes.</div>
                </div>
              </div>
              
              <div className="service-image fade-in">
                <div className="placeholder-image eyelashes-image"></div>
              </div>
            </div>
          </section>

          {/* Makeup Services */}
          <section id="makeup" className="service-section">
            <div className="service-header fade-in">
              <h2>Makeup Services</h2>
              <div className="accent-line"></div>
              <p>Professional makeup application for special events or everyday glamour</p>
            </div>
            
            <div className="service-content">
              <div className="service-image fade-in">
                <div className="placeholder-image makeup-image"></div>
              </div>
              
              <div className="service-details fade-in">
                <div className="service-item">
                  <div className="service-name">Full Face Makeup</div>
                  {/* <div className="service-price">$85</div> */}
                  <div className="service-description">Complete makeup application including foundation, eyes, lips, and contouring using premium products.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Eyes Only Makeup</div>
                  {/* <div className="service-price">$45</div> */}
                  <div className="service-description">Focused application on eyes including eyeshadow, liner, and mascara for a dramatic look.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Bridal Makeup</div>
                  {/* <div className="service-price">$150+</div> */}
                  <div className="service-description">Long-lasting, photo-ready makeup application for your special day, includes consultation and premium products.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Prom Makeup</div>
                  {/* <div className="service-price">$95</div> */}
                  <div className="service-description">Age-appropriate glamour for prom, homecoming, and other special events.</div>
                </div>
              </div>
            </div>
          </section>

          {/* Packages Services */}
          <section id="packages" className="service-section">
            <div className="service-header fade-in">
              <h2>Packages</h2>
              <div className="accent-line"></div>
              <p>Enjoy our specially curated service combinations for a complete beauty experience</p>
            </div>
            
            <div className="service-content reverse">
              <div className="service-details fade-in">
                <div className="service-item">
                  <div className="service-name">Bliss Full Day of Beauty</div>
                  {/* <div className="service-price">$260</div> */}
                  <div className="service-description">Haircut & Style, Eyebrow & Lip Wax/Threading, Paraffin Treatment on Hands & Feet, No-Chip Manicure, Pedicure & Make-Up Application.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Bliss Half Day of Beauty</div>
                  {/* <div className="service-price">$164</div> */}
                  <div className="service-description">Haircut & Style, No-Chip Manicure & Pedicure, Paraffin Treatment on Hands & Feet.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Nails & Toes</div>
                  {/* <div className="service-price">$100</div> */}
                  <div className="service-description">No-Chip Manicure, Pedicure, Paraffin Treatment on Hands & Feet.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Beautiful Face</div>
                  {/* <div className="service-price">$110</div> */}
                  <div className="service-description">One Hour Bliss Facial, Eyebrow & Lip Waxing or Threading.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">Makeup & More</div>
                  {/* <div className="service-price">$232</div> */}
                  <div className="service-description">Full Face Makeup Application & Eyelash Extensions.</div>
                </div>
                
                <div className="service-item">
                  <div className="service-name">King's Day</div>
                  {/* <div className="service-price">$97</div> */}
                  <div className="service-description">Men's Haircut & Style, "Man"-icure, Pedicure.</div>
                </div>
                
                <div className="service-note">
                 {/* <p>* All services are discounted 5% off in the packages. No substitutions and packages may not be shared.</p> */}
                </div>
              </div>
              
              <div className="service-image fade-in">
                <div className="placeholder-image packages-image"></div>
              </div>
            </div>
          </section>
        </div>
        
        {/* Booking CTA */}
        <section className="booking-cta">
          <div className="container">
            <div className="cta-content fade-in">
              <h2>Ready to Book Your Service?</h2>
              <div className="accent-line"></div>
              <p>Schedule an appointment with our expert team for the ultimate beauty experience.</p>
              <a href="https://online.rosysalonsoftware.com/onlineBooking?id=52733" target="_blank" rel="noopener noreferrer" className="btn btn-filled">Book Now</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;