import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Icon from "./icon";
import NavBar from "./navbar";

const Footer = ({ siteTitle }) => (
  <footer>
        <Link to="/">
          <Icon/>
        </Link>
        <NavBar/>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
