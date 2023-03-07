import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function Header({ theme = "dark", switchTheme }) {
  return (
    <div className="header-holder">
      <div className="box-shadow">
        <div className="header">
          <div className="header-title">Where in the world?</div>
          <div className="theme-picker">
            <div onClick={switchTheme}>
              {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </div>
            <div>{theme === "dark" ? "Light Mode" : "Dark Mode"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
