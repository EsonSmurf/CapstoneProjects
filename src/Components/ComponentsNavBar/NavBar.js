import React from 'react';
import './NavBar.css';
import { 
  MdHome, MdPeople, MdAssessment, MdNotificationsActive, MdCampaign, MdSettings, MdLogout 
} from 'react-icons/md';
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-profile">
        <img
          className="navbar-profile-img"
          src="https://i.ibb.co/6bQQP4r/avatar-placeholder.png" // Use your own or a placeholder
          alt="Profile"
        />
        <div className="navbar-profile-name">Lei Anysson Marquez</div>
        <div className="navbar-profile-role">Administrator</div>
      </div>
      <hr className="navbar-divider" />
      <div className="navbar-menu">
        <Link
          to="/admin"
          className={`navbar-menu-item${location.pathname === "/admin" ? " active" : ""}`}
        >
          <MdHome className="navbar-menu-icon" />
          <span>Dashboard</span>
        </Link>
        <Link
          to="/admin/user-management"
          className={`navbar-menu-item${location.pathname === "/admin/user-management" ? " active" : ""}`}
        >
          <MdPeople className="navbar-menu-icon" />
          <span>User Management</span>
        </Link>
        <Link
          to="/admin/emergency-reports"
          className={`navbar-menu-item${location.pathname === "/admin/emergency-reports" ? " active" : ""}`}
        >
          <MdAssessment className="navbar-menu-Wicon" />
          <span>Emergency Reports</span>
        </Link>
        <Link
          to="/admin/response-team"
          className={`navbar-menu-item${location.pathname === "/admin/response-team" ? " active" : ""}`}
        >
          <MdNotificationsActive className="navbar-menu-icon" />
          <span>Response Team</span>
        </Link>
        <Link
          to="/admin/announcement"
          className={`navbar-menu-item${location.pathname === "/admin/announcement" ? " active" : ""}`}
        >
          <MdCampaign className="navbar-menu-icon" />
          <span>Announcement</span>
        </Link>
        <Link
          to="/admin/settings"
          className={`navbar-menu-item${location.pathname === "/admin/settings" ? " active" : ""}`}
        >
          <MdSettings className="navbar-menu-icon" />
          <span>Settings</span>
        </Link>
      </div>
      <div className="navbar-logout">
        <MdLogout className="navbar-menu-icon" />
        <span>Logout</span>
      </div>
    </nav>
  );
};

export default NavBar;
