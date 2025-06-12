import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import SEO from '../components/SEO';
import './ContactPage.scss';
import contactHeaderImage from '../assets/images/contact-header.jpg';

const ContactPage = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          element.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(form.current);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        service: formData.get('service'),
        message: formData.get('message')
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({
          submitted: true,
          error: false,
          message: result.message
        });
        form.current.reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Something went wrong. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <SEO 
        title="Contact Us"
        description="Get in touch with Bliss Salon of Glenview. Located at 1877 Waukegan Road, Glenview, IL. Book appointments, ask questions, or provide feedback via phone (773) 550-3730 or email."
        keywords="contact salon, Glenview salon, book appointment, salon location, hair salon contact, beauty salon contact"
        image="/images/og-image.jpg"
        canonical="https://blissglenview.com/contact"
      />

      <header className="page-header" style={{ 
        backgroundImage: `url(${contactHeaderImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center 30%' 
      }}>
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Contact Us
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            Get in touch with Bliss Salon of Glenview for appointments, questions, or feedback
          </motion.p>
        </div>
      </header>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info fade-in">
              <h2>Contact Information</h2>
              <p>We look forward to hearing from you! Reach out through any of the methods below or fill out our contact form.</p>
              <ul className="info-list">
                <li><div className="icon"><FaMapMarkerAlt /></div><div className="detail"><h3>Location</h3><p>1877 Waukegan Road<br />Glenview, IL 60025</p></div></li>
                <li><div className="icon"><FaPhone /></div>
                {/* <a href="tel:7735503730">(773) 550-3730</a> */}
                <div className="detail"><h3>Phone</h3><p>(773) 550-3730</p></div></li>
                <li><div className="icon"><FaEnvelope /></div><div className="detail"><h3>Email</h3><p>info@blissglenview.com</p></div></li>
                <li><div className="icon"><FaClock /></div><div className="detail"><h3>Hours</h3><p>Sun–Mon: Closed<br />Tues-Sat: 10am-5pm </p></div></li>
              </ul>
              <div className="booking-info">
                <h3>Book an Appointment</h3>
                <p>For the fastest service, book your appointment online:</p>
                <a href="https://online.rosysalonsoftware.com/onlineBooking?id=52733" target="_blank" rel="noopener noreferrer" className="btn btn-filled">Book Now</a>
              </div>
            </div>

            <div className="contact-form-container fade-in">
              <div className="form-wrapper">
                <h2>Send Us a Message</h2>
                {formStatus.submitted ? (
                  <div className="form-success"><p>{formStatus.message}</p></div>
                ) : (
                  <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                    <input type="hidden" name="reply_to" />
                    
                    <div className="form-group">
                      <label htmlFor="name">Your Name *</label>
                      <input type="text" id="name" name="name" required />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input type="email" id="email" name="email" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="service">Service of Interest</label>
                      <select id="service" name="service">
                        <option value="">Select a Service</option>
                        <option value="Hair">Hair</option>
                        <option value="Color">Color</option>
                        <option value="Nails">Nails</option>
                        <option value="Waxing/Threading">Waxing/Threading</option>
                        <option value="Facials">Facials</option>
                        <option value="Eyelashes">Eyelashes</option>
                        <option value="Makeup">Makeup</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Your Message *</label>
                      <textarea id="message" name="message" rows="5" required></textarea>
                    </div>

                    <button type="submit" className="btn btn-filled" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="map-container">
          <iframe
            title="Bliss Salon Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.856944831839!2d-87.7969095!3d42.0891145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc779153b8f27%3A0xe240cb4e7bbee2a1!2sBliss%20Salon%20of%20Glenview!5e0!3m2!1sen!2sus!4v1746787130076!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
