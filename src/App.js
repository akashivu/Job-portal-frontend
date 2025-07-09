import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./component/PrivateRoute";
import Home from "./pages/Homes";
import Jobs from "./pages/Jobs";
import PostJob from "./pages/PostJobs";
import Dashboard from "./pages/Dashboard";
import Myjobs from "./pages/Myjobs";
import './App.css';
function App() {
  return (
     <Router>
      <Routes>
        <Route path="/jobs" element={ <PrivateRoute> <Jobs /></PrivateRoute>}/>
       <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
       <Route path="/dashboard" element={ <PrivateRoute> <Dashboard /> </PrivateRoute> }/>
         <Route path="/my-jobs" element={ <PrivateRoute> <Myjobs /> </PrivateRoute> }/>
       <Route path="/post-job" element={<PrivateRoute> <PostJob /></PrivateRoute> }/>
        <Route path="/login"  element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
     </Router>
  );
}

export default App;
