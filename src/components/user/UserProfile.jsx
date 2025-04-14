import React from 'react';
import "../../assets/userprofile.css";
import { Link } from 'react-router-dom';

export const UserProfile = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>CONNECT, DISCUSS, AND RESOLVE WITH BUYERTALK</h1>
          <p>Make informed decisions with real consumer insights.</p>
          <Link
            to="/user/addreviewandrating"
            aria-label="Join the conversation by adding a review or rating"
          >
            <button className="cta-button">Join the Conversation</button>
          </Link>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-box">
          <h2>Have a Consumer Concern?</h2>
          <p>
            Share your experiences, write reviews, and get insights on products and services.
          </p>
        </div>
        <div className="contact-box">
          <h2>Get in Touch</h2>
          <p>
            Have questions or need assistance? Email us at{" "}
            <a href="mailto:rajinternship9@gmail.com">rajinternship9@gmail.com</a>
          </p>
          <p>Join us in making informed consumer choices.</p>
        </div>
      </section>
    </>
  );
};
