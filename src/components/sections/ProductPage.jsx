import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../config/product";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <div style={{ padding: "4rem", color: "white" }}>
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <section className="eg-section" style={{ paddingTop: "6rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            borderRadius: "1rem",
            marginBottom: "1.5rem",
          }}
        />

        <h1 className="eg-section-title">{product.name}</h1>
        <p className="eg-section-subtitle">{product.category}</p>

        <p style={{ marginTop: "1rem", color: "#ccc", fontSize: "1rem" }}>
          {product.description}
        </p>

        <div style={{ marginTop: "1rem", fontSize: "1.5rem" }}>
          {product.price ? `$${product.price}` : "Promo asset"}
        </div>

        {product.sizes && (
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              marginTop: "1.5rem",
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

        <button
          style={{
            marginTop: "2rem",
            padding: "0.75rem 1.25rem",
            borderRadius: "999px",
            border: "none",
            backgroundColor: "#22c55e",
            color: "#020705",
            fontWeight: 600,
          }}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
}
