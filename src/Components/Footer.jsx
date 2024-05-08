import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>
        <Link to="/sitemap">Site Map</Link>
      </div>
      {/* Other footer content */}
    </footer>
  );
};

export default Footer;
