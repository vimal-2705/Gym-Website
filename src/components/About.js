import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-container">
      <h3 className="heading">BODYTECH</h3>
      <p>
        zapmeta.ws has been visited by 1M+ users in the past month Find Top
        Rated Gyms. Search Faster, Better and Smarter at ZapMeta Now!
        Information 24/7 zapmeta.
        <br></br>ws has been visited by 1M+ users in the pastmonth Find Top
        Rated Gyms. Search Faster, Better and Smarter at ZapMeta Now!
        Information 24/7
      </p>
      <Link to="/aboutus"><button className="about-btn">Why Us ?</button></Link>
    </div>
  );
}

export default About;
