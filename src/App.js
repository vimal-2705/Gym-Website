import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Services from "./pages/Services";
import Trainers from "./pages/Trainers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
