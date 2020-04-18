import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link className="logo" to="/">
        Home
      </Link>
      <div className="links">
        <Link to="/apropos">A propos</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Nav;
