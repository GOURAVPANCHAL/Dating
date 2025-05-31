import React from 'react'
import logo from "../../Images/logo.png"
import Image from 'next/image'
import ProfileImage from "../../Images/people1.png"
// import profileImage from "../../Images/prople1.png"
import './profileheader.css'
import Link from 'next/link'
const ProfileHeader = () => {
    return (
        <>
            <section className='profile-header'>
                <div className="container">
                    <div className='profile-header-main'>
                        <div className='profile-div-1'>
                            <div className="profile-logo">
                                <Link href={"/"}>
                                    <Image src={logo} className="img-fluid" alt='profile-header-logo' />
                                </Link>
                            </div>
                            <div className="profile-search">
                                <input type="search" placeholder='Search...' className='form-control' />
                                <i className='bi bi-search'></i>
                            </div>
                        </div>
                        <div className='profile-div-2'>
                            <div className="upgradeSec">
                                <button className='upgradebtn'>Upgrade Account</button>
                            </div>
                            <div className='profile-image-nav'>
                                <div>
                                    <Image src={ProfileImage} alt='profile-image' />
                                </div>
                                <div>
                                  <Link href={"/pages/notifications"}>  <i className="bi bi-bell"></i></Link>
                                </div>
                                <div>
                                    <i className="bi bi-heart"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProfileHeader