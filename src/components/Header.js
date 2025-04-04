import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = ({ toggleMenu, handleLogout }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-toggle" onClick={toggleMenu}>☰</button>
      </div>
      <div className="header-right">
        <div
          className="profile-menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faUser} className="profile-icon" />
          <span className="profile-name">John Doe</span>
          <div
            className={`dropdown ${dropdownVisible ? "visible" : ""}`}
          >
            <a href="#" onClick={handleLogout}>Logout</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;