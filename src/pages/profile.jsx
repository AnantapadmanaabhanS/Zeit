
import React from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  // Logout functionality
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/Login");
  };

  // Backend integration later
  const user = {
    name: "Not available",
    phone: "Not available",
    email: "Not available",
    address: "Not available",
  };

  return (
    <div className="profile-page">
      <div className="profile-sidebar">
        <div className="profile-photo">
          <img
            src="/profile.jpg"
            alt="Profile"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <span className="profile-photo-placeholder">👤</span>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="profile-content">
        <h1>My Profile</h1>
        <p className="profile-subtitle">
          Manage your personal information
        </p>

        <div className="profile-details">
          <div className="profile-field">
            <label>Name</label>
            <p>{user.name}</p>
          </div>

          <div className="profile-field">
            <label>Phone Number</label>
            <p>{user.phone}</p>
          </div>

          <div className="profile-field">
            <label>Email</label>
            <p>{user.email}</p>
          </div>

          <div className="profile-field">
            <label>Address</label>
            <p>{user.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
