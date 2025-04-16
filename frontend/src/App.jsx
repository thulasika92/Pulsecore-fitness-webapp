import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Community from './community'; 

// Import your page components
import Explore from './Explore'; 
import Features from './Features'; 
import About from './About'; 

function App() {
  useEffect(() => {
    // Initialize AOS or other libraries if needed
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <header className="navbar">
          <div className="navbar-left">
            <div className="logo">
              <img src="/assets/logo1.png" alt="Pulsecore Logo" className="logo-image" />
              Pulsecore
            </div>
            <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <Link to="/">Home</Link>
              <Link to="/explore">Explore</Link>
              <Link to="/features">Features</Link>
              <Link to="/about">About</Link>

              <a href="#">Testimonials</a>
            </nav>
          </div>

          <div className="navbar-right">
            <button className="signup-btn">Sign up</button>
            <button className="login-btn">Log in</button>
          </div>

          <div className="menu-toggle" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </header>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Hero Section */}
                <main className="content">
                  <div className="hero" data-aos="fade-up">
                    <div className="hero-animation">
                      <img src="/assets/fitness1.jpg" alt="Fitness 1" className="hero-image" />
                      <img src="/assets/fitness2.jpg" alt="Fitness 2" className="hero-image" />
                      <img src="/assets/fitness3.jpg" alt="Fitness 3" className="hero-image" />
                    </div>
                  </div>
                </main>

                {/* Call To Action Section */}
                <section className="cta-banner" data-aos="zoom-in">
                  <div className="cta-content">
                    <h2>Ready to Level Up Your Fitness?</h2>
                    <p>Join a passionate community of learners and achievers today.</p>
                    <button className="signup-btn cta-btn">Join Pulsecore Now</button>
                  </div>
                </section>

                {/* Testimonials */}
                <section className="testimonials" data-aos="fade-up">
                  <h2>What Our Users Say</h2>
                  <div className="testimonial-cards">
                    <div className="card">
                      <img src="/assets/user1.jpg" alt="Alex" className="user-photo" />
                      <p>"Pulsecore’s structured community challenges helped me increase my bench press by 20 kg in just 6 weeks. I’ve never felt more motivated to hit the gym consistently."</p>
                      <strong>Alex</strong>
                      <span>@alex.fitlife</span>
                    </div>
                    <div className="card">
                      <img src="/assets/user2.jpg" alt="Priya" className="user-photo" />
                      <p>"Thanks to Pulsecore’s nutrition tips and support groups, I lost 8 kg while building better eating habits. It truly feels like having a fitness family online."</p>
                      <strong>Priya</strong>
                      <span>@priya_lifts</span>
                    </div>
                    <div className="card">
                      <img src="/assets/user3.jpg" alt="Jake" className="user-photo" />
                      <p>"I went from struggling to jog 2km to finishing my first 10K run with the help of Pulsecore’s cardio bootcamps. The progress tracking and peer motivation kept me pushing forward."</p>
                      <strong>Jake</strong>
                      <span>@jake_runsdaily</span>
                    </div>
                    <div className="card">
                      <img src="/assets/user4.jpg" alt="Zara" className="user-photo" />
                      <p>"Practicing with Pulsecore’s shared yoga flows improved my flexibility and reduced my back pain. The shared routines and community encouragement keep me grounded and inspired."</p>
                      <strong>Zara</strong>
                      <span>@zara_zen</span>
                    </div>
                  </div>
                </section>
              </>
            }
          />
          <Route path="/explore" element={<Explore />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <div>
            <Link to="/about">About</Link>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Help</a>
          </div>
          <div style={{ marginTop: '1rem' }}>
            &copy; 2025 Pulsecore. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
