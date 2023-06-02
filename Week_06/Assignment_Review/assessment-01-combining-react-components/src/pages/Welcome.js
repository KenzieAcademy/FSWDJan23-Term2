import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <p>Welcome!</p>
      <Link to="/register">Register</Link>
      {" | "}
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default Welcome;
