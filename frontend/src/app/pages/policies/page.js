"use client";
import { FaShieldAlt, FaUndoAlt, FaLock, FaHeadset, FaMoneyBillWave, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import "./policy.css";

const policyCards = [
  { 
    title: "Reschedule",
    icon: <FaUndoAlt className="policy-icon" />,
    points: [
      "Reschedule up to 30 minutes before your booking time.",
      "Only one reschedule allowed per booking.",
      "To reschedule, go to My Bookings → Reschedule."
    ]
  },
  { 
    title: "Cancellation Policy",
    icon: <FaMoneyBillWave className="policy-icon" />,
    points: [
      "Free cancellation up to 1 hour before appointment.",
      "Late cancellations may incur a fee.",
      "No refund for no-shows or last-minute cancellations."
    ]
  }
  ,
    { 
      Title: "Safety Instructions",
      icon: <FaShieldAlt className="policy-icon" />,
      points: [
        "Never share personal information unnecessarily.",
        "Always verify OTP in person.",
        "Report any suspicious behavior immediately."
      ]
    },
    { 
      Title: "Supervisor Support",
      icon: <FaHeadset className="policy-icon" />,
      points: [
        "Need help? Our support team is available 24/7.",
        "+91 90000 00000",
        "support@yourapp.com"
      ]
    },
    { 
          Title: "3 Days Money Back Guarantee",
          icon: <FaMoneyBillWave className="policy-icon" />,
          points: [
            "If you're unsatisfied, request a refund within 3 days.",
            "No questions asked. Easy & fast refund process."
          ]
        }

];

const faqItems = [
  {
    question: "Is There Eligibility?",
    answer: "You must be at least 18 years old to use this app. By using our services, you affirm that you meet the age requirement and are legally capable of entering into binding agreements under applicable law."
  },
  {
    question: "Account Registration?",
    answer: "To access full features of the app, users must Register using a valid mobile number email ID or social login Provide accurate current, and complete profile information Keep login credentials confidential and not share them with others You are responsible for all activities that occur under your account."
  },
  {
    question: "Are My Information Safe?",
    answer: "Absolutely.We do not sell user data. Sensitive data like payment details and chats are encrypted. See full policy. We use industry-standard encryption to protect your data."
  },
  {
    question: "Booking and Paid Meetups?",
    answer: "Users may request or accept bookings for in-person meetings By participating  You agree to mutual consent between both parties  Respect the set time, location, and boundaries  Our platform is not responsible for any offline activity beyond the agreed terms  All bookings must be paid in advance. Refunds are subject to items 9"
  },
  {
    question: "Platform Fees and Earning System?",
    answer: "Users may earn money for completed meetings. The platform deducts a commission before payout. Payouts are subject to tax, verification, and displayed in the dashboard."
  },
  {
    question: "Termination & Suspension?", 
    answer: "We may suspend accounts for violations. Banned accounts receive no refund."
  }
];

const PolicyPage = () => {
  return (
    <>
    <div className="container">
    <div className="policy-page py-5">
      {/* Header */}
      <header className="policy-header text-center mb-5 py-4">
        <h1 className="policy-main-title">Our Policies</h1>
        <p className="policy-subtitle">Clear guidelines for your protection</p>
      </header>

      {/* Policy Cards */}
      <section className="policy-cards-section mb-5">
        <h2 className="section-title">
          <FaShieldAlt className="me-2" />
          Security & Policies
        </h2>
        <div className="row">
          {policyCards.map((card, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="policy-card h-100">
                <div className="card-icon text-center">
                  {card.icon}
                  <h3>{card.title}</h3>
                </div>
                <ul className="policy-points">
                  {card.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="faq-section mb-5">
        <h2 className="section-title text-center mb-4 justify-content-center">
          <FaLock className="me-2" />
          Terms & Conditions
        </h2>
        <p className="text-center mb-4">Frequently asked questions about our service</p>
        
        <div className="accordion" id="faqAccordion">
          {faqItems.map((item, index) => (
            <div className="accordion-item" key={index}>
              <h3 className="accordion-header">
                <button 
                  className="accordion-button collapsed" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target={`#faqCollapse${index}`}
                >
                  {item.question}
                </button>
              </h3>
              <div 
                id={`faqCollapse${index}`} 
                className="accordion-collapse collapse" 
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Notice Box */}
      <div className="notice-box">
        <div className="notice-content">
          <FaLock className="notice-icon" />
          <div>
            <h4>All meetings are private & secure</h4>
            <p>Your safety is our top priority</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default PolicyPage;






// "use client";
// import Image from "next/image";
// import "./policy.css";
// import { FaPhoneAlt, FaEnvelope, FaShieldAlt, FaUndoAlt, FaLock, FaHeadset, FaMoneyBillWave } from "react-icons/fa";
// import pic1 from '@/app/Images/privacy-policy.jpg'

// const policy = [
//   { 
//     Title: "Reschedule",
//     icon: <FaUndoAlt className="policy-icon" />,
//     lines: [
//       "Reschedule up to 30 minutes before your booking time.",
//       "Only one reschedule allowed per booking.",
//       "To reschedule, go to My Bookings → Reschedule."
//     ]
//   },
//   { 
//     Title: "Cancellation Policy",
//     icon: <FaMoneyBillWave className="policy-icon" />,
//     lines: [
//       "Free cancellation up to 1 hour before appointment.",
//       "Late cancellations may incur a fee.",
//       "No refund for no-shows or last-minute cancellations."
//     ]
//   },
//   { 
//     Title: "Safety Instructions",
//     icon: <FaShieldAlt className="policy-icon" />,
//     lines: [
//       "Never share personal information unnecessarily.",
//       "Always verify OTP in person.",
//       "Report any suspicious behavior immediately."
//     ]
//   },
//   { 
//     Title: "Supervisor Support",
//     icon: <FaHeadset className="policy-icon" />,
//     lines: [
//       "Need help? Our support team is available 24/7.",
//       "+91 90000 00000",
//       "support@yourapp.com"
//     ]
//   },
//   { 
//     Title: "3 Days Money Back Guarantee",
//     icon: <FaMoneyBillWave className="policy-icon" />,
//     lines: [
//       "If you're unsatisfied, request a refund within 3 days.",
//       "No questions asked. Easy & fast refund process."
//     ]
//   }
// ];



// const termsData = [
//   {
//     title: "Eligibility",
//     content: "You must be at least 18 years old to use this app. By using our services, you affirm that you meet the age requirement and are legally capable of entering into binding agreements under applicable law."
//   },
//   {
//     title: "Account Registration",
//     content: `To access full features of the app, users must:
// - Register using a valid mobile number, email ID, or social login.
// - Provide accurate, current, and complete profile information.
// - Keep login credentials confidential and not share them with others.
// You are responsible for all activities that occur under your account.`
//   },
//   {
//     title: "User Conduct",
//     content: `You agree to use the app in a lawful, respectful, and safe manner. Prohibited behaviors include, but are not limited to:
// - Harassment, abuse, or threats.
// - Discriminatory remarks based on race, gender, religion, or orientation.
// - Misrepresentation of identity, age, or intentions.
// - Spamming or soliciting other users for commercial purposes.`
//   },
//   {
//     title: "Booking and Paid Meetups",
//     content: `Users may request or accept bookings for in-person meetings. By participating:
// - You agree to mutual consent between both parties.
// - Respect the set time, location, and boundaries.
// - Our platform is not responsible for any offline activity beyond the agreed terms.
// - All bookings must be paid in advance. Refunds are subject to items 9.`
//   },
//   {
//     title: "Platform Fees and Earning System",
//     content: `Users may earn money for completed meetings. The platform deducts a commission before payout. Payouts are subject to tax, verification, and displayed in the dashboard.`
//   },
//   {
//     title: "Reviews and Ratings",
//     content: `Users may rate each other after meetings. Feedback must be genuine and free from hate or false claims. We may moderate feedback.`
//   },
//   {
//     title: "Safety and Verification",
//     content: `We offer identity tools like OTP, selfie/photo checks. Users must still meet in public initially. The platform is not liable for harm.`
//   },
//   {
//     title: "Content Ownership and Usage",
//     content: `By uploading content, you grant us a non-exclusive, royalty-free license to use it to enhance your profile visibility. Offensive or impersonated content is prohibited.`
//   },
//   {
//     title: "Cancellations & Refund Policy",
//     content: `Cancel up to 1 hour in advance for full refund. Late cancellations may result in no refund. Refunds processed in 7–10 business days.`
//   },
//   {
//     title: "Termination & Suspension",
//     content: `We may suspend accounts for violations. Banned accounts receive no refund.`
//   },
//   {
//     title: "Limitation of Liability",
//     content: `We connect users but are not liable for actions, harm, or external delays. Use the app at your own risk.`
//   },
//   {
//     title: "Privacy Policy",
//     content: `We do not sell user data. Sensitive data like payment details and chats are encrypted. See full policy.`
//   },
//   {
//     title: "Modifications to the Service",
//     content: `We may update features, terms, or pricing without prior notice. Continued use indicates acceptance.`
//   },
//   {
//     title: "Dispute Resolution",
//     content: `Contact support first. If unresolved, legal matters fall under jurisdiction of your region.`
//   },
//   {
//     title: "Contact Information",
//     content: `📧 Email: support@yourappname.com | 📞 Phone: +91-XXXXXXXXXX | 🌐 www.yourappname.com`
//   }

// ];

// const PolicyPage = () => {
//   return (
//     <>
//       <div>
//         <Image src={pic1} alt="policy banner" className="policy-bannerImg" />
//       </div>

//       <div className="policy-container">
//         <h2 className="policy-title">Security & Policies</h2>

//         <div className="policy-grid">
//           <div className="row">
//             {policy.map((item, index) => (
//               <div className="col-md-4" key={index}>
//                 <div className="policy-card text-center gap-2 mb-2">
//                   {item.icon}
//                   <h3>{item.Title}</h3>
//                   <ul>
//                     {item.lines.map((line, i) => (
//                       <li key={i}>{line}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="final-note">
//           <FaLock className="note-icon" />
//           <div>
//             <p><strong>All meetings are private & secure.</strong></p>
//             <p>No abusive behavior allowed — monitored & reported.</p>
//             <p>Exact location will be shared after confirmation.</p>
//           </div>
//         </div>
//       </div>
// <div className="container">
  
// <h2 className="policy-title mt-5">Terms & Conditions </h2>
// <div className="policy-grid"  >
//   {terms.map((items,index)=>(
//     <div className="policy-card" key={index}>
//       <h3>{items.title}</h3>
//       <p style={{whiteSpace : 'pre-wrap'}}> {items.content}</p>
//        </div>
//   ))

//   }
// </div>

// </div>



//     </>
//   );
// };

// export default PolicyPage;