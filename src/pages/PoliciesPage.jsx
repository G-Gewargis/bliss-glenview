import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import './PoliciesPage.scss';
import policiesHeaderImage from '../assets/images/policies-header.jpg';

const PoliciesPage = () => {
  useEffect(() => {
    document.querySelectorAll('.fade-in')
      .forEach(el => el.classList.add('visible'));
  }, []);

  return (
    <>
      <SEO 
        title="Salon Policies | Bliss Salon of Glenview"
        description="Learn about our salon policies including cancellation, gratuities, privacy and appointment guidelines at Bliss Salon of Glenview."
        keywords="salon policies, cancellation policy, appointment policy, privacy policy, salon gratuities"
        image="/images/og-image.jpg"
        canonical="https://blissglenview.com/policies"
      />
      
      <div className="policies-page">
        <header className="page-header" style={{ 
          backgroundImage: `url(${policiesHeaderImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%'
        }}>
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Policies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Guidelines to ensure an exceptional experience for all our guests
            </motion.p>
          </div>
        </header>

        <div className="container">
          <section className="policies-section fade-in">
            <div className="policy-card">
              <h2>Cancellation Policy</h2>
              <div className="accent-line"></div>
              <p>
                A credit card will be required to reserve certain appointment types and through our online booking system. Should a cancellation or date change be necessary, we request a minimum of 24-hours notice for any single service. A 48-hour notice is required for any multiple service or spa package cancellation.
              </p>
              <p>
                <strong>We reserve the right to enforce our cancellation policy and your credit card will be charged 50% of the service(s) booked.</strong>
              </p>
            </div>

            <div className="policy-card">
              <h2>Gratuities</h2>
              <div className="accent-line"></div>
              <p>
                Please note that gratuity is not included in the service cost, but it is always appreciated. Unfortunately, we are not able to add gratuity or offer cash back on your credit card.
              </p>
            </div>

            <div className="policy-card">
              <h2>Our Highest Commitment is to Your Privacy</h2>
              <div className="accent-line"></div>
              <p>
                Your personal information is confidential. This includes your address, phone numbers and email address on file. We do not share your personal information or email with third parties. We will never share, sell, or rent individual personal information.
              </p>
              <p>
                We value and respect our members' privacy and preferred methods of receiving or not receiving invitations & communications from us. We will strive to deliver a valuable service that offers you our valued member the highest quality, value and convenience.
              </p>
            </div>

            <div className="policy-card">
              <h2>Appointment Times</h2>
              <div className="accent-line"></div>
              <p>
                Please arrive 15 minutes prior to your scheduled appointment time. While we strive to be on-time for your scheduled appointment(s), we may run behind schedule from time-to-time. We appreciate your patience and understanding in advance as we do our best to take all clients scheduled.
              </p>
              <p>
                However, if you are more than 15 minutes late checking-in to your scheduled appointment time, understand in advance that your appointment might be delayed and or re-schedule with another member of our team if we cannot accommodate your appointment(s).
              </p>
            </div>
          </section>

          <section className="booking-cta fade-in">
            <h2>Ready to Book Your Service?</h2>
            <div className="accent-line"></div>
            <p>Schedule an appointment with our expert team for the ultimate beauty experience.</p>
            <a href="https://app.rosysalonsoftware.com/customer/login.htm?id=52733" target="_blank" rel="noopener noreferrer" className="btn btn-filled">Book Now</a>
          </section>
        </div>
      </div>
    </>
  );
};

export default PoliciesPage;