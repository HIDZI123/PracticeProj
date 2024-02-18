/* import React from 'react'*/
import { BsArrowUpRightSquare } from "react-icons/bs";
import {Link} from "react-router-dom";
import "../styles/footer.scss";
const Footer = () => {
  return (
    <>
    <div className="div_foot">
      <div>
        <div className="col_1">
          <h1>MyFarma</h1>
          <div>
              <p>&copy; BitBusters all rights reserved  </p>
          </div>
        </div>

        <div className="col_2">
            <h1>Explore</h1>
            <Link to={"/"}>Buy/Sell</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/contact"}>Guidlines</Link>
        </div>

        <div className="col_3">
            <h1>Contact Us</h1>
            <main>
              <a href="">Github</a>
              <a href="">Instagram</a>
              <a href="">Email</a>
              <a href="">Sponsor us <BsArrowUpRightSquare/> </a>
            </main>

        </div>
      </div>
    </div>
    </>
  );
}

export default Footer