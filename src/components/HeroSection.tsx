'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './HeroSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const page1Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Custom cursor
    const cursor = cursorRef.current;
    if (cursor) {
      const handleMouseMove = (dets: MouseEvent) => {
        cursor.style.left = `${dets.x}px`;
        cursor.style.top = `${dets.y}px`;
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useEffect(() => {
    // Icon animation on scroll
    const tl = gsap.timeline();
    tl.to(iconRef.current, {
      scrollTrigger: {
        trigger: page1Ref.current,
        start: 'top 0%',
        scrub: 1,
      },
      duration: 1,
      y: -250,
      scaleY: 1.08,
    });

    // Text animations
    const h1Elements = page1Ref.current?.querySelectorAll('h1');
    if (h1Elements) {
      tl.from(h1Elements, {
        opacity: 0,
        y: '30px',
        z: '-50px',
        rotateX: '-92deg',
        skewX: '-5deg',
        skewY: '-10deg',
        ease: 'expo.out',
        duration: 0.9,
      }, 0);
    }
  }, []);

  return (
    <div className={styles.heroContainer}>
      <div ref={cursorRef} className={styles.cursor} />

      <div ref={page1Ref} className={styles.page1}>
        <h1 className={styles.high}>high</h1>
        <h1 className={styles.end}>
          end
          <span>
            <h2>*</h2>
            <p>Great design services —<br />without the pretentiousness.</p>
          </span>
        </h1>
        <h1 className={styles.digital}>digital</h1>
        <h1 className={styles.expe}>Experiences</h1>
        <div ref={iconRef} className={styles.icon}>
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
