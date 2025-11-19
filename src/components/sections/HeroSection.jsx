import React from "react";
import siteContent from "../../config/siteContent";
import theme from "../../config/theme";

const HeroSection = () => {
  const { hero } = siteContent;

  return (
    <section
      id={hero.id}
      style={{
        padding: "3.25rem 0",
        display: "grid",
        gap: "1.3rem",
      }}
    >
      <div
        style={{
          fontSize: "0.8rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: theme.colors.primarySoft,
          fontWeight: 600,
        }}
      >
        {hero.eyebrow}
      </div>

      <h1
        style={{
          fontFamily: theme.fonts.heading,
          fontSize: "2.3rem",
          lineHeight: 1.1,
          margin: 0,
        }}
      >
        {hero.title}
      </h1>

      <p
        style={{
          maxWidth: "36rem",
          fontSize: "0.98rem",
          color: theme.colors.textMuted,
        }}
      >
        {hero.subtitle}
      </p>

      <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
        <a
          href={hero.primaryCta.href}
          style={{
            padding: "0.65rem 1.3rem",
            borderRadius: "999px",
            backgroundColor: theme.colors.primary,
            color: "#020705",
            fontSize: "0.9rem",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          {hero.primaryCta.label}
        </a>
        <a
          href={hero.secondaryCta.href}
          style={{
            padding: "0.65rem 1.3rem",
            borderRadius: "999px",
            border: `1px solid ${theme.colors.border}`,
            color: theme.colors.text,
            fontSize: "0.9rem",
            textDecoration: "none",
          }}
        >
          {hero.secondaryCta.label}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
