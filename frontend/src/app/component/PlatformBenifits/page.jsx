"use client";
import React from "react";
import "./Benifits.css";
import Image from "next/image";
import coupleImage from "@/app/Images/midImage.png";

const BenefitsSection = () => {
  return (
    <div className="benefits-section">
      <h2 className="benefits-title">Benefits of Using Our Dating Platform</h2>
      <div className="benefits-container">
        <div className="benefit-left">
          <div className="benefit-box">
            <div className="pink">
              <h3>Find True Connections:</h3>
            </div>       
            <p>
              Discover authentic relationships and meaningful conversations
              with like-minded individuals who value love and connection as much as you do.
            </p>
          </div>
          <div className="benefit-box">
            <div className="yellow">
              <h3>Advanced Matching:</h3>
            </div>
            <p>
              Our smart matchmaking algorithm connects you with people who share your interests,
              values, and lifestyle, giving you the best chance to find someone special.
            </p>
          </div>
        </div>

        <div className="benefit-image">
          <Image src={coupleImage} className="benefitImg" alt="Happy Couple" width={588} height={608} />
        </div>

        <div className="benefit-right">
          <div className="benefit-box">
            <div className="orange">
              <h3>Safe & Secure:</h3>
            </div>
            <p>
              Your privacy and safety are our top priority. We use advanced encryption
              and verification tools to ensure your profile is secure and your interactions are genuine.
            </p>
          </div>
          <div className="benefit-box">
            <div className="pink">
              <h3>Seamless User Experience:</h3>
            </div>
            <p>
              Enjoy a smooth, user-friendly interface that lets you focus on making connections,
              with intuitive messaging, dynamic profiles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;




// import React from 'react'
// import { GiLovers } from "react-icons/gi";
// import './Benifits.css'
// import Image from 'next/image';
// import pic1 from '@/app/Images/benifits.jpg'
// import icon1 from '@/app/Images/secureicon.png'
// import icon2 from '@/app/Images/Connection.png'
// import icon3 from '../../Images/profile.png'
// import icon4 from '@/app/Images/experience.png'


// const page = () => {
//     return (
//         <>
//             <section>
//                 <div className='container'>
//                     <div className="row align-item-center">
//                         <div className="col-md-6">
//                             <div className='BenifitLeftSec' >
//                                 <h3> Benefits of Using Our Dating Platform</h3>
//                             </div>
//                             <div className="row">
//                                 <div className="col-md-6 col-6">
//                                     <div className='text-center'>
//                                         <Image className='iconimg' src={icon1} alt="icon" />
//                                     </div>
//                                     <div className='BenifitSec'>
//                                         <b className='BenifitHeading'>Find True Connections:</b>
//                                         <p>Discover authentic relationships and meaningful conversations with like-minded individuals who value love and connection as much as you do.</p>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-6 col-6">
//                                     <div className='text-center'>
//                                         <Image className='iconimg' src={icon2} alt="icon" />
//                                     </div>
//                                     <div className='BenifitSec'>
//                                         <b className='BenifitHeading'>Safe & Secure:</b>
//                                         <p>Your privacy and safety are our top priority. We use advanced encryption and verification tools to ensure your profile is secure and your interactions are genuine.</p>
//                                     </div>
//                                 </div>

//                                 <div className="col-md-6 col-6">
//                                     <div className='text-center'>
//                                         <Image className='iconimg' src={icon3} alt="icon" />
//                                     </div>
//                                     <div className='BenifitSec'>
//                                         <b className='BenifitHeading'>Advanced Matching:</b>
//                                         <p>Our smart matchmaking algorithm connects you with people who share your interests, values, and lifestyle, giving you the best chance to find someone special.</p>
//                                     </div>
//                                 </div>

//                                 <div className="col-md-6 col-6">
//                                     <div className='text-center'>
//                                         <Image className='iconimg' src={icon4} alt="icon" />
//                                     </div>
//                                     <div className='BenifitSec'>
//                                         <b className='BenifitHeading'>Seamless User Experience:</b>
//                                         <p>Enjoy a smooth, user-friendly interface that lets you focus on making connections, with intuitive messaging, dynamic profiles.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-6">
//                             <div className='BenifitImageSec'>
//                             <Image src={pic1} alt="couple pic" />
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </section>
//         </>
//     )
// }

// export default page
