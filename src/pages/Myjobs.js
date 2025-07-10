import { useEffect, useState } from "react";
import axios from "axios";

const Myjobs=()=>{
    const [Jobs,setJobs]=useState([]);

    useEffect(()=>{
        fetchMyJobs();
    },[]);


    const fetchMyJobs= async()=>{
        try{
            const token=localStorage.getItem("token");
            const res=await axios.get("http://localhost:8080/api/jobs/my",{
                headers : {Authorization: `Bearer ${token}`}
            });
            setJobs(res.data);
        }
        catch(err){
            alert("error in viewing jobs");
        }
    };
    return (
    <div style={{ padding: "20px" }}>
      <h2>My Posted Jobs</h2>
      {Jobs.length === 0 ? (
        <p>No jobs posted yet.</p>
        
      ) : (
        Jobs.map((job) => (
          <div key={job.id} style={styles.card}>
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.employmentType}</p>
            <p>{job.description}</p>
          
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "10px 0",
    boxShadow: "2px 2px 8px rgba(0,0,0,0.1)"
  }
};
export default Myjobs;