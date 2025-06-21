'use client';
import React, { useEffect, useState } from 'react';
import './wishlist.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaTrashAlt } from "react-icons/fa";
import pic1 from '@/app/Images/wishlist.png'

const Wishlist = () => {
  const [wishlistProfiles, setWishlistProfiles] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("wishlistProfiles");
    if (stored) setWishlistProfiles(JSON.parse(stored));
  }, []);

  const handleRemove = (id) => {
    const updated = wishlistProfiles.filter(profile => profile.id !== id);
    setWishlistProfiles(updated);
    localStorage.setItem("wishlistProfiles", JSON.stringify(updated));
  };

  return (
    <section className="meetings-section container">
      <div className=' wishlistTopSec'>
      <Image src={pic1}  alt="heartimg" width={60} height={60} />
      <h2 className="meetings-heading mt-3"> My Wishlist</h2>
      </div>
      <div className="row">
        {wishlistProfiles.length > 0 ? (
          wishlistProfiles.map((item, index) => (
            <div key={index} className="col-md-3 col-6 mb-4">
              <div className="wishlist-match-card position-relative">
                <div className="premium-ribbon">Wishlisted 💗</div>

                <Link href={`/pages/find-match/${item.id}`} className="wishlist-match-link"> 
                  <div className="wishlist-image-wrapper">
                    <Image src={item.picture} alt={item.name} className="wishlist-img" width={300} height={300} />
                  </div>
                  <div className="wishlist-info">
                    <h4 className="name-price mb-1">
                      {item.name}, <span className="price-tag">₹{item.price || 'N/A'}</span>
                    </h4>
                    <p className="profession mb-2">
                      <i className="bi bi-geo-alt-fill me-1"></i>{item.state || 'Unknown'}
                    </p>
                    <div className="wishlist-meta text-start">
                      <div><span className="label">🏙️ City:</span> {item.city || 'N/A'}</div>
                      <div><span className="label">📍 Location:</span> {item.state || 'N/A'}</div>
                    </div>
                  </div>
                </Link>

                {/* Online status & remove button outside the link */}
                <div className="d-flex justify-content-between align-items-center px-3 mt-2">
                  <div className={`online-offline-dot ${item.isOnline ? 'green' : 'red'}`}></div>
                  <button className="btn btn-sm btn-danger trashbtn" onClick={() => handleRemove(item.id)}><FaTrashAlt /></button>
                </div>

                <div className="bottom-avatar">
                  <Image src={item.picture} alt="small" className="avatar-img" width={40} height={40} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-5">
            <h5>Your wishlist is empty 💔</h5>
            <p>Start adding profiles you like!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Wishlist;
