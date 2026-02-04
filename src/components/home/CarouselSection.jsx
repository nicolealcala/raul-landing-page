import { carouselItems } from "../../lib/data/carousel-items";
import EmblaCarousel from "../ui/EmblaCarousel";

export default function CarouselSection() {
  return (
    <article className="flex flex-col gap-y-20">
      <section className="flex flex-col gap-6 lg:flex-row justify-between w-full max-w-7xl mx-auto">
        <h2 className="text-[clamp(2.3rem,5vw,3.75rem)] font-semibold leading-[1.1] tracking-tighter text-center lg:text-left">
          Build the future of your business today.
        </h2>
        <p className="max-w-lg mt-4 mx-auto text-center lg:max-w-sm lg:text-left">
          Where we elevate your business with innovative strategies anf expert
          solutions. As a full-service business agency, we specialize in helping
          companies of all sizes optimize
        </p>
      </section>

      <section className="relative w-full pl-0 lg:pl-[calc((100vw-1280px)/2)]">
        <EmblaCarousel slides={carouselItems} />
      </section>
    </article>
  );
}
