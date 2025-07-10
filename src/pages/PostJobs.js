import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostJobs = () => {
  const [job, setJob] = useState({
    title: "",
    description: "",
    location: "",
    company: "",
    employmentType: "Full-time"
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const postJob = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:8080/api/jobs", job, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("Job posted successfully!");
      navigate("/jobs");
    } catch (err) {
      alert("Error posting job.");
    }
  };

  return (
   <div style={styles.container}>
    <h2 style={styles.heading}>Post a New Job</h2>

    <input
      name="title"
      placeholder="Job Title"
      onChange={handleChange}
      style={styles.input}
    />
    <input
      name="company"
      placeholder="Company Name"
      onChange={handleChange}
      style={styles.input}
    />
    <input
      name="location"
      placeholder="Location"
      onChange={handleChange}
      style={styles.input}
    />
    <textarea
      name="description"
      placeholder="Job Description"
      onChange={handleChange}
      style={styles.textarea}
    ></textarea>
    <select
      name="employmentType"
      onChange={handleChange}
      style={styles.select}
    >
      <option value="">Select Employment Type</option>
      <option>Full-time</option>
      <option>Part-time</option>
      <option>Remote</option>
    </select>
    <button onClick={postJob} style={styles.button}>Post Job</button>
  </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "60px 20px",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "30px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "12px 16px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    padding: "12px 16px",
    minHeight: "120px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    resize: "vertical",
    boxSizing: "border-box",
  },
  select: {
    width: "100%",
    padding: "12px 16px",
    marginBottom: "30px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "1.1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};
export default PostJobs;
