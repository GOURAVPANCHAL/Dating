'use client';
import React from 'react';
import SubscriptionBenifit from '@/app/component/SubscriptionBenifits/page';
import Link from 'next/link';
import './subscriptions.css';

const plans = [
  {
    title: "Qiupid Standard",
    price: 35,
    features: [
      "View members directory",
      "View members profile",
      "Access to groups",
      "Add media to your profile",
    ],
    disabled: [
      "View site activity",
      "Send private messages",
      "Access group directory",
      "Create group",
      "Forum admin",
      "Special title",
    ],
  },
  {
    title: "Qiupid Plus",
    price: 40,
    features: [
      "View members directory",
      "View members profile",
      "Access to groups",
      "Add media to your profile",
      "View site activity",
    ],
    disabled: [
      "Send private messages",
      "Access group directory",
      "Create group",
      "Forum admin",
      "Special title",
    ],
  },
  {
    title: "Qiupid Extra",
    price: 45,
    features: [
      "View members directory",
      "View members profile",
      "Access to groups",
      "Add media to your profile",
      "View site activity",
      "Send private messages",
      "Access group directory",
    ],
    disabled: ["Create group", "Forum admin", "Special title"],
  },
  {
    title: "Qiupid Platinum",
    price: 50,
    features: [
      "View members directory",
      "View members profile",
      "Access to groups",
      "Add media to your profile",
      "View site activity",
      "Send private messages",
      "Access group directory",
      "Create group",
      "Forum admin",
      "Special title",
    ],
    disabled: [],
  },
];

const SubscriptionPage = () => {
  return (
    <>
      <section className='breadcrumb-section'>
        <div className="container text-center">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center gap-2">
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <i className="bi bi-heart-fill text-danger"></i>
              <li className="breadcrumb-item active" aria-current="page">Subscriptions</li>
            </ol>
          </nav>
          <h1 className='page-title'>Subscriptions</h1>
          <p className='page-subtitle'>Choose the plan that suits you best</p>
        </div>
      </section>

      <section className='subscription-section'>
        <div className="container">
          <div className="row justify-content-center g-4">
            {plans.map((plan, idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <div className={`subscription-card card-bg-${idx} ${idx === 3 ? 'premium' : ''}`}>
                  {idx === 3 && <div className="badge-top">Best Value</div>}
                  <div className="card-body">
                    <h5 className="plan-title">{plan.title}</h5>
                    <div className="price-box">
                      <span className="price">${plan.price}</span>
                      <span className="duration">/month</span>
                    </div>
                    <ul className="feature-list">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="feature enabled">
                          <i className="bi bi-check-circle-fill me-2"></i>{feature}
                        </li>
                      ))}
                      {plan.disabled.map((feature, i) => (
                        <li key={i} className="feature disabled">
                          <i className="bi bi-x-circle-fill me-2"></i>{feature}
                        </li>
                      ))}
                    </ul>
                    <button className="btn btn-subscribe">All Promises</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SubscriptionBenifit />
    </>
  );
};

export default SubscriptionPage;
