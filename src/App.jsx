import React from "react";
import Layout from "./components/layout/Layout";
import Header from "./components/layout/Header";
import HeroSection from "./components/sections/HeroSection";
import siteContent from "./config/siteContent";
import theme from "./config/theme";

function App() {
  const { features, products, contact, story, standard } = siteContent;
  const [showPopularOnly, setShowPopularOnly] = React.useState(true);

  const popularItems = products.items.filter((item) => item.popular);
  const displayedProducts = showPopularOnly ? popularItems : products.items;

  return (
    <Layout>
      <Header />
      <HeroSection />

      {/* Features */}
      <section
        id={features.id}
        className="eg-section"
        style={{ borderTop: `1px solid ${theme.colors.border}` }}
      >
        <h2 className="eg-section-title">{features.title}</h2>
        <p className="eg-section-subtitle">{features.subtitle}</p>

        <div className="eg-feature-grid">
          {features.items.map((item) => (
            <div
              key={item.title}
              className="eg-card"
              style={{ borderColor: theme.colors.border }}
            >
              <div className="eg-card-title">{item.title}</div>
              <div className="eg-card-body">{item.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular */}
      <section
        id="popular"
        className="eg-section"
        style={{ borderTop: `1px solid ${theme.colors.border}` }}
      >
        <div className="eg-section-header-row">
          <div>
            <h2 className="eg-section-title">Popular pieces</h2>
            <p className="eg-section-subtitle">
              Hoodies and sweats that define the Elk Grove Standard. These are
              the pieces people reach for first.
            </p>
          </div>
          <div className="eg-popular-toggle">
            <button
              type="button"
              className={
                showPopularOnly
                  ? "eg-toggle-btn eg-toggle-btn-active"
                  : "eg-toggle-btn"
              }
              onClick={() => setShowPopularOnly(true)}
            >
              Popular
            </button>
            <button
              type="button"
              className={
                !showPopularOnly
                  ? "eg-toggle-btn eg-toggle-btn-active"
                  : "eg-toggle-btn"
              }
              onClick={() => setShowPopularOnly(false)}
            >
              All
            </button>
          </div>
        </div>

        <div className="eg-products-grid">
          {displayedProducts.map((item) => (
            <article
              key={item.name}
              className="eg-product-card"
              style={{ borderColor: theme.colors.border }}
            >
              <header className="eg-product-header">
                <div>
                  <h3 className="eg-product-name">{item.name}</h3>
                  {item.category && (
                    <div className="eg-product-category">{item.category}</div>
                  )}
                </div>
                <div className="eg-product-price">{item.price}</div>
              </header>

              {item.tag && (
                <div className="eg-product-tag">{item.tag}</div>
              )}

              <p className="eg-product-description">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Set your standard */}
      <section
        id={standard.id}
        className="eg-section eg-standard-section"
        style={{
          borderTop: `1px solid ${theme.colors.border}`,
          background:
            "radial-gradient(circle at top left, rgba(34,197,94,0.18), transparent 55%)",
        }}
      >
        <div className="eg-standard-layout">
          <div className="eg-standard-text">
            <h2 className="eg-section-title">{standard.title}</h2>
            <p className="eg-section-subtitle">{standard.subtitle}</p>

            <div className="eg-text-block">
              {standard.paragraphs.map((p, idx) => (
                <p key={idx} className="eg-body-text">
                  {p}
                </p>
              ))}
            </div>

            <a
              href={standard.cta.href}
              className="eg-primary-cta"
              style={{
                backgroundColor: theme.colors.primary,
                color: "#020705",
              }}
            >
              {standard.cta.label}
            </a>
          </div>

          <div className="eg-standard-highlight">
            <div className="eg-standard-badge">
              Quiet flex, heavy standard.
            </div>
            <p className="eg-body-text">
              The pieces aren’t just for “supporting a local brand.” They’re
              built to be your first choice hoodie and sweats, not your backup.
            </p>
            <p className="eg-body-text eg-text-muted">
              If you’re going to wear something every week, it might as well
              carry a standard you actually believe in.
            </p>
          </div>
        </div>
      </section>

      {/* Full collection */}
      <section
        id={products.id}
        className="eg-section"
        style={{ borderTop: `1px solid ${theme.colors.border}` }}
      >
        <h2 className="eg-section-title">{products.title}</h2>
        <p className="eg-section-subtitle">{products.subtitle}</p>

        <div className="eg-products-grid">
          {products.items.map((item) => (
            <article
              key={item.name}
              className="eg-product-card"
              style={{ borderColor: theme.colors.border }}
            >
              <header className="eg-product-header">
                <div>
                  <h3 className="eg-product-name">{item.name}</h3>
                  {item.category && (
                    <div className="eg-product-category">{item.category}</div>
                  )}
                </div>
                <div className="eg-product-price">{item.price}</div>
              </header>

              {item.tag && (
                <div className="eg-product-tag">{item.tag}</div>
              )}

              <p className="eg-product-description">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Story */}
      <section
        id={story.id}
        className="eg-section"
        style={{ borderTop: `1px solid ${theme.colors.border}` }}
      >
        <h2 className="eg-section-title">{story.title}</h2>
        <p className="eg-section-subtitle">{story.subtitle}</p>

        <div className="eg-text-block">
          {story.paragraphs.map((p, idx) => (
            <p key={idx} className="eg-body-text">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id={contact.id}
        className="eg-section"
        style={{ borderTop: `1px solid ${theme.colors.border}` }}
      >
        <h2 className="eg-section-title">{contact.title}</h2>
        <p className="eg-section-subtitle">{contact.subtitle}</p>
        <a
          href={`mailto:${contact.email}`}
          className="eg-primary-cta"
          style={{
            backgroundColor: theme.colors.primary,
            color: "#020705",
          }}
        >
          Email the studio
        </a>
      </section>
    </Layout>
  );
}

export default App;
