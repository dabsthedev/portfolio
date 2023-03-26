import React from "react";
import "./Header.css";

const Header = (headerExpanded) => {
  return (
    <div className="header-container">
      <img
        src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
        className={`header-image ${
          headerExpanded ? "header-expanded" : "header-contracted"
        }`}
        alt="man leaning on computer"
      />
      <h1 className="header-text">Name It!</h1>
    </div>
  );
};

export default Header;
