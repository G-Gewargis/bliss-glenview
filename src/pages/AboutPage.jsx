import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './AboutPage.scss';

const AboutPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Performance optimization: use IntersectionObserver instead of scroll event
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Once the element is visible, stop observing it
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1
    });
    
    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
      observer.observe(element);
    });
    
    setIsLoaded(true);
    
    return () => {
      // Clean up observer on component unmount
      fadeElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="about-page">
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h1>
          <div className="accent-line"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover the story behind Bliss Salon of Glenview and our commitment to excellence
          </motion.p>
        </div>
      </header>

      {/* Our Story Section */}
      <section className="section our-story">
        <div className="container">
          <div className="section-title">
            <h2>Our Story</h2>
            <div className="accent-line"></div>
          </div>
          
          <div className="story-content">
            <div className="story-text fade-in">
              <p>Bliss Salon of Glenview was founded with a vision to create a sanctuary where clients can escape the stresses of everyday life and experience the ultimate in beauty and relaxation.</p>
              
              <p>As the sister location to our successful Bliss Salon of Winnetka, we bring the same commitment to excellence and personalized service to the Glenview community.</p>
              
              <p>Our salon is designed with your comfort in mind, featuring elegant surroundings, state-of-the-art equipment, and a warm, welcoming atmosphere that makes every visit a pleasure.</p>
              
              <p>We believe that beauty is not just about looking good, but about feeling good too. That's why we go beyond providing exceptional beauty services to create an experience that nurtures both body and spirit.</p>
            </div>
            
            <div className="story-image fade-in">
              <div className="image-container">
                {/* Replace with actual salon image */}
                <div className="placeholder-image salon-image"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section our-team">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Team</h2>
            <div className="accent-line"></div>
            <p>Our team of skilled professionals is dedicated to providing you with the highest level of service</p>
          </div>
          
          <div className="team-grid">
            {/* Team Member 1 */}
            <div className="team-member fade-in">
              <div className="member-image">
                {/* Replace with actual team member image */}
                <div className="placeholder-image"></div>
              </div>
              <div className="member-info">
                <h3>Sophia Anderson</h3>
                <p className="position">Salon Director & Master Stylist</p>
                <p className="bio">With over 15 years of experience in the beauty industry, Sophia leads our team with passion and creativity.</p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="team-member fade-in">
              <div className="member-image">
                {/* Replace with actual team member image */}
                <div className="placeholder-image"></div>
              </div>
              <div className="member-info">
                <h3>Michael Chen</h3>
                <p className="position">Color Specialist</p>
                <p className="bio">Michael's expertise in color transformation has made him one of the most sought-after colorists in the area.</p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="team-member fade-in">
              <div className="member-image">
                {/* Replace with actual team member image */}
                <div className="placeholder-image"></div>
              </div>
              <div className="member-info">
                <h3>Emma Rodriguez</h3>
                <p className="position">Senior Stylist</p>
                <p className="bio">Emma combines technical precision with artistic vision to create stunning, personalized styles.</p>
              </div>
            </div>
            
            {/* Team Member 4 */}
            <div className="team-member fade-in">
              <div className="member-image">
                {/* Replace with actual team member image */}
                <div className="placeholder-image"></div>
              </div>
              <div className="member-info">
                <h3>David Park</h3>
                <p className="position">Nail Technician</p>
                <p className="bio">David's attention to detail and creative nail art have earned him a loyal following of clients.</p>
              </div>
            </div>
            
            {/* Add more team members as needed */}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section our-values">
        <div className="container">
          <div className="section-title">
            <h2>Our Values</h2>
            <div className="accent-line"></div>
            <p>The principles that guide everything we do at Bliss Salon of Glenview</p>
          </div>
          
          <div className="values-grid">
            <div className="value-card fade-in">
              <h3>Excellence</h3>
              <p>We are committed to delivering the highest quality services through continuous education and the use of premium products.</p>
            </div>
            
            <div className="value-card fade-in">
              <h3>Personalization</h3>
              <p>We believe that beauty is personal, which is why we take the time to understand your unique needs and preferences.</p>
            </div>
            
            <div className="value-card fade-in">
              <h3>Integrity</h3>
              <p>We operate with honesty and transparency in all aspects of our business, building trust with our clients and team members.</p>
            </div>
            
            <div className="value-card fade-in">
              <h3>Community</h3>
              <p>We are proud to be part of the Glenview community and actively participate in local initiatives and events.</p>
            </div>
            
            <div className="value-card fade-in">
              <h3>Sustainability</h3>
              <p>We strive to minimize our environmental impact by using eco-friendly products and implementing sustainable practices.</p>
            </div>
            
            <div className="value-card fade-in">
              <h3>Creativity</h3>
              <p>We encourage artistic expression and innovative thinking to bring fresh ideas and techniques to our clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="join-cta">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>Experience the Bliss Difference</h2>
            <div className="accent-line"></div>
            <p>Visit our salon and discover why clients trust us with their beauty and wellness needs.</p>
            <a href="https://blissglenview.com/booking" target="_blank" rel="noopener noreferrer" className="btn btn-filled">Book Your Appointment</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;