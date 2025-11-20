import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../../config/product";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <section className="eg-section" style={{ paddingTop: "6rem" }}>
        <div style={{ color: "white" }}>
          <h1 className="eg-section-title">Product not found</h1>
          <p className="eg-section-subtitle">
            This piece isn’t live right now.
          </p>
          <Link
            to="/"
            style={{ color: "#22c55e", marginTop: "1rem", display: "inline-block" }}
          >
            ← Back to collection
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="eg-section" style={{ paddingTop: "6rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              borderRadius: "1rem",
              marginBottom: "1.5rem",
            }}
          />
        )}

        <h1 className="eg-section-title">{product.name}</h1>
        {product.category && (
          <p className="eg-section-subtitle">{product.category}</p>
        )}

        <p style={{ marginTop: "1rem", color: "#ccc", fontSize: "1rem" }}>
          {product.description}
        </p>

        <div style={{ marginTop: "1rem", fontSize: "1.5rem" }}>
          {product.price ? `$${product.price}` : "Promo asset"}
        </div>

        {product.sizes && product.sizes.length > 0 && (
          <div
            style={{
              marginTop: "1.5rem",
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
            }}
          >
            {product.sizes.map((size) => (
              <span
                key={size}
                style={{
                  padding: "0.35rem 1rem",
                  borderRadius: "999px",
                  border: "1px solid #22c55e",
                }}
              >
                {size}
              </span>
            ))}
          </div>
        )}

        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <button
            type="button"
            style={{
              padding: "0.75rem 1.25rem",
              borderRadius: "999px",
              border: "none",
              backgroundColor: "#22c55e",
              color: "#020705",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Add to cart
          </button>

          <Link
            to="/"
            style={{ color: "#9ca3af", fontSize: "0.9rem" }}
          >
            Back to collection
          </Link>
        </div>
      </div>
    </section>
  );
}
