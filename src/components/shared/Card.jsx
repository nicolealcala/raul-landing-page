import { cn } from "../../lib/utils";

export default function Card({
  containerClassname,
  header,
  title,
  titleClassName,
  description,
}) {
  return (
    <div
      className={cn(
        "rounded-2xl flex flex-col gap-y-6 px-12 py-7 pb-12 bg-white max-w-90",
        containerClassname ?? "",
      )}
    >
      {header}
      <h3 className={cn("font-bold", titleClassName ?? "")}>{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}
