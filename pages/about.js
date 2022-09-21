import React from "react";
import Link from "next/link";
import Logo from "../public/PhotoShopped.png";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about">
        <h2 className="logo">
          {" "}
          <img src={Logo.src} className="FrontPageImage" />
        </h2>
        <p className="description">
          Build22 LLC has goals of bringing up to date hardware and software
          solutions to the market, starting with high quality desktop computers.
          With CleanBuilds, build22 wishes to be one of the first to consumer
          market with the new generation of desktop computer components said to
          release end of 2022
        </p>
        <Link href="/store">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
