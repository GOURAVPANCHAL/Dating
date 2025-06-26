"use client";
import React from 'react';
import aboutImage from "../../Images/aboutImg2.png";
import Image from 'next/image';
import CountUp from 'react-countup';
import DatingCoupleSec from '@/app/component/DatingCoupleSec/page'
// import pic1 from '@/app/Images/banner2.png'
// import pic2 from '@/app/Images/are you waiting for date.png'
// import pic3 from '@/app/Images/cloud.png'
// import pic4 from '@/app/Images/heartSvg1.png'
import img1 from '@/app/Images/Group1.png'
import './about.css'
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import img2 from '@/app/Images/aboutImg1.png'
import img3 from '@/app/Images/aboutImg2.png'



const Page = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <>
      <section className='breadcrumb-all'>
        <div className="About-container">
          <div className="row">
            <div className="col-12">
              <div className='About-topSec'>
              <Image src={img2} alt="" className='Aboutbanner1' />

              </div>
              {/* <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center m-0 gap-2">
                  <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                  <i className="bi bi-heart"></i>
                  <li className="breadcrumb-item active" aria-current="page">Subscriptions</li>
                </ol>
              </nav> */}
              <h1 className='text-center titleAbout'>About Us</h1>
            </div>
          </div>
        </div>
      </section>

      <section className='about-us  py-5'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-8'>
              <div className='AboutCount-Section'>
              <div className='about-content-first'>
                <h4>Our Values</h4>
                <h1>Relationships are at Core of Everything we do.</h1>
                <p >
                  Wafer shortbread sesame snaps pudding fruitcake ice cream croissant sweet.
                  Cookie soufflé carrot cake marzipan cake shortbread halvah. Liquorice jelly pastry
                  carrot cake halvah sweet soufflé. Tootsie roll chocolate tart marzipan danish donut
                  topping chocolate gummies.
                </p>
              </div>

              {/* Scroll Triggered Counter */}
              <div className='react-count-up mt-4 d-flex gap-5' ref={ref}>
                <div>
                  <h2 className='CounterNumber fw-bold'>
                    {inView && <CountUp end={55000} duration={2} separator=',' />}
                  </h2>
                  <p className='fw-medium'>Daily Matches</p>
                </div>
                <div>
                  <h2 className='CounterNumber fw-bold'>
                    {inView && <CountUp end={100000} duration={2} separator=',' />}
                  </h2>
                  <p className='fw-medium'>Regular Visitors</p>
                </div>
                <div>
                  <h2 className='CounterNumber fw-bold'>
                    {inView && <CountUp end={435} duration={2} separator=',' />}
                  </h2>
                  <p className='fw-medium'>Register Devices</p>
                </div>
              </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='AboutCount-Section'>
                <Image src={aboutImage} className="AboutCountImg" alt="about-image" width={520} height={450}  />

              </div>
            </div>
          </div>
        </div>

     


      </section >

      <div>
         <DatingCoupleSec/>
      </div>

      <section className=' About-mainSec'>
       <div className='container-fluid '>
       <div className='OverlayMainSec'>
       <Image src={img1} alt=""  className='UniqueImg'/>
      
      <div className='overlayTextSec'>
                  <div className='OverlayTitle'>

                  <h2>What Make Us Unique </h2>
                  </div>
                  <div className='OverlaySubTitle'>

                  <p>We started <b>LuvNestor</b> Because we believe love should be more accessible in a world that&lsquo;s more connected than ever. Our team of relationship experts and tech innovators came together to create a platform that puts meaningful connections</p>
                  </div>

                </div>
       </div>
      
      
        {/* <div className='row'>
           
          <div className='col-md-6'>
            <div className='leftSideSec'>
       <Image src={pic1} alt="" height={500} width={650}/>        
          <Image  src={pic2} alt=" " height={90} width={90} className='svgImg' />
          <Image  src={pic3} alt=" " height={160} width={160} className='CloudsvgImg' />
          <Image  src={pic4} alt=" " height={60} width={60} className='MsgsvgImg' />
            </div>
  
          </div>
          <div className='col-md-6 mainSec'>
                <div className='rightSideSec'>
                <h2>What Make Us Unique</h2>
                <p>&quot;We started <b>Trust Me</b> Because we believe love should be more accessible in a world that&lsquo;s more connected than ever. Our team of relationship experts and tech innovators came together to create a platform that puts meaningful connections first.&ldquo;</p>

                </div>
          </div>

        </div> */}

       </div>
      </section>
    </>
  );
};

export default Page;
