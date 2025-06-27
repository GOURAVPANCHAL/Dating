'use client';
import React from 'react';
import Link from 'next/link';
import './myplan.css';

const allPlans = [
  {
    title: "LuvNestor Plus",
    price: 40,
    features: [
      "View members directory",
      "View members profile",
      "Access to groups",
      "Add media",
      "View activity",
    ],
  },
  {
    title: "LuvNestor Extra",
    price: 45,
    features: [
      "All Plus features",
      "Send private messages",
      "Group directory access",
    ],
  },
  {
    title: "LuvNestor Platinum",
    price: 50,
    features: [
      "All Extra features",
      "Create group",
      "Forum admin access",
      "Special title",
    ],
  },
];

// Simulated current user plan
const userCurrentPlan = "LuvNestor Plus";

const MyPlan = () => {
  const currentPlan = allPlans.find(plan => plan.title === userCurrentPlan);
  const upgradePlans = allPlans.filter(plan => plan.price > currentPlan.price);

  return (
    <div className="subscription-wrapper">
      <h2 className="page-title">My Current Subscription</h2>

      <div className="current-plan-card">
        <h3>
          Current Plan: <span>{currentPlan.title}</span>
        </h3>
        <p className="price">${currentPlan.price} / month</p>
        <ul>
          {currentPlan.features.map((feature, index) => (
            <li key={index}>✓ {feature}</li>
          ))}
        </ul>
        <div className="active-badge">ACTIVE</div>
      </div>

      {upgradePlans.length > 0 && (
        <>
          <h3 className="upgrade-title">Upgrade Your Plan</h3>
          <div className="upgrade-cards">
            {upgradePlans.map((plan, index) => (
              <div key={index} className="upgrade-card">
                <h4>{plan.title}</h4>
                <p className="price">${plan.price} / month</p>
                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>
                <Link href="/pages/payment-section">
                  <button className="btn-upgrade">Upgrade Now</button>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyPlan;
