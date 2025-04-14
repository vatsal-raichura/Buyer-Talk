import React from 'react'
import "../../assets/userprofile.css" 
import { Link } from 'react-router-dom'

export const BusinessProfile = () => {
  return (
    <>
    <div className="hero">
      <div className="hero-content">
        <h1>GROW YOUR BUSINESS WITH BUYERTALK</h1>
        <p>Connect with consumers, build trust, and expand your reach.</p>
        <Link to="/product/products2">
          <button>Manage Your Services</button>
        </Link>
      </div>
    </div>

    <div className="contact-section">
      <div className="contact-box">
        <h2>Boost Your Visibility</h2>
        <p>
          Showcase your services, receive feedback, and engage with your customers directly.
        </p>
      </div>
      <div className="contact-box">
        <h2>Partner With Us</h2>
        <p>
          Have questions or need support? Email us at {" "}
          <Link to="mailto:veerraar325@gmail.com">veerraar325@gmail.com</Link>
        </p>
        <p>Join BuyerTalk and grow your business with consumer trust.</p>
      </div>
    </div>
  </>
  )
}