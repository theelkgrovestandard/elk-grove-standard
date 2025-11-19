import React from "react";
import siteContent from "../../config/siteContent";
import theme from "../../config/theme";

const Header = () => {
  const { brand, nav, social } = siteContent;

  return (
    <header className="eg-header">
      <div className="eg-header-left">
        <div className="eg-logo-badge">
          <span>{brand.logoText}</span>
        </div>
        <div className="eg-brand-text">
          <div className="eg-brand-name">{brand.name}</div>
          <div className="eg-brand-tagline">{brand.tagline}</div>
        </div>
      </div>

      <nav className="eg-header-nav">
        {nav.map((item) => (
          <a key={item.href} href={item.href} className="eg-nav-link">
            {item.label}
          </a>
        ))}
      </nav>

      <div className="eg-header-social">
        {social.instagram && (
          <a
            href={social.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="eg-social-icon"
          >
            IG
          </a>
        )}
        {social.tiktok && (
          <a
            href={social.tiktok}
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
            className="eg-social-icon"
          >
            TT
          </a>
        )}
        {social.twitter && (
          <a
            href={social.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter / X"
            className="eg-social-icon"
          >
            X
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;
