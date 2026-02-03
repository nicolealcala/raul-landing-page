import MetricsText from "./MetricsText";

export default function Metrics({ amount, icon, description }) {
  return (
    <div className="flex gap-x-4 min-w-45">
      <div className="size-16 rounded-lg bg-white flex-center p-3.5 shadow-[10px_10px_10px_rgba(0,0,0,0.08)]">
        {icon}
      </div>
      <div className="flex flex-col gap-y-1">
        <MetricsText amount={amount} className="text-2xl text-inherit" />
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
}
