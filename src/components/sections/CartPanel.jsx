import React from "react";

export default function CartPanel({
  isOpen,
  items,
  onClose,
  onUpdateQuantity,
  onClear,
}) {
  const hasItems = items && items.length > 0;

  const total = items?.reduce((sum, item) => {
    const price = item.price ?? 0;
    return sum + price * (item.quantity ?? 1);
  }, 0) ?? 0;

  return (
    <aside className={`eg-cart-panel ${isOpen ? "eg-cart-panel--open" : ""}`}>
      <div className="eg-cart-header">
        <h2 className="eg-cart-title">Cart</h2>
        <button
          type="button"
          className="eg-cart-close"
          onClick={onClose}
          aria-label="Close cart"
        >
          ×
        </button>
      </div>

      {!hasItems && (
        <p className="eg-body-text eg-cart-empty">
          No items yet. Start with a hoodie or tee that actually means
          something.
        </p>
      )}

      {hasItems && (
        <>
          <div className="eg-cart-items">
            {items.map((item) => (
              <div key={item.id} className="eg-cart-item">
                <div className="eg-cart-item-main">
                  <div className="eg-cart-item-name">{item.name}</div>
                  <div className="eg-cart-item-meta">
                    {item.category && item.category.toUpperCase()}
                  </div>
                  <div className="eg-cart-item-price">${item.price}</div>
                </div>

                <div className="eg-cart-item-controls">
                  <button
                    type="button"
                    onClick={() => onUpdateQuantity(item.id, -1)}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => onUpdateQuantity(item.id, +1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="eg-cart-footer">
            <div className="eg-cart-total-row">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button
              type="button"
              className="eg-primary-cta eg-cart-checkout"
              onClick={() => alert("Real checkout coming soon 🤏")}
            >
              Checkout
            </button>

            <button
              type="button"
              className="eg-secondary-cta eg-cart-clear"
              onClick={onClear}
            >
              Clear cart
            </button>
          </div>
        </>
      )}
    </aside>
  );
}
