import "./Pricing.css";

function Pricing() {
  return (
    <div className="pricing-container bg-[linear-gradient(#f0f6ff,#e8f1ff,#edf0ff)] text-black dark:bg-[linear-gradient(#0b004e,#1d152f,#002834)] dark:text-white">
      <h2>Our Pricing Plans</h2>
      <div className="pricing-grid">
        {["Free", "Pro", "Premium"].map((tier, index) => (
          <div key={tier} className="pricing-card bg-gray-300 dark:bg-[rgba(255,255,255,0.05)]">
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
