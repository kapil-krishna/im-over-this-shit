import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Icon } from "./icon";
import NavBar from "./navbar";

const Header = ({ siteTitle }) => (
  <header>
        <Link to="/">
          <Icon/>
        </Link>
        <NavBar/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
