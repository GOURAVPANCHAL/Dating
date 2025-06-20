"use client";
import Image from "next/image";
// import { useRouter } from 'next/navigation';
import React, { useState, useEffect, useRef } from "react";
import SuggestedProfiles from "../FindMatch/suggestedProfiles";
import "../../component/FindMatch/FindDetails.css";
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
import Link from "next/link";

const FindDetails = () => {
  const [activeBtn, setActiveBtn] = useState(null);
  const [friend, setFriend] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [showBooking, setShowBooking] = useState(false);
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [time, setTime] = useState("");
  const [surprise, setSurprise] = useState("");
  const [note, setNote] = useState("");
  const [vibe, setVibe] = useState("");
  const [thankYou, setThankYou] = useState(false);
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuggested, setShowSuggested] = useState(false);
  const suggestedRef = useRef(null);

  const handleCancelDate = () => {
    setDate("");
    setTime("");
    setPlace("");
    setVibe("");
    setSurprise("");
    setNote("");
    setShowBooking(false);
    setThankYou(false); // Reset booking status
    setCurrentStep(1);
  };

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

  const handleBooking = () => {
    setShowBooking(true);
    setCurrentStep(1);
  };

  const handleClose = () => {
    setShowBooking(false);
    setDate("");
    setPlace("");
    setTime("");
    setVibe("");
    setSurprise("");
    setNote("");
    setCurrentStep(1);
  };

  const generateMeetingCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleSubmit = () => {
    if (!surprise || !note) {
      alert("Please fill all fields before submitting.");
      return;
    }
    setThankYou(true);
    setShowThankYouPopup(true);
    setShowBooking(false);
  };

  const profileDetail = [{
    name: "Dasha Daria",
    age: 24,
    country: "Georgia",
    state: "India",
    distance: "5km",
    description:
      "So long as you have food in your mouth, you have solved all questions for the time being.",
    interest: ["Fashion", "Travelling", "Nature", "Art", "UNO", "Anime", "Music"],
  }];

  const profileImages = [pic, pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9];

  const aboutInfo = [
    { information: "A user profile is a digital representation of an individual's identity and preferences within a system." },
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

  if (!profileDetail || profileDetail.length === 0) {
    return (
      <section className="profile-match-detail-sec text-center py-5">
        <div className="container">
          <p>Profile details not available.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="profile-match-detail-sec">
      <div className="container">
        <div className="my-profile-section">
          <div className="myprofile-main">
            <div className="ribbon"> ₹ 6000</div>
            <div className="row">
              <div className="col-md-4">
                <div className="my-main-image">
                  <Image src={image} className="img-fluid" alt="profile-image" />
                </div>
              </div>
              <div className="col-md-8">
                {profileDetail.map((item, index) => (
                  <div key={index} className="myprofile-content">
                    <h4 className="profile-name">
                      {item.name}, <span>{item.age}</span>{" "}
                      <i className="bi bi-patch-check text-success"></i>
                    </h4>
                    <div className="like-dislike-btn">
                      <button
                        className={activeBtn === "like" ? "active like-btn" : "like-btn"}
                        onClick={() => setActiveBtn("like")}
                      >
                        <i className="bi bi-hand-thumbs-up"></i>
                      </button>
                      <button
                        className={activeBtn === "dislike" ? "active dislike-btn" : "dislike-btn"}
                        onClick={() => setActiveBtn("dislike")}
                      >
                        <i className="bi bi-hand-thumbs-down"></i>
                      </button>
                    </div>
                    <div className="d-flex">
                      <p className="profile-location">
                        <i className="bi bi-geo-alt"></i> {item.country}, {item.state}
                      </p>
                      <p className="ms-3">
                        <i className="bi bi-geo-alt"></i> {item.distance}
                      </p>
                    </div>
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
                    className={`MakeFriendbtn ${friend ? "theme-bg" : "MakeFriendbtn"}`}
                  >
                    {friend ? <i className="bi bi-person-dash fs-3"></i> : <i className="bi bi-person-add fs-4"></i>}
                  </button>
                  <Link href="/pages/profile?tab=message" className="messagebtn">
                    <button className="messagebtn">
                      <span className="justify-content-center text-light pb-3" style={{ fontSize: "14px" }}>
                        <i className="bi bi-chat-left-dots text-light fs-5"></i>
                      </span>
                    </button>
                  </Link>
                  <div>
                    {thankYou ? (
                      <button className="Bookingbtn cancel" onClick={handleCancelDate}>
                        <span style={{ fontSize: "18px", color: "white" }}>Cancel Date</span>
                      </button>
                    ) : (
                      <button className="Bookingbtn" onClick={handleBooking} disabled={showBooking}>
                        <span style={{ fontSize: "18px" }}>Let's Date</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-own-images-sec">
            <div className="own-profile-images">
              <h5 className="mb-3 font-semibold">Photos</h5>
              <Swiper modules={[Navigation]} spaceBetween={10} slidesPerView={5} navigation className="photo-slider">
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
              <div className="zoom-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={() => setZoomedImage(null)}>X</button>
                <Image src={zoomedImage} alt="Zoomed" className="zoomed-image" />
              </div>
            </div>
          )}

          {showBooking && (
            <div className="booking-popup animate">
              <div className="booking-form">
                <button className="close-booking" onClick={handleClose}>×</button>
                <h4 className="booking-title">Book Your Date</h4>
                {currentStep === 1 && (
                  <>
                    <label className="booking-label">Date of Your Date</label>
                    <input
                      type="date"
                      className="booking-input"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                    />
                    <label className="booking-label">Preferred Time</label>
                    <input
                      type="time"
                      className="booking-input"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </>
                )}
                {currentStep === 2 && (
                  <>
                    <label className="booking-label">Meeting Place</label>
                    <input
                      type="text"
                      className="booking-input"
                      placeholder="e.g., Cafe Coffee Day, Park..."
                      value={place}
                      onChange={(e) => setPlace(e.target.value)}
                    />
                    <label className="booking-label">What’s the vibe for this date?</label>
                    <select
                      className="booking-input"
                      value={vibe}
                      onChange={(e) => setVibe(e.target.value)}
                    >
                      <option value="">Choose a vibe</option>
                      <option value="romantic">Romantic</option>
                      <option value="funny">Chill & Fun</option>
                      <option value="adventurous">Adventurous</option>
                      <option value="classy">Classy</option>
                      <option value="mystery">Keep it a mystery</option>
                    </select>
                  </>
                )}
                {currentStep === 3 && (
                  <>
                    <label className="booking-label">Anything special planned?</label>
                    <textarea
                      className="booking-textarea"
                      value={surprise}
                      onChange={(e) => setSurprise(e.target.value)}
                    />
                    <label className="booking-label">Any preferences or notes?</label>
                    <textarea
                      className="booking-textarea"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    />
                  </>
                )}

                <div className="booking-buttons">
                  {currentStep > 1 && (
                    <button className="booking-btn back" onClick={() => setCurrentStep(currentStep - 1)}>
                      Back
                    </button>
                  )}
                  {currentStep < 3 ? (
                    <button
                      className="booking-btn next"
                      onClick={() => {
                        if (currentStep === 1 && (!date || !time)) {
                          alert("Please fill date and time before proceeding.");
                          return;
                        }
                        if (currentStep === 2 && (!place || !vibe)) {
                          alert("Please fill meeting place and vibe before proceeding.");
                          return;
                        }
                        setCurrentStep(currentStep + 1);
                      }}
                    >
                      Next
                    </button>
                  ) : (
                    <button className="booking-btn submit" onClick={handleSubmit}>
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {showThankYouPopup && (
            <div className="thank-you-popup-overlay" onClick={() => {}}>
              <div className="thank-you-popup" onClick={(e) => e.stopPropagation()}>
                <h3>🎉 Thank You!</h3>
                <b>Meeting Code: <span className="meeting-code bg-warning p-2 mb-3 rounded">{generateMeetingCode()}</span></b>
                <p className="mt-3">We hope your meeting will be a success ❤️</p>
                <button onClick={() => setShowThankYouPopup(false)}>Close</button>
              </div>
            </div>
          )}

          <div className="profile-about-section">
            <h5 className="mb-3 font-semibold">About</h5>
            <div className="row">
              <div className="col-md-12"><p>{aboutInfo[0].information}</p></div>
              <div className="col-md-6">{leftItems.map((item, index) => (<p key={index}><strong>{item.label}:</strong> {item.value}</p>))}</div>
              <div className="col-md-6">{rightItems.map((item, index) => (<p key={index}><strong>{item.label}:</strong> {item.value}</p>))}</div>
            </div>
          </div>
        </div>

        <div className="suggested-profiles" ref={suggestedRef}>
          <SuggestedProfiles />
        </div>
      </div>
    </section>
  );
};

export default FindDetails;
