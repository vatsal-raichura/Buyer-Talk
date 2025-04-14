import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//   import "../../assets/landingpagedemo.css"
import { Link, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

export const LandingPageDemo = () => {
  const toggleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("show");
  };
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("id");  // Remove stored user ID
    localStorage.removeItem("role");  // Remove authentication token if stored
    toast.success("Logged out successfully!", {
        position: "top-center",
        autoClose: 2000,
        // hideProgressBar: false,
        // closeOnClick: true,
        // pauseOnHover: true,
        // draggable: true,
        theme: "dark",
        transition:Bounce,
    });
    setTimeout(()=>{navigate("/login")},2500); // Redirect to login page
};

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-brand" href="#">BuyerTalk</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <button  onClick={()=>{handleLogout()}} className="btn btn-danger">LOG OUT </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div id="sidebar" className="sidebar">
        <Link to="/addcomplaint">ADD COMPLAINT</Link>
        <Link to="/viewallcomplaints">VIEW ALL COMPLAINTS</Link>
        <Link to="/viewmycomplaints">VIEW MY COMPLAINTS</Link>
        <Link to="/addreviewandrating">ADD REVIEW</Link>
        <Link to="/viewmyreviewandrating">VIEW MY REVIEW</Link>
        <Link to="/viewallreviewandratings">VIEW ALL REVIEWS</Link>
       
      </div>

      {/* Main Content */}
      <div className="content">
        <section className="hero">
          <div className="hero-content">
            <h1>CONNECT, DISCUSS, AND RESOLVE WITH BUYERTALK</h1>
            <p>Make informed decisions with real consumer insights.</p>
            <a href="#" className="btn btn-warning mt-3 hero-button">
              Join the Conversation
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section py-5 px-3 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-6 contact-box mb-4" id="custom">
                <h2>Have a Consumer Concern?</h2>
                <p>
                  Share your experiences, write reviews, and get insights on
                  products and services.
                </p>
              </div>
              <div className="col-md-6 contact-box" id="custom">
                <h2>Get in Touch</h2>
                <p>
                  Have questions or need assistance? Email us at
                  <a href="mailto:rajinternship9@gmail.com">
                    rajinternship9@gmail.com
                  </a>
                </p>
                <p>Join us in making informed consumer choices.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};


