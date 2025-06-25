"use client";
import React, { useState, useEffect, useRef } from 'react';
import { FaHeart, FaUsers, FaComments, FaShieldAlt } from 'react-icons/fa';
import './highlights.css';

const statsData = [
  { icon: <FaHeart className="pulse" />, number: 8765, label: 'Hearts Connected ❤️' },
  { icon: <FaUsers className="glow" />, number: 5432, label: 'Flirty Singles Online' },
  { icon: <FaComments className="float" />, number: 4321, label: 'Hot Messages Today' },
  { icon: <FaShieldAlt className="spin" />, number: 6789, label: 'Verified & Ready to Mingle' },
];

const StatCard = ({ icon, targetNumber, label, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
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
      <h2 className="number">{count.toLocaleString()}+</h2>
      <p className="label">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
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
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-overlay">
        <h2 className="section-title">LOVE BY THE NUMBERS</h2>
        <p className="section-subtitle">Real people. Real connections. Real passion.</p>
        <div className="stats-grid">
          {statsData.map((item, index) => (
            <StatCard 
              key={index} 
              icon={item.icon} 
              targetNumber={item.number} 
              label={item.label} 
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
