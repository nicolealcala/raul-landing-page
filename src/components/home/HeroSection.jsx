import LayoutIcon from "../icons/Layout";
import ThreeDots from "../icons/ThreeDotsIcon";
import Card from "../ui/Card";
import Metrics from "./Metrics";
import MetricsText from "./MetricsText";

export default function HeroSection() {
  return (
    <article className="relative flex gap-x-8 w-full max-w-7xl mx-auto">
      <div className="flex flex-col gap-y-20 z-10">
        <h1 className="font-semibold text-[84px] leading-22">
          <span className="text-primary-400">Future of your</span>
          <br />
          <span>business today.</span>
        </h1>

        <section className="flex w-[75%] gap-x-16 text-left">
          <div className="flex flex-col gap-y-16">
            <div className="flex gap-x-14">
              <div className="size-36 bg-primary-100 rounded-xl shrink-0"></div>
              <p className="pt-4 w-70">
                Where we elevate your business with inovative strategies and
                expert solutions. As a full-service business agency
              </p>
            </div>

            {/* Metrics */}
            <div className="flex gap-x-6">
              <Metrics
                amount={2000}
                icon={<LayoutIcon className="size-full" />}
                description="Your protection"
              />
              <Metrics
                amount={7001}
                icon={<ThreeDots className="size-full" />}
                description="Provide tailored"
              />
            </div>
          </div>
          <Card
            header={
              <div className="flex gap-x-8">
                <MetricsText amount={721} />
                <MetricsText amount={1000} />
              </div>
            }
            title="Growth is our priority."
            description=" As a full-service business agency, we specialize in helping
              companies of all sizes optimize their operations."
          />
        </section>
      </div>

      {/* Header Image */}
      <div className="absolute right-0 top-0 bottom-0 w-[40%] h-[90%] rounded-2xl overflow-hidden z-0">
        <img
          src="https://images.pexels.com/photos/7691725/pexels-photo-7691725.jpeg"
          alt="Photo by Yan Krukau: https://www.pexels.com/photo/four-people-working-in-the-office-7691725/"
          className="w-full h-full object-cover"
        />
      </div>
    </article>
  );
}
