"use client";
import React, { useEffect, useRef } from "react";
import "./ImageGallery.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  '/images/user1.jpeg',
  '/images/user2.jpeg',
  '/images/user2.jpg',
  '/images/user3.jpeg',
  '/images/user4.jpeg',
  '/images/user5.jpeg',
  '/images/user6.jpeg',
  '/images/user3.jpeg',
  '/images/user8.jpeg',
  '/images/user9.jpeg',
  '/images/user1.jpeg',
  '/images/user3.jpeg',
  '/images/user2.jpg',
  '/images/user3.jpeg',
  '/images/user4.jpeg',
  '/images/user5.jpeg',
  '/images/user6.jpeg',
  '/images/user2.jpeg',
  '/images/user8.jpeg',
  '/images/user1.jpeg',
  '/images/user2.jpeg',
  '/images/user2.jpg',
  '/images/user3.jpeg',
  

];

const ImageGallery = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const images = gsap.utils.toArray(".gallery-image");

    images.forEach((img, index) => {
      const direction = index % 2 === 0 ? -200 : 200; // left or right

      gsap.fromTo(
        img,
        { x: direction, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: img,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
          duration: 1,
          ease: "power3.out",
        }
      );
    });
  }, []);

  return (
    <div className="gallery-wrapper" ref={containerRef}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`img-${index}`}
          className={`gallery-image img-${index}`}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
