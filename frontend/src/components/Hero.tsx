import React from 'react';

const BuildingSVG: React.FC = () => (
  <svg width="260" height="160" viewBox="0 0 260 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="0" y="100" width="260" height="40" fill="#e9e9e9" />
    <rect x="20" y="40" width="220" height="60" fill="#ffffff" stroke="#dcdcdc" />
    <rect x="36" y="56" width="24" height="24" fill="#f5f5f5" stroke="#e0e0e0" />
    <rect x="70" y="56" width="24" height="24" fill="#f5f5f5" stroke="#e0e0e0" />
    <rect x="104" y="56" width="24" height="24" fill="#f5f5f5" stroke="#e0e0e0" />
    <rect x="138" y="56" width="24" height="24" fill="#f5f5f5" stroke="#e0e0e0" />
    <rect x="172" y="56" width="24" height="24" fill="#f5f5f5" stroke="#e0e0e0" />
    <rect x="36" y="88" width="160" height="8" fill="#f0f0f0" />
    <path d="M130 12 L146 12 L146 40 L130 40 Z" fill="#ffd24a" />
  </svg>
);

const Hero: React.FC = () => {
  return (
    <aside className="hero">
      <div className="hero-inner">
        <p className="hero-sub">Your voice matters</p>

        <h1 className="hero-title">
          GRIEVANCE
          <br />
          <span className="hero-accent">SYSTEM</span>
        </h1>

        <p className="hero-tag">LET STUDENTS BE HEARD</p>

        <button className="hero-login">LOGIN</button>

        <p className="hero-contact">Contact us group6@plm.edu.ph</p>
      </div>

      <div className="hero-art" aria-hidden>
        <BuildingSVG />
      </div>
    </aside>
  );
};

export default Hero;
