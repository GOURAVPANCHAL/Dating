'use client'
import React, { useState, useRef } from 'react';
import '../FindMatch/findprofile.css';
import './FriendRequest.css';
import Image from 'next/image';
import Link from 'next/link';
import ReactPaginate from 'react-paginate';
import pic1 from "../../Images/user/user1.jpeg";
import pic2 from "../../Images/user/user2.jpeg";
import pic3 from "../../Images/user/user2.jpg";
import pic4 from "../../Images/user/user3.jpeg";
import pic5 from "../../Images/user/user4.jpeg";
import pic6 from "../../Images/user/user5.jpeg";

const notificationSrc = "/sound/notification.mp3";

const FriendRequest = () => {
    const originalProfiles = [
        { picture: pic1, name: "Juhi Khan", age: 24, city: "Rohini", state: "Delhi" },
        { picture: pic2, name: "Divya Rathor", age: 24, city: "Rohini", state: "Delhi" },
        { picture: pic3, name: "Nirmala Devi", age: 34, city: "Rohini", state: "Delhi" },
        { picture: pic4, name: "Kalpana Chawla", age: 40, city: "Rohini", state: "Delhi" },
        { picture: pic5, name: "Vidya Devi", age: 50, city: "Rohini", state: "Delhi" },
        { picture: pic6, name: "Santosh Singh", age: 70, city: "Rohini", state: "Delhi" },
        { picture: pic1, name: "Anjali", age: 30, city: "Delhi", state: "Delhi" },
        { picture: pic2, name: "Kavita", age: 28, city: "Gurgaon", state: "Haryana" },
        { picture: pic3, name: "Priya", age: 35, city: "Noida", state: "UP" },
        { picture: pic4, name: "Rita", age: 38, city: "Ghaziabad", state: "UP" },
        { picture: pic5, name: "Neha", age: 29, city: "Faridabad", state: "Haryana" },
        { picture: pic6, name: "Sneha", age: 31, city: "Delhi", state: "Delhi" },
        { picture: pic1, name: "Payal", age: 26, city: "Delhi", state: "Delhi" },
    ];

    const profilesPerPage = 12;
    const [filteredProfiles, setFilteredProfiles] = useState(originalProfiles);
    const [currentPage, setCurrentPage] = useState(0);
    const audioRef = useRef(null);

    const handleAccept = (index) => {
        const newProfiles = [...filteredProfiles];
        newProfiles.splice(index + currentPage * profilesPerPage, 1);
        setFilteredProfiles(newProfiles);

        if (audioRef.current) {
            audioRef.current.play().catch(err => console.error("Sound error:", err));
        }
    };

    const handleReject = (index) => {
        const newProfiles = [...filteredProfiles];
        newProfiles.splice(index + currentPage * profilesPerPage, 1);
        setFilteredProfiles(newProfiles);
    };

    const pageCount = Math.ceil(filteredProfiles.length / profilesPerPage);
    const offset = currentPage * profilesPerPage;
    const currentProfiles = filteredProfiles.slice(offset, offset + profilesPerPage);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <>
            <section className='find-profile-section'>
                <div className="container-fluid">
                    <div className="page-heading text-center">
                        <h1><i className="bi bi-person-hearts"></i> Friend Requests</h1>
                        <p className="subtitle">Accept or decline connection requests from users interested in you</p>
                    </div>

                    {filteredProfiles.length === 0 ? (
                        <div className="text-center mt-5">
                            <h3 className="text-muted">
                                <i className="bi bi-emoji-smile"></i> No more friend requests
                            </h3>
                            <p className="mb-4">You've responded to all your requests.</p>
                            <Link href="/pages/find-match" className="text-decoration-none upgradebtn">
                                Find More Matches <i className="bi bi-arrow-right-circle"></i>
                            </Link>
                        </div>
                    ) : (
                        <>
                            <div className="row">
                                {currentProfiles.map((item, index) => (
                                    <div key={index} className="col-md-3 col-sm-6 mb-4">
                                        <div className='profile-match-card'>
                                            <Link href={'/pages/find-match/id'} className='profile-match-link'>
                                                <div className="profile-image-wrapper">
                                                    <Image src={item.picture} alt={item.name} className="profile-img" />
                                                </div>
                                                <div className="profile-info">
                                                    <h4>{item.name}, <span>{item.age}</span></h4>
                                                    <p className="location">
                                                        <i className="bi bi-geo-alt-fill"></i> {item.city}, {item.state}
                                                    </p>
                                                </div>
                                            </Link>
                                            <div className="bottom-avatar">
                                                <Image src={item.picture} alt="small" className="avatar-img" />
                                            </div>
                                            <div className="request-actions">
                                                <button className="btn-accept" onClick={() => handleAccept(index)}>
                                                    Accept <i className="bi bi-check2-circle"></i>
                                                </button>
                                                <button className="btn-decline" onClick={() => handleReject(index)}>
                                                    Decline <i className="bi bi-x-circle"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pagination-container text-center mt-4">
                                <ReactPaginate
                                    previousLabel={'← Previous'}
                                    nextLabel={'Next →'}
                                    breakLabel={'...'}
                                    pageCount={pageCount}
                                    marginPagesDisplayed={1}
                                    pageRangeDisplayed={3}
                                    onPageChange={handlePageClick}
                                    containerClassName={'pagination justify-content-center'}
                                    pageClassName={'page-item'}
                                    pageLinkClassName={'page-link'}
                                    previousClassName={'page-item'}
                                    previousLinkClassName={'page-link'}
                                    nextClassName={'page-item'}
                                    nextLinkClassName={'page-link'}
                                    breakClassName={'page-item'}
                                    breakLinkClassName={'page-link'}
                                    activeClassName={'active'}
                                />
                            </div>
                        </>
                    )}
                </div>

                {/* 🔊 Hidden audio element for notification */}
                <audio ref={audioRef} src={notificationSrc} preload="auto" />
            </section>
        </>
    )
}

export default FriendRequest;
