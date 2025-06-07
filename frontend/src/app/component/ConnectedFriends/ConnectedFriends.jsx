'use client';
import React, { useState } from 'react';
import './connctedfriends.css';
import pic1 from "../../Images/user/user1.jpeg";
import pic2 from "../../Images/user/user2.jpeg";
import pic3 from "../../Images/user/user2.jpg";
import pic4 from "../../Images/user/user3.jpeg";
import Image from 'next/image';
import Link from 'next/link';

const ConnectedFriends = () => {
  const [requestStatus, setRequestStatus] = useState({});
  const [ratings, setRatings] = useState({});

  const handleRating = (id, value) => {
    setRatings((prev) => ({ ...prev, [id]: value }));
  };

  const originalProfiles = [
    { id: 1, gender: "female", picture: pic1, name: "Juhi Khan", age: 24, State: "UP", City: "Bareli", Date: '04-09-1995', Time: '3:20', Location: 'Cafe Coffee Day, Connaught Place, New Delhi', Price: 2200 ,isOnline: true, verified: true},
    { id: 2, gender: "female", picture: pic2, name: "Juhi Khan", age: 24, State: "Delhi", City: "Rohini", Date: '04-09-1995', Time: '3:20', Location: 'Cafe Coffee Day, Connaught Place, New Delhi', Price: 2200 },
    { id: 3, gender: "female", picture: pic3, name: "Juhi Khan", age: 24, State: "Gujarat", City: "Gohat", Date: '04-09-1995', Time: '3:20', Location: 'Cafe Coffee Day, Connaught Place, New Delhi', Price: 2200,isOnline: true, verified: true },
    { id: 4, gender: "female", picture: pic4, name: "Juhi Khan", age: 24, State: "Manipur", City: "Naimik", Date: '04-09-1995', Time: '3:20', Location: 'Cafe Coffee Day, Connaught Place, New Delhi', Price: 2200 },
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
    <section className="meetings-section container">
      <h2 className="meetings-heading mt-3">💖 People I Met</h2>
      <div className="row">
        {originalProfiles.map((item, index) => (
          <div key={index} className="col-md-3 col-6">
            <div className='profile-match-card position-relative'>
            <div className="premium-ribbon">Premium</div>
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

              {/* Profile Link */}
              <Link href={'/pages/find-match/id'} className='profile-match-link'>
                <div className="profile-image-wrapper">
                  <Image src={item.picture} alt={item.name} className="profile-img" />
                </div>
                <div className="profile-info">
                  <h4 className="name-price mb-1">
                    {item.name}, <span className="price-tag">₹{item.Price}</span>
                  </h4>
                  <p className="profession mb-2">
                    <i className="bi bi-briefcase-fill me-1"></i>{item.State}
                  </p>
                  <div className="profile-meta text-start">
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
                    <div className="star-rating mb-2">
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
  );
};

export default ConnectedFriends;
