import {React, useEffect} from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="aboutus-container">
      <div className="aboutus-parallax">
        <h1 className="page-heading">
          ABOUT <span style={{ color: "rgb(223, 126, 0)" }}>US</span>
        </h1>
        <p>
          The body tech was first established on 25th May 2018 in SIDCO
          industrial Estate which is now a top player among fitness centres in
          Coimbatore.
        </p>
        <i
          class="fa fa-angle-double-down"
          aria-hidden="true"
          style={{ color: "rgb(233, 140, 0)", fontSize: "40px" }}
        ></i>
      </div>
      <div className="aboutus1">
        <div className="about-left1"></div>
        <div className="about-right1">
          <div className="heading-bold">ABOUT US</div>
          <div className="aboutus-text">
            The body tech was first established on 25th May 2018 in SIDCO
            industrial Estate which is now a top player among fitness centres in
            Coimbatore.The prime motive of our gym is to spread awareness about
            health and fitness among people.
            <br />
            <br />
            Our gym is known to provide top service in the following categories:
            Unisex gym , Cardio, Weight-loss program, Weight-gain program,
            bodybuilding, Nutritional guidance, Strength training for
            Sportsperson, Personal training. Our gym employs individuals that
            are dedicated towards their respective roles and put a lot of effort
            to achieve the common vision.Turn your passion into a lifestyle and
            go for Healthy Life with Body Tech.
          </div>
        </div>
      </div>

      <div className="aboutus2">
        <div className="about-left2">
          <div className="heading-bold">ACHIEVE YOUR GOALS WITH US</div>
          <div className="aboutus-text">
            The body tech was first established on 25th May 2018 in SIDCO
            industrial Estate which is now a top player among fitness centres in
            Coimbatore.The prime motive of our gym is to spread awareness about
            health and fitness among people.
            <br />
            <br />
            Our gym is known to provide top service in the following categories:
            Unisex gym , Cardio, Weight-loss program, Weight-gain program,
            bodybuilding, Nutritional guidance, Strength training for
            Sportsperson, Personal training. Our gym employs individuals that
            are dedicated towards their respective roles and put a lot of effort
            to achieve the common vision.Turn your passion into a lifestyle and
            go for Healthy Life with Body Tech.
          </div>
        </div>
        <div className="about-right2"></div>
      </div>

      <div className="aboutus3">
        <div className="about-left3"></div>
        <div className="about-right3">
          <div className="heading-bold">PLAN YOUR FITNESS WITH US!</div>
          <div className="aboutus-text">
            The body tech was first established on 25th May 2018 in SIDCO
            industrial Estate which is now a top player among fitness centres in
            Coimbatore.The prime motive of our gym is to spread awareness about
            health and fitness among people.
            <br />
            <br />
            Our gym is known to provide top service in the following categories:
            Unisex gym , Cardio, Weight-loss program, Weight-gain program,
            bodybuilding, Nutritional guidance, Strength training for
            Sportsperson, Personal training. Our gym employs individuals that
            are dedicated towards their respective roles and put a lot of effort
            to achieve the common vision.Turn your passion into a lifestyle and
            go for Healthy Life with Body Tech.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
