import LayoutIcon from "../icons/Layout";
import ThreeDots from "../icons/ThreeDotsIcon";
import Card from "../ui/Card";
import Metrics from "./Metrics";
import MetricsText from "./MetricsText";

export default function HeroSection() {
  return (
    <article className="relative flex gap-x-8 w-full max-w-7xl mx-auto">
      <div className="w-full flex flex-col gap-y-8 md:gap-y-20 z-10">
        <header>
          {/* <h1 className="font-semibold text-4xl leading-10 sm:text-6xl sm:leading-18 md:text-[84px] md:leading-22"> */}
          <h1 className="text-[clamp(2.5rem,8vw,5.25rem)] font-semibold leading-[1.1] tracking-tighter">
            <span className="text-primary-400">Future of your</span>
            <br />
            <span>business today.</span>
          </h1>
        </header>

        <section className="flex w-full lg:w-[75%] gap-0 md:gap-x-16 text-left">
          <div className="flex flex-col gap-y-16 w-full self-start">
            <div className="flex gap-x-6 md:gap-x-14">
              <div className="size-16 md:size-36 bg-primary-100 rounded-xl shrink-0"></div>
              <p className="pt-4 w-70">
                Where we elevate your business with inovative strategies and
                expert solutions. As a full-service business agency
              </p>
            </div>

            {/* Small Screen Header Image */}
            <div className="relative w-full flex md:hidden flex-col">
              <div className="w-full h-[50%] rounded-2xl overflow-hidden -z-10">
                <img
                  src="https://images.pexels.com/photos/7691725/pexels-photo-7691725.jpeg"
                  alt="Photo by Yan Krukau: https://www.pexels.com/photo/four-people-working-in-the-office-7691725/"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex md:hidden -mt-20">
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
              </div>
            </div>

            {/* Metrics */}
            <div className="w-full flex flex-col gap-10 items-center sm:flex-row md:items-start md:gap-10">
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
          <div className="mt-4 w-max shrink-0">
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
              className="hidden md:flex"
            />
          </div>
        </section>
      </div>

      {/* Large Screen Header Image */}
      <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-[40%] h-[90%] rounded-2xl overflow-hidden z-0">
        <img
          src="https://images.pexels.com/photos/7691725/pexels-photo-7691725.jpeg"
          alt="Photo by Yan Krukau: https://www.pexels.com/photo/four-people-working-in-the-office-7691725/"
          className="w-full h-full object-cover"
        />
      </div>
    </article>
  );
}
