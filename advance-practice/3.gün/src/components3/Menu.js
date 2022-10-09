import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";

const Menu = () => {
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink>
            <Link to="/">Home</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/register">Register</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/login">Login</Link>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Menu;
