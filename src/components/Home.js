// Home.js
import React, { useState } from 'react';
import './Home.css';
import { useNavigate, Link } from 'react-router-dom';

function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    // Optional: clear auth state or localStorage
    navigate('/login');
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  const handleViewProfile = () => {
    navigate('/view-profile');
  };

  const handleRequestClick = () => {
    navigate('/request');
  };

  return (
    <div className="home-wrapper">
      <nav className="navbar">
        <div className="logo">SLT TireWeb</div>
        <ul className="nav-links">
          <li><Link to="/home" className="nav-link">Home</Link></li>
          <li><Link to="/request" className="nav-link">Request</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
        </ul>

        <div className="profile-menu" onClick={toggleDropdown}>
          <div className="notification-icon">🔔</div>
          {dropdownOpen && (
            <div className="dropdown">
              <p onClick={handleViewProfile}>👤 View Profile</p>
              <p onClick={handleLogout}>🚪 Logout</p>
            </div>
          )}
        </div>
      </nav>

      {showLogoutConfirm && (
        <div className="logout-modal">
          <div className="logout-box">
            <p>Are you sure you want to log out?</p>
            <div className="logout-buttons">
              <button className="yes-btn" onClick={confirmLogout}>Yes</button>
              <button className="no-btn" onClick={cancelLogout}>No</button>
            </div>
          </div>
        </div>
      )}

      <section className="hero">
        <div className="hero-left">
          <img src="/images/tire1.jpeg" alt="Tire Stack" />
        </div>
        <div className="hero-right">
          <h2>We Can Help You Replace Tires and Wheels</h2>
          <p>
            Streamline your operations and elevate customer satisfaction through our powerful tire
            management system. From efficient service request handling to real-time vehicle tracking,
            SLT provides the tools and technology needed for organizations to manage commercial and
            passenger tires seamlessly.
          </p>
          <button className="cta-btn" onClick={handleRequestClick}>Request for tires</button>
        </div>
      </section>

      <section className="tire-options">
        <img src="/images/tire2.jpeg" alt="Tire 2" />
        <img src="/images/tire3.jpeg" alt="Tire 3" />
        <img src="/images/tire1.jpeg" alt="Tire 1" />
      </section>

      <section className="about-section">
        <h3 className='about-h3'>ABOUT US</h3>
        <p>
          Founded in 1991, SLT has played a major role in developing the country's digital infrastructure
          and connecting people across urban and rural areas. SLT is one of the leading telecommunication
          service providers in Sri Lanka, offering a wide range of services including fiber, cloud services,
          mobile and internet solutions.
        </p>
      </section>

      <footer className="footer">
        <div className="feedback-form">
          <input type="text" placeholder="Enter your name" />
          <textarea placeholder="Enter your feedback"></textarea>
          <button>Send</button>
        </div>
        <div className="contact-info">
          <p>📞 +94 112 021 000</p>
          <p>📧 pr@slt.lk</p>
          <p>🏢 Sri Lanka Telecom PLC<br />Lotus Road, P.O.Box 503, Colombo 01</p>
        </div>
      </footer>

      <div className="copyright">
        © 2025 Sri Lanka Telecom. All Rights Reserved.
      </div>
    </div>
  );
}

export default Home;
