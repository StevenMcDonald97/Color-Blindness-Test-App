import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { RiArrowDropDownLine } from "react-icons/ri";

const MenuLink = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [dropDownClass, setDropDownClass]= useState("");
  const [menuWrapClass, setMenuWrapClass]= useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  const clickToggleButton = () =>{
    if (dropDownClass===""){
      setDropDownClass("buttonOpen");
      setMenuWrapClass("dropDownMenuShow");
    } else {
      setDropDownClass("");
      setMenuWrapClass("");
    }
  }

  const clickOutsideMenu = () =>{
      setDropDownClass("");
      setMenuWrapClass("");
  }

  window.addEventListener('resize', updateDimensions);

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
  
  if (width > 492){
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
              <NavLink exact to="/about-team" activeStyle={styles.activeLink}>
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
  } else {
    return (
      <div className="custom-dropdown-menu">
        <span className={`menuToggleButton ${dropDownClass}`} onClick={clickToggleButton}>
          <div style={{"paddingTop":"10px","display":"block"}}>Menu </div> <div style={{"paddingTop":"-5px", "display":"block"}}> &#xfe40; </div>
        </span>
        <div className={`dropDownMenuWrap ${menuWrapClass}`} onClick={clickOutsideMenu}>
          <div>
            <ul className="dropDownMenu">
              <li key="home">          
                <NavLink
                  to="/"
                  className='dropDownMenuLink'
                >
                  HOME
                </NavLink>
              </li>
              <li key="about">          
                <NavLink
                  to="/about-team"
                  className='dropDownMenuLink'
                >
                  TEAM
                </NavLink>
              </li>
              <li key="cbinfo">          
                <NavLink
                  to="/about-color-blind"
                  className='dropDownMenuLink'
                >
                  COLOR BLINDNESS INFORMATION
                </NavLink>
              </li>
              <li key="hdinfo">          
                <NavLink
                  to="/about-hearing-disability"
                  className='dropDownMenuLink'
                >
                  HEARING INFORMATION
                </NavLink>
              </li>              
              <li key="tests">   
                <NavLink
                  to="/tests"
                  className='dropDownMenuLink'
                >
                  TAKE A TEST
                </NavLink>
              </li>
              <li key="contact">   
                <NavLink
                  to="/contact"
                  className='dropDownMenuLink'
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default MenuLink;
