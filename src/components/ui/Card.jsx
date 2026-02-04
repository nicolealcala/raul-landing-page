import { cn } from "../../lib/utils";

export default function Card({ header, title, description }) {
  return (
    <div
      className={cn(
        "rounded-2xl flex flex-col gap-y-6 px-12 py-7 pb-12 bg-white w-full shrink-0 max-w-90",
        "shadow-[0px_0px_20px_2px_rgba(0,0,0,0.08)]",
      )}
    >
      {header}
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}
