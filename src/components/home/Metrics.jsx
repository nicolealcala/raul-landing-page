import MetricsText from "./MetricsText";

export default function Metrics({ amount, icon, description }) {
  return (
    <div className="flex gap-x-6">
      <div
        aria-hidden={true}
        className="flex size-16 rounded-lg bg-white flex-center p-3.5 shadow-[10px_10px_12px_rgba(0,0,0,0.08)]"
      >
        {icon}
      </div>
      <div className="w-full flex flex-col gap-y-1 items-start text-nowrap">
        <MetricsText
          amount={amount}
          className="text-4xl md:text-3xl text-inherit"
        />
        <p>{description}</p>
      </div>
    </div>
  );
}
