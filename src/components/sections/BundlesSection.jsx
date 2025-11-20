import React from "react";
import { bundles } from "../../config/bundles";

export default function BundlesSection({ onAddToCart }) {
  if (!bundles || bundles.length === 0) return null;

  const handleAddBundle = (bundle) => {
    if (!onAddToCart) return;
    // treat bundle as its own product in the cart
    onAddToCart({
      id: `bundle-${bundle.id}`,
      name: bundle.name,
      price: bundle.price,
      category: "bundle",
    });
  };

  return (
    <section className="eg-section" id="bundles">
      <h2 className="eg-section-title">Bundles</h2>
      <p className="eg-section-subtitle">
        Pair-ups that make sense. Hoodies and tees built to live together.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {bundles.map((bundle) => (
          <article key={bundle.id} className="eg-product-card">
            {bundle.image && (
              <div
                style={{
                  marginBottom: "0.75rem",
                  borderRadius: "0.75rem",
                  overflow: "hidden",
                }}
              >
                <img
                  src={bundle.image}
                  alt={bundle.name}
                  style={{
                    width: "100%",
                    display: "block",
                    objectFit: "cover",
                  }}
                />
              </div>
            )}

            <header className="eg-product-header">
              <div>
                <h3 className="eg-product-name">{bundle.name}</h3>
                {bundle.tag && (
                  <div className="eg-product-category">{bundle.tag}</div>
                )}
              </div>
              <div className="eg-product-price">${bundle.price}</div>
            </header>

            <p className="eg-product-description">{bundle.description}</p>

            {bundle.includes && (
              <ul
                style={{
                  marginTop: "0.4rem",
                  marginBottom: "0.4rem",
                  paddingLeft: "1.1rem",
                  fontSize: "0.8rem",
                  color: "#9ca3af",
                }}
              >
                {bundle.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            <button
              type="button"
              style={{
                marginTop: "0.4rem",
                padding: "0.5rem 0.9rem",
                borderRadius: "999px",
                border: "none",
                backgroundColor: "#22c55e",
                color: "#020705",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
              onClick={() => handleAddBundle(bundle)}
            >
              Add bundle to cart
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
