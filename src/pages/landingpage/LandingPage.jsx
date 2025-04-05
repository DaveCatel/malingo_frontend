import React, { useState } from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };
  
  return (
    <div className="landing-container">
      {/* Navigation Bar */}
      <header className="header">
        <div className="logo-container">
          <h1>Malingo</h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li>
              <button className="nav-button" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="content-container">
          <h1 className="hero-title">
            Find Your Perfect Companion
          </h1>
          <p className="hero-description">
            Connect with like-minded individuals for daily activities and travel adventures. 
            Never explore alone again.
          </p>
          <div className="button-group">
            <button className="primary-button" onClick={handleSignUpClick}>
              Get Started
            </button>
            <button className="secondary-button">
              Learn More
            </button>
          </div>
          <div className="hero-image-container">
            <img 
              src="https://images.unsplash.com/photo-1522543558187-768b6df7c25c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
              alt="Friends traveling together" 
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="content-container">
          <h2 className="section-title">
            Why Choose Malingo?
          </h2>
          
          <div className="features-grid">
            {/* Feature 1 */}
            <div className="feature-card">
              <div className="feature-icon-container">
                <span className="feature-icon">👥</span>
              </div>
              <h3 className="feature-title">
                Find Like-Minded Companions
              </h3>
              <p>
                Connect with people who share your interests and passions for 
                activities and travel experiences.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="feature-card">
              <div className="feature-icon-container">
                <span className="feature-icon">✈️</span>
              </div>
              <h3 className="feature-title">
                Plan Adventures Together
              </h3>
              <p>
                Organize trips and activities with ease, from local coffee meetups 
                to international excursions.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="feature-card">
              <div className="feature-icon-container">
                <span className="feature-icon">🔒</span>
              </div>
              <h3 className="feature-title">
                Safe and Verified
              </h3>
              <p>
                Our verification system ensures all users are genuine and 
                trustworthy for a safe experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="content-container">
          <h2 className="section-title">
            How Malingo Works
          </h2>
          
          <div className="steps-container">
            {/* Step 1 */}
            <div className="step-row">
              <div className="step-content">
                <h3 className="step-title">
                  1. Create Your Profile
                </h3>
                <p>
                  Sign up and create a detailed profile showcasing your interests, 
                  travel preferences, and the types of activities you enjoy.
                </p>
              </div>
              <div className="step-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                  alt="Create Profile" 
                  className="step-image"
                />
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="step-row reverse">
              <div className="step-content">
                <h3 className="step-title">
                  2. Discover Companions
                </h3>
                <p>
                  Browse potential companions based on shared interests, upcoming trips, 
                  or daily activities in your area.
                </p>
              </div>
              <div className="step-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="Discover Companions" 
                  className="step-image"
                />
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="step-row">
              <div className="step-content">
                <h3 className="step-title">
                  3. Connect and Plan
                </h3>
                <p>
                  Message potential companions, plan activities together, and create 
                  unforgettable experiences with new friends.
                </p>
              </div>
              <div className="step-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="Connect and Plan" 
                  className="step-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="content-container">
          <h2 className="section-title">
            What Our Users Say
          </h2>
          
          <div className="testimonials-grid">
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Thanks to Malingo, I found a hiking buddy while visiting Colorado. 
                We've gone on three more trips since and become great friends!"
              </p>
              <div className="testimonial-author">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" 
                  alt="Sarah J." 
                  className="author-image"
                />
                <div>
                  <p className="author-name">Sarah J.</p>
                  <p className="author-title">Adventure Enthusiast</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <p className="testimonial-text">
                "As a solo traveler, Malingo has been a game-changer. I've met amazing 
                people who've made my trips so much more enjoyable."
              </p>
              <div className="testimonial-author">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                  alt="David T." 
                  className="author-image"
                />
                <div>
                  <p className="author-name">Dave Catel</p>
                  <p className="author-title">Telecom Engr</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="testimonial-card">
              <p className="testimonial-text">
                "I moved to a Buea and used Malingo to find workout buddies. 
                Now I have a whole community of fitness friends!"
              </p>
              <div className="testimonial-author">
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                  alt="Miguel R." 
                  className="author-image"
                />
                <div>
                  <p className="author-name">Confidence N.</p>
                  <p className="author-title">Software Engr</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="content-container">
          <h2 className="cta-title">
            Ready to Find Your Perfect Companion?
          </h2>
          <p className="cta-description">
            Sign up with Malingo today and start connecting with 
            like-minded individuals for unforgettable experiences.
          </p>
          <button className="cta-button" onClick={handleSignUpClick}>
            Get Started Now
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="content-container">
          <h2 className="newsletter-title">
            Stay Updated
          </h2>
          <p className="newsletter-description">
            Subscribe to our newsletter for travel tips, app updates, and special offers.
          </p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="newsletter-input"
            />
            <button className="newsletter-button">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-company">
            <h3 className="footer-title">Malingo</h3>
            <p className="footer-description">
              Connecting like-minded individuals for activities and adventures since 2025.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon">F</a>
              <a href="#" className="social-icon">T</a>
              <a href="#" className="social-icon">I</a>
            </div>
          </div>
          
          {/* Links */}
          <div className="footer-links-column">
            <h4 className="footer-links-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          
          <div className="footer-links-column">
            <h4 className="footer-links-title">Support</h4>
            <ul className="footer-links">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Safety</a></li>
              <li><a href="#">Community Guidelines</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-links-column">
            <h4 className="footer-links-title">Legal</h4>
            <ul className="footer-links">
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 Malingo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;