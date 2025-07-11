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
  <div style={styles.gridmain}>
  <div style={styles.card}>
    <div style={styles.head}>
      <h1 style={styles.heading}>Welcome to Our Platform</h1>
      <p style={styles.subTagline}><strong>Connecting Talent with Opportunity, Seamlessly.</strong></p>
    </div>
    <p style={styles.text}>Already have an account? Log in to continue.</p>
    <button onClick={handleChanges} style={styles.button}>Login</button>
    <p style={styles.text}>New here? Register to get started with us today.</p>
    <button onClick={handleChange} style={styles.buttonAlt}>Register</button>
  </div>
  
  </div>
);

};

const styles = {
 gridmain: {
  display:"grid",
  gridTempleteRow:"3,1fr",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "stretch",
  height: "100vh",
  padding: "40px",
  
  gap: "40px",
},



infoPanel: {
  flex: 1,
  padding: "40px",
  backgroundColor: "#ffffff",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  lineHeight: "1.6",
  fontSize: "1.1rem",
  color: "#333",
   maxWidth: "00px",
},

  card: {
    padding: "40px 32px",
    margin: "40px auto",
    borderRadius: "20px",
    background: "rgba(255, 255, 255, 0.75)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
    maxWidth: "800px",
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    
  },

  head: {
    background: "linear-gradient(to right, #42a5f5, #478ed1)",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "30px",
    color: "#fff",
  },

  heading: {
    fontSize: "2.8rem",
    margin: 0,
  },

  subTagline: {
    fontSize: "1.2rem",
    marginTop: "10px",
  },

  text: {
    fontSize: "1.1rem",
    color: "#333",
    margin: "20px 0 10px",
  },

  button: {
    padding: "12px 28px",
    fontSize: "1rem",
    margin: "10px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },

  buttonAlt: {
    padding: "12px 28px",
    fontSize: "1rem",
    margin: "10px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#333",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },

  
};

export default Home;