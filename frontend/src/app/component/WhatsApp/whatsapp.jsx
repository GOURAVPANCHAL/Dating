       "use client"
import React, { useState } from 'react'
import { FcCustomerSupport } from "react-icons/fc";
import './whatsapp.css'
import pic1 from '@/app/Images/guarantee.png'
import pic2 from '@/app/Images/helpCenter.png'
import Image from 'next/image'

const whatsapp = () => {
    const [open, setOpen] = useState(false);
    const togglePopup = ()=> setOpen(!open);

    const resolveMsg = (e)=>{
        e.preventDefault();
        alert("We will contact You Shortly we will find solution of it");
    }


  return (
    <section>
        
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
  
      
    </section>
  )
}

export default whatsapp
