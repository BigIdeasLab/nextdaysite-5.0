'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './ImageGallerySection.module.css';

export default function ImageGallerySection() {
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);
  const img3Ref = useRef<HTMLImageElement>(null);
  const img4Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Image arrays for random rotation
    const arr1 = [
      'https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3dbf17f2d6b85_Hero-Gif-22-p-800.jpeg',
      'https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db1d1d2d6ba2_Hero-Gif-36.jpg',
      'https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db13a32d6b88_Hero-Gif-33-p-1080.jpeg',
      'https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db55242d6b77_Hero-Gif-23-p-1080.jpeg',
      'https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db01f32d6b72_Hero-Gif-29.jpg',
      'https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db7a832d6b86_Hero-Gif-20-p-1080.jpeg',
    ];

    const arr2 = [
      'https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db27062d6ba4_Hero-Gif-38-p-500.jpeg',
      'https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db52a22d6b6e_Hero-Gif-15-p-1080.jpeg',
      'https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db22722d6b81_Hero-Gif-24-p-1080.jpeg',
      'https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3dbbff42d6ba5_Hero-Gif-39.jpg',
      'https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db2bd12d6b83_Hero-Gif-25.jpg',
      'https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db779a2d6b71_Hero-Gif-10-p-1080.jpeg',
    ];

    const arr3 = [
      'https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db9eec2d6b7f_Hero-Gif-5.jpg',
      'https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db65f72d6b82_Hero-Gif-26-p-1080.jpeg',
      'https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db662c2d6b74_Hero-Gif-31.jpg',
      'https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3dbbc112d6ba0_Hero-Gif-34-p-500.jpeg',
      'https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db5b892d6b6a_Hero-Gif-6.jpg',
      'https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db75e82d6b7d_Hero-Gif-17-p-800.jpeg',
    ];

    const arr4 = [
      'https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3dbcbcd2d6b7a_Hero-Gif-21-p-1080.jpeg',
      'https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3dbdfe62d6b76_Hero-Gif-8-p-500.jpeg',
      'https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3dbf6432d6b75_Hero-Gif-9-p-800.jpeg',
      'https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db37082d6ba3_Hero-Gif-37.jpg',
      'https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db65ff2d6b8e_WILBURTON-EXTERIOR-FINAL-p-500.jpeg',
      'https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db120a2d6b7e_Hero-Gif-16-p-800.jpeg',
    ];

    // Random image rotation intervals
    const interval1 = setInterval(() => {
      if (img1Ref.current) {
        img1Ref.current.src = arr1[Math.floor(Math.random() * arr1.length)];
      }
    }, 1000);

    const interval2 = setInterval(() => {
      if (img2Ref.current) {
        img2Ref.current.src = arr2[Math.floor(Math.random() * arr2.length)];
      }
    }, 2000);

    const interval3 = setInterval(() => {
      if (img3Ref.current) {
        img3Ref.current.src = arr3[Math.floor(Math.random() * arr3.length)];
      }
    }, 3000);

    const interval4 = setInterval(() => {
      if (img4Ref.current) {
        img4Ref.current.src = arr4[Math.floor(Math.random() * arr4.length)];
      }
    }, 4000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, []);

  return (
    <section className={styles.page2}>
      <img
        ref={img1Ref}
        src="https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3dbf17f2d6b85_Hero-Gif-22-p-800.jpeg"
        alt="Gallery image 1"
        className={styles.img1}
      />
      <img
        ref={img2Ref}
        src="https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db27062d6ba4_Hero-Gif-38-p-500.jpeg"
        alt="Gallery image 2"
        className={styles.img2}
      />
      <div className={styles.image2}>
        <img
          ref={img3Ref}
          src="https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db9eec2d6b7f_Hero-Gif-5.jpg"
          alt="Gallery image 3"
        />
        <img
          ref={img4Ref}
          src="https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3dbcbcd2d6b7a_Hero-Gif-21-p-1080.jpeg"
          alt="Gallery image 4"
        />
      </div>
    </section>
  );
}
