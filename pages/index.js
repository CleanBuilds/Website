import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from '../public/PhotoShopped.png'

const Welcome = () => {
  return (
    <div className="about-wrapper">
      <div className="about">
      <h2 className="logo"> <img
                  src={Logo.src}
                  className="cart-product-image"
               
                /></h2>
        <p className="description">
        This is a startup company with goals of bringing high quality desktop
          computers to market. Our goal is to not cut corners, allowing our
          computers to be both clean in design and performance.The goal is to be
          one of the first to market with the new generation of desktop
          computers said to release end of Q4. So when everybody is getting that new computer, you'll know where to come.
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
