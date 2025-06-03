'use client';
import React from 'react';
import Link from 'next/link';
import './subscriptions.css';
import SubscriptionBenifit from '@/app/component/SubscriptionBenifits/page'
import Image from 'next/image';

const plans = [
  // {
  //   title: "Qiupid Standard",
  //   price: 35,
  //   color: "#fbbf24",
  //   features: [
  //     "View members directory",
  //     "View members profile",
  //     "Access to groups",
  //     "Add media to your profile",
  //   ],
  //   disabled: [
  //     "View site activity",
  //     "Send private messages",
  //     "Access group directory",
  //     "Create group",
  //     "Forum admin",
  //     "Special title",
  //   ],
  // },
  {
    title: "Qiupid Plus",
    price: 40,
    color: "#06b6d4",
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
    color: "#f472b6",
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
    color: "#a66dd4",
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
  const lights = Array.from({ length: 10 });
  return (
    <>
      <section className="breadcrumb-section">
        <div className="container text-center">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center gap-2">
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <i className="bi bi-heart-fill text-danger"></i>
              <li className="breadcrumb-item active" aria-current="page">Subscriptions</li>
            </ol>
          </nav>
          <h1 className="page-title">Subscriptions</h1>
          <p className="page-subtitle">Choose the plan that suits you best</p>
        </div>
      </section>

      <section className="pricing-wrapper">
        <h2 className="pricing-title">Choose Your Plan</h2>
        <div className="pricing-cards">
          {plans.map((plan, idx) => (
            <div key={idx} className="pricing-card" style={{ borderTopColor: plan.color }}>
              <h3 className="plan-name">{plan.title}</h3>
              <div className='Pland-duration'>
                <p className="plan-price">${plan.price}</p>
                <p className="plan-subtitle">/month</p>
              </div>
              <b className="plan-desc">Full access to select features</b>
              <ul className="feature-list">
                {plan.features.map((feature, i) => (
                  <li key={i}><span className="check">✓</span> {feature}</li>
                ))}
                {plan.disabled.map((feature, i) => (
                  <li key={`d-${i}`}><span className="cross">✗</span> {feature}</li>
                ))}
              </ul>
              <button className="btn-plan">Get this plan</button>
            </div>
          ))}
        </div>
      </section>

      <div>
        {/* <div className="earth-wrapper">
          <Image
            src="https://static.tradingview.com/static/bundles/background.bf9345a19dc9dbbc5c37.webp"
            alt="Earth"
            width={800}
            height={800}
            className="earth-image"
          />

          <div className="lights-layer">
            {lights.map((_, i) => (
              <div key={i} className={`light light-${i}`} />
            ))}
          </div>
        </div> */}





        <SubscriptionBenifit />
      </div>


    </>
  );
};

export default SubscriptionPage;


// 'use client';
// import React from 'react';
// import SubscriptionBenifit from '@/app/component/SubscriptionBenifits/page';
// import Link from 'next/link';
// import './subscriptions.css';

// const plans = [
//   {
//     title: "Qiupid Standard",
//     price: 35,
//     features: [
//       "View members directory",
//       "View members profile",
//       "Access to groups",
//       "Add media to your profile",
//     ],
//     disabled: [
//       "View site activity",
//       "Send private messages",
//       "Access group directory",
//       "Create group",
//       "Forum admin",
//       "Special title",
//     ],
//   },
//   {
//     title: "Qiupid Plus",
//     price: 40,
//     features: [
//       "View members directory",
//       "View members profile",
//       "Access to groups",
//       "Add media to your profile",
//       "View site activity",
//     ],
//     disabled: [
//       "Send private messages",
//       "Access group directory",
//       "Create group",
//       "Forum admin",
//       "Special title",
//     ],
//   },
//   {
//     title: "Qiupid Extra",
//     price: 45,
//     features: [
//       "View members directory",
//       "View members profile",
//       "Access to groups",
//       "Add media to your profile",
//       "View site activity",
//       "Send private messages",
//       "Access group directory",
//     ],
//     disabled: ["Create group", "Forum admin", "Special title"],
//   },
//   {
//     title: "Qiupid Platinum",
//     price: 50,
//     features: [
//       "View members directory",
//       "View members profile",
//       "Access to groups",
//       "Add media to your profile",
//       "View site activity",
//       "Send private messages",
//       "Access group directory",
//       "Create group",
//       "Forum admin",
//       "Special title",
//     ],
//     disabled: [],
//   },
// ];

// const SubscriptionPage = () => {
//   return (
//     <>
//     <section className="subscription-section-glass">
//   <div className="container text-center">
//     <h2 className="section-title">Pricing table example</h2>
//     <div className="row justify-content-center g-4">
//       {plans.slice(0, 3).map((plan, idx) => (
//         <div key={idx} className="col-md-6 col-lg-4">
//           <div className={`glass-card plan-${idx}`}>
//             <h5 className="plan-name">{plan.title}</h5>
//             <div className="plan-price">{plan.price}$</div>
//             <div className="price-subtitle">Price Example</div>
//             <p className="plan-desc">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
//             </p>
//             <ul className="plan-features">
//               {plan.features.map((feature, i) => (
//                 <li key={i} className="feature success">
//                   <i className="bi bi-check-circle-fill me-2"></i>{feature}
//                 </li>
//               ))}
//               {plan.disabled.map((feature, i) => (
//                 <li key={i} className="feature fail">
//                   <i className="bi bi-x-circle-fill me-2"></i>{feature}
//                 </li>
//               ))}
//             </ul>
//             <button className="btn-get-plan">Get this plan</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>


//
//     </>
//   );
// };

// export default SubscriptionPage;
