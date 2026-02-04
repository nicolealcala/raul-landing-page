import MetricsText from "./MetricsText";

export default function Metrics({ amount, icon, description }) {
  return (
    <div className="flex gap-x-6 min-w-auto md:min-w-45">
      <div className="hidden md:flex size-16 rounded-lg bg-white flex-center p-3.5 shadow-[10px_10px_12px_rgba(0,0,0,0.08)]">
        {icon}
      </div>
      <div className="flex flex-col gap-y-1 items-center md:items-start">
        <MetricsText
          amount={amount}
          className="text-4xl md:text-3xl text-inherit"
        />
        <p className="">{description}</p>
      </div>
    </div>
  );
}
