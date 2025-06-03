'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import pic from "../../Images/user/user.jpeg";
import pic1 from "../../Images/user/user1.jpeg";
import pic2 from "../../Images/user/user2.jpg";
import pic3 from "../../Images/user/user3.jpeg";

// Sample mock data
const mockProfiles = [
  {
    id: '1',
    name: 'Ananya Sharma',
    age: 28,
    profession: 'Software Engineer',
    picture: pic,
    tags: ['Yoga', 'Reading'],
    isOnline: true
  },
  {
    id: '2',
    name: 'Rahul Mehra',
    age: 30,
    profession: 'Marketing Manager',
    picture: pic1,
    tags: ['Travel', 'Photography'],
    isOnline: false
  },
  {
    id: '3',
    name: 'Sneha Patel',
    age: 26,
    profession: 'UI/UX Designer',
    picture: pic2,
    tags: ['Art', 'Cooking'],
    isOnline: true
  },
  {
    id: '4',
    name: 'Karan Singh',
    age: 32,
    profession: 'Entrepreneur',
    picture: pic3,
    tags: ['Fitness', 'Startups'],
    isOnline: false
  },
 
];


const SuggestedProfiles = () => {
  const profiles = mockProfiles;

  if (!profiles || profiles.length === 0) {
    return (
      <div className="text-center py-5">
        <p>No suggested profiles available.</p>
      </div>
    );
  }

  return (
    <div className="container-fluid mt-5 mb-5">
      <hr className="mb-4" />
      <h2 className="text-center mb-4">You Might Also Like...</h2>
      <div className="row justify-content-center">
        {profiles.map((item) => (
          <div key={item.id} className="col-md-3 col-sm-6 mb-4">
            <div className="profile-match-card">
              <Link href={`/find-match/${item.id}`} className="profile-match-link">
                <div className="profile-image-wrapper">
                  <Image
                    src={item.picture}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="profile-img"
                  />
                </div>
                <div className="profile-info">
                  <h4>
                    {item.name}, <span>{item.age}</span>
                  </h4>
                  <p className="profession">
                    <i className="bi bi-briefcase-fill"></i> {item.profession}
                  </p>
                  {item.tags && item.tags.length > 0 && (
                    <div className="tags">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
              <div className="bottom-avatar">
                <Image
                  src={item.picture}
                  alt="small"
                  width={50}
                  height={50}
                  className="avatar-img"
                />
              </div>
              {item.isOnline !== undefined && (
                <div
                  className={`online-offline-dot ${item.isOnline ? 'green' : 'red'}`}
                ></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedProfiles;
