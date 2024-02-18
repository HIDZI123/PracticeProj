/* import React from 'react'*/
import { Link } from "react-router-dom";
import "../styles/header.scss";

const Header = () => {
  return (
    <>
      <nav>
        <h1>MyFarma</h1>
        <main>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/contact">Guidlines</Link>
          <Link to="/contact">Nearest Seller</Link>
          <Link to="/sign" className="Box">Sign-In</Link>
        </main>
      </nav>
    </>
  );
};

export default Header;
