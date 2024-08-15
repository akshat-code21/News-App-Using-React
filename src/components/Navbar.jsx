import React from "react";
import { useState } from "react";
import "./Navbar.css";

const Navbar = ({ setCategory }) => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className="logo">iNews</div>
      <div className={`nav-ul ${isOpen ? "active" : ""}`}>
        <li>
          <button onClick={() => setCategory("general")}>Home</button>
        </li>
        <li>
          <button onClick={() => setCategory("technology")}>Technology</button>
        </li>
        <li>
          <button onClick={() => setCategory("business")}>Business</button>
        </li>
        <li>
          <button onClick={() => setCategory("health")}>Health</button>
        </li>
        <li>
          <button onClick={() => setCategory("science")}>Science</button>
        </li>
        <li>
          <button onClick={() => setCategory("sports")}>Sports</button>
        </li>
        <li>
          <button onClick={() => setCategory("entertainment")}>Entertainment</button>
        </li>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>
    </nav>
  );
};

export default Navbar;
