import PropTypes from "prop-types";
import React, { useState } from "react";
import { Icon } from "./icon";
import NavBar from "./navbar";
import ToggleButton from "./toggleButton";
import "./header.scss";

const Header = ({ siteTitle }) => {
  
  const [toggle, setToggle] = useState(false);

  return (
    <header className="mainHeader">
      <div className="top-line-header">
          <Icon/>
          <ToggleButton toggle={toggle} setToggle={setToggle} />
      </div>
          <NavBar toggle={toggle}/>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
