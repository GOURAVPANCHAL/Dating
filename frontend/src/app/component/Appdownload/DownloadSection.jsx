import React from 'react'
import './downloadSection.css'
import backgroundImage from '../../Images/bg4.png'
import Image from 'next/image'
const DownloadSection = () => {
    return (
        <>
            <div className="download-app">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4 p-0">
                        <div className="download-image">
                            <Image src={backgroundImage} alt="Download App Background" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="download-content">
                            <h2>Download Our App</h2>
                            <h5>
                                The Ready for <span>LuvNestor</span> App
                            </h5>
                            <p>All it takes is 30 seconds to Download. Fast, Simples & Delightful. Meet genuine
                                people near you. Find meaningful connections effortlessly. Your perfect match
                                is just a click away.
                            </p>
                            <div className="download-app-buttons">
                                <a className='cus-btn' href="https://play.google.com/store/apps/details?id=com.example.app" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-android2"></i> | Play Store
                                </a>
                                <a className='cus-btn2' href="https://apps.apple.com/app/id1234567890" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-apple"></i> | Apple Store
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default DownloadSection