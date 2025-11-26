'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './VideoSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function VideoSection() {
  const videoRef = useRef<HTMLDivElement>(null);
  const mainvideoRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth video movement on mouse move within the container
    const handleMouseMove = (e: MouseEvent) => {
      if (!mainvideoRef.current) return;

      const rect = mainvideoRef.current.getBoundingClientRect();
      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (isInside && videoRef.current) {
        const x = (e.clientX - rect.left - rect.width / 2) * 0.1;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.1;

        gsap.to(videoRef.current, {
          x,
          y,
          duration: 0.3,
          ease: 'sine.out',
          overwrite: 'auto',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Scroll animation for video
    if (mainvideoRef.current) {
      gsap.to(mainvideoRef.current, {
        scrollTrigger: {
          trigger: mainvideoRef.current,
          start: 'top 100%',
          scrub: 1,
        },
        duration: 1,
        y: -400,
      });
    }
  }, []);

  const handleMouseEnter = () => {
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        backgroundColor: '#0009',
        duration: 0.5,
        ease: 'power2.out',
      });
    }
    // Cursor feedback
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        backgroundColor: 'transparent',
        border: '2px solid #fff',
        scale: 3,
        duration: 0.3,
        ease: 'circ.out',
      });
    }
  };

  const handleMouseLeave = () => {
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        backgroundColor: '#0004',
        duration: 0.5,
        ease: 'power2.out',
      });
    }
    // Reset cursor
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        backgroundColor: '#fff',
        border: 'none',
        scale: 1,
        duration: 0.3,
        ease: 'circ.out',
      });
    }
    // Reset video position
    if (videoRef.current) {
      gsap.to(videoRef.current, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'sine.out',
      });
    }
  };

  return (
    <section className={styles.page3}>
      <div
        ref={mainvideoRef}
        className={styles.mainvideo}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a href="#" className={styles.vid}>
          <div ref={videoRef} className={styles.video}>
            <span>
              <video
                src="https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3dbf17f2d6b85_mainVideo.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </span>
            <div ref={overlayRef} className={styles.overlay} />
          </div>
        </a>
      </div>
    </section>
  );
}
