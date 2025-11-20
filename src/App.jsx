import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Header from "./components/layout/Header";
import HeroSection from "./components/sections/HeroSection";
import ProductGrid from "./components/sections/ProductGrid";
import BundlesSection from "./components/sections/BundlesSection";
import ProductPage from "./components/sections/ProductPage";
import siteContent from "./config/siteContent";
import theme from "./config/theme";
import CartPanel from "./components/sections/CartPanel";
import FloatingCartButton from "./components/layout/FloatingCartButton";



function App() {
  const { features, contact, story } = siteContent;
    // ---------- CART STATE ----------
  const [cartItems, setCartItems] = React.useState(() => {
    if (typeof window === "undefined") return [];
    try {
      const stored = window.localStorage.getItem("eg_cart");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
    const [showFloatingCart, setShowFloatingCart] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Show floating cart once user scrolls down a bit (tweak 120 if you want)
      setShowFloatingCart(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const [isCartOpen, setIsCartOpen] = React.useState(false);

  React.useEffect(() => {
    try {
      window.localStorage.setItem("eg_cart", JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleChangeQty = (id, delta) => {
  setCartItems((prev) =>
    prev
      .map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + delta }
          : item
      )
      .filter((item) => item.qty > 0)
  );
};

  const handleClearCart = () => setCartItems([]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  // ---------- END CART STATE ----------

   return (
    <Layout>
      <Header
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Route-based main content */}
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ProductGrid onAddToCart={handleAddToCart} />
              <BundlesSection onAddToCart={handleAddToCart} />
            </>
          }
        />

        {/* Individual product page */}
        <Route
          path="/product/:id"
          element={<ProductPage onAddToCart={handleAddToCart} />}
        />
      </Routes>

      {/* Features */}
      <section
        id={features.id}
        className="eg-section"
        style={{ borderTop: `1px solid ${theme.colors.border}` }}
      >
        <h2 className="eg-section-title">{features.title}</h2>
        <p className="eg-section-subtitle">{features.subtitle}</p>
        {Array.isArray(features.list) &&
          features.list.map((item) => (
            <div key={item.title} className="eg-feature-item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
      </section>

      {/* Story */}
      <section id={story.id} className="eg-section">
        <h2 className="eg-section-title">{story.title}</h2>
        <p className="eg-section-subtitle">{story.description}</p>
      </section>

      {/* Contact */}
      <section id={contact.id} className="eg-section">
        <h2 className="eg-section-title">{contact.title}</h2>
        <p className="eg-section-subtitle">{contact.email}</p>
      </section>

      {/* Cart panel */}
      <CartPanel
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onRemove={handleRemoveFromCart}
        onChangeQty={handleChangeQty}
        onClear={handleClearCart}
      />
      {/* Floating cart button when header is off-screen */}
      <FloatingCartButton
        visible={showFloatingCart}
        cartCount={cartCount}
        onClick={() => setIsCartOpen(true)}
      />
    </Layout>
  );
}

export default App;
