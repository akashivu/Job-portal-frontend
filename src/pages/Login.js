import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    try {
      const res = await axios.post("http://localhost:8080/auth/login", loginData);
      localStorage.setItem("token", res.data);
      alert("Login successful");
      navigate("/");
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
  
    <div style={styles.card}>
      <h2 style={styles.h1}>Login</h2>
      <input name="email" placeholder="Email" onChange={handleChange} style={styles.input}/><br />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} style={styles.input} /><br />
      <button onClick={loginUser} style={styles.button}>Login</button>
    </div>
       
  );
};
const styles = {
  card: {
    maxWidth: "480px",
    margin: "60px auto",
    padding: "40px",
    borderRadius: "16px",
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  h1: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "24px",
  },
  input: {
    width: "100%",
    padding: "12px 16px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    outline: "none",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  },
  inputFocus: {
    borderColor: "#007bff",
    boxShadow: "0 0 0 3px rgba(0, 123, 255, 0.25)",
  },
  button: {
    width: "100%",
    padding: "12px",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default Login;
