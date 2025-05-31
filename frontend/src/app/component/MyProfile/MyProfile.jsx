import Image from 'next/image'
import React from 'react'
import image from '../../Images/people2.png'
import "./myprofile.css"
import pic from "../../Images/user/user.jpeg"
import pic1 from "../../Images/user/user1.jpeg"
import pic2 from "../../Images/user/user2.jpg"
import pic3 from "../../Images/user/user3.jpeg"
import pic4 from "../../Images/user/user4.jpeg"
import pic5 from "../../Images/user/user5.jpeg"
import pic6 from "../../Images/user/user6.jpeg"
import pic7 from "../../Images/user/user2.jpeg"
import pic8 from "../../Images/user/user8.jpeg"
import pic9 from "../../Images/user/user9.jpeg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // ✅ Add this line
import 'swiper/css';
import 'swiper/css/navigation';

const MyProfile = () => {
    const profileDetail = [
        {
            name: "Dasha Daria",
            age: 24,
            country: "Georgia",
            state: "India",
            description: "So long as you have food in your mouth , you have solved all questions for the time being.",
            interest: ["Fashion", "Travelling", "Nature", "Art", "UNO", "Anime", "Music", "Art", "UNO", "Anime", "Music"],
        }
    ];
    const profileImages = [pic, pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9];
    const aboutInfo = [
        { label: "Live in", value: "Tbilisi, Georgia" },
        { label: "Hometown", value: "Saint Petersburg, Russia" },
        { label: "Work as", value: "Businesswoman" },
        { label: "Education", value: "Bachelor of Software Engineering" },
        { label: "Languages", value: "English, Russian" },
        { label: "Relationship", value: "Single" },
        { label: "Family plans", value: "No kids" },
        { label: "Smoke", value: "Sometimes" },
        { label: "Drink", value: "Sometimes" },
        { label: "Marijuana", value: "Yes" },
    ];

    // Split into two columns
    const leftItems = aboutInfo.slice(0, 5);
    const rightItems = aboutInfo.slice(5);

    return (
        <section className='my-profile-section'>
            <div className='myprofile-main'>
                <div className="row">
                    <div className="col-md-4">
                        <div className="my-main-image">
                            <Image src={image} className='img-fluid' alt='profile-image' />
                        </div>
                    </div>
                    <div className="col-md-8">
                        {profileDetail.map((item, index) => (
                            <div key={index} className="myprofile-content">
                                <h4 className="profile-name">
                                    {item.name} <span>{item.age}</span>{" "}
                                    <span>
                                        <i className="bi bi-patch-check text-success"></i>
                                    </span>  
                                </h4>
                                <p className="profile-location">
                                    <i className="bi bi-geo-alt"></i> {item.country}, {item.state}
                                </p>
                                <p className="profile-description">{item.description}</p>
                                <ul className='profile-interest'>
                                    {item.interest.map((interest, i) => (
                                        <li key={i}>{interest}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='profile-own-images-sec'>
                <div className="own-profile-images">
                    <h5 className="mb-3 font-semibold">Photos</h5>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={10}
                        slidesPerView={5}
                        navigation
                        className="photo-slider"
                    >
                        {profileImages.map((img, i) => (
                            <SwiperSlide key={i}>
                                <Image
                                    src={img}
                                    alt={`Photo ${i + 1}`}
                                    className="profile-image-slide"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="profile-about-section">
                <h5 className="mb-3 font-semibold">About</h5>
                <div className="row">
                    <div className="col-md-6">
                        {leftItems.map((item, index) => (
                            <p key={index}>{item.label} : <strong>{item.value}</strong></p>
                        ))}
                    </div>
                    <div className="col-md-6">
                        {rightItems.map((item, index) => (
                            <p key={index}>{item.label} : <strong> {item.value}</strong></p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyProfile;
