import React from 'react'
import './subscriptionBenifit.css'
import Image from 'next/image';
import img1 from '@/app/Images/graph1.jpg'
import img2 from '@/app/Images/Registration.avif'
import img3 from '@/app/Images/Time.jpg'

export default function page() {
    return (
        <>
            <section className='SubscriptionBenifitSec'>
                <div>
                    <div className='titlesec'>
                        <h1>How upgraded profile can <br /> help us to find partner?</h1>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-5'>
                                <div className='SubscriptionleftSec'>
                                    <Image src={img1} alt="" className='image1' />
                                </div>
                            </div>
                            <div className='col-md-7'>
                                <div className='SubscriptionRightSec'>
                                    <h3 className='text-center sectionsubtitle '>We rank Your proposal</h3>
                                    <p>Love is in the numbers.
                                        Since launching, we ve seen a steady rise in user engagement, successful matches, and retention rates — proving that people are not just joining, they’re staying and connecting.
                                        <br />
                                        📈 Consistent User Growth month-over-month
                                        <br />
                                        ❤️ Thousands of Matches Made every week
                                        <br />
                                        💬 High Engagement Rates in chats and interactions
                                        <br />
                                        🔒 Strong Retention driven by user trust and satisfaction
                                        With a user-centric approach and data-backed strategies, we’re building more than just a dating platform — we’re creating a trusted space for real relationships to blossom.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-7'>
                                <div className='SubscriptionRightSec'>
                                    <h3 className='text-center sectionsubtitle'>We rank Your proposal</h3>
                                    <p>Love is in the numbers.
                                        Since launching, we ve seen a steady rise in user engagement, successful matches, and retention rates — proving that people are not just joining, they’re staying and connecting.
                                        <br />
                                        📈 Consistent User Growth month-over-month
                                        <br />
                                        ❤️ Thousands of Matches Made every week
                                        <br />
                                        💬 High Engagement Rates in chats and interactions
                                        <br />
                                        🔒 Strong Retention driven by user trust and satisfaction
                                        With a user-centric approach and data-backed strategies, we’re building more than just a dating platform — we’re creating a trusted space for real relationships to blossom.</p>
                                </div>
                            </div>
                            <div className='col-md-5'>
                                <div className='SubscriptionleftSec'>
                                    <Image src={img2} alt="" className='image2' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-5'>
                                <div className='SubscriptionleftSec'>
                                    <Image src={img3} alt="" className='image3' />
                                </div>
                            </div>
                            <div className='col-md-7'>
                                <div className='SubscriptionRightSec'>
                                    <h3 className='text-center sectionsubtitle'>We rank Your proposal</h3>
                                    <p>Love is in the numbers.
                                        Since launching, we ve seen a steady rise in user engagement, successful matches, and retention rates — proving that people are not just joining, they’re staying and connecting.
                                        <br />
                                        📈 Consistent User Growth month-over-month
                                        <br />
                                        ❤️ Thousands of Matches Made every week
                                        <br />
                                        💬 High Engagement Rates in chats and interactions
                                        <br />
                                        🔒 Strong Retention driven by user trust and satisfaction
                                        With a user-centric approach and data-backed strategies, we’re building more than just a dating platform — we’re creating a trusted space for real relationships to blossom.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}