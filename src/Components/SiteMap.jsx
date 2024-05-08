import React from "react";
import { Link } from "react-router-dom";

const SiteMap = () => {
  return (
    <div>
      <h1>Site Map</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/notes">Notes List</Link>
        </li>
        <li>
          <Link to="/notes/new">New Note</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        {/* Add other links as needed */}
      </ul>
    </div>
  );
};

export default SiteMap;
