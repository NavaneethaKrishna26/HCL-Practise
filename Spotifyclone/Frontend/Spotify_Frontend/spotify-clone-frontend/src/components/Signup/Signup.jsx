import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  // State to store user input
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSignup = (e) => {
    e.preventDefault();

    // Backend API will be added later
    console.log("Signup Data:", formData);

    alert("Signup successful (dummy)");
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>

      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>
      </form>

      <p onClick={() => navigate("/login")}>
        Already have an account? Login
      </p>
    </div>
  );
}

export default Signup;
