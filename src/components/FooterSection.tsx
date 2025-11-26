'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './FooterSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function FooterSection() {
  const scrollLine2Ref = useRef<HTMLDivElement>(null);
  const scrollLine3Ref = useRef<HTMLDivElement>(null);
  const topWrapBubble2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Bubble animation
    if (topWrapBubble2Ref.current) {
      gsap.to(topWrapBubble2Ref.current, {
        scrollTrigger: {
          trigger: topWrapBubble2Ref.current,
          start: '+=20% 90%',
          end: '+=20% 50%',
          scrub: 1,
        },
        transform: 'translate3d(0px, -10vw, 0px) scale3d(1, 1, 1) scale(1.2)',
        borderTopRightRadius: '40%',
        borderTopLeftRadius: '40%',
        ease: 'circ.in',
        duration: 1,
      });
    }
  }, []);

  useEffect(() => {
    // Scroll line animations
    if (scrollLine2Ref.current) {
      gsap.from(scrollLine2Ref.current, {
        scrollTrigger: {
          trigger: scrollLine2Ref.current,
          start: 'top 90%',
        },
        x: 200,
      });

      gsap.to(scrollLine2Ref.current, {
        scrollTrigger: {
          trigger: scrollLine2Ref.current,
          start: 'top 100%',
          scrub: 1,
        },
        x: -200,
      });
    }

    if (scrollLine3Ref.current) {
      gsap.from(scrollLine3Ref.current, {
        scrollTrigger: {
          trigger: scrollLine3Ref.current,
          start: 'top 90%',
        },
        x: -200,
      });

      gsap.to(scrollLine3Ref.current, {
        scrollTrigger: {
          trigger: scrollLine3Ref.current,
          start: 'top 100%',
          scrub: 1,
        },
        x: 200,
      });
    }
  }, []);

  return (
    <footer className={styles.footer}>
      <div ref={topWrapBubble2Ref} className={styles.topWrapBubble2} />

      <div className={styles.scroller}>
        <div className={styles.scroll2}>
          <div ref={scrollLine2Ref} className={styles.scrollLine2}>
            <h2>
              Showcase{' '}
              <svg
                width="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>{' '}
              Showcase{' '}
              <svg
                width="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>{' '}
              Showcase{' '}
              <svg
                width="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>{' '}
              Showcase{' '}
              <svg
                width="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>{' '}
              Showcase{' '}
              <svg
                width="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>{' '}
              Showcase{' '}
              <svg
                width="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>{' '}
              Showcase
            </h2>
          </div>
          <div ref={scrollLine3Ref} className={styles.scrollLine3}>
            <h2>
              Vercel{' '}
              <svg
                width="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>{' '}
              Ranboo{' '}
              <svg
                width="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>{' '}
              Dynaboard{' '}
              <svg
                width="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>{' '}
              Vercel{' '}
              <svg
                width="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>{' '}
              Ranboo{' '}
              <svg
                width="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>{' '}
              Dynaboard{' '}
              <svg
                width="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>{' '}
              Vercel{' '}
              <svg
                width="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>{' '}
              Ranboo{' '}
              <svg
                width="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>{' '}
              Dynaboard
            </h2>
          </div>
        </div>
      </div>

      <div className={styles.logoText}>
        <h1>BRANDING<span>&</span>DIGITAL EXPERIENCES</h1>
      </div>

      <p>
        © <span>{new Date().getFullYear()}</span> RaDins Design Inc. - All
        Rights Reserved <span className={styles.at}>@RaDinsTerritory</span>
      </p>
    </footer>
  );
}
