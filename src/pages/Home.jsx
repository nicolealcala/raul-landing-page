import HeroSection from "../components/home/Hero";
import Carousel from "../components/home/Carousel";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-24">
      <HeroSection />
      <Carousel />
    </div>
  );
}
