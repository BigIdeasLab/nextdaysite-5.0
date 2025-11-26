'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './StandOutSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function StandOutSection() {
  const page4Ref = useRef<HTMLDivElement>(null);
  const page5Ref = useRef<HTMLDivElement>(null);
  const page6Ref = useRef<HTMLDivElement>(null);
  const page7Ref = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<HTMLDivElement>(null);
  const weRef = useRef<HTMLHeadingElement>(null);
  const helpRef = useRef<HTMLHeadingElement>(null);
  const standRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Animate text on scroll - Page 4
    if (weRef.current) {
      gsap.from(weRef.current, {
        scrollTrigger: {
          trigger: weRef.current,
          start: 'top 80%',
          scrub: 1,
        },
        x: 100,
        opacity: 0,
      });
    }

    if (helpRef.current) {
      gsap.from(helpRef.current, {
        scrollTrigger: {
          trigger: helpRef.current,
          start: 'top 80%',
          scrub: 1,
        },
        x: -100,
        opacity: 0,
      });
    }

    if (standRef.current) {
      gsap.from(standRef.current, {
        scrollTrigger: {
          trigger: standRef.current,
          start: 'top 80%',
          scrub: 1,
        },
        x: 150,
        opacity: 0,
      });
    }

    // Animate Page 5 h1 elements
    const page5h1s = page5Ref.current?.querySelectorAll('h1');
    if (page5h1s) {
      page5h1s.forEach((h1: Element) => {
        gsap.from(h1, {
          scrollTrigger: {
            trigger: h1,
            start: 'top 90%',
          },
          opacity: 0,
          y: '50px',
          z: '-90px',
          rotateX: '-90deg',
          skewX: '40deg',
          skewY: '-8deg',
          ease: 'circ.out',
          duration: 1,
        });
      });
    }
  }, []);

  useEffect(() => {
    // Scroll circles animation
    if (circlesRef.current) {
      gsap.to(circlesRef.current, {
        scrollTrigger: {
          trigger: circlesRef.current,
          start: 'top 90%',
          end: 'bottom -45%',
          scrub: 1,
        },
        x: '-52vw',
        ease: 'circ.out',
      });
    }

    // Animate Page 6 h2 and p elements
    const page6h2 = page6Ref.current?.querySelector('h2');
    const page6ps = page6Ref.current?.querySelectorAll('p');

    if (page6h2) {
      gsap.from(page6h2, {
        scrollTrigger: {
          trigger: page6h2,
          start: 'top 90%',
        },
        opacity: 0,
        y: 50,
        ease: 'expo.out',
        duration: 1,
      });
    }

    if (page6ps) {
      page6ps.forEach((p: Element) => {
        gsap.from(p, {
          scrollTrigger: {
            trigger: p,
            start: 'top 90%',
          },
          opacity: 0,
          y: 50,
          stagger: 0.2,
          ease: 'expo.out',
          duration: 1,
        });
      });
    }

    // Animate Page 7 h1 elements
    const page7h1s = page7Ref.current?.querySelectorAll('h1');
    if (page7h1s) {
      page7h1s.forEach((h1: Element) => {
        gsap.from(h1, {
          scrollTrigger: {
            trigger: h1,
            start: 'top 90%',
          },
          opacity: 0,
          y: '50px',
          z: '-90px',
          rotateX: '-90deg',
          skewX: '40deg',
          skewY: '-8deg',
          ease: 'circ.out',
          duration: 1,
        });
      });
    }
  }, []);

  const handleCircleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotateX: '1440deg',
      ease: 'linear',
      duration: 2,
    });
  };

  const handleCircleMouseEnter = () => {
    const cursor = document.querySelector('[data-cursor]');
    if (cursor) {
      gsap.to(cursor, {
        scale: 0.4,
        ease: 'expo.out',
      });
    }
  };

  const handleCircleMouseLeave = () => {
    const cursor = document.querySelector('[data-cursor]');
    if (cursor) {
      gsap.to(cursor, {
        scale: 1,
        ease: 'expo.out',
      });
    }
  };

  return (
    <div className={styles.allWrapper}>
      {/* Page 4 - We'll Help You Stand Out */}
      <section ref={page4Ref} className={styles.section}>
        <div className={styles.topWrapBubble} />
        <h1 ref={weRef} className={styles.h14}>
          WE'LL
        </h1>
        <h1 ref={helpRef} className={styles.h14}>
          HELP YOU
        </h1>
        <h1 ref={standRef} className={styles.h14}>
          STAND OUT
        </h1>
      </section>

      {/* Page 5 - Make All Your Dreams */}
      <section ref={page5Ref} className={styles.section}>
        <div ref={circlesRef} className={styles.circles}>
          {Array.from({ length: 11 }).map((_, i) => (
            <div
              key={i}
              className={styles.circle}
              onClick={handleCircleClick}
              onMouseEnter={handleCircleMouseEnter}
              onMouseLeave={handleCircleMouseLeave}
            />
          ))}
        </div>
        <h1>
          <span style={{ fontStyle: 'normal' }}>&</span>MAKE
          <span
            style={{
              fontFamily: 'Gilroy, sans-serif',
              marginLeft: '2vw',
              fontStyle: 'normal',
              fontWeight: '600',
            }}
          >
            ALL
          </span>
        </h1>
        <h1>YOUR DREAMS</h1>
        <h1>
          COME TRUE
          <span
            style={{
              fontSize: '5rem',
              fontStyle: 'normal',
              marginLeft: '2vw',
            }}
          >
            *
          </span>
        </h1>
      </section>

      {/* Page 6 - Description */}
      <section ref={page6Ref} className={styles.section}>
        <h2>
          *
          <span>
            <p>
              As long as your dreams revolve around something like; being the
              proud owner of a spectacular website.
            </p>
          </span>
        </h2>
        <p>
          RaDins Design is a design practice focused on digital experiences.
          With every single one of our clients, we bring forth a deep passion
          for creative problem solving — which is what we deliver in the form
          of custom and memorable experiences.
        </p>
      </section>

      {/* Page 7 - Featured Work */}
      <section ref={page7Ref} className={styles.section}>
        <div className={styles.featuredText}>
          <h1>FEATURED</h1>
          <h1>WORK</h1>
        </div>
      </section>
    </div>
  );
}
