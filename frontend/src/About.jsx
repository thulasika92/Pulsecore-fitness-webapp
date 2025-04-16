import React from 'react';
import './App.css';

const About = () => {
  return (
    <div className="about-wrapper">
      <section className="about-banner" data-aos="fade-up">
        <h1>We’re More Than Just Reps & Sets</h1>
        <p>Pulsecore is where fitness meets fun, fam, and fire </p>
      </section>

      <section className="about-punchlines" data-aos="fade-up">
        <div className="punch-card">
          <h2> Why We Exist</h2>
          <p>We’re tired of boring workouts and lonely goals. Pulsecore brings the energy, the community, and the gains.</p>
        </div>
        <div className="punch-card">
          <h2> Who’s It For?</h2>
          <p>Lifters, yogis, sprinters, dreamers, rookies, and GOATs. If you move, you belong.</p>
        </div>
        <div className="punch-card">
          <h2> What We Believe</h2>
          <ul>
            <li> Vibes over vanity</li>
            <li> Strength = Discipline + Consistency</li>
            <li> Growth happens together</li>
          </ul>
        </div>
      </section>

      <section className="join-cta" data-aos="zoom-in">
        <h2>Ready to Join the Pulse?</h2>
        <p>Let’s lift, learn, and level up — together 🫡</p>
        <button className="join-btn">Let’s Go </button>
      </section>
    </div>
  );
};

export default About;
