"use client"
import React, { useState, useEffect, useRef } from 'react';
import { FaHeart, FaUsers, FaComments, FaShieldAlt } from 'react-icons/fa';
import './highlights.css'; // Import external CSS

const statsData = [
  { icon: <FaHeart />, number: 8765, label: 'Total Matches' },
  { icon: <FaUsers />, number: 5432, label: 'Active Users' },
  { icon: <FaComments />, number: 4321, label: 'Messages Sent' },
  { icon: <FaShieldAlt />, number: 6789, label: 'Profiles Verified' },
];

const StatCard = ({ icon, targetNumber, label, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return; // Only start counting when in view
    let start = 0;
    const duration = 2000; // 2 seconds
    const incrementTime = 30;
    const steps = duration / incrementTime;
    const increment = Math.ceil(targetNumber / steps);

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        start = targetNumber;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [inView, targetNumber]);

  return (
    <div className="stat-card">
      <div className="icon">{icon}</div>
      <h2 className="number">{count.toLocaleString()}</h2>
      <p className="label">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const sectionRef = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Optional: stop observing after it comes into view once
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
    <section className="stats-section" ref={sectionRef}>
      {statsData.map((item, index) => (
        <StatCard 
          key={index} 
          icon={item.icon} 
          targetNumber={item.number} 
          label={item.label} 
          inView={inView}
        />
      ))}
    </section>
    </>
  );
};

export default StatsSection;
