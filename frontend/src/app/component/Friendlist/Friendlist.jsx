"use client";
import React, { useEffect, useState } from 'react';
import './FriendsPage.css';
import { FaEnvelope, FaUser } from 'react-icons/fa';

const FriendsPage = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFriends([
        {
          _id: '1',
          name: 'Anjali Sharma',
          email: 'anjali@example.com',
          profilePicture: 'https://randomuser.me/api/portraits/women/65.jpg',
        },
        {
          _id: '2',
          name: 'Ravi Kumar',
          email: 'ravi@example.com',
          profilePicture: 'https://randomuser.me/api/portraits/men/41.jpg',
        },
        {
          _id: '3',
          name: 'Pooja Mehta',
          email: 'pooja@example.com',
          profilePicture: 'https://randomuser.me/api/portraits/women/32.jpg',
        },
        {
          _id: '4',
          name: 'Amit Sinha',
          email: 'amit@example.com',
          profilePicture: 'https://randomuser.me/api/portraits/men/22.jpg',
        },
      ]);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="friendsPage-container">
      <h2 className="friendsPage-heading">Your Friends</h2>
      {loading ? (
        <div className="friendsPage-loading">Loading...</div>
      ) : (
        <div className="friendsPage-grid">
          {friends.map((friend) => (
            <div className="friendsPage-card" key={friend._id}>
              <div className="friendsPage-card-header">
                <img
                  src={friend.profilePicture}
                  alt={friend.name}
                  className="friendsPage-avatar"
                />
                <div className="friendsPage-user-info">
                  <h3 className="friendsPage-name">{friend.name}</h3>
                  <p className="friendsPage-email">{friend.email}</p>
                </div>
              </div>
              <div className="friendsPage-card-footer">
                <button className="friendsPage-btn">
                  <FaEnvelope size={14} />
                </button>
                <button className="friendsPage-btn">
                  <FaUser size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendsPage;
