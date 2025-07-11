import React from "react";
import { useState,useEffect } from "react";
import JobCard from "../component/JobCard";
import axios from "axios";
const Jobs=()=>{
    const [jobs,setJobs]= useState([]);


    useEffect(() => {
    fetchJobs();
  }, []);

const fetchJobs=async()=>{
      try{
        const token = localStorage.getItem("token");
        const res= await axios.get("http://localhost:8080/api/jobs",{  headers: { Authorization: `Bearer ${token}` }, });
         console.log("Response data:", res.data);
        setJobs(res.data);
      }catch(err){
         console.error("Error fetching jobs:", err);
            alert("job not found")
        }
     
};
 return (
    <div style={{ padding: "20px" }}>
      <h2>All Jobs</h2>
      {jobs.length === 0 ? (
        <p>No jobs found</p>
      ) : (
        jobs.map((job) => <JobCard key={job.id} job={job} />)
      )}
    </div>
  );
};
export default Jobs;