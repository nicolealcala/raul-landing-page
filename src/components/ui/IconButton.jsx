import { buttonShapes, buttonVariants } from "../../lib/config/components";
import { cn } from "../../lib/utils";

export default function IconButton({
  disabled = false,
  variant = "ghost",
  shape = "rounded",
  children,
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        "flex-center cursor-pointer transition-all duration-200 ease-in-out min-h-fit min-w-fit",
        buttonVariants[variant] ?? "",
        buttonShapes[shape] ?? "",
        disabled ? "cursor-auto" : "cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
