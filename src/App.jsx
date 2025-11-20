import React from "react";
import Layout from "./components/layout/Layout";
import Header from "./components/layout/Header";
import HeroSection from "./components/sections/HeroSection";
import ProductGrid from "./components/sections/ProductGrid";
import ProductDetail from "./components/sections/ProductDetail";
import CartPanel from "./components/sections/CartPanel";
import siteContent from "./config/siteContent";
import theme from "./config/theme";

function App() {
  const {
    features = {},
    products = {},
    contact = {},
    story = {},
    standard = {},
  } = siteContent;

  const borderColor = theme?.colors?.border ?? "#122019";

  // Popular tab state
  const [showPopularOnly, setShowPopularOnly] = React.useState(true);
  const productItems = products.items ?? [];
  const popularItems = productItems.filter((item) => item.popular);
  const displayedProducts = showPopularOnly ? popularItems : productItems;

  // NEW: product detail + cart state
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [cartItems, setCartItems] = React.useState([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    if (!product) return;
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity ?? 1) + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price ?? 0,
          category: product.category,
          quantity: 1,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId, delta) => {
    setCartItems((prev) => {
      return prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: (item.quantity ?? 1) + delta }
            : item
        )
        .filter((item) => (item.quantity ?? 1) > 0);
    });
  };

  const handleClearCart = () => setCartItems([]);

  const cartCount = cartItems.reduce(
    (sum, item) => sum + (item.quantity ?? 1),
    0
  );

  return (
    <Layout>
      <Header />
      <HeroSection />

      {/* Product grid using real images */}
      <ProductGrid onViewDetails={handleViewDetails} />

      {/* FEATURES SECTION */}
      {features && (
        <section
          id={features.id ?? "features"}
          className="eg-section"
          style={{ borderTop: `1px solid ${borderColor}` }}
        >
          <h2 className="eg-section-title">{features.title}</h2>
          <p className="eg-section-subtitle">{features.subtitle}</p>

          <div className="eg-feature-grid">
            {(features.items ?? []).map((item) => (
              <article key={item.title} className="eg-card">
                <h3 className="eg-card-title">{item.title}</h3>
                <p className="eg-card-body">{item.description ?? item.body}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* POPULAR PIECES SECTION */}
      {products && (
        <section
          id={products.id ?? "popular"}
          className="eg-section"
          style={{ borderTop: `1px solid ${borderColor}` }}
        >
          <div className="eg-section-header-row">
            <div>
              <h2 className="eg-section-title">Popular pieces</h2>
              <p className="eg-section-subtitle">
                Hoodies and sweats people reach for first.
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
                style={{ borderColor }}
              >
                <header className="eg-product-header">
                  <div>
                    <h3 className="eg-product-name">{item.name}</h3>
                    {item.category && (
                      <div className="eg-product-category">
                        {item.category}
                      </div>
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
      )}

      {/* STANDARD / STORY SECTION */}
      {standard && (
        <section
          id={standard.id ?? "standard"}
          className="eg-section eg-standard-section"
          style={{
            borderTop: `1px solid ${borderColor}`,
            background:
              "radial-gradient(circle at top left, rgba(34,197,94,0.18), transparent 55%)",
          }}
        >
          <div className="eg-standard-layout">
            <div className="eg-standard-text">
              <h2 className="eg-section-title">{standard.title}</h2>
              <p className="eg-section-subtitle">{standard.subtitle}</p>

              <div className="eg-text-block">
                {(standard.paragraphs ?? []).map((p, idx) => (
                  <p key={idx} className="eg-body-text">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="eg-standard-highlight">
              <div className="eg-standard-badge">
                Quiet flex, heavy standard.
              </div>
              <p className="eg-body-text">
                The pieces aren’t just for “supporting a local brand.” They’re
                built to be your first choice hoodie and sweats, not your
                backup.
              </p>
              <p className="eg-body-text eg-text-muted">
                If you’re going to wear something every week, it might as well
                carry a standard you actually believe in.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* STORY SECTION */}
      {story && (
        <section
          id={story.id ?? "story"}
          className="eg-section"
          style={{ borderTop: `1px solid ${borderColor}` }}
        >
          <h2 className="eg-section-title">{story.title}</h2>
          <p className="eg-section-subtitle">{story.subtitle}</p>

          <div className="eg-text-block">
            {(story.paragraphs ?? []).map((p, idx) => (
              <p key={idx} className="eg-body-text">
                {p}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* CONTACT SECTION */}
      {contact && (
        <section
          id={contact.id ?? "contact"}
          className="eg-section"
          style={{ borderTop: `1px solid ${borderColor}` }}
        >
          <h2 className="eg-section-title">{contact.title}</h2>
          <p className="eg-section-subtitle">{contact.subtitle}</p>
          {contact.email && (
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
          )}
        </section>
      )}

      {/* PRODUCT DETAIL MODAL */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={handleCloseDetails}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* CART FLOATING BUTTON */}
      <button
        type="button"
        className="eg-cart-fab"
        onClick={() => setIsCartOpen(true)}
      >
        <span>Cart</span>
        {cartCount > 0 && <span className="eg-cart-fab-count">{cartCount}</span>}
      </button>

      {/* CART PANEL */}
      <CartPanel
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onClear={handleClearCart}
      />
    </Layout>
  );
}

export default App;
