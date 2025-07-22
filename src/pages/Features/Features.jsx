import "./Features.css";

function Features() {
  const features = [
    {
      title: "Live Price Tracking",
      desc: "Stay up-to-date with live market prices.",
    },
    { title: "Portfolio Management", desc: "Track your holdings and profits." },
    { title: "Secure Wallet", desc: "Bank-level encryption for your crypto." },
  ];

  return (
    <div className="features-container">
      <h2>Platform Features</h2>
      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
