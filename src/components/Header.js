import React from "react";

const Header = ({ toggleMenu, handleLogout }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-toggle" onClick={toggleMenu}>☰</button>
      </div>
      <div className="header-right">
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;