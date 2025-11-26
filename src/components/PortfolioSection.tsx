'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './PortfolioSection.module.css';

gsap.registerPlugin(ScrollTrigger);

interface PortfolioItem {
  id: number;
  number: string;
  title: string;
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    number: '1/4',
    title: 'MÉTRICA',
    image:
      'https://assets.website-files.com/6148d60a98a3dbf0ff2d6a96/6148d60a98a3db69c42d6a9d_WILBURTON-EXTERIOR-FINAL.jpg',
  },
  {
    id: 2,
    number: '2/4',
    title: 'STELLAR',
    image:
      'https://assets.website-files.com/6148d60a98a3dbf0ff2d6a96/6148d60a98a3db7c7f2d6a9c_Stellar_skingrips_full-hand.jpg',
  },
  {
    id: 3,
    number: '3/4',
    title: 'LOEVEN MORCEL',
    image:
      'https://assets.website-files.com/6148d60a98a3dbf0ff2d6a96/6148d60a98a3dba5f62d6aac_613cbb5b61d45304859adbf9__MG_9015-HDR-2.jpg',
  },
  {
    id: 4,
    number: '4/4',
    title: 'PRIESTESS',
    image:
      'https://assets.website-files.com/6148d60a98a3dbf0ff2d6a96/6160994c12d9fe6f44bfc05e_60ff5c18633cf4c47c833f90_priestess-preview.jpg',
  },
];

export default function PortfolioSection() {
  const page8Ref = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Pin the first image and scroll through others
    if (imageContainerRef.current) {
      gsap.to('.portfolio-image', {
        scrollTrigger: {
          trigger: page8Ref.current,
          pin: true,
          start: 'top 0%',
          end: '140% 0%',
          scrub: 1,
          // markers: true,
        },
      });

      // Animate images into view
      gsap.to('.portfolio-item', {
        scrollTrigger: {
          trigger: page8Ref.current,
          start: 'top 100%',
          scrub: 1,
        },
        stagger: 0.5,
        top: 0,
        ease: 'circ.out',
      });

      // Scale images on scroll
      document.querySelectorAll('.portfolio-image img').forEach((img) => {
        gsap.to(img, {
          scrollTrigger: {
            trigger: img,
            start: 'top 100%',
            scrub: 1,
          },
          stagger: 1,
          scale: 1.2,
        });
      });

      document.querySelectorAll('.portfolio-item img').forEach((img) => {
        gsap.to(img, {
          scrollTrigger: {
            trigger: img,
            start: '-=1000 100%',
            scrub: 1,
          },
          stagger: 1,
          scale: 1.2,
        });
      });
    }
  }, []);

  const handleOverlayMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const overlay = e.currentTarget;
    gsap.to(overlay, {
      backgroundColor: '#0009',
      duration: 0.5,
      ease: 'power2.out',
    });

    const cursor = document.querySelector('[data-cursor]');
    if (cursor) {
      gsap.to(cursor, {
        backgroundColor: 'transparent',
        border: '2px solid #fff',
        scale: 3,
        duration: 0.3,
        ease: 'circ.out',
      });
    }
  };

  const handleOverlayMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const overlay = e.currentTarget;
    gsap.to(overlay, {
      backgroundColor: '#0004',
      duration: 0.5,
      ease: 'power2.out',
    });

    const cursor = document.querySelector('[data-cursor]');
    if (cursor) {
      gsap.to(cursor, {
        backgroundColor: '#fff',
        border: 'none',
        scale: 1,
        duration: 0.3,
        ease: 'circ.out',
      });
    }
  };

  return (
    <section ref={page8Ref} className={styles.page81}>
      <div ref={imageContainerRef} className={styles.page8}>
        {/* First image - pinned */}
        <div className={`${styles.image1} portfolio-image`}>
          <img src={portfolioItems[0].image} alt={portfolioItems[0].title} />
          <div
            className={styles.overlay}
            onMouseEnter={handleOverlayMouseEnter}
            onMouseLeave={handleOverlayMouseLeave}
          >
            <div className={styles.text}>
              <h2>{portfolioItems[0].number}</h2>
              <h1>{portfolioItems[0].title}</h1>
            </div>
          </div>
        </div>

        {/* Other portfolio items */}
        {portfolioItems.slice(1).map((item) => (
          <div
            key={item.id}
            className={`${styles.images} portfolio-item`}
            style={{ top: '100%' }}
          >
            <img src={item.image} alt={item.title} />
            <div
              className={styles.overlay}
              onMouseEnter={handleOverlayMouseEnter}
              onMouseLeave={handleOverlayMouseLeave}
            >
              <div className={styles.text}>
                <h2>{item.number}</h2>
                <h1>{item.title}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
