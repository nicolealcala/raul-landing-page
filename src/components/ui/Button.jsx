import { buttonVariants } from "../../lib/config/components";
import { cn } from "../../lib/utils";

export default function Button({
  disabled = false,
  variant = "filled",
  children,
}) {
  return (
    <button
      className={cn(
        "px-3 py-2 rounded-md transition-all duration-200 ease-in-out",
        buttonVariants[variant] ?? "",
        disabled ? "cursor-auto" : "cursor-pointer",
      )}
    >
      {children}
    </button>
  );
}
