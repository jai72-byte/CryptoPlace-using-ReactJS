import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import arrow_icon from "../../assets/arrow_icon.png";
import logo from "../../assets/logo.png";
import logo_black from "../../assets/logo_black.png";
import { CoinContext } from "../../context/CoinContext";
import "./Navbar.css";
import { ThemeContext } from "../../context/ThemeContext.jsx";

const Navbar = () => {
  const { setcurrency } = useContext(CoinContext);

  const { mode, lightMode, darkMode } = useContext(ThemeContext);

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
    <div className={`navbar ${hideNavbar ? "hidden" : "active"} dark:bg-black/85 bg-[#f1f1f1]`}>
      <Link to="/">
        <img src={logo} alt="Cryptoplace Logo" className={`logo ${mode === "dark" ? "" : "hidden"}`} />
        <img src={logo_black} alt="Cryptoplace Logo" className={`logo ${mode === "dark" ? "hidden" : ""}`} />
      </Link>

      <ul>
        <Link to="/">
          <li className="dark:text-[#cccccc] dark:hover:text-[#ffffff] text-[#111111] hover:text-[#222222]">Home</li>
        </Link>
        <Link to="/features">
          <li className="dark:text-[#cccccc] dark:hover:text-[#ffffff] text-[#111111] hover:text-[#222222]">Features</li>
        </Link>
        <Link to="/pricing">
          <li className="dark:text-[#cccccc] dark:hover:text-[#ffffff] text-[#111111] hover:text-[#222222]">Pricing</li>
        </Link>
        <Link to="/blog">
          <li className="dark:text-[#cccccc] dark:hover:text-[#ffffff] text-[#111111] hover:text-[#222222]">Blog</li>
        </Link>
      </ul>

      <div className="nav-right">
            <button
                onClick={() => { 
                    mode === "dark" ? lightMode() : darkMode()
                }}
                id="theme-toggle" 
                className="!w-12 !h-12 !rounded-[50%] !p-1 !flex !justify-center !items-center focus:outline-none bg-transparent !border-2"
            >
            {/* Sun icon */}
            <svg id="sun-icon" className={`h-6 w-6 text-yellow-500 ${mode === "light" ? "hidden" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h1M3 12H2m15.325-4.675l.707-.707M6.707 17.325l-.707.707M17.325 17.325l.707.707M6.707 6.707l-.707-.707M18 12a6 6 0 11-12 0 6 6 0 0112 0z" />
            </svg>

            {/* Moon icon */} 
            <svg id="moon-icon" className={`h-6 w-6 text-gray-800 ${mode === "dark" ? "hidden" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
        </button>

        <select className="border-2 border-black text-black dark:text-white dark:border-white" onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <Link to="/signup">
          <button id="signupBtn" className="bg-gray-300 text-black dark:bg-gray-900 dark:text-white">
            Sign Up
            <img src={arrow_icon} alt="arrow icon" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
