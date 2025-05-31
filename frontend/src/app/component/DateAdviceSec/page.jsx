import Image from 'next/image'
import React from 'react'
import pic1 from '@/app/Images/Video-Banner.jpg'
import './Datesec.css'
import Link from 'next/link'
import pic2 from '@/app/Images/icons-play.png'

const page = () => {
  return (
    <>
    <section>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                  <div className='dateAdviceImageSec'>
                  {/* <Image src={pic1} className="dateAdviceimg" alt='dateAdviceimg' height={650} width={750} /> */}
                  <div className='PlayiconSvg'>
                    <Image src={pic2} alt='SvgImage' className='SvgPic' height={100} width={100}/>
                  </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className='AdviceRightSec'>
                         <div className='DateTextSection'>
                          <h2 className='text-center DataTittle'>Explore Dating Advice</h2>
                          <div className='subtitle-section'>Be calm. Be kind. Be yourself.​</div>
                         </div>
                           <div className='element-container'>
                           Hello, I am Sarah and I am the first Dating AI for Qiupid.
                           <strong className='boldSec'> What are your preferences?</strong>

                           </div>
                           <section className='preferenceSec'>
                                <div className="preferenceElementSec">
                                
                                    <Link href="" className='elementor-button'>
                                     <button className='btn text-light elements-button-wrapper'>
                                          Mens
                                     </button>
                                    
                                    </Link>
                                    <Link href="" className='elementor-button'>
                                     <button className='btn  text-light elements-button-wrapper'>
                                          Wemen
                                     </button>
                                    
                                    </Link>
                                 
                                    <Link href="" className='elementor-button'>
                                     <button className='btn text-light elements-button-wrapper'>
                                          Others
                                     </button>
                                    
                                    </Link>



                                </div>
                           </section>
                  </div>
                </div>
            </div>
        </div>
        
        
        
        </section>   



    </>
  )
}

export default page
