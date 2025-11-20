import React from "react";
import siteContent from "../../config/siteContent";
import theme from "../../config/theme";

export default function Header({ cartCount, onOpenCart }) {
  const { brand, nav, social } = siteContent;

  return (
    <header className="eg-header">
      {/* LEFT SIDE: LOGO + BRAND */}
      <div className="eg-header-left">
        <div className="eg-logo-badge">
          <span>{brand.logoText}</span>
        </div>
        <div className="eg-brand-text">
          <div className="eg-brand-name">{brand.name}</div>
          <div className="eg-brand-tagline">{brand.tagline}</div>
        </div>
      </div>

      {/* MIDDLE: NAVIGATION */}
      <nav className="eg-header-nav">
        {nav.map((item) => (
          <a key={item.href} href={item.href} className="eg-nav-link">
            {item.label}
          </a>
        ))}
      </nav>

      {/* RIGHT SIDE: SOCIALS + CART */}
      <div className="eg-header-social" style={{ display: "flex", alignItems: "center" }}>
        
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

        {/* CART BUTTON */}
        {onOpenCart && (
          <button
            type="button"
            onClick={onOpenCart}
            style={{
              marginLeft: "0.75rem",
              padding: "0.35rem 0.9rem",
              borderRadius: "999px",
              border: "1px solid #374151",
              background: "transparent",
              color: "#e5e7eb",
              fontSize: "0.8rem",
              cursor: "pointer",
            }}
          >
            Cart{typeof cartCount === "number" ? ` (${cartCount})` : ""}
          </button>
        )}
      </div>
    </header>
  );
}
