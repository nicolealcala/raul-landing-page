import { cn } from "../../lib/utils";
import ArrowUpRight from "../icons/ArrowUpRight";

export default function CarouselCard({ title, description }) {
  return (
    <div
      className={cn(
        "rounded-2xl flex flex-col gap-y-6 px-8 md:px-12 py-7 pb-12 bg-white h-full  shadow-[0px_0px_20px_2px_rgba(0,0,0,0.08)]",
        //"max-w-70 sm:max-w-80",
      )}
    >
      <a
        aria-label="Redirect Icon"
        role="button"
        href="#"
        className="max-w-fit bg-primary-100/90 p-2 rounded-md"
      >
        <ArrowUpRight />
      </a>
      <h3 className="font-bold text-2xl">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}
