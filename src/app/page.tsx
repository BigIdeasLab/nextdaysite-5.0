// import HeroSection from "@/components/HeroSection";
import LoadingScreen from "@/components/LoadingScreen";
import Header from "@/components/Header";
import ImageGallerySection from "@/components/ImageGallerySection";
import MarqueeSection from "@/components/MarqueeSection";
import VideoSection from "@/components/VideoSection";
import StandOutSection from "@/components/StandOutSection";
import FooterSection from "@/components/FooterSection";
import FlowingMenu from "@/components/FlowingMenu";
import { HeroSection02 } from "@/components/Newhero";

export default function Home() {
  return (
    <div className="bg-[#e5e5e5]">
      <LoadingScreen />
      {/* <Header /> */}
      <main>
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
