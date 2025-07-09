import React from "react";
import axios from "axios";

const JobCard = ({ job }) => {

  const handleApply = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(`http://localhost:8080/api/applications/${job.id}`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Applied successfully!");
    } catch (err) {
      alert(" Already applied or error occurred.");
    }
  };

  return (
    <div style={styles.card}>
      <h3>{job.title}</h3>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Type:</strong> {job.employmentType}</p>
      <p>{job.description}</p>

  
      <button onClick={handleApply} style={styles.button}>Apply</button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "16px",
    margin: "10px",
    borderRadius: "8px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    maxWidth: "500px"
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px"
  }
};

export default JobCard;
