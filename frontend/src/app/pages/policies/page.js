"use client";
import Image from "next/image";
import "./policy.css";
import { FaPhoneAlt, FaEnvelope, FaShieldAlt, FaUndoAlt, FaLock, FaHeadset, FaMoneyBillWave } from "react-icons/fa";
import pic1 from '@/app/Images/privacy-policy.jpg'

const PolicyPage = () => {
  return (

<>
       <div>
       <Image src={pic1} alt="policybanner"  className="policy-bannerImg" />
     </div>

    <div className="policy-container">
      <h2 className="policy-title">Security & Policies</h2>

     

      <div className="policy-grid">
        <div className="policy-card">
          <FaUndoAlt className="policy-icon" />
          <h3>Reschedule</h3>
          <ul>
            <li>Reschedule up to 30 minutes before your booking time.</li>
            <li>Only one reschedule allowed per booking.</li>
            <li>To reschedule, go to My Bookings  Reschedule.</li>
          </ul>
        </div>

        <div className="policy-card">
          <FaMoneyBillWave className="policy-icon" />
          <h3>Cancellation Policy</h3>
          <ul>
            <li>Free cancellation up to 1 hour before appointment.</li>
            <li>Late cancellations may incur a fee.</li>
            <li>No refund for no-shows or last-minute cancellations.</li>
          </ul>
        </div>

        <div className="policy-card">
          <FaShieldAlt className="policy-icon" />
          <h3>Safety Instructions</h3>
          <ul>
            <li>Never share personal information unnecessarily.</li>
            <li>Always verify OTP in person.</li>
            <li>Report any suspicious behavior immediately.</li>
          </ul>
        </div>

        <div className="policy-card">
          <FaHeadset className="policy-icon" />
          <h3>Supervisor Support</h3>
          <ul>
            <li>Need help? Our support team is available 24/7.</li>
            <li><FaPhoneAlt /> +91 90000 00000</li>
            <li><FaEnvelope /> support@yourapp.com</li>
          </ul>
        </div>

        <div className="policy-card">
          <FaMoneyBillWave className="policy-icon" />
          <h3>3 Days Money Back Guarantee</h3>
          <ul>
            <li>If you're unsatisfied, request a refund within 3 days.</li>
            <li>No questions asked. Easy & fast refund process.</li>
          </ul>
        </div>
      </div>

      <div className="final-note">
        <FaLock className="note-icon" />
        <div>
          <p><strong>All meetings are private & secure.</strong></p>
          <p>No abusive behavior allowed — monitored & reported.</p>
          <p>Exact location will be shared after confirmation.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default PolicyPage;
