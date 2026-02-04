import { carouselItems } from "../../lib/data/carousel-items";
import EmblaCarousel from "../ui/EmblaCarousel";

export default function CarouselSection() {
  return (
    <article className="flex flex-col gap-y-20">
      <section className="flex justify-between w-full max-w-7xl mx-auto">
        <h2 className="text-6xl font-semibold">
          Build the future of your business today.
        </h2>
        <p className="max-w-sm mt-4">
          Where we elevate your business with innovative strategies anf expert
          solutions. As a full-service business agency, we specialize in helping
          companies of all sizes optimize
        </p>
      </section>

      <section className="w-full pl-[calc((100vw-1280px)/2)]">
        <EmblaCarousel slides={carouselItems} />
      </section>
    </article>
  );
}
