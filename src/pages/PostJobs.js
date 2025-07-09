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
      <h2>Post a New Job</h2>
      <input name="title" placeholder="Job Title" onChange={handleChange} /><br />
      <input name="company" placeholder="Company Name" onChange={handleChange} /><br />
      <input name="location" placeholder="Location" onChange={handleChange} /><br />
      <textarea name="description" placeholder="Job Description" onChange={handleChange}></textarea><br />
      <select name="employmentType" onChange={handleChange}>
        <option>Full-time</option>
        <option>Part-time</option>
        <option>Remote</option>
      </select><br />
      <button onClick={postJob}>Post Job</button>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "500px",
    margin: "auto"
  }
};

export default PostJobs;
