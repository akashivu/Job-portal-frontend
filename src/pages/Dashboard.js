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
    <div style={styles.container}>
  <h2 style={styles.heading}>
    Welcome, {decoded?.sub || "Guest"} 
  </h2>
  <h3 style={styles.subheading}>
    Your Role: {role || "Unknown"}
  </h3>

  {role === "RECRUITER" && (
    <div style={styles.linkGroup}>
      <Link to="/post-job" style={styles.link}> Post a Job</Link><br />
      <Link to="/my-jobs" style={styles.link}> My Posted Jobs</Link><br />
      <Link to="/applicants" style={styles.link}> View Applicants</Link>
    </div>
  )}

  {role === "SEEKER" && (
    <div style={styles.linkGroup}>
      <Link to="/jobs" style={styles.link}> View All Jobs</Link><br />
      <Link to="/my-applications" style={styles.link}> My Applications</Link>
    </div>
  )}
</div>

  );
};
const styles = {
  container: {
    padding: "40px",
    maxWidth: "800px",
    margin: "40px auto",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
    textAlign: "left",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "10px",
    color: "#2c3e50",
  },
  subheading: {
    fontSize: "1.25rem",
    marginBottom: "24px",
    color: "#555",
  },
  linkGroup: {
    lineHeight: "2.2rem",
  },
  link: {
    display: "inline-block",
    fontSize: "1.1rem",
    color: "#007bff",
    textDecoration: "none",
    marginBottom: "12px",
    transition: "color 0.2s ease",
  },
  linkHover: {
    color: "#0056b3",
  },
};


export default Dashboard;
