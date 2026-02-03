import { carouselItems } from "../../lib/data/carousel-items";
import CarouselCard from "../shared/CarouselCard";

export default function Carousel() {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-6xl font-semibold">
          Build the future of your business today.
        </h2>
        <p className="max-w-sm mt-4">
          Where we elevate your business with innovative strategies anf expert
          solutions. As a full-service agency, we specialize in helping
          companies of all sizes optimize their operations.
        </p>
      </div>

      {carouselItems.map((item) => (
        <CarouselCard
          key={item.title.replaceAll(" ", "-")}
          title={item.title}
          description={item.description}
        />
      ))}
    </>
  );
}
