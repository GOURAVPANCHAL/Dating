'use client'
import React, { useEffect, useState } from 'react';
import './findprofile.css';
import Filterations from './Filterations';
import Image from 'next/image';
import Link from 'next/link';
import ReactPaginate from 'react-paginate';
import pic1 from "../../Images/user/user1.jpeg";
import pic2 from "../../Images/user/user2.jpeg";
import pic3 from "../../Images/user/user2.jpg";
import pic4 from "../../Images/user/user3.jpeg";
import pic5 from "../../Images/user/user4.jpeg";
import pic6 from "../../Images/user/user5.jpeg";

const Findprofile = () => {
     const originalProfiles = [
        {id: 1,  gender: "female", picture: pic1, name: "Juhi Khan",     age: 24, profession: "Web Developer", city: "Rohini", state: "Delhi", tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true, verified: true },
        {id: 2,  gender: "female", picture: pic2, name: "Divya Rathor",  age: 24, profession: "Web Developer", city: "Rohini", state: "Delhi", tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: false, verified: false },
        {id: 3,  gender: "female", picture: pic3, name: "Nirmala Devi",  age: 34, profession: "Web Developer", city: "Rohini", state: "Delhi", tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true, verified: true },
        {id: 4,  gender: "female", picture: pic4, name: "Kalpana Chawla",age: 40, profession: "Web Developer", city: "Rohini", state: "Delhi", tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true, verified: true },
        {id: 5,  gender: "female", picture: pic5, name: "Vidya Devi",    age: 50, profession: "Web Developer", city: "Rohini", state: "Delhi", tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: false, verified: false },
        {id: 6,  gender: "male",   picture: pic6, name: "Santosh Singh", age: 70, profession: "Web Developer", city: "Rohini", state: "Delhi", tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true, verified: true },
        {id: 7,  gender: "female", picture: pic1, name: "Anjali yadav",  age: 30, profession: "Web Designer",  city: "Delhi", state: "Delhi", tags: ["🎨 Art", "🎬 Movies"], isOnline: false, verified: false },
        {id: 8,  gender: "female", picture: pic2, name: "Kavita Sharma", age: 28, profession: "Book Writer",   city: "Gurgaon", state: "Haryana", tags: ["📖 Reading", "☕ Coffee"], isOnline: true, verified: true },
        {id: 9,  gender: "female", picture: pic3, name: "Priya Sharma",  age: 35, profession: "Doctor",        city: "Noida", state: "UP", tags: ["💉 Health", "💪 Fitness"], isOnline: true, verified: true },
        {id: 10, gender: "female", picture: pic4, name: "Rita Kapoor",   age: 38, profession: "Teacher",       city: "Ghaziabad", state: "UP", tags: ["📚 Teaching", "🎶 Music"], isOnline: false, verified: false },
        {id: 11, gender: "female", picture: pic5, name: "Neha Singh",    age: 29, profession: "Engineer",      city: "Faridabad", state: "Haryana", tags: ["⚙️ Machines", "📈 Stocks"], isOnline: true, verified: true },
        {id: 12, gender: "female", picture: pic6, name: "Sneha Sharma",  age: 31, profession: "Chef",          city: "Delhi", state: "Delhi", tags: ["🍜 Cooking", "✈️ Travel"], isOnline: false, verified: false },
        {id: 13, gender: "female", picture: pic1, name: "Payal kapoor",  age: 26, profession: "Photographer",  city: "Delhi", state: "Delhi", tags: ["📸 Photos", "🌄 Hiking"], isOnline: true, verified: true },
 
        // repeated for pagination testing
        {id: 14, gender:"female",picture: pic1, name: "Juhi Khan", age: 24, profession: "Web Developer", city: "Rohini", state: "Delhi", tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true, verified: true },
        {id: 15, gender:"female", picture: pic2, name: "Divya Rathor", age: 24, profession: "Web Developer", city: "Rohini", state: "Delhi", tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: false, verified: false },
        { id: 16, gender:"female", picture: pic3, name: "Nirmala Devi", age: 34, profession: "Web Developer", city: "Rohini", state: "Delhi", tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true, verified: true },
        {id: 17, gender:"female",picture: pic4, name: "Kalpana Chawla", age: 40, profession: "Web Developer", city: "Rohini", state: "Delhi", tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true, verified: true },
        {id: 18, gender:"female",picture: pic5, name: "Vidya Devi", age: 50, profession: "Web Developer", city: "Rohini", state: "Delhi", tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: false, verified: false },
        {id: 19, gender:"male", picture: pic6, name: "Santosh Singh", age: 70, profession: "Web Developer", city: "Rohini", state: "Delhi", tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true, verified: true },
        {id: 20, gender:"female", picture: pic1, name: "Anjali", age: 30, profession: "Designer", city: "Delhi", state: "Delhi", tags: ["🎨 Art", "🎬 Movies"], isOnline: false, verified: false },
        {id: 21, gender:"female",picture: pic2, name: "Kavita", age: 28, profession: "Writer", city: "Gurgaon", state: "Haryana", tags: ["📖 Reading", "☕ Coffee"], isOnline: true, verified: true },
        {id: 22, gender:"female", picture: pic3, name: "Priya", age: 35, profession: "Doctor", city: "Noida", state: "UP", tags: ["💉 Health", "💪 Fitness"], isOnline: true, verified: true },
        {id: 23, gender:"female", picture: pic4, name: "Rita", age: 38, profession: "Teacher", city: "Ghaziabad", state: "UP", tags: ["📚 Teaching", "🎶 Music"], isOnline: false, verified: false },
        {id: 24, gender:"female", picture: pic5, name: "Neha", age: 29, profession: "Engineer", city: "Faridabad", state: "Haryana", tags: ["⚙️ Machines", "📈 Stocks"], isOnline: true, verified: true },
        {id: 25, gender:"female", picture: pic6, name: "Sneha", age: 31, profession: "Chef", city: "Delhi", state: "Delhi", tags: ["🍜 Cooking", "✈️ Travel"], isOnline: false, verified: false },
        {id: 26, gender:"female", picture: pic1, name: "Payal", age: 26, profession: "Photographer", city: "Delhi", state: "Delhi", tags: ["📸 Photos", "🌄 Hiking"], isOnline: true, verified: true },
    ];

    const profilesPerPage = 12;
    const [filteredProfiles, setFilteredProfiles] = useState(originalProfiles);
    const [requestStatus, setRequestStatus] = useState({});
    const [currentPage, setCurrentPage] = useState(0);

  const handleToggle = (profileId) => {
  const selectedProfile = originalProfiles.find(p => p.id === profileId);
  if (!selectedProfile) return;
//   const requestKey = `${selectedProfile.name}_${selectedProfile.age}`;

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

    const applyFilters = (filters) => {
        let result = [...originalProfiles];

         if (filters.search) {
            const searchTerm = filters.search.toLowerCase();
            result = result.filter(
                (p) =>
                    p.name.toLowerCase().includes(searchTerm) ||
                    p.profession.toLowerCase().includes(searchTerm)
            );
        }

       if (filters.gender && filters.gender.length > 0) {
            if (filters.gender.length === 1) {
                 result = result.filter((p) =>
                    filters.gender.includes(p.gender.charAt(0).toUpperCase() + p.gender.slice(1))
                );
            }
            
        }


        if (filters.ageRange.min) {
            result = result.filter((p) => p.age >= parseInt(filters.ageRange.min));
        }
        if (filters.ageRange.max) {
            result = result.filter((p) => p.age <= parseInt(filters.ageRange.max));
        }


         if (filters.onlineNow) {
            result = result.filter((p) => p.isOnline);
        }


         if (filters.verifiedOnly) {
            result = result.filter((p) => p.verified === true);
        }


         if (filters.interests && filters.interests.length > 0) {
            result = result.filter((p) =>
                // Check if ALL selected interests are present in any of the profile's tags
                filters.interests.every((filterInterest) =>
                    p.tags.some((profileTag) =>
                        profileTag.toLowerCase().includes(filterInterest.toLowerCase())
                    )
                )
            );
        }

         if (filters.sortBy) {
            switch (filters.sortBy) {
                case 'newest':
                    result.reverse();
                    break;
                case 'nearest':
                    break;
                case 'active':
                    result.sort((a, b) => {
                        if (a.isOnline && !b.isOnline) return -1;
                        if (!a.isOnline && b.isOnline) return 1;
                        return a.age - b.age;
                    });
                    break;
                default:
                    break;
            }
        }

        setCurrentPage(0);
        setFilteredProfiles(result);
    };

    const pageCount = Math.ceil(filteredProfiles.length / profilesPerPage);
    const offset = currentPage * profilesPerPage;
    const currentProfiles = filteredProfiles.slice(offset, offset + profilesPerPage);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    useEffect(() => {
        const requests = JSON.parse(localStorage.getItem("friendRequests")) || {};
        const statuses = {};

    currentProfiles.forEach((profile) => {
        if (requests[profile.id])
             statuses[profile.id] = true;
    });

    setRequestStatus(statuses);
}, [currentPage, filteredProfiles]);
    return (
        <section className='find-profile-section'>
            <div className="container-fluid">
                <Filterations onFilterChange={applyFilters} />
                <hr />
                <div className="row">
                    {currentProfiles.map((item, index) => (
                        <div key={index} className="col-md-3 mb-4">
                            <div className='profile-match-card position-relative'>
                                {/* ⋮ Dropdown menu */}
                                <div className="dropdown-menu-wrapper">
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
                                </div>

                                {/* Profile Link */}
                                <Link href={'/pages/find-match/id'} className='profile-match-link'>
                                    <div className="profile-image-wrapper">
                                        <Image src={item.picture} alt={item.name} className="profile-img" />
                                    </div>
                                    <div className="profile-info">
                                        <div
                                            onClick={(event) => {
                                                event.preventDefault();
                                                event.stopPropagation();
                                                handleToggle(index);
                                            }}
                                            className={`userRequestbtn ${requestStatus[index] ? 'bg-danger text-light' : ' theme-bg text-light'}`}
                                        >
                                            {requestStatus[index]
                                                ? <i className="bi bi-person-check-fill"></i>
                                                : <i className="bi bi-person-fill-add float-end "></i>}
                                        </div>
                                        <h4>{item.name}, <span>{item.age}</span></h4>
                                        <p className="profession"><i className="bi bi-briefcase-fill"></i> {item.profession}</p>
                                        <div className="tags">
                                            {item.tags.map((tag, idx) => (
                                                <span key={idx} className="tag">{tag}</span>
                                            ))}
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
            </div>
        </section>
    );
};

export default Findprofile;
