import HeroSection from "../components/home/HeroSection";
import CarouselSection from "../components/home/CarouselSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-44 w-full">
      <HeroSection />
      <CarouselSection />
    </div>
  );
}
