import React from "react";
import "./Navbar.css";

const Navbar = ({ setCategory }) => {
  return (
    <nav className="nav">
      <div className="logo">iNews</div>
      <ul className="nav-ul">
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
      </ul>
    </nav>
  );
};

export default Navbar;
