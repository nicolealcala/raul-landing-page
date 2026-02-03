import { cn } from "../../lib/utils";

const buttonStyles = {
  filled: "bg-primary-400 text-white",
};
export default function Button({ variant = "filled", children }) {
  return (
    <button className={cn("px-3 py-2 rounded-md", buttonStyles[variant]) ?? ""}>
      {children}
    </button>
  );
}
