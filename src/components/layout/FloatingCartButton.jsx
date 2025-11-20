import React from "react";

export default function FloatingCartButton({ visible, cartCount, onClick }) {
  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        position: "fixed",
        right: "1.25rem",
        bottom: "1.25rem",
        zIndex: 50,
        borderRadius: "999px",
        padding: "0.7rem 1rem",
        border: "none",
        backgroundColor: "#4ade80",
        backgroundColor: "",
        color: "#020617",
        fontWeight: 600,
        fontSize: "0.85rem",
        boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
        cursor: "pointer",
      }}
    >
      Cart{typeof cartCount === "number" ? ` (${cartCount})` : ""}
    </button>
  );
}
