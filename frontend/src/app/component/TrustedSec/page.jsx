import Image from 'next/image'
import React from 'react'
import pic1 from '@/app/Images/awesome.png'
import pic2 from '@/app/Images/icon.png'
import pic3 from '@/app/Images/millions1.png'
import pic4 from '@/app/Images/icon1.png'
import './trustedSec.css'

const page = () => {
  return (
    <>
      <section className='trusted-sec-main'>
        <div>
          <div className="container"> 
            <div className='text-center trustedtitleSec'>
              <p className='trustedtitle'>The No.1 Trusted Dating</p>
            </div>
            <div className="row align-items-center">
              <div className="col-md-3 col-6"> 
                <div className='trustedSec'>
                  <Image src={pic1} alt="svgImage" height={50} width={50} className='svgImg' />
                  <h3 className=''> Community</h3>
                  <p className='m-0'>Caramels pie cake pie marshmallow souffle donut biscuit.</p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className='trustedSec'>
                  <Image src={pic2} alt="svgImage" height={60} width={60} className='svgImg' />
                  <h3>Million Members</h3>
                  <p className='m-0'>Caramels pie cake pie marshmallow soufflé donut biscuit.</p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className='trustedSec'>
                  <Image src={pic3} alt="svgImage" height={60} width={60} className='svgImg' />
                  <h3>Private Groups</h3>
                  <p className='m-0'>Caramels pie cake pie marshmallow soufflé donut biscuit.</p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className='trustedSec'>
                  <Image src={pic4} alt="svgImage" height={60} width={60} className='svgImg' />
                  <h3>Friendly Forums</h3>
                  <p className='m-0'>Caramels pie cake pie marshmallow soufflé donut biscuit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </>
  )
}

export default page ;
