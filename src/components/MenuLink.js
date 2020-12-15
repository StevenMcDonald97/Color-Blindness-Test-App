import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { RiArrowDropDownLine } from "react-icons/ri";

const MenuLink = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = {
    link: {
      display: "flex",
      fontSize: 18,
      alignItems: "center",
      fontWeight: "bold",
      fontFamily: "inherit",
      textTransform: "capitalize",
      color: "inherit",
    },
    activeLink: {
      borderBottom: "1.5px solid #f0efeb",
      fontFamily: "inherit",
      fontWeight: "bold",
    },
    menuItem: {
      fontFamily: "inherit",
    },
  };
  return (
    <div className="navbar">
      <span style={styles.link}>
        <NavLink exact to="/">
          LOGO
        </NavLink>
      </span>
      <div className="nav-wrapper">
        <span>
          <Button style={styles.link}>
            <NavLink exact to="/" activeStyle={styles.activeLink}>
              Home
            </NavLink>
          </Button>
        </span>
        <span>
          <Button
            aria-haspopup="true"
            onClick={handleClick}
            style={styles.link}
          >
            Information <RiArrowDropDownLine />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            elevation={0}
            getContentAnchorEl={null}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <MenuItem onClick={handleClose}>
              <NavLink to="/about-color-blind" style={styles.menuItem}>
                Color Blindness
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink to="/about-hearing-disability" style={styles.menuItem}>
                Hearing Disability
              </NavLink>
            </MenuItem>
          </Menu>
        </span>

        <span>
          <Button style={styles.link}>
            <NavLink
              to="/tests"
              style={styles.link}
              activeStyle={styles.activeLink}
            >
              Take a Test
            </NavLink>
          </Button>
        </span>

        <span>
          <Button style={styles.link}>
            <NavLink
              to="/contact"
              activeStyle={styles.activeLink}
              style={styles.link}
            >
              Contact Us
            </NavLink>
          </Button>
        </span>
      </div>
    </div>
  );
};

export default MenuLink;
