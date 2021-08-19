import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar expand="lg" className="header" >
      <Navbar.Brand>
        <Link to="/">ABC Insurance</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav navbarScroll>
          {NavLinkItems.map((item, idx) => (
            <NavLink
              to={item.link}
              className="nav-link"
              activeClassName="active"
              key={idx}
            >
              {item.name}
            </NavLink>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const NavLinkItems = [
  { name: "Home", link: "/" },
  { name: "All Policies", link: "/all-policies" },
];
