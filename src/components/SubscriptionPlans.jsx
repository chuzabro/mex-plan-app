import React from "react";
import "../styles/subscriptionPlans.css";

const SubscriptionPlans = () => {
  const plans = [
    {
      title: "Basic Plan",
      price: "$9.99/month",
      description: "Get started with our Basic Plan kickstart your fitness journey",
      features: [
        "Wide range of workout videos",
        "Basic progress tracking",
        "Limited ad-free experience",
      ],
    },
    {
      title: "Premium Plan",
      price: "$19.99/month",
      description: "Premium Plan for a comprehensive fitness experience.",
      features: [
        "All Basic Benefits",
        "Expanded library of workout",
        "Personalized workout plans",
        "Ad-free experience",
        "Live classes and expert-led sessions",
      ],
      popular: true,
    },
    {
      title: "VIP Plan",
      price: "$29.99/month",
      description: "Go Pro and take your fitness to the next level with personalized coaching.",
      features: [
        "All Premium Benefits",
        "One-on-one sessions with trainers",
        "Advanced analytics",
        "In-depth progress tracking",
        "Fitness challenges and competitions",
        "Priority customer support",
      ],
    },
  ];

  return (
    <div className="subscription-page">
      <h1 className="subscription-title">Unlock Mex plane Excellence With Premium</h1>
      <p className="subscription-subtitle">Pick the plan that's best for you, or <a href="#">call us</a> to find it</p>
      <div className="plans-container">
        {plans.map((plan, index) => (
          <div key={index} className={`plan-card ${plan.popular ? "popular" : ""}`}>
            <h2 className="plan-title">{plan.title}</h2>
            <p className="plan-price">{plan.price}</p>
            <p className="plan-description">{plan.description}</p>
            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i} className="feature-item">✔ {feature}</li>
              ))}
            </ul>
            <button className="plan-button">Go Premium</button>
            {plan.popular && <span className="popular-badge">Popular</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;