'use client';
import 'animate.css';
import React from 'react';
import './VideoSection.css'; 
import { motion } from 'framer-motion';

const VideoSection = () => {
  return (
    <div className="video-section">
      <video
        className="video-background"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/couple3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay" />

      <div className="content">
        <h1 className=''>
          Find Love That Lasts
           
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
      Where genuine connections begin. Real people, real relationships.
        </motion.p>
      </div>
    </div>
  );
};  

export default VideoSection;
