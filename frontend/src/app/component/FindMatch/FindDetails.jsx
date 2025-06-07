"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import SuggestedProfiles from "../FindMatch/suggestedProfiles";
import image from "../../Images/people2.png";
import "../MyProfile/myprofile.css";
import pic from "../../Images/user/user.jpeg";
import pic1 from "../../Images/user/user1.jpeg";
import pic2 from "../../Images/user/user2.jpg";
import pic3 from "../../Images/user/user3.jpeg";
import pic4 from "../../Images/user/user4.jpeg";
import pic5 from "../../Images/user/user5.jpeg";
import pic6 from "../../Images/user/user6.jpeg";
import pic7 from "../../Images/user/user2.jpeg";
import pic8 from "../../Images/user/user8.jpeg";
import pic9 from "../../Images/user/user9.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const FindDetails = () => {
    const [activeBtn, setActiveBtn] = useState(null);
    const [friend, setFriend] = useState(false);
    const [zoomedImage, setZoomedImage] = useState(null);
    const [showBooking, setShowBooking] = useState(false);
    const [date, setDate] = useState("");
    const [place, setPlace] = useState("");
    const [thankYou, setThankYou] = useState(false);


    const [showSuggested, setShowSuggested] = useState(false);
    const suggestedRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setShowSuggested(true);
                }
            },
            { threshold: 0.2 }
        );
        if (suggestedRef.current) {
            observer.observe(suggestedRef.current);
        }
        return () => {
            if (suggestedRef.current) {
                observer.unobserve(suggestedRef.current);
            }
        };
    }, []);

    const handleToggle = () => setFriend((prev) => !prev);
    const handleBooking = () => setShowBooking(true);
    const handleClose = () => {
        setShowBooking(false);
        setThankYou(false);
        setDate("");
        setPlace("");
    };
    const handleSubmit = () => {
        if (date && place) {
            setThankYou(true);
            setTimeout(() => {
                setShowBooking(false);
                setThankYou(false);
            }, 3000);
        }
    };

    const profileDetail = [
        {
            name: "Dasha Daria",
            age: 24,
            country: "Georgia",
            state: "India",
            description:
                "So long as you have food in your mouth, you have solved all questions for the time being.",
            interest: [
                "Fashion",
                "Travelling",
                "Nature",
                "Art",
                "UNO",
                "Anime",
                "Music",
            ],
        },
    ];

    if (!profileDetail) {
        return (
            <section className="profile-match-detail-sec text-center py-5">
                <div className="container">
                    <p>Profile details not available.</p>
                </div>
            </section>
        );
    }
    const profileImages = [pic,pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9,];
    const aboutInfo = [
        {
            information:
                "A user profile is a digital representation of an individual's identity and preferences within a system.",
        },
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
    const leftItems = aboutInfo.slice(1, 6);
    const rightItems = aboutInfo.slice(6);

    return (
        <section className="profile-match-detail-sec">
            <div className="container">
             
               <div className="my-profile-section">
                    <div className="myprofile-main">
                        <div className="ribbon"> ₹ 6000</div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="my-main-image">
                                    <Image
                                        src={image}
                                        className="img-fluid"
                                        alt="profile-image"
                                    />
                                </div>
                            </div>
                            <div className="col-md-8">
                                {profileDetail.map((item, index) => (
                                    <div key={index} className="myprofile-content">
                                        <h4 className="profile-name">
                                            {item.name}, <span>{item.age}</span>
                                            <span>
                                                <i className="bi bi-patch-check text-success"></i>
                                            </span>
                                        </h4>
                                        <div className="like-dislike-btn">
                                            <button
                                                className={
                                                    activeBtn === "like" ? "active like-btn" : "like-btn"
                                                }
                                                onClick={() => setActiveBtn("like")}
                                            >
                                                <i className="bi bi-hand-thumbs-up"></i>
                                            </button>
                                            <button
                                                className={
                                                    activeBtn === "dislike"
                                                        ? "active dislike-btn"
                                                        : "dislike-btn"
                                                }
                                                onClick={() => setActiveBtn("dislike")}
                                            >
                                                <i className="bi bi-hand-thumbs-down"></i>
                                            </button>
                                        </div>
                                        <p className="profile-location">
                                            <i className="bi bi-geo-alt"></i> {item.country},{" "}
                                            {item.state}
                                        </p>
                                        <p className="profile-description">{item.description}</p>
                                        <ul className="profile-interest">
                                            {item.interest.map((interest, i) => (
                                                <li key={i}>{interest}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}

                                <hr />
                                <div className="FindDetailsBtnSec">
                                    <button
                                        onClick={handleToggle}
                                        className={`MakeFriendbtn ${friend ? "MakeFriendbtn" : "theme-bg"
                                            }`}
                                    >
                                        {friend ? (
                                            <>
                                                {" "}
                                                <i className="bi bi-person-dash fs-3"></i> {" "}
                                            </>
                                        ) : (
                                            <>
                                                {" "}
                                                <i className="bi  bi-person-add fs-4"></i>
                                            </>
                                        )}
                                    </button>
                                    <button className="messagebtn">
                                        <span
                                            className="justify-content-center text-light pb-3"
                                            style={{ fontSize: "18px" }}
                                        >
                                            {" "}
                                        </span>
                                        <i className="bi bi-chat-left-dots text-light fs-5"></i>
                                    </button>
                                    <button className="Bookingbtn " onClick={handleBooking}>
                                        <span
                                            className="justify-content-center text-light pb-3"
                                            style={{ fontSize: "18px" }}
                                        >
                                            Let's Date
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile-own-images-sec">
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
                                            onClick={() => setZoomedImage(img)}
                                            style={{ cursor: "pointer" }}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    {zoomedImage && (
                        <div className="zoom-modal" onClick={() => setZoomedImage(null)}>
                            <div
                                className="zoom-content"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    className="close-btn"
                                    onClick={() => setZoomedImage(null)}
                                >
                                    X
                                </button>
                                <Image
                                    src={zoomedImage}
                                    alt="Zoomed"
                                    className="zoomed-image"
                                />
                            </div>
                        </div>
                    )}

                    {showBooking && (
                        <div className="booking-popup animate">
                            <div className="booking-form">
                                <button className="close-booking" onClick={handleClose}>
                                    ×
                                </button>
                                {thankYou ? (
                                    <div className="thank-you">
                                        Thank you! Hope your meeting will be a success ❤️
                                    </div>
                                ) : (
                                    <>
                                        <h4 className="text-center mb-4">Book Your Date</h4>
                                        <input
                                            type="date"
                                            className="form-control mb-3"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            className="form-control mb-3"
                                            placeholder="Where we meet !"
                                            value={place}
                                            onChange={(e) => setPlace(e.target.value)}
                                        />

                                        <button className="submit-booking" onClick={handleSubmit}>
                                            Submit
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    )}

                    <div className="profile-about-section">
                        <h5 className="mb-3 font-semibold">About</h5>
                        <div className="row">
                            <div className="col-md-12">
                                <p>{aboutInfo[0].information}</p>
                            </div>
                            <div className="col-md-6">
                                {leftItems.map((item, index) => (
                                    <p key={index}>
                                        <strong>{item.label}:</strong> {item.value}
                                    </p>
                                ))}
                            </div>
                            <div className="col-md-6">
                                {rightItems.map((item, index) => (
                                    <p key={index}>
                                        <strong>{item.label}:</strong> {item.value}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* suggested profile created and its pages */}

                <div className="suggested-profiles" ref={suggestedRef}>
                    <SuggestedProfiles />
                </div>
               </div>
        </section>
    );
};

export default FindDetails;
