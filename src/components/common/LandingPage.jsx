import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../assets/landingPage.css";
import "../../assets/landing/css/style.css";
import "../../assets/landing/css/responsive.css";
import about2image from "../../assets/landing/images/about-img2.png";
import sliderImage from "../../assets/landing/images/slider-img.png";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div className="hero_area">
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="#">
              <span className="ml-3">Buyer Talk</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item ">
                  <Link className="nav-link" to="#">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/loginRole">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signUpRole">
                    SignUp
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <section className="slider_section">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail_box">
                      <h1>Buyer Talk</h1>
                      <p>
                        Buyer Talk is a consumer-centric platform designed to
                        help users voice their concerns and complaints about
                        products and services. It allows buyers to register
                        complaints, track their status, and engage with sellers
                        or relevant authorities for resolution. The platform
                        features a structured complaint system, product
                        categorization, and an intuitive user interface to
                        enhance consumer rights and transparency. Additionally,
                        it enables users to view, update, and manage their
                        complaints efficiently, fostering accountability and
                        better service quality from businesses.
                      </p>
                      <div className="btn-box">
                        <Link to="/contactus" className="btn-1">
                          Contact Us
                        </Link>
                        <a href="#" className="btn-2">
                          Get A Quote
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src={sliderImage} alt="Slider" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about_section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src={about2image} alt="About BuyerTalk" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2 className="about">About Us</h2>
                </div>
                <p>
                  BuyerTalk is your go-to digital platform connecting consumers,
                  businesses, and regulatory bodies. Whether you're sharing
                  product reviews, providing feedback, or resolving complaints,
                  BuyerTalk makes the process seamless. Additionally, we empower
                  users by educating them on their consumer rights and laws.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
