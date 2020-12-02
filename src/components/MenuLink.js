import React from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../assets/logo.svg";

const MenuLink = () => {
  const styles = {
    link: {
      display: "flex",
      alignItems: "center",
      color: "inherit",
      padding: "5px 10px",
      margin: "5px",
      fontWeight: "bold"
    },
    activeLink: {
      backgroundColor: "#054355",
      color: "#f0efeb",
      borderRadius: "5%",
      padding: "5px 10px",
      margin: "5px",
      fontWeight: "bold"
    },
    text: {
      fontSize: 25,
      marginLeft: 10
    }
  };
  return (
    <div className="navbar">
      <div className="nav-wrapper">
        <div className="logo">
          <NavLink
            exact
            to="/"
            style={styles.link}
          >
            <img src={logoImg} alt="logo" />
            <div style={styles.text}>Color[Test]</div>
          </NavLink>
        </div>
        <span></span>
        <span>
          <NavLink
            to="/about"
            activeStyle={styles.activeLink}
            style={styles.link}
          >
            WHAT IS IT?
          </NavLink>
        </span>
        <span>
          <NavLink
            to="/test"
            activeStyle={styles.activeLink}
            style={styles.link}
          >
            TAKE A TEST
          </NavLink>
        </span>
        <span>
          <NavLink
            to="/contact"
            activeStyle={styles.activeLink}
            style={styles.link}
          >
            CONTACT US
          </NavLink>
        </span>
      </div>
    </div>
  );
};

export default MenuLink;
