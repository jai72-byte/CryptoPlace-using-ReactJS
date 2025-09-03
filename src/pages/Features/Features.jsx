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
    <div className="features-container bg-[linear-gradient(#f0f6ff,#e8f1ff,#edf0ff)] dark:bg-[linear-gradient(#0b004e,#1d152f,#002834)] text-black dark:text-white">
      <h2>Platform Features and Functions</h2>
      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-card bg-gray-300 dark:bg-[rgba(255,255,255,0.05)]">
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
