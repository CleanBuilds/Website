import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../public/PhotoShopped.png";

const Welcome = () => {
  return (
    <div className="about-wrapper">
      <div className="about">
        <h2 className="logo">
          {" "}
          <img src={Logo.src} className="FrontPageImage" />
        </h2>
        <p className="description">
          CleanBuilds brings high-end desktop computing right to your home. Our
          standard for computer design and performance is one to raise the bar
          for everyday consumers. We believe your workstation is important, and
          do our best to deliver the best quality product to our customers. Our
          small team of experts assembles each computer individually in house,
          and then ship the completed build ASAP. Build22LLC has goals to be one of the
          first to market with the new generation of desktop computers said to
          release end of Q4. If your looking to splurge on a new computer, look
          no further.
        </p>
        <Link href="/store">
          <button type="button" width="300px" className="btn">
            Begin Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
