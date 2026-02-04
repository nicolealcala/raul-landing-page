import { buttonVariants } from "../../lib/config/components";
import { cn } from "../../lib/utils";

export default function Button({
  disabled = false,
  variant = "filled",
  children,
  ...props
}) {
  return (
    <button
      className={cn(
        "px-6 py-2.5 rounded-md transition-all duration-200 ease-in-out font-semibold",
        buttonVariants[variant] ?? "",
        disabled ? "cursor-auto" : "cursor-pointer",
      )}
      {...props}
    >
      {children}
    </button>
  );
}
