import React from "react";
import { jwtDecode } from "jwt-decode"; 
import { Link } from "react-router-dom";

const Dashboard = () => {
  const token = localStorage.getItem("token");

  let decoded = {};
  let role = "";

  if (token) {
    try {
      decoded = jwtDecode(token);
      role = decoded.role;
    } catch (error) {
      console.error("Invalid token", error);
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome, {decoded?.sub || "Guest"} 👋</h2>
      <h3>Your Role: {role || "Unknown"} </h3>

      {role === "RECRUITER" && (
        <div>
          <Link to="/post-job"> Post a Job</Link><br />
          <Link to="/my-jobs">My Posted Jobs</Link><br />
          <Link to="/applicants"> View Applicants</Link>
        </div>
      )}

      {role === "SEEKER" && (
        <div>
          <Link to="/jobs">💼 View All Jobs</Link><br />
          <Link to="/my-applications">📄 My Applications</Link>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
