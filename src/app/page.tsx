// import HeroSection from "@/components/HeroSection";
import LoadingScreen from "@/components/LoadingScreen";
import ImageGallerySection from "@/components/ImageGallerySection";
import MarqueeSection from "@/components/MarqueeSection";
import VideoSection from "@/components/VideoSection";
import StandOutSection from "@/components/StandOutSection";
import PortfolioSection from "@/components/PortfolioSection";
import FooterSection from "@/components/FooterSection";
import FlowingMenu from "@/components/FlowingMenu";
import { HeroSection02 } from "@/components/Newhero";

const demoItems = [
  {
    link: "#",
    text: "Mojave",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    link: "#",
    text: "Sonoma",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    link: "#",
    text: "Monterey",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    link: "#",
    text: "Sequoia",
    image: "https://picsum.photos/600/400?random=4",
  },
];

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main>
        {/* <HeroSection /> */}
        <HeroSection02 />
        <div style={{ height: "600px", position: "relative" }}>
          <FlowingMenu items={demoItems} />
        </div>
        <ImageGallerySection />
        <MarqueeSection />
        <VideoSection />
        <StandOutSection />
        <PortfolioSection />
        <FooterSection />
      </main>
    </>
  );
}
