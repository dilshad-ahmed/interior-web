import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Brands from "./components/Brands/Brands";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Testimonial from "./components/Testimonial/Testimonial";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Brands />
      <Services />
      <Banner />
      <Banner2 />
      <Testimonial />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default App;
