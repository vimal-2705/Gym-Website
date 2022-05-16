import React from "react";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import "animate.css";
import CarouselContainer from "../components/CarouselContainer";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Services from "../components/Services";
import Trainers from "../components/Trainers";
import Packages from "../components/Packages";
import Shop from "../components/Shop";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Locations from "../components/Locations";

function Home() {
  return (
    <div>
      <CarouselContainer />
      <Services />
      <About />
      <Trainers />
      <Packages />
      <Shop />
      <Locations />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
