import { cn } from "../../lib/utils";

export default function MetricsText({ amount, className }) {
  return (
    <span
      className={cn("text-primary-400 font-semibold text-4xl", className ?? "")}
    >
      {amount}+
    </span>
  );
}
