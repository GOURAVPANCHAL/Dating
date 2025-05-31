"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./testimonial.css";
import Svg1 from '@/app/Images/heartSvg.png'

const testimonials = [
  {
    text: `The ones who are crazy enough to think they can *change the world*, are the *ones that do.*`,
    name: "Steve Jobs",
    role: "Co-founder, Apple",
    image: "/banner7.png",
  },
  {
    text: `Success usually comes to those who are too busy to be looking for it.`,
    name: "Henry David Thoreau",
    role: "Philosopher",
    image: "/banner8.png",
  },
  {
    text: `Dont be afraid to give up the good to go for the great.`,
    name: "John D. Rockefeller",
    role: "Business Magnate",
    image: "/banner9.png",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const { text, name, role, image } = testimonials[index];

  return (
    <div className="testimonial-wrapper">
      <button className="arrow left" onClick={prevSlide}>
        &#10094;
      </button>

      <div className="testimonial-container">
        <div className="testimonial-slide">
          <div className="testimonial-box">
            <p className="testimonial-text">
              {text.split("*").map((part, i) =>
                i % 2 === 1 ? <em key={i}>{part}</em> : part
              )}
            </p>
            <p className="testimonial-author">
              — <strong>{name}</strong>, <span>{role}</span>
            </p>
          </div>

          <div className="testimonial-image-wrapper">
            <Image
              src={image}
              alt="Reviewer"
              width={200}
              height={800}
              className="testimonial-image"
              priority
            />
            <Image src={Svg1}  alt={"svgImg"} width={60} height={60} className="SvgImg"/>
          </div>
        </div>
      </div>

      <button className="arrow right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}
