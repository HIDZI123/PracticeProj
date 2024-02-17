/* import React from 'react'*/
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav>
        <h1>MyFarma</h1>
        <main>
          <Link href="/">Home</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Sign-In</Link>

        </main>
      </nav>
    </>
  );
};

export default Header;
