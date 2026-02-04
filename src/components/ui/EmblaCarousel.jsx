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
    align: "center",
    containScroll: "trimSnaps",
    breakpoints: {
      "(min-width: 768px)": { align: "start" },
    },
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback((embla) => {
    setCanScrollPrev(embla.canScrollPrev());
    setCanScrollNext(embla.canScrollNext());
  }, []);

  //Hook to to listen to carousel select events for showing/hiding control buttons
  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const goToPrev = useCallback(() => {
    if (!emblaApi) return;

    emblaApi.scrollPrev();
  }, [emblaApi]);

  const goToNext = useCallback(() => {
    if (!emblaApi) return;

    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div
        className={cn(
          "mask-l-from-95% mask-none sm:mask-r-from-90% -my-10 py-10 -ml-7 pl-7",
        )}
      >
        <div className={cn("embla", "flex w-full flex-col gap-y-16")}>
          <div
            className={cn(
              "embla__viewport",
              "overflow-hidden",
              "-my-7 py-7",
              "-ml-7 pl-7",
              "-mr-3 lg:mr-7",
            )}
            ref={emblaRef}
          >
            <div
              className={cn(
                "embla__container",
                "flex touch-pan-y touch-pinch-zoom",
                "w-full",
                // "-my-7 py-7",
                // "-ml-7 pl-7",
                "-mr-6 lg:mr-[calc((100vw-1280px)/2+2.5rem)]",
              )}
            >
              {slides.map((slide) => (
                <div
                  key={slide.title.replaceAll(" ", "-")}
                  className={cn(
                    "embla__slide",
                    "flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_30%] xl:flex-[0_0_25%] pr-4",
                  )}
                >
                  <CarouselCard
                    title={slide.title}
                    description={slide.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full px-0 sm:px-4 lg:px-8 flex justify-between">
        {canScrollPrev ? (
          <IconButton
            aria-label="Go to previous slide"
            className="embla__prev"
            onClick={goToPrev}
          >
            <ArrowLeft className="size-6 lg:size-20" />
          </IconButton>
        ) : (
          <div></div>
        )}
        {canScrollNext ? (
          <IconButton
            aria-label="Go to previous slide"
            className="embla__next"
            onClick={goToNext}
          >
            <ArrowRight className="size-6 lg:size-20" />
          </IconButton>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
