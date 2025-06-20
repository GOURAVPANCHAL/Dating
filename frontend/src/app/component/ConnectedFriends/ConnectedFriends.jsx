'use client';
import React, { useState } from 'react';
import './connctedfriends.css';
import pic1 from "../../Images/user/user1.jpeg";
import pic2 from "../../Images/user/user2.jpeg";
import pic3 from "../../Images/user/user2.jpg";
import pic4 from "../../Images/user/user3.jpeg";
import Image from 'next/image';
import Link from 'next/link';
import { CiLocationOn } from "react-icons/ci";


const ConnectedFriends = () => {
  const [openPopupId, setOpenPopupId] = useState(null);

  const openPopup = (id) => setOpenPopupId(id);
  const closePopup = () => setOpenPopupId(null);


  const [requestStatus, setRequestStatus] = useState({});
  const [ratings, setRatings] = useState({});

  const handleRating = (id, value) => {
    setRatings((prev) => ({ ...prev, [id]: value }));
  };

  const originalProfiles = [
    { id: 1, gender: "female", picture: pic1, name: "Juhi Khan", age: 24, State: "UP", City: "Bareli", Date: '04-09-1995', Time: '3:20', Location: 'Cafe Coffee Day, Connaught Place, New Delhi', Price: 2200, isOnline: true, verified: true },
    { id: 2, gender: "female", picture: pic2, name: "Juhi Khan", age: 24, State: "Delhi", City: "Rohini", Date: '04-09-1995', Time: '3:20', Location: 'Cafe Coffee Day, Connaught Place, New Delhi', Price: 2200 },
    // { id: 3, gender: "female", picture: pic3, name: "Juhi Khan", age: 24, State: "Gujarat", City: "Gohat", Date: '04-09-1995', Time: '3:20', Location: 'Cafe Coffee Day, Connaught Place, New Delhi', Price: 2200, isOnline: true, verified: true },
    // { id: 4, gender: "female", picture: pic4, name: "Juhi Khan", age: 24, State: "Manipur", City: "Naimik", Date: '04-09-1995', Time: '3:20', Location: 'Cafe Coffee Day, Connaught Place, New Delhi', Price: 2200 },
  ];

  const handleToggle = (profileId) => {
    const selectedProfile = originalProfiles.find(p => p.id === profileId);
    if (!selectedProfile) return;

    let requests = JSON.parse(localStorage.getItem("friendRequests")) || {};

    if (requestStatus[profileId]) {
      delete requests[profileId];
    } else {
      requests[profileId] = {
        ...selectedProfile,
        status: "pending",
        timestamp: new Date().toISOString()
      };
    }

    localStorage.setItem("friendRequests", JSON.stringify(requests));

    setRequestStatus((prev) => ({
      ...prev,
      [profileId]: !prev[profileId]
    }));
  };

  return (

    <>
      <section>
        <h3 className="text-center HeadingSec mb-4">Active / Upcoming Booking</h3>
        <div className="UpcomingBookingSec">
          <div className="BookingMainSec">
            <div className="container">
              <div className="row g-4">
                {originalProfiles.map((item, index) => (
                  <div key={index} className="col-md-6 col-12">
                    <div className="hotel-card-horizontal d-flex align-items-start">
                      <div className="hotel-card-img rounded">
                        <Image src={item.picture} alt={item.name} width={160} height={400} className="img-fluid rounded" />
                        <div className="discount-badge">OTP : 4426</div>
                      </div>
                      <div className="hotel-card-info">
                        <h4 className="hotel-name">{item.name}</h4>
                        <div className="rating">
                          <span className="star">⭐</span> {ratings[item.id] || 4.2} · <span className="text-success">Excellent Location</span>
                        </div>
                        <div className="features">
                          <span><CiLocationOn /> {item.State}</span>
                          <span>🕒 {item.Time}</span>
                          <span>🏨 3-Star</span>
                          <span>🍸 Bar</span>
                        </div>
                        <div className="booking-meta">
                          <p><strong>📅 Date:</strong> {item.Date}</p>
                          {/* <p><strong>🏙️ City:</strong> {item.City}</p> */}
                          <p><strong><CiLocationOn /> Location:</strong> {item.Location}</p>
                        </div>
                        <div className="price-and-book">
                          <span className="price">₹{item.Price}</span>
                          <Link href={'/pages/find-match/id'} className="book-now-btn">👁️  View</Link>
                        </div>
                        <div className="star-rating mt-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <i
                              key={star}
                              className={`bi ${ratings[item.id] >= star ? 'bi-star-fill' : 'bi-star'}`}
                              onClick={(e) => {
                                e.preventDefault();
                                handleRating(item.id, star);
                              }}
                            ></i>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="meetings-sec container">
        <h2 className="meetings-heading mt-3">💖 People I Met</h2>
        <div className="row">
          {originalProfiles.map((item, index) => (
            <div key={index} className="col-md-3 col-6">
              <div className='ConnectedFriends-match-card position-relative'>
                <div
                  className="feedback-ribbon"
                  onClick={(e) => {
                    e.preventDefault();       // Prevent the default navigation
                    e.stopPropagation();      // Stop the event from bubbling to <Link>
                    openPopup(item.id);       // Open feedback popup
                  }}
                  style={{ pointerEvents: 'auto' }} // Make sure CSS doesn't block click
                >
                  Feedback
                </div>


                {openPopupId === item.id && (
                  <div className='popup-overlay'>
                    <div className='popup-box'>
                      <button className='close-btn' onClick={closePopup}>×</button>
                      <h2>Session Feedback & Rating!</h2>
                      <p>Please rate your experience and leave a message:</p>

                      <form>
                        {/* Rating Stars */}
                        <div className="star-rating mb-3">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <i
                              key={star}
                              className={`bi ${ratings[item.id] >= star ? 'bi-star-fill' : 'bi-star'} star-icon`}
                              style={{ cursor: 'pointer', color: ratings[item.id] >= star ? '#f1c40f' : '#ccc' }}
                              onClick={(e) => {
                                e.preventDefault();
                                handleRating(item.id, star);
                              }}
                            ></i>
                          ))}
                        </div>

                        {/* Feedback Text Area */}
                        <p>Aditional feedback </p>
                        <textarea
                          className="feedback-textarea"
                          placeholder="Write your experience..."
                          rows={4}
                        ></textarea>
                        <div className="feedback-points-popup">
                          <h5 className="mb-3">✅ Select Positive Points</h5>

                          <div className="compact-checkbox-grid">
                            <div className="checkbox-item">
                              <input type="checkbox" id="polite" />
                              <label htmlFor="polite">Polite</label>
                            </div>

                            <div className="checkbox-item">
                              <input type="checkbox" id="supportive" />
                              <label htmlFor="supportive">Emotional Supportive</label>
                            </div>

                            <div className="checkbox-item">
                              <input type="checkbox" id="friendly" />
                              <label htmlFor="friendly">Friendly & Kind</label>
                            </div>

                            <div className="checkbox-item">
                              <input type="checkbox" id="listener" />
                              <label htmlFor="listener">Good Listener</label>
                            </div>
                          </div>
                        </div>

                        <div className="feedback-points-popup">
                          <h5 className="mb-3">✅ What Could be improved </h5>

                          <div className="compact-checkbox-grid">
                            <div className="checkbox-item">
                              <input type="checkbox" id="rude" />
                              <label htmlFor="rude">Was Rude</label>
                            </div>

                          

                            <div className="checkbox-item">
                              <input type="checkbox" id="uncomfortable" />
                              <label htmlFor="uncomfortable">Uncomfortable</label>
                            </div>
                               
                            <div className="checkbox-item">
                              <input type="checkbox" id="emotionally unavailable" />
                              <label htmlFor="emotionally unavailable"> Emotionally Unavailable</label>
                            </div>
                            <div className="checkbox-item">
                              <input type="checkbox" id="dominated" />
                              <label htmlFor="dominated">Dominated Conversation</label>
                            </div>
                          </div>
                        </div>


                        <br />
                        <button type="submit" className="submit-feedback-btn mt-3">Submit Feedback</button>
                      </form>
                    </div>
                  </div>
                )}




                {/* Dropdown menu */}
                {/* <div className="dropdown-menu-wrapper">
                <button
                  className="dots-button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const menu = document.getElementById(`menu-${index}`);
                    document.querySelectorAll('.dropdown-menu-content').forEach(m => {
                      if (m !== menu) m.classList.remove('show');
                    });
                    menu?.classList.toggle('show');
                  }}
                >
                  <i className="bi bi-shield-exclamation action-button"></i>
                </button>
                <div id={`menu-${index}`} className="dropdown-menu-content">
                  <button className="dropdown-item text-danger"><i className="bi bi-ban"></i> Block</button>
                  <button className="dropdown-item text-warning"><i className="bi bi-flag"></i> Report</button>
                </div>
              </div> */}

                {/* ConnectedFriends Link */}

                <Link href={'/pages/find-match/id'} className='ConnectedFriends-match-link'>
                  <div className="ConnectedFriends-image-wrapper">
                    <Image src={item.picture} alt={item.name} className="ConnectedFriends-img" />
                  </div>
                  <div className="ConnectedFriends-info">
                    <h4 className="name-price mb-1">
                      {item.name}, <span className="price-tag">₹{item.Price}</span>
                    </h4>
                    <p className="profession mb-2">
                      <i className="bi bi-briefcase-fill me-1"></i>{item.State}
                    </p>
                    <div className="ConnectedFriends-meta text-start">
                      <div className="mb-1">
                        <span className="label">📅 Date:</span> {item.Date}
                        <span className="label ms-2">🕒 Time:</span> {item.Time}
                      </div>
                      <div className="mb-1">
                        <span className="label">🏙️ City:</span> {item.City}
                      </div>
                      <div>
                        <span className="label">📍 Location:</span> {item.Location}
                      </div>
                    </div>

                    {/* ⭐ Rating and Rebook */}
                    <div className="rating-booking-wrapper mt-2 px-2">
                      {/* <div className="star-rating mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <i
                            key={star}
                            className={`bi ${ratings[item.id] >= star ? 'bi-star-fill' : 'bi-star'} star-icon`}
                            style={{ cursor: 'pointer', color: ratings[item.id] >= star ? '#f1c40f' : '#ccc' }}
                            onClick={(e) => {
                              e.preventDefault();
                              handleRating(item.id, star);
                            }}
                          ></i>
                        ))}
                      </div> */}
                      <button className="btn btn-sm btn-primary rebook-btn">Rebook Again</button>
                    </div>

                  </div>
                </Link>

                {/* Avatar and Online Dot */}
                <div className="bottom-avatar">
                  <Image src={item.picture} alt="small" className="avatar-img" />
                </div>
                <div className={`online-offline-dot ${item.isOnline ? 'green' : 'red'}`}></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ConnectedFriends;
