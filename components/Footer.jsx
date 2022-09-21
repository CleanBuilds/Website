import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="footer-container">
 
      {/* create links to terms of service and privacy policy */}

     <p className="footer-links">
        <a href="/termsOfService">|Terms of Service</a> | <a href="/privacyPolicy">Privacy Policy</a> | <a href="#">Contact Us</a>| <a href="/">About Us|</a>
      </p>
        
      <p>2022 Computer Shop All rights reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        </p>
    
      


    </div>
  );
};
