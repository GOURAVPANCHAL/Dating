'use client'
import ProfileTabs from '@/app/component/ProfileTabs/ProfileTabs'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <>
      <section className='profile'>
        <Suspense>
          <ProfileTabs />
        </Suspense>
      </section>
    </>
  )
}

export default page