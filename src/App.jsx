import React from "react";
import Layout from "./components/layout/Layout";
import Header from "./components/layout/Header";
import HeroSection from "./components/sections/HeroSection";
import ProductGrid from "./components/sections/ProductGrid";
import BundlesSection from "./components/sections/BundlesSection";
import siteContent from "./config/siteContent";
import theme from "./config/theme";

function App() {
  const { features, contact, story } = siteContent;

  return (
    <Layout>
      <Header />
      <HeroSection />

      {/* Products */}
      <ProductGrid />

      {/* Bundles */}
      <BundlesSection />

      {/* Features */}
      <section
        id={features.id}
        className="eg-section"
        style={{ borderTop: `1px solid ${theme.colors.border}` }}
      >
        <h2 className="eg-section-title">{features.title}</h2>
        <p className="eg-section-subtitle">{features.subtitle}</p>
        {features.list?.map((item) => (
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
    </Layout>
  );
}

export default App;
