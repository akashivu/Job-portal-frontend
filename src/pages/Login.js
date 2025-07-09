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
    <div>
      <h2>Login</h2>
      <input name="email" placeholder="Email" onChange={handleChange} /><br />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} /><br />
      <button onClick={loginUser}>Login</button>
    </div>
  );
};

export default Login;
