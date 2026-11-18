
import React from "react";
import Header from "../components/Header";
import Footer from "../components/footer";

function Home() {
  return (
    <div id="home">
      <Header />

      <section className="hero-banner">
        {/* Banner content */}
      </section>

      <section className="category-section">
        {/* Fruits and vegetables */}
      </section>

      <section className="products-section">
        {/* Product cards */}
      </section>

      <Footer />
    </div>
  );
}

export default Home;
