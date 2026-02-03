import useEmblaCarousel from "embla-carousel-react";
import CarouselCard from "./CarouselCard";
import { cn } from "../../lib/utils";
import IconButton from "./IconButton";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";

export default function EmblaCarousel({ slides }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const goToPrev = () => emblaApi?.goToPrev();
  const goToNext = () => emblaApi?.goToNext();

  return (
    <div className={cn("embla", "relative flex max-w-full flex-col gap-y-16")}>
      <div
        className={cn(
          "embla__viewport",
          "overflow-hidden -m-7 p-6  mask-r-from-60%",
        )}
        ref={emblaRef}
      >
        <div
          className={cn(
            "embla__container",
            "flex touch-pan-y touch-pinch-zoom ",
          )}
        >
          {slides.map((slide) => (
            <div className={cn("embla__slide", "flex-[0_0_auto] pr-4")}>
              <CarouselCard
                title={slide.title}
                description={slide.description}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 w-full pr-[calc((100vw-1280px)/2)] flex justify-between">
        <IconButton
          aria-label="Go to previous slide"
          className="embla__prev"
          onClick={goToPrev}
        >
          <ArrowLeft className="size-24" />
        </IconButton>
        <IconButton
          aria-label="Go to previous slide"
          className="embla__prev"
          onClick={goToNext}
        >
          <ArrowRight className="size-24" />
        </IconButton>
      </div>
    </div>
  );
}
