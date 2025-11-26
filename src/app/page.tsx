// import HeroSection from "@/components/HeroSection";
import LoadingScreen from "@/components/LoadingScreen";
import Header from "@/components/Header";
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
    <div className="bg-[#e5e5e5]">
      <LoadingScreen />
      <Header />
      <main>
        <HeroSection02 />
        <VideoSection />
        <StandOutSection />
        <MarqueeSection />
        <FlowingMenu items={demoItems} />
        <ImageGallerySection />

        <FooterSection />
      </main>
    </div>
  );
}
