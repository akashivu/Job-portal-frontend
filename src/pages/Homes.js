import { Link } from "react-router-dom";

const Home = () => {
  return (<div>Welcome Home
  <Link to="/post-job">Post a Job</Link>
  </div>
  );
};

export default Home;