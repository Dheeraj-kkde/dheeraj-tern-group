import React from "react";
import "./Header.css";

const Header = () => {
  const logo =
    "https://assets-global.website-files.com/6515793135c2c87223433b1d/651916c5f76736bbc650b826_tern%20logo.png";
  return (
    <div className="toolbar">
      <div className="toolbar-left">
        <img src={logo} alt="logo" />
      </div>
      <div className="toolbar-right">
        <button className="contact">Contact Us</button>
      </div>
    </div>
  );
};

export default Header;
