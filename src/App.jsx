import { Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

import Blog from "./pages/Blog/Blog.jsx";
import Coin from "./pages/Coin/Coin.jsx";
import Features from "./pages/Features/Features.jsx";
import Home from "./pages/Home/Home.jsx";
import Pricing from "./pages/Pricing/Pricing.jsx";
import Login from "./pages/Signup/Login.jsx";
import SignUp from "./pages/Signup/Signup.jsx";

function App() {
  return (
    <div className="card">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
