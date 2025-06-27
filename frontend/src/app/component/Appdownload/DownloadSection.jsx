'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import './downloadSection.css';
import img1 from '../../Images/bg4.png';
import img2 from '../../Images/bg4.png'; // you can change to another image
import Image from 'next/image';

const images = [img1, img2];

const DownloadSection = () => {
  const [index, setIndex] = useState(0);
  const overlayRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      gsap.fromTo(
        overlayRef.current,
        {
          rotateY: 0,
          transformOrigin: 'left center',
          transformPerspective: 800,
        },
        {
          rotateY: 90,
          duration: 1,
          ease: 'power2.inOut',
          onComplete: () => {
            setIndex((prev) => (prev + 1) % images.length);
            gsap.set(overlayRef.current, {
              rotateY: 0,
            });
          },
        }
      );
    }, 4000);
  
    return () => clearInterval(interval);
  }, []);
  

  const nextIndex = (index + 1) % images.length;

  return (
    <div className="download-app">
      <div className="container">
        <div className="download-wrapper">
          <div className="download-image">
            <div
              style={{
                position: 'relative',
                width: '300px',
                height: '300px',
                overflow: 'hidden',
                borderRadius: '12px',
              }}
            >
              {/* Bottom image (revealed after peel) */}
              <Image
                src={images[nextIndex]}
                alt="Revealed Image"
                fill
                style={{ objectFit: 'cover' }}
              />

              {/* Top image (peels away) */}
              <div
  ref={overlayRef}
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transformStyle: 'preserve-3d',
    backfaceVisibility: 'hidden',
    transition: 'box-shadow 0.3s ease-in-out',
    borderRadius: '12px',
    boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.2)',
  }}
>

                <Image
                  src={images[index]}
                  alt="Peeling Image"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          <div className="download-content">
            <h2>Download Our App</h2>
            <h5>
              The Ready for <span>LuvNestor</span> App
            </h5>
            <p>
              All it takes is 30 seconds to Download. Fast, Simple & Delightful.
              Meet genuine people near you. Find meaningful connections effortlessly.
              Your perfect match is just a click away.
            </p>
            <div className="download-app-buttons">
              <a
                className="cus-btn"
                href="https://play.google.com/store/apps/details?id=com.example.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-android2"></i> | Play Store
              </a>
              <a
                className="cus-btn2"
                href="https://apps.apple.com/app/id1234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-apple"></i> | Apple Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;



// "use client";
// import React from 'react'
// import './downloadSection.css'
// import backgroundImage from '../../Images/bg4.png'
// import Image from 'next/image'

// const DownloadSection = () => {
//     return (
//         <div className="download-app">
//             <div className="container">
//                 <div className="download-wrapper">
//                     <div className="download-image">
//                         <Image src={backgroundImage} alt="Download App" />
//                     </div>
//                     <div className="download-content">
//                         <h2>Download Our App</h2>
//                         <h5>
//                             The Ready for <span>LuvNestor</span> App
//                         </h5>
//                         <p>
//                             All it takes is 30 seconds to Download. Fast, Simple & Delightful.
//                             Meet genuine people near you. Find meaningful connections effortlessly.
//                             Your perfect match is just a click away.
//                         </p>
//                         <div className="download-app-buttons">
//                             <a className='cus-btn' href="https://play.google.com/store/apps/details?id=com.example.app" target="_blank" rel="noopener noreferrer">
//                                 <i className="bi bi-android2"></i> | Play Store
//                             </a>
//                             <a className='cus-btn2' href="https://apps.apple.com/app/id1234567890" target="_blank" rel="noopener noreferrer">
//                                 <i className="bi bi-apple"></i> | Apple Store
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default DownloadSection
