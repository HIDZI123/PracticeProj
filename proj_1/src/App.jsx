/* import React from 'react' */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Sign from "./components/Sign";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/header.scss";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
