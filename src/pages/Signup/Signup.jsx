import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { fullName, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    setShowSuccess(true);
    setFullName("");
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  return (
    <div className="signup-wrapper bg-[linear-gradient(#f0f6ff,#e8f1ff,#edf0ff)] dark:bg-[linear-gradient(#0b004e,#1d152f,#002834)]">
      {showSuccess && (
        <div className="success-popup">✅ Successfully Registered!</div>
      )}

      <form className="signup-form text-black dark:text-white dark:backdrop-blur-md" onSubmit={handleSubmit}>
        <h2>Create an Account</h2>

        <div className="input-group">
          <label>Full Name</label>
          <input
            type="text"
            className="bg-gray-300 dark:focus:transition-colors dark:focus:duration-300 dark:focus:ease-in-out dark:focus:bg-white/20 dark:bg-white/10"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="John Doe"
            required
          />
        </div>

        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            className="bg-gray-300 dark:focus:transition-colors dark:focus:duration-300 dark:focus:ease-in-out dark:focus:bg-white/20 dark:bg-white/10"
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
            className="bg-gray-300 dark:focus:transition-colors dark:focus:duration-300 dark:focus:ease-in-out dark:focus:bg-white/20 dark:bg-white/10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </div>

        <button type="submit">Sign Up</button>

        <p className="login-text">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
