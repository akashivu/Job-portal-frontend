import { useState } from "react"
import axios from "axios";
const Register=()=>{
  const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
    role:"SEEKER"
  });


const handleChange=(e)=>{
    setUser({...user,[e.target.name]: e.target.value});
}
  const registeruser= async ()=>{
    try{
        await axios.post("http://localhost:8080/auth/registeruser",user);
        alert("Registration succesfull Now Login")
    }catch(err){
        alert("Error during Registartion");
    }
  }



return(
  <div className="auth-wrapper">
    <div className="Register">
        <h2>Welcome</h2>
        <input name="name" placeholder="Name" onChange={handleChange} /> <br/>
        <input  name ="email" placeholder="Email" onChange={handleChange}/>  <br/>
        <input name="password" type="password" placeholder="password" onChange={handleChange}/> <br/>
<select name="role" value={user.role} onChange={handleChange}>
    <option value="Seeker">Seeker</option>
    <option value="Recruiter"> Recruiter</option>

</select> <br/>
<button type="submit" onClick={registeruser}>Submit</button>
    </div>
    </div>
);
};
export default Register;