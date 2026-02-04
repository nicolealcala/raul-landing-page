import { cn } from "../../lib/utils";
import CountUp from "react-countup";

export default function MetricsText({ amount, className }) {
  return (
    <CountUp
      className={cn("text-primary-400 font-semibold text-4xl", className ?? "")}
      end={amount}
      duration={1}
      enableScrollSpy
      scrollSpyOnce
      suffix="+"
    />
  );
}
