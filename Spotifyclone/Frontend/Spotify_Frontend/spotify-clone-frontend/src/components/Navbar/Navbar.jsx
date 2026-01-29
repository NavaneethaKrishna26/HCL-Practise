import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h2 className="logo" onClick={() => navigate("/home")}>
        Spotify Clone
      </h2>

      <div className="nav-links">
        <button onClick={() => navigate("/home")}>Home</button>
        <button onClick={() => navigate("/profile")}>Profile</button>
        <button onClick={() => navigate("/login")}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
