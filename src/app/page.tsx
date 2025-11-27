"use client";

import { useEffect, useRef } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Header from "@/components/Header";
import ImageGallerySection from "@/components/ImageGallerySection";
import MarqueeSection from "@/components/MarqueeSection";
import VideoSection from "@/components/VideoSection";
import StandOutSection from "@/components/StandOutSection";
import FooterSection from "@/components/FooterSection";
import FlowingMenu from "@/components/FlowingMenu";
import { HeroSection02 } from "@/components/Newhero";
import HeroSection from "@/components/HeroSection";
import styles from "@/components/HeroSection.module.css";

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Custom cursor
    const cursor = cursorRef.current;
    if (cursor) {
      const handleMouseMove = (dets: MouseEvent) => {
        cursor.style.left = `${dets.x}px`;
        cursor.style.top = `${dets.y}px`;
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);
  return (
    <div className="bg-[#e5e5e5]">
      <div ref={cursorRef} className={styles.cursor} />
      <LoadingScreen />
      {/* <Header /> */}
      <main>
        {/* <HeroSection /> */}
        <HeroSection02 />
        <VideoSection />
        <StandOutSection />
        <MarqueeSection />
        <FlowingMenu />
        <ImageGallerySection />
        <FooterSection />
      </main>
    </div>
  );
}
