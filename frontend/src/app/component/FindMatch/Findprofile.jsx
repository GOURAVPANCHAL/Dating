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
        {id: 1,  gender: "female", picture: pic1, name: "Juhi Khan",      age: 24, profession: "Web Developer", city: "Rohini", state: "Delhi", tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true },
        {id: 2,  gender: "female", picture: pic2, name: "Divya Rathor",   age: 24, profession: "Web Developer", city: "Rohini", state: "Delhi", tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: false },
        {id: 3,  gender: "female", picture: pic3, name: "Nirmala Devi",   age: 34, profession: "Web Developer", city: "Rohini", state: "Delhi", tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true },
        {id: 4,  gender: "female", picture: pic4, name: "Kalpana Chawla", age: 40, profession: "Web Developer", city: "Rohini", state: "Delhi", tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true },
        {id: 5,  gender: "female", picture: pic5, name: "Vidya Devi",     age: 50, profession: "Web Developer", city: "Rohini", state: "Delhi", tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: false },
        {id: 6,  gender: "male",   picture: pic6, name: "Santosh Singh",  age: 70, profession: "Web Developer", city: "Rohini", state: "Delhi", tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true },
        {id: 7,  gender: "female", picture: pic1, name: "Anjali yadav",   age: 30, profession: "Designer", city: "Delhi", state: "Delhi", tags: ["🎨 Art", "🎬 Movies"], isOnline: false },
        {id: 8,  gender: "female", picture: pic2, name: "Kavita Sharma",   age: 28, profession: "Writer", city: "Gurgaon", state: "Haryana", tags: ["📖 Reading", "☕ Coffee"], isOnline: true },
        {id: 9,  gender: "female", picture: pic3, name: "Priya Sharma",      age: 35, profession: "Doctor", city: "Noida", state: "UP", tags: ["💉 Health", "💪 Fitness"], isOnline: true },
        {id: 10, gender: "female", picture: pic4, name: "Rita Kapoor",           age: 38, profession: "Teacher", city: "Ghaziabad", state: "UP", tags: ["📚 Teaching", "🎶 Music"], isOnline: false },
        {id: 11, gender: "female", picture: pic5, name: "Neha Singh",           age: 29, profession: "Engineer", city: "Faridabad", state: "Haryana", tags: ["⚙️ Machines", "📈 Stocks"], isOnline: true },
        {id: 12, gender: "female", picture: pic6, name: "Sneha Sharma",          age: 31, profession: "Chef", city: "Delhi", state: "Delhi", tags: ["🍜 Cooking", "✈️ Travel"], isOnline: false },
        {id: 13, gender: "female", picture: pic1, name: "Payal kapoor",          age: 26, profession: "Photographer", city: "Delhi", state: "Delhi", tags: ["📸 Photos", "🌄 Hiking"], isOnline: true },
 
        // repeated for pagination testing
       {id: 1, gender:"female",picture: pic1, name: "Juhi Khan", age: 24, profession: "Web Developer", city: "Rohini", state: "Delhi", tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true },
        {id: 2, gender:"female", picture: pic2, name: "Divya Rathor", age: 24, profession: "Web Developer", city: "Rohini", state: "Delhi", tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: false },
        { id: 3, gender:"female", picture: pic3, name: "Nirmala Devi", age: 34, profession: "Web Developer", city: "Rohini", state: "Delhi", tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true },
        {id: 4, gender:"female",picture: pic4, name: "Kalpana Chawla", age: 40, profession: "Web Developer", city: "Rohini", state: "Delhi", tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true },
        {id: 5, gender:"female",picture: pic5, name: "Vidya Devi", age: 50, profession: "Web Developer", city: "Rohini", state: "Delhi", tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: false },
        {id: 6, gender:"male", picture: pic6, name: "Santosh Singh", age: 70, profession: "Web Developer", city: "Rohini", state: "Delhi", tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true },
        {id: 7, gender:"female", picture: pic1, name: "Anjali", age: 30, profession: "Designer", city: "Delhi", state: "Delhi", tags: ["🎨 Art", "🎬 Movies"], isOnline: false },
        {id: 8, gender:"female",picture: pic2, name: "Kavita", age: 28, profession: "Writer", city: "Gurgaon", state: "Haryana", tags: ["📖 Reading", "☕ Coffee"], isOnline: true },
        {id: 9, gender:"female", picture: pic3, name: "Priya", age: 35, profession: "Doctor", city: "Noida", state: "UP", tags: ["💉 Health", "💪 Fitness"], isOnline: true },
        {id: 10, gender:"female", picture: pic4, name: "Rita", age: 38, profession: "Teacher", city: "Ghaziabad", state: "UP", tags: ["📚 Teaching", "🎶 Music"], isOnline: false },
        {id: 11, gender:"female", picture: pic5, name: "Neha", age: 29, profession: "Engineer", city: "Faridabad", state: "Haryana", tags: ["⚙️ Machines", "📈 Stocks"], isOnline: true },
        {id: 12, gender:"female", picture: pic6, name: "Sneha", age: 31, profession: "Chef", city: "Delhi", state: "Delhi", tags: ["🍜 Cooking", "✈️ Travel"], isOnline: false },
        {id: 13, gender:"female", picture: pic1, name: "Payal", age: 26, profession: "Photographer", city: "Delhi", state: "Delhi", tags: ["📸 Photos", "🌄 Hiking"], isOnline: true },
    ];

    const profilesPerPage = 12;
    const [filteredProfiles, setFilteredProfiles] = useState(originalProfiles);
    const [requestStatus, setRequestStatus] = useState({});
    const [currentPage, setCurrentPage] = useState(0);

  const handleToggle = (index) => {
    const selectedProfile = currentProfiles[index];
    const requestKey = `${selectedProfile.name}_${selectedProfile.age}`;

    let requests = JSON.parse(localStorage.getItem("friendRequests")) || {};

    if (requestStatus[index]) {
        delete requests[requestKey];
    } else {
        requests[requestKey] = {
            ...selectedProfile,
            status: "pending",
            timestamp: new Date().toISOString()
        };
    }

    localStorage.setItem("friendRequests", JSON.stringify(requests));

    setRequestStatus((prev) => ({
        ...prev,
        [index]: !prev[index]
    }));
};


    const applyFilters = (filters) => {
        let result = [...originalProfiles];

        if (filters.gender)
            result = result.filter((p) => p.gender === filters.gender);

        if (filters.minAge)
            result = result.filter((p) => p.age >= filters.minAge);

        if (filters.maxAge)
            result = result.filter((p) => p.age <= filters.maxAge);

        if (filters.location)
            result = result.filter((p) => p.city.toLowerCase().includes(filters.location.toLowerCase()));

        if (filters.onlineNow)
            result = result.filter((p) => p.isOnline);

        if (filters.verifiedOnly)
            result = result.filter((p) => p.verified);

        if (filters.sortBy === "newest")
            result = result.reverse();

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

    currentProfiles.forEach((profile, index) => {
        const key = `${profile.name}_${profile.age}`;
        if (requests[key]) statuses[index] = true;
    });

    setRequestStatus(statuses);
}, [currentPage]);


    return (
        <section className='find-profile-section'>
            <div className="container-fluid">
                <Filterations onFilterChange={applyFilters} />
                <hr />
                <div className="row">
                    {currentProfiles.map((item, index) => (
                        <div key={index} className="col-md-3 mb-4">
                            <div className='profile-match-card'>
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
