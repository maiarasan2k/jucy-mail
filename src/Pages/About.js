import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For redirecting after login or registration
import './About.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Used for registration only
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Success message state
  const navigate = useNavigate(); // For redirecting after success

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    // Logic to handle login (e.g., API request for authentication)
    console.log("Logging in with", email, password);
    setError(""); // Reset error if successful login
    setSuccessMessage("You have logged in successfully! 🍹");
    setEmail("");
    setPassword("");
    setTimeout(() => navigate("/dashboard"), 1000); // Redirect after successful login
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError("Please fill all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    // Logic to handle registration (e.g., API request to create an account)
    console.log("Registering with", email, password);
    setError(""); // Reset error if successful registration
    setSuccessMessage("You have registered successfully! 🎉 Welcome to the Juice Shop!");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setTimeout(() => navigate("/dashboard"), 1000); // Redirect after successful registration
  };

  return (
    <div className="juice-shop-container">
      <h1>{isLogin ? "Welcome Back to the Juice Shop!" : "Join the Juice Shop!"}</h1>
      <br />
      <div className="form-container">
        {successMessage && <p className="success-message">{successMessage}</p>}
        {isLogin ? (
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="submit-btn">Login</button>
            <p>
              Don't have an account?{" "}
              <a href="#" onClick={() => setIsLogin(false)}>
                Register
              </a>
            </p>
          </form>
        ) : (
          <form onSubmit={handleRegisterSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Choose a strong password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password: </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm your password"
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="submit-btn">Register</button>
            <p>
              Already have an account?{" "}
              <a href="#" onClick={() => setIsLogin(true)}>
                Login
              </a>
            </p>
          </form>
        )}
      </div>
      <div className="footer">
        <p>Enjoy the freshest juices in town! 🍹</p>
      </div>
    </div>
  );
};

export default Login;
