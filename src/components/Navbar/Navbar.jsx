import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import arrow_icon from "../../assets/arrow_icon.png";
import logo from "../../assets/logo.png";
import { CoinContext } from "../../context/CoinContext";
import "./Navbar.css";

const Navbar = () => {
  const { setcurrency } = useContext(CoinContext);
  const [hideNavbar, setHideNavbar] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 7500) {
      setHideNavbar(true);
    } else {
      setHideNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd":
        setcurrency({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setcurrency({ name: "eur", symbol: "€" });
        break;
      case "inr":
        setcurrency({ name: "inr", symbol: "₹" });
        break;
      default:
        setcurrency({ name: "usd", symbol: "$" });
    }
  };

  return (
    <div className={`navbar ${hideNavbar ? "hidden" : "active"}`}>
      <Link to="/">
        <img src={logo} alt="Cryptoplace Logo" className="logo" />
      </Link>

      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/features">
          <li>Features</li>
        </Link>
        <Link to="/pricing">
          <li>Pricing</li>
        </Link>
        <Link to="/blog">
          <li>Blog</li>
        </Link>
      </ul>

      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <Link to="/signup">
          <button>
            Sign Up
            <img src={arrow_icon} alt="arrow icon" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
