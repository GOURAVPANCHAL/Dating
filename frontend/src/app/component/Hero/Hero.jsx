import Link from 'next/link'
import React from 'react'
import './hero.css'
import heroimage from '../../Images/explore-lmage.png'
import Image from 'next/image'
const Hero = () => {
  return (
    <>
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
              <h1>Dating for Grown Ups Make a Real Connection</h1>
              <p>Start meeting singles who are ready to commit today.</p>
              <Link href="/about" className="login-btn">Get Started</Link>
            </div>
          </div>
        </div>
        <div className='hero-wall'>
          <div className='hero-wall-content'>
            <Image src={heroimage} alt="hero image" />
          </div>
          <div className='hero-wall-content'>
            <h1>Start your love story</h1>
            <h6>Qiupid: find love with our dating site!</h6>
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

export default Hero