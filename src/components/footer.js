import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Icon } from "./icon";
import "./footer.scss";

const Footer = ({ siteTitle }) => (
  <footer>
    <Icon/>
    <div className="contactFooter">
      <h2>Contact us</h2>
      <a href="mailto:boris.johnson.mp@parliament.uk">boris.johnson.mp@parliament.uk</a>
      <p>House of Commons</p>
      <p>London</p>
      <p>SW1A 0AA</p>
      <p>+44 20 7219 4682</p>
    </div>
    <div className="privacyPol">
      <Link to="/privacy">Privacy policy</Link>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer;
