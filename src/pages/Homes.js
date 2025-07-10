import { useNavigate } from "react-router-dom";

const Home = () => {
   const navigate = useNavigate();
   const handleChange=()=>{
 navigate("/register");
   }
    const handleChanges=()=>{
 navigate("/login");
   }
    
  return (
 <div style={styles.card}>
    <h1 style={styles.heading}>Welcome to Our Platform</h1>
    <p style={styles.text}>Already have an account? Log in to continue.</p>
    <button onClick={handleChanges} style={styles.button}>Login</button>
    <p style={styles.text}>New here? Register to get started with us today.</p>
    <button onClick={handleChange} style={styles.button}>Register</button>
  </div>
  );
};

const styles = {
  card: {
    border: "1px solid #e0e0e0",
    padding: "32px",
    margin: "20px auto",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
    maxWidth: "1200px",
    backgroundColor: "#ffffff",
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "16px",
  },
  text: {
    fontSize: "1.25rem",
    color: "#555",
    marginBottom: "24px",
  },
  button: {
    padding: "12px 24px",
    fontSize: "1rem",
    margin: "10px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};
export default Home;