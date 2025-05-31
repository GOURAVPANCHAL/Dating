import React from 'react'
import './cubemainsec.css'
import CubeSection from '@/app/component/CubeSection/page'

const page = () => {
  return (
    <>
       



         <section style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: '0 0 60%', background: '#A16EFF', color: '#fff' }}>
        <CubeSection />
      </div>
      <div className='' style={{ flex: '1', padding: '60px', background: '#A16EFF' }}>
        <h1 className='cubeTitleSec'>Discover Love in Every Direction</h1>
        <p>Swipe through a world of possibilities — just like our 3D cube, every face reveals a new connection, a new story, and a new beginning.
        Whether you're here for meaningful relationships, exciting conversations, or just exploring, there's someone out there waiting for you.
         Love is multi-dimensional — let's unfold it together.</p>
      </div>
    </section>
    </>
  )
}

export default page
