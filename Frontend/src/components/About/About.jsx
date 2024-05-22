import React from 'react';
import './About.css'

const AboutPage = () => {
  return <>
    <div className="about-page">
      <h2>Health Nest</h2>
      <h5 className='text-center'>Welcome to our Doctor Appointment System!</h5>
      <p className='about-p'>Welcome to Healthnest , where your health and well-being are our top priorities. We are dedicated to providing exceptional medical care through a seamless and user-friendly appointment system designed to meet the diverse needs of our patients.</p>
      <p className='about-p'>What We Offer
        <p className='about-p lst'>
        <b> Appointment Booking : </b> Easily schedule appointments with healthcare professionals through our intuitive booking system. Choose from a range of available time slots and get instant confirmation.
        </p>
        <p className='about-p lst'>
        <b> Recomandation : </b> Receive personalized recommendations for doctors and healthcare services based on your medical history, preferences, and location. Our advanced algorithms ensure you find the best match for your needs.
        </p>
        <p className='about-p lst'>
        <b> Search Doctors : </b>Quickly find doctors by specialty, location, availability, and ratings. Our comprehensive database allows you to compare and select the right healthcare provider for you.
        </p>
        <p className='about-p lst'>
        <b> DashBoard For Doctors : </b> A dedicated dashboard for doctors to manage their appointments, view patient records, and track their schedule. The dashboard provides real-time updates and notifications to keep everything organized.
        </p>
        <p className='about-p lst'>
        <b> Patient Management : </b>Efficiently manage patient information, medical records, and treatment plans. Our system ensures secure and easy access to patient data, enabling better healthcare delivery and coordination.</p>
      </p>
        <p className="about-last">
               Thank you for choosing Health Nest. We look forward to serving you and helping you achieve better health.
        </p>
    </div>
  </>

};

export default AboutPage;