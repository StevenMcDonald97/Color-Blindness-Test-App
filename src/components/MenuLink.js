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
      fontFamily: "inherit",
      fontWeight: 'bold',
      color: "inherit",
    },
    activeLink: {
      borderBottom: "1.5px solid #212529",
      fontFamily: "inherit",
    },
    menuItem: {
      fontFamily: "inherit",
      fontSize: 14,    
    },
  };
  return (
    <div className="navbar">
      <div className="nav-wrapper">
        <span>
          <Button style={styles.link}>
            <NavLink exact to="/" activeStyle={styles.activeLink}>
              HOME
            </NavLink>
          </Button>
        </span>
        <span>
          <Button style={styles.link}>
            <NavLink exact to="/about-us" activeStyle={styles.activeLink}>
              TEAM
            </NavLink>
          </Button>
        </span>
        <span>
          <Button
            aria-haspopup="true"
            onClick={handleClick}
            style={styles.link}
          >
            INFORMATION <RiArrowDropDownLine />
          </Button>
          <Menu
            id="simple-menu"
            style={styles.menu}
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
                COLOR BLINDNESS
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink to="/about-hearing-disability" style={styles.menuItem}>
                HEARING DISABILITY
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
              TAKE A TEST
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
              CONTACT US
            </NavLink>
          </Button>
        </span>
      </div>
    </div>
  );
};

export default MenuLink;
