import "./Pricing.css";

function Pricing() {
  return (
    <div className="pricing-container">
      <h2>Our Pricing Plans</h2>
      <div className="pricing-grid">
        {["Free", "Pro", "Premium"].map((tier, index) => (
          <div key={tier} className="pricing-card">
            <h3>{tier}</h3>
            <p className="price">{["$0", "$29", "$99"][index]}</p>
            <ul>
              <li>✓ Basic analytics</li>
              <li>✓ Real-time tracking</li>
              <li>{tier !== "Free" ? "✓ Priority support" : "— No support"}</li>
            </ul>
            <button>Choose {tier}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
