import Link from 'next/link'
import React from 'react'
import './hero.css'
import heroimage from '../../Images/explore-lmage.png'
import Image from 'next/image'
import Whatsapp from '../WhatsApp/whatsapp'
const Hero = () => {
  return (
    <>
    <div>
        {/* <Whatsapp/> */}
    </div>
    <section className='hero-section2-responsive'>
        <div className="container">
        </div>
    </section>
    <section className="all-body">
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-icons">
              <ul>
                <li>
                  <Link href="/"><i className="bi bi-facebook"></i></Link>
                </li>
                <li>
                  <Link href="/"><i className="bi bi-twitter"></i></Link>
                </li>
                <li>
                  <Link href="/"><i className="bi bi-youtube"></i></Link>
                </li>
                <li>
                  <Link href="/"><i className="bi bi-instagram"></i></Link>
                </li>
              </ul>
            </div>
            <div className="hero-text">
              <p>DATING FOR GROWN UPS:</p>
              <h1 className='title'>MAKING REAL</h1>
              <h1 className='subtitle'> CONNECTIONS.</h1>
              <div className='title_paragraphSec'>
              <span className='title_paragraph'>Start meeting singles who are ready to commit today.</span>
              </div>
              <div className='create_buttonSec'>

              <Link href="/pages/create-account/step/page" className="create_accountbtn">Create account</Link>
              </div>
            </div>
          </div>
        </div>
        <div className='hero-wall'>
          <div className='hero-wall-content'>
            <Image src={heroimage} alt="hero image" />
          </div>
          <div className='hero-wall-content'>
            <h1>Start your love story</h1>
            <h6>LuvNestor: find love with our dating site!</h6>
          </div>
          <div className='hero-wall-content'>
            <Link href={"/pages/login"} className='register-btn'>Register Now</Link>
          </div>

        </div>
      </div>
    </section>
     
    </>
  )
}

export default Hero;                                   
     
       