import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../config/product";

export default function ProductGrid({ onAddToCart}) {
  return (
    <section className="eg-section" id="products-grid">
      <h2 className="eg-section-title">Shop the collection</h2>
      <p className="eg-section-subtitle">
        Tees, hoodies, and artwork built around the Elk Grove Standard.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {products.map((product) => (
          <article
            key={product.id}
            className="eg-product-card"
            style={{ borderColor: "#122019" }}
          >
            {product.image && (
              <div
                style={{
                  marginBottom: "0.75rem",
                  borderRadius: "0.75rem",
                  overflow: "hidden",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    display: "block",
                    objectFit: "cover",
                    transition: "transform 0.2s ease-out",
                  }}
                />
              </div>
            )}

            <header className="eg-product-header">
              <div>
                <h3 className="eg-product-name">{product.name}</h3>
                {product.category && (
                  <div className="eg-product-category">
                    {product.category.toUpperCase()}
                  </div>
                )}
              </div>
              <div className="eg-product-price">
                {product.price > 0 ? `$${product.price}` : "Promo asset"}
              </div>
            </header>

            <p className="eg-product-description">{product.description}</p>

            {product.sizes && product.sizes.length > 0 && (
              <div
                style={{
                  marginTop: "0.5rem",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.35rem",
                  fontSize: "0.78rem",
                }}
              >
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    style={{
                      borderRadius: "999px",
                      padding: "0.12rem 0.5rem",
                      border: "1px solid #122019",
                    }}
                  >
                    {size}
                  </span>
                ))}
              </div>
            )}

            <Link
              to={`/product/${product.id}`}
              style={{
                marginTop: "0.9rem",
                padding: "0.55rem 0.9rem",
                borderRadius: "999px",
                border: "none",
                backgroundColor: "#4ade80",
                color: "#020705",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                display: "inline-block",
                textDecoration: "none",
              }}
            >
              View details
            </Link>
            {onAddToCart && (
              <button
                type="button"
                onClick={() =>
                  onAddToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    category: product.category,
                  })
                }
                style={{
                  marginTop: "0.9rem",
                  padding: "0.55rem 0.9rem",
                  borderRadius: "999px",
                  border: "1px solid #374151",
                  backgroundColor: "transparent",
                  color: "#e5e7eb",
                  fontSize: "0.8rem",
                  cursor: "pointer",
                }}
              >
                Add to cart
              </button>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}


