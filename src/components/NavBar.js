import { NavLink } from "react-router-dom";
import React from "react";

const NavBar = () => {
    return (
      <div className="navBar">
        <div className="name">
          Walter Miller Van Hanken
        </div>
        <div className="navLinks">
          <NavLink to="/" exact activeClassName="active">Home</NavLink>
          <NavLink to="/projects" activeClassName="active">Projects</NavLink>
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </div>
      </div>
    );
}

export default NavBar