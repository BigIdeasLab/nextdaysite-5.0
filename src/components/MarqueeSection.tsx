'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './MarqueeSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const portfolioImages = [
  {
    src: 'https://assets.website-files.com/6148d60a98a3dbf0ff2d6a96/6148d60a98a3db69c42d6a9d_WILBURTON-EXTERIOR-FINAL.jpg',
    title: 'Métrica',
  },
  {
    src: 'https://assets.website-files.com/6148d60a98a3dbf0ff2d6a96/6148d60a98a3db7c7f2d6a9c_Stellar_skingrips_full-hand.jpg',
    title: 'Stellar',
  },
  {
    src: 'https://assets.website-files.com/6148d60a98a3dbf0ff2d6a96/6148d60a98a3dba5f62d6aac_613cbb5b61d45304859adbf9__MG_9015-HDR-2.jpg',
    title: 'Loeven Morcel',
  },
  {
    src: 'https://assets.website-files.com/6148d60a98a3dbf0ff2d6a96/6160994c12d9fe6f44bfc05e_60ff5c18633cf4c47c833f90_priestess-preview.jpg',
    title: 'Priestess',
  },
  {
    src: 'https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3dbf17f2d6b85_Hero-Gif-22-p-800.jpeg',
    title: 'Hero',
  },
  {
    src: 'https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db27062d6ba4_Hero-Gif-38-p-500.jpeg',
    title: 'Gallery',
  },
];

export default function MarqueeSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Marquee scroll animation
    if (scrollTrackRef.current) {
      gsap.to(scrollTrackRef.current, {
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
        x: -500,
        ease: 'none',
      });
    }
  }, []);

  return (
    <section ref={marqueeRef} className={styles.marqueeSection}>
      <div className={styles.marqueeContainer}>
        <div ref={scrollTrackRef} className={styles.scrollTrack}>
          {/* Duplicate images for seamless loop */}
          {[...portfolioImages, ...portfolioImages].map((item, index) => (
            <div key={index} className={styles.imageItem}>
              <img src={item.src} alt={item.title} />
              <div className={styles.imageOverlay}>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.marqueeText}>
        <h2>Scroll to Explore</h2>
      </div>
    </section>
  );
}
