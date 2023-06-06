import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, sidebarOpen }) => {
  return (
    <>
      <div
        class={isOpen ? "ms_sidemenu_wrapper open_menu" : "ms_sidemenu_wrapper"}
      >
        <div class="ms_nav_close" onClick={sidebarOpen}>
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
        <div class="ms_sidemenu_inner">
          <div class="ms_logo_inner">
            <div class="ms_logo">
              <a href="index.html">
                <img src="assets/images/logo-m.png" alt="" class="img-fluid" />
              </a>
            </div>
            <div class="ms_logo_open">
              <a href="index.html">
                <img src="assets/images/logo-m.png" alt="" class="img-fluid" />
              </a>
            </div>
          </div>
          <div class="ms_nav_wrapper">
            <ul>
              <li>
                <NavLink to="/" class="active" title="Discover">
                  <span class="nav_icon">
                    <span class="icon icon_discover"></span>
                  </span>
                  <span class="nav_text">Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/songs" title="About Us">
                  <span class="nav_icon">
                    <i class="bi bi-music-note"></i>
                  </span>
                  <span class="nav_text">Songs</span>
                </NavLink>
              </li>
              <li>
                <a href="how-it-works.html" title="Wrap In Music">
                  <span class="nav_icon">
                    <i class="bi bi-list-task"></i>
                  </span>
                  <span class="nav_text">How it Works</span>
                </a>
              </li>
              <li>
                <a href="wrap-in-music.html" title="Wrap In Music">
                  <span class="nav_icon">
                    <i class="bi bi-music-note-list"></i>
                  </span>
                  <span class="nav_text">Wrap In Music</span>
                </a>
              </li>
              <li>
                <a href="testimonials.html" title="Songs">
                  <span class="nav_icon">
                    <i class="bi bi-people"></i>
                  </span>
                  <span class="nav_text">Testimonials</span>
                </a>
              </li>
              <li>
                <a href="contact.html" title="Contact Us">
                  <span class="nav_icon">
                    <i class="bi bi-telephone"></i>
                  </span>
                  <span class="nav_text">Contact Us</span>
                </a>
              </li>
              <li>
                <a href="register.html" title="Register/Login">
                  <span class="nav_icon">
                    <i class="bi bi-person-circle"></i>
                  </span>
                  <span class="nav_text">Register/Login</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
