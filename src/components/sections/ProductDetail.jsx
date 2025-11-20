import React from "react";

export default function ProductDetail({ product, onClose, onAddToCart }) {
  if (!product) return null;

  const priceLabel =
    product.price && product.price > 0 ? `$${product.price}` : "Promo asset";

  return (
    <div className="eg-modal-backdrop">
      <div className="eg-modal-panel">
        <div className="eg-modal-header">
          <h2 className="eg-modal-title">{product.name}</h2>
          <button
            type="button"
            className="eg-modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="eg-modal-body">
          {product.image && (
            <div className="eg-modal-image-wrap">
              <img
                src={product.image}
                alt={product.name}
                className="eg-modal-image"
              />
            </div>
          )}

          <div className="eg-modal-info">
            <div className="eg-modal-price-row">
              <span className="eg-modal-price">{priceLabel}</span>
              {product.category && (
                <span className="eg-tag">
                  {product.category.toUpperCase()}
                </span>
              )}
            </div>

            <p className="eg-body-text">{product.description}</p>

            {product.sizes && product.sizes.length > 0 && (
              <div className="eg-modal-sizes">
                <div className="eg-modal-sizes-label">Available sizes</div>
                <div className="eg-modal-sizes-grid">
                  {product.sizes.map((size) => (
                    <span key={size} className="eg-size-pill">
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <button
              type="button"
              className="eg-primary-cta eg-modal-cta"
              onClick={() => onAddToCart && onAddToCart(product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
