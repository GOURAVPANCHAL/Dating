// components/AnimatedSection.js
'use client';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedSection = ({ children }) => {
  const sectionRef = useRef();

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el,
      {
        y: 50,
        opacity: 0,
        filter: "blur(10px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="animated-section"
      style={{
        padding: "0px 0px",
        background: "#f9f9f9",
        borderRadius: "12px",
        margin: "0px auto",
        maxWidth: "1500",
        filter: "blur(10px)",
        opacity: 0,
        transform: "translateY(50px)",
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
