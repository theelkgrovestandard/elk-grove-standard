import React from "react";

export default function CartPanel({
  isOpen,
  items,
  onClose,
  onRemove,
  onChangeQty,
  onClear,
}) {
  if (!isOpen) return null;

  const total = items.reduce(
    (sum, item) => sum + (item.price || 0) * item.qty,
    0
  );

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.6)",
        zIndex: 40,
        display: "flex",
        justifyContent: "flex-end",
      }}
      onClick={onClose}
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "380px",
          backgroundColor: "#020817",
          borderLeft: "1px solid #1f2933",
          padding: "1.25rem",
          color: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <h2 style={{ fontSize: "1.25rem", fontWeight: 600 }}>Cart</h2>
          <button
            onClick={onClose}
            style={{
              border: "none",
              background: "transparent",
              color: "#9ca3af",
              cursor: "pointer",
              fontSize: "0.9rem",
            }}
          >
            Close ✕
          </button>
        </header>

        {items.length === 0 ? (
          <p style={{ color: "#9ca3af" }}>Your cart is empty.</p>
        ) : (
          <>
            <div
              style={{
                flexGrow: 1,
                overflowY: "auto",
                paddingRight: "0.25rem",
              }}
            >
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    padding: "0.75rem 0",
                    borderBottom: "1px solid #111827",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0.25rem",
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 500 }}>{item.name}</div>
                      <div style={{ fontSize: "0.8rem", color: "#9ca3af" }}>
                        {item.category || "Item"}
                      </div>
                    </div>
                    <button
                      onClick={() => onRemove(item.id)}
                      style={{
                        border: "none",
                        background: "transparent",
                        color: "#6b7280",
                        cursor: "pointer",
                        fontSize: "0.8rem",
                      }}
                    >
                      Remove
                    </button>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "0.85rem",
                    }}
                  >
                    <div>
                      ${item.price} × {item.qty}
                    </div>
                    <div>
                      <button
                        onClick={() => onChangeQty(item.id, -1)}
                        style={{
                          borderRadius: "999px",
                          border: "1px solid #374151",
                          background: "transparent",
                          color: "white",
                          width: "1.5rem",
                          height: "1.5rem",
                          cursor: "pointer",
                          marginRight: "0.25rem",
                        }}
                      >
                        -
                      </button>
                      <button
                        onClick={() => onChangeQty(item.id, +1)}
                        style={{
                          borderRadius: "999px",
                          border: "1px solid #374151",
                          background: "transparent",
                          color: "white",
                          width: "1.5rem",
                          height: "1.5rem",
                          cursor: "pointer",
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <footer style={{ marginTop: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.5rem",
                }}
              >
                <span style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
                  Subtotal
                </span>
                <span style={{ fontWeight: 600 }}>${total.toFixed(2)}</span>
              </div>

              <button
                onClick={onClear}
                style={{
                  width: "100%",
                  padding: "0.55rem 0.9rem",
                  borderRadius: "999px",
                  border: "1px solid #374151",
                  background: "transparent",
                  color: "#9ca3af",
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  marginBottom: "0.5rem",
                }}
              >
                Clear cart
              </button>

              <button
                style={{
                  width: "100%",
                  padding: "0.7rem 0.9rem",
                  borderRadius: "999px",
                  border: "none",
                  backgroundColor: "#22c55e",
                  color: "#020705",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                }}
                onClick={() =>
                  alert(
                    "Checkout flow coming next – cart system is working though."
                  )
                }
              >
                Checkout
              </button>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
