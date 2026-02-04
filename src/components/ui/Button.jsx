import { buttonVariants } from "../../lib/config/components";
import { cn } from "../../lib/utils";

export default function Button({
  component,
  link,
  disabled = false,
  variant = "filled",
  children,
  className,
  ...props
}) {
  return component && component === "a" ? (
    <a
      role="button"
      href={link ?? "#"}
      className={cn("button-base", buttonVariants[variant], className ?? "")}
    >
      {children}
    </a>
  ) : (
    <button
      className={cn(
        "button-base",
        buttonVariants[variant] ?? "",
        disabled ? "cursor-auto" : "cursor-pointer",
      )}
      {...props}
    >
      {children}
    </button>
  );
}
