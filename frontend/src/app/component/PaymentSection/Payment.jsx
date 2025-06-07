'use client'
import { useState } from "react";
import './payment.css';
import { FaCreditCard, FaGooglePay, FaApplePay, FaRupeeSign, FaLock } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { FcCustomerSupport } from "react-icons/fc";
import { SiPaytm } from "react-icons/si"; // A valid icon from same category
import Image from "next/image";
import pic1 from '@/app/Images/guarantee.png'
import { HiShieldCheck } from "react-icons/hi";
import pic2 from '@/app/Images/helpCenter.png'


const Payment = () => {
    const [method, setMethod] = useState("card");
    const [plan, setPlan] = useState("12");
    const [open, setOpen] = useState(false);

    const togglePopup = ()=> setOpen(!open);

    const resolveMsg = (e)=>{
        e.preventDefault();
        alert("We will contact You Shortly we will find solution of it");
    }

    const paymentMethods = [
        { key: "card", label: "Card Payment", icon: <FaCreditCard /> },
        { key: "upi", label: "UPI", icon: <SiPaytm /> },
        { key: "neft", label: "NEFT", icon: <FaRupeeSign /> },
        { key: "imps", label: "IMPS", icon: <MdPayment /> },
        { key: "apple", label: "Apple Pay", icon: <FaApplePay /> },
        { key: "google", label: "Google Pay", icon: <FaGooglePay /> },
    ];

    const plans = [
        { key: "12", duration: "12 Months", price: 269, bonus: 600, highlight: true },
        { key: "6", duration: "6 Months", price: 299, bonus: 400 },
        { key: "3", duration: "3 Months", price: 389, bonus: 200 },
    ];

    return (
        <>

             <div className="support-chat">
      {open && (
        <div className="chat-popup">
          <div className="chat-header"><FcCustomerSupport className="fs-2" /> Online Support</div>
          <div className="chat-message">Having Trouble Completing Your Payment ? We will be Happy to Help You !:</div>
          <textarea
            className="chat-input"
            placeholder="Type your message here..."
            rows={3}
          />
          <button className="chat-send-btn" onClick={resolveMsg}>Send</button>
        </div>
      )}

      <div 
        className={`chat-icon ${open ? 'expanded' : ''}`}
        onClick={togglePopup}
      >
        <Image
          src={pic2}
          alt="Chat"
          className="chat-icon-image"
        />
        {!open && <span className="chat-hover-text">Sir, How can i help you ?</span>}
      </div>
    </div>
  
          

            <div className="payment-header ">
                <div className="container">
                    <div className="paymentHeaderSec">
                        <Image src={pic1} width={100} height={100} alt="guaranteeIcon" />
                        <div className="contentSec ">
                            <div className="d-flex align-items-center"> <HiShieldCheck />
                                <p className="ms-3">Real Connections , No Risk Involved </p>
                            </div>
                            <div className="d-flex align-items-center">
                                 <HiShieldCheck />
                                <p className="ms-3">if You dont Meet Anyone , We will Refund 100% of Your Payment</p>
                            </div>
                            <div className="d-flex align-items-center">
                                 <HiShieldCheck />
                                <p className="ms-3">Your Data Will be Secure here</p>
                            </div>


                        </div>

                    </div>
                </div>

            </div>



            <div className="payment-container">
                {/* Payment Method */}
                <div className="payment-box">
                    <h2>1. Select Payment Method</h2>
                    {paymentMethods.map((item) => (
                        <div
                            key={item.key}  
                            onClick={() => setMethod(item.key)}
                            className={`payment-method ${method === item.key ? 'selected' : ''}`}
                        >
                            <span className="icon">{item.icon}</span>
                            <span>{item.label}</span>
                        </div>
                    ))}
                </div>

                {/* Membership Plan */}
                <div className="payment-box">
                    <h2>2. Select Membership</h2>
                    {plans.map((p) => (
                        <div
                            key={p.key}
                            onClick={() => setPlan(p.key)}
                            className={`membership-option ${plan === p.key ? 'selected' : ''}`}
                        >
                            <div className="membership-info">
                                <div>
                                    <h3>{p.duration}</h3>
                                    <p>🎁 BONUS {p.bonus} Credits</p>
                                </div>
                                <div className="price">₹{p.price}</div>
                            </div>
                            {p.highlight && <span className="bestseller-tag">BESTSELLER</span>}
                        </div>
                    ))}
                </div>

                {/* Payment Form */}
                <div className="payment-box">
                    <h2>3. Finish the Payment</h2>
                    <div className="secure-note">
                        <FaLock /> <span>Anonymous and Secure Payment</span>   
                    </div>
                    <p className="summary">
                        {plans.find(p => p.key === plan).duration} VIP Membership for <span>₹{plans.find(p => p.key === plan).price}</span>
                    </p>
                    <form className="payment-form">
                        <input type="text" placeholder="Card Number" required />
                        <input type="text" placeholder="Cardholder's Name" required />
                        <div className="form-row">
                            <input type="text" placeholder="MM/YY" required />
                            <input type="text" placeholder="CVC" required />
                        </div>
                        <div className="terms">
                            <input type="checkbox" required />
                            <label>I agree with Terms & Conditions</label>
                        </div>
                        <button type="submit" className="pay-button">Pay Now</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Payment;
