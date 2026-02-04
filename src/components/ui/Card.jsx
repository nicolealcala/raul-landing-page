import { cn } from "../../lib/utils";

export default function Card({ header, title, description, className }) {
  return (
    <div
      className={cn(
        "rounded-2xl flex flex-col gap-y-6 px-8 md:px-12 py-7 pb-12 bg-white w-full shrink-0 self-start",
        "shadow-[0px_0px_20px_2px_rgba(0,0,0,0.08)]",
        "max-w-full lg:max-w-90",
        className,
      )}
    >
      {header}
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}
