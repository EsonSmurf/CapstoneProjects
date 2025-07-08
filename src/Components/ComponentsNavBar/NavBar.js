import React from 'react';
import './NavBar.css';
import { 
  MdHome, MdPeople, MdAssessment, MdNotificationsActive, MdCampaign, MdSettings, MdLogout 
} from 'react-icons/md';

const NavBar = () => (
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
      <div className="navbar-menu-item active">
        <MdHome className="navbar-menu-icon" />
        <span>Dashboard</span>
      </div>
      <div className="navbar-menu-item">
        <MdPeople className="navbar-menu-icon" />
        <span>User Management</span>
      </div>
      <div className="navbar-menu-item">
        <MdAssessment className="navbar-menu-icon" />
        <span>Emergency Reports</span>
      </div>
      <div className="navbar-menu-item">
        <MdNotificationsActive className="navbar-menu-icon" />
        <span>Response Team</span>
      </div>
      <div className="navbar-menu-item">
        <MdCampaign className="navbar-menu-icon" />
        <span>Announcement</span>
      </div>
      <div className="navbar-menu-item">
        <MdSettings className="navbar-menu-icon" />
        <span>Settings</span>
      </div>
    </div>
    <div className="navbar-logout">
      <MdLogout className="navbar-menu-icon" />
      <span>Logout</span>
    </div>
  </nav>
);

export default NavBar;
