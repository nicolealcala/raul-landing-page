import useEmblaCarousel from "embla-carousel-react";
import CarouselCard from "./CarouselCard";
import { cn } from "../../lib/utils";
import IconButton from "./IconButton";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";
import { useCallback, useEffect, useState } from "react";

export default function EmblaCarousel({ slides }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback((embla) => {
    setCanScrollPrev(embla.canScrollPrev());
    setCanScrollNext(embla.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const goToPrev = useCallback(() => {
    if (!emblaApi) {
      console.error("No emba instance in prev btn");
      return;
    }
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const goToNext = useCallback(() => {
    if (!emblaApi) {
      console.error("No emba instance in next btn");
      return;
    }
    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div
      className={cn("mask-l-from-95% mask-r-from-90% -my-10 py-10 -ml-7 pl-7")}
    >
      <div className={cn("embla", "relative flex w-full flex-col gap-y-16")}>
        <div
          className={cn(
            "embla__viewport",
            "overflow-hidden",
            "w-full",
            "-my-7 py-7",
            "-ml-7 pl-7",
            "mr-[calc((100vw-1280px)/2+2.5rem)]",
          )}
          ref={emblaRef}
        >
          <div
            className={cn(
              "embla__container",
              "flex touch-pan-y touch-pinch-zoom",
            )}
          >
            {slides.map((slide) => (
              <div
                key={slide.title.replaceAll(" ", "-")}
                className={cn("embla__slide", "flex-[0_0_auto] pr-4")}
              >
                <CarouselCard
                  title={slide.title}
                  description={slide.description}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 w-full pr-[calc((100vw-1280px)/2)] flex justify-between">
          {canScrollPrev ? (
            <IconButton
              aria-label="Go to previous slide"
              className="embla__prev"
              onClick={goToPrev}
            >
              <ArrowLeft className="size-24" />
            </IconButton>
          ) : (
            <div></div>
          )}
          {canScrollNext ? (
            <IconButton
              aria-label="Go to previous slide"
              className="embla__prev"
              onClick={goToNext}
            >
              <ArrowRight className="size-24" />
            </IconButton>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
