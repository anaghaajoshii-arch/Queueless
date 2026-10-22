
import { useState } from 'react';
import './App.css';

function App() {
  const [location, setLocation] = useState('');

  function handleSearch(event) {
    event.preventDefault();

    if (!location.trim()) {
      alert('Please enter an area or pincode.');
      return;
    }

    alert(`Searching clinics near: ${location}`);
  }

  return (
    <div className="app">
      <nav className="navbar">
        <a className="logo" href="#">QueueLess<span>.</span></a>

        <div className="nav-links">
          <a href="#clinics">Find Clinics</a>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
        </div>

        <a className="nav-button" href="#clinics">Get Started ↗</a>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">HEALTHCARE, WITHOUT THE WAIT</p>

            <h1>
              Your time matters.
              <br />
              <span>Your health matters more.</span>
            </h1>

            <p className="hero-description">
              Find nearby clinics, join queues digitally, and know
              when it’s your turn. Less waiting, more living.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#clinics">
                Find a Clinic →
              </a>
              <a className="secondary-button" href="#how-it-works">
                How it works
              </a>
            </div>

            <p className="hero-note">
              ✦ A smarter way to visit your doctor
            </p>
          </div>

          <div className="queue-card">
            <p className="muted">YOUR QUEUE PREVIEW</p>
            <h3>Good health, less waiting.</h3>

            <div className="clinic-mini">
              <div className="clinic-icon">✚</div>
              <div>
                <strong>City Care Clinic</strong>
                <p>General consultation</p>
              </div>
            </div>

            <div className="queue-stats">
              <div>
                <p className="muted">YOUR POSITION</p>
                <h2>--</h2>
              </div>
              <div>
                <p className="muted">EST. WAIT TIME</p>
                <h2>-- <small>mins</small></h2>
              </div>
            </div>

            <p className="queue-message">
              ✦ Join a real queue to see your live position.
            </p>
          </div>
        </section>

        <section className="clinics-section" id="clinics">
          <p className="eyebrow">CARE AROUND THE CORNER</p>
          <h2>Find clinics near you.</h2>
          <p className="section-description">
            Start with your area or pincode to discover healthcare nearby.
          </p>

          <form className="clinic-search" onSubmit={handleSearch}>
            <span>⌕</span>
            <input
              type="text"
              placeholder="Enter your area or pincode"
              aria-label="Search clinics by area or pincode"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
            <button type="submit">Find Clinics →</button>
          </form>

          <p className="search-note">
            Clinic search will be connected to the backend soon.
          </p>
        </section>

        <section className="features-section" id="features">
          <p className="eyebrow">WHY QUEUELESS?</p>
          <h2>Waiting rooms, reimagined.</h2>

          <div className="feature-grid">
            <article className="feature-card">
              <span className="feature-icon">⌕</span>
              <h3>Find Nearby Clinics</h3>
              <p>Discover healthcare options around your location.</p>
            </article>

            <article className="feature-card">
              <span className="feature-icon">↗</span>
              <h3>Join Digitally</h3>
              <p>Join a clinic queue without standing in line.</p>
            </article>

            <article className="feature-card">
              <span className="feature-icon">◷</span>
              <h3>Track Your Turn</h3>
              <p>Keep an eye on your queue position and wait time.</p>
            </article>
          </div>
        </section>

        <section className="steps-section" id="how-it-works">
          <p className="eyebrow">SIMPLE BY DESIGN</p>
          <h2>Three steps. Less waiting.</h2>

          <div className="steps-grid">
            <div className="step">
              <span>01</span>
              <h3>Find a clinic</h3>
              <p>Search for healthcare near you.</p>
            </div>

            <div className="step">
              <span>02</span>
              <h3>Join the queue</h3>
              <p>Take your place in a digital queue.</p>
            </div>

            <div className="step">
              <span>03</span>
              <h3>Know your turn</h3>
              <p>Track your position while you wait elsewhere.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <a className="logo" href="#">QueueLess<span>.</span></a>
        <p>Less waiting. Better care.</p>
        <small>© 2026 QueueLess · A smarter healthcare experience.</small>
      </footer>
    </div>
  );
}

export default App;
