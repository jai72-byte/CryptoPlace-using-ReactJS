import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
      setShowSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 5000);
    } else {
      alert("Invalid credentials");
    }
  };

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  return (
    <div className="signup-wrapper">
      {showSuccess && <div className="success-popup">✅ Login Successful!</div>}

      <form className="signup-form" onSubmit={handleLogin}>
        <h2>Login</h2>

        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </div>

        <button type="submit">Log In</button>

        <p className="login-text">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
