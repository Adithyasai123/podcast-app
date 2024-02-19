import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import podcat_music from "../../Assests/podcat_music.png";
import { Link as ScrollLink } from "react-scroll";

const CustomNavbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light Nav_main ">
        <div className="container container-top">
          <a className="navbar-brand" href="/">
            <img src={podcat_music} alt="Logo" className="logo" />
          </a>
          <button
            className="navbar-toggler nav_toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#basic-navbar-nav"
            aria-controls="basic-navbar-nav"
            aria-expanded={!collapsed ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={handleCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
            id="basic-navbar-nav"
          >
            <ul className="navbar-nav ms-auto nav_ul">
              <li className="nav-item">
                <RouterLink
                  className="nav-link"
                  to="Discover"
                  style={{ color: "white" }}
                >
                  Discover
                </RouterLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  className="nav-link"
                  to="Artists"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                  style={{ color: "white", cursor: "pointer" }}
                >
                  Trending
                </ScrollLink>
              </li>
              <li className="nav-item">
                <RouterLink
                  className="nav-link"
                  to="/resources"
                  style={{ color: "white" }}
                >
                  Resources
                </RouterLink>
              </li>
              <li className="nav-item">
                <RouterLink
                  className="nav-link"
                  to="/register"
                  style={{ color: "white" }}
                >
                  Register
                </RouterLink>
              </li>
              {collapsed && (
                <li className="nav-item">
                  <RouterLink
                    className="nav-link"
                    to="#"
                    style={{ color: "white" }}
                  >
                    |
                  </RouterLink>
                </li>
              )}
              <li className="nav-item">
                <RouterLink
                  className="nav-link"
                  to="/login"
                  style={{ color: "white" }}
                >
                  Login
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CustomNavbar;
