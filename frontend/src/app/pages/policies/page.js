"use client";
import React from "react";
import Image from "next/image";
import "./policy.css"; // Import CSS for styling
import { FaShieldAlt, FaUndoAlt, FaLock, FaHeadset, FaMoneyBillWave, FaChevronDown, FaChevronUp } from "react-icons/fa";
import bgImage from "@/app/Images/policy.png"; // Replace with your image



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


const OverlaySection = () => {
  return (

    <>
       <div className="overlay-container">
      <Image
        src={bgImage}
        alt="Full Banner"
        className="overlay-image"
        width={1920} // native width of your image
        height={1080} // native height of your image
        priority
      />
    </div>


<div className="container">
  
 {/* Policy Cards */}
 <section className="policy-cards-section mb-5">
  <div className="mt-4"> <h2 className="section-title justify-content-center">
   <FaShieldAlt className="me-2" />
   Security & Policies
 </h2>
 </div>

 <div className="row">
   {policyCards.map((card, index) => (
     <div className="col-md-3 mb-4 col-sm-6" key={index}>
      <div className="policy-section">
       <div className="policy-card ">
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
</>

  );
};

export default OverlaySection;


















// "use client";
// 
// import { useState } from "react";
// import "./Policy.css";

// const PolicyPage = () => {
//   return (
//     <>
//     <div className="container">
//     <div className="policy-page py-5">
//       {/* Header */}
//       <header className="policy-header text-center mb-5 py-4">
//         <h1 className="policy-main-title">Our Policies</h1>
//         <p className="policy-subtitle text-light">Clear guidelines for your protection</p>
//       </header>

     //     </div>
//     </div>
//     </>
//   );
// };

// export default PolicyPage;


