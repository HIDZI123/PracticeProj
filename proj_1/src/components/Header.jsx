/* import React from 'react'*/
import { Link } from "react-router-dom";
import "../styles/header.scss";

const Header = () => {
  return (
    <>
      <nav>
        <h1>MyFarma</h1>
        <main>
          <Link to="/" className="homme">Home</Link>
          <Link to="/contact"className="contact">Contact</Link>
          <Link to="/contact"className="guidlines">Guidlines</Link>
          <Link to="/contact"className="nearest">Nearest Seller</Link>
          <Link to="/sign" className="sign">Sign-In</Link>
        </main>
      </nav>
    </>
  );
};

export default Header;
