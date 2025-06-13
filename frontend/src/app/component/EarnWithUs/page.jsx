'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import './earnings.css';
import pic1 from '@/app/Images/user/user9.jpeg'
import pic2 from '@/app/Images/user/user5.jpeg'
import pic3 from '@/app/Images/user/user4.jpeg'


const earners = [
  {
    name: "Priya Mehta",
    location: "Mumbai, India",
    image: pic1,
    earnings: 86000,
    testimonial: "I help people emotionally, and it’s fulfilling!",
    badge: "Moral Support",
    supportTypes: ["Moral", "Friendship"]
  },
  {
    name: "Rahul Verma",
    location: "Delhi, India",
    image: pic2,
    earnings: 72000,
    testimonial: "Meeting new people and guiding them is amazing!",
    badge: "Physical Support",
    supportTypes: ["Physical", "Dating"]
  },
  {
    name: "Sneha Rao",
    location: "Bangalore, India",
    image: pic3,
    earnings: 95000,
    testimonial: "I love making friends and spreading love ❤️",
    badge: "Friendship Coach",
    supportTypes: ["Friendship", "Dating", "Moral"]
  }
];

export default function EarnWithUs() {
  const [animatedEarnings, setAnimatedEarnings] = useState(earners.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedEarnings((prev) =>
        prev.map((val, i) =>
          val < earners[i].earnings
            ? val + Math.floor((earners[i].earnings - val) / 10) + 1
            : earners[i].earnings
        )
      );
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="earn-section">
      <div className="earn-container">
        <h2 className="earn-title">People Who Are Earning With Us</h2>
        <p className="earn-subtitle">
          These amazing people are earning by offering support — friendship, dating, and more! 💖
        </p>
        <div className="earn-grid">
          {earners.map((user, index) => (
            <div key={index} className="earn-card">
              <div className="earn-badge">{user.badge}</div>
              <Image
                src={user.image}
                alt={user.name}
                width={100}
                height={100}
                className="earn-img"
              />
              <h3 className="earn-name">{user.name}</h3>
              <p className="earn-location">{user.location}</p>

              {/* Support Tags */}
              <div className="support-tags">
                {user.supportTypes.map((type, i) => (
                  <span key={i} className={`tag tag-${type.toLowerCase()}`}>
                    {type}
                  </span>
                ))}
              </div>

              {/* Earnings */}
              <p className="earn-money">₹{animatedEarnings[index].toLocaleString()}</p>
              <p className="earn-quote">"{user.testimonial}"</p>
            </div>
          ))}
        </div>

        <div className="earn-cta">
          <h3>Want to earn by supporting others?</h3>
          <button className="btn btn-success">Start Earning</button>
        </div>
      </div>
    </section>
  );
}





// 'use client';
// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import './earnings.css'; // External CSS
// import pic1 from '@/app/Images/user/user9.jpeg'
// import pic2 from '@/app/Images/user/user5.jpeg'
// import pic3 from '@/app/Images/user/user4.jpeg'


// const earners = [
//     {
//       name: "Priya Mehta",
//       location: "Mumbai, India",
//       image: pic1,
//       earnings: 86000,
//       testimonial: "I help people emotionally, and it’s fulfilling!",
//       badge: "Moral Support",
//       supportTypes: ["Moral", "Friendship"]
//     },
//     {
//       name: "Rahul Verma",
//       location: "Delhi, India",
//       image: pic2,
//       earnings: 72000,
//       testimonial: "Meeting new people and guiding them is amazing!",
//       badge: "Physical Support",
//       supportTypes: ["Physical", "Dating"]
//     },
//     {
//       name: "Sneha Rao",
//       location: "Bangalore, India",
//       image: pic3,
//       earnings: 95000,
//       testimonial: "I love making friends and spreading love ❤️",
//       badge: "Friendship Coach",
//       supportTypes: ["Friendship", "Dating", "Moral"]
//     }
//   ];
  


// export default function EarnWithUs() {
//   const [animatedEarnings, setAnimatedEarnings] = useState(earners.map(() => 0));

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAnimatedEarnings((prev) =>
//         prev.map((val, i) =>
//           val < earners[i].earnings ? val + Math.floor((earners[i].earnings - val) / 10) + 1 : earners[i].earnings
//         )
//       );
//     }, 80);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="earn-section">
//       <div className="earn-container">
//         <h2 className="earn-title">People Who Are Earning With Us</h2>
//         <p className="earn-subtitle">These amazing people are earning by helping others find love ❤️</p>
//         <div className="earn-grid">
//           {earners.map((user, index) => (
//             <div key={index} className="earn-card">
//               <div className="earn-badge">{user.badge}</div>
//               <Image
//                 src={user.image}
//                 alt={user.name}
//                 width={100}
//                 height={100}
//                 className="earn-img"
//               />
//               <h3 className="earn-name">{user.name}</h3>
//               <p className="earn-location">{user.location}</p>
//               <p className="earn-money">₹{animatedEarnings[index].toLocaleString()}</p>
//               <p className="earn-quote">"{user.testimonial}"</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
