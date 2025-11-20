import React from "react";
import NeonLogo from "../../assets/branding/elk-grove-logo-neon.png";

export default function HeroSection() {
  return (
    <section className="eg-hero">
      <div className="eg-hero-inner">
        {/* LEFT: MAIN COPY */}
        <div className="eg-hero-copy">
          <div className="eg-hero-pill">Elk Grove • California</div>
          <h1 className="eg-hero-title">
            Set your standard.
            <span className="eg-hero-title-accent">
              &nbsp;Wear it every day.
            </span>
          </h1>

          <p className="eg-hero-subtitle">
            Hoodies, tees, and sweats built around Elk Grove.
            Quiet pieces with a loud standard: show up for your city,
            your people, and yourself.
          </p>

          <div className="eg-hero-cta-row">
            <a href="#products-grid" className="eg-hero-cta-primary">
              Shop the collection
            </a>
            <a href="#story" className="eg-hero-cta-secondary">
              Learn the story
            </a>
          </div>

          <div className="eg-hero-meta">
            <span>Heavy rotation ready</span>
            <span>Designed in Elk Grove</span>
            <span>Limited first run</span>
          </div>
        </div>

        {/* RIGHT: LOGO + DROP CARD */}
        <div className="eg-hero-highlight">
          <div className="eg-hero-logo-wrapper">
            <img
              src={NeonLogo}
              alt="The Elk Grove Standard logo"
              className="eg-hero-logo-image"
            />
          </div>

          <div className="eg-hero-card">
            <div className="eg-hero-card-tag">Drop One</div>
            <div className="eg-hero-card-title">The Grove Standard Set</div>
            <p className="eg-hero-card-text">
              Forest green &amp; cream hoodies paired with core tees.
              Built to be your first choice, not your backup.
            </p>

            <div className="eg-hero-card-row">
              <div>
                <div className="eg-hero-card-label">From</div>
                <div className="eg-hero-card-price">$55</div>
              </div>
              <div>
                <div className="eg-hero-card-label">Pieces</div>
                <div className="eg-hero-card-pill">
                  Hoodies • Tees • Sweats
                </div>
              </div>
            </div>

            <a href="#bundles" className="eg-hero-card-link">
              View bundles →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
