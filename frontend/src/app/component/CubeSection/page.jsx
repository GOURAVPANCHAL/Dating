'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const CubeSection = () => {
  const cubeRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Auto rotate every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => {
        const newRot = { x: prev.x, y: prev.y + 90 };
        gsap.to(cubeRef.current, {
          rotateX: newRot.x,
          rotateY: newRot.y,
          duration: 1.2,
          ease: 'power2.out',
        });
        return newRot;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Mouse move interaction
  const handleMouseMove = (e) => {
    const x = e.clientY / window.innerHeight * 360;
    const y = e.clientX / window.innerWidth * 360;

    gsap.to(cubeRef.current, {
      rotateX: x,
      rotateY: y,
      duration: 1.2,
      ease: 'power2.out',
    });

    setRotation({ x, y });
  };

  return (
    <div
      className="cube-container"
      onMouseMove={handleMouseMove}
      style={{
        perspective: '1000px',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'grab',
      }}
    >
      <div
        ref={cubeRef}
        className="cube"
        style={{
          width: '400px',
          height: '400px',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 1s ease',
        }}
      >
        {['front', 'back', 'right', 'left', 'top', 'bottom'].map((face, index) => (
          <div
            key={face}
            className={`face ${face}`}
            style={{
              position: 'absolute',
              width: '400px',
              height: '400px',
              backgroundImage: `url(/images/img${index + 1}.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '2px solid white',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CubeSection;
