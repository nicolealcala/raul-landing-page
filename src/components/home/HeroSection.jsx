import LayoutIcon from "../icons/Layout";
import ThreeDots from "../icons/ThreeDotsIcon";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Metrics from "./Metrics";
import MetricsText from "./MetricsText";

export default function HeroSection() {
  return (
    <article className="relative flex gap-x-8 w-full max-w-7xl mx-auto">
      <div className="w-full flex flex-col gap-y-8 lg:gap-y-20 z-10">
        <header>
          <h1 className="text-[clamp(2.75rem,7.5vw,5.25rem)] font-semibold leading-[1.1] tracking-tighter text-center lg:text-left">
            <span className="text-primary-400">Future of your</span>
            <br />
            <span>business today.</span>
          </h1>
        </header>

        <section className="flex w-full lg:w-[75%] gap-0 lg:gap-x-16 text-left">
          {/* Subheading and metrics */}
          <div className="flex flex-col gap-y-16 w-full self-start">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-12 md:gap-x-14">
              <div className="hidden lg:flex size-16 md:size-36 bg-neutral-400/75 rounded-xl shrink-0"></div>
              <p className="pt-0 text-center w-full max-w-sm lg:text-left lg:pt-4 lg:max-w-70">
                Where we elevate your business with inovative strategies and
                expert solutions. As a full-service business agency
              </p>

              <div className="hidden md:flex lg:hidden w-full justify-between max-w-lg">
                <Metrics
                  amount={2000}
                  icon={<LayoutIcon className="size-full" />}
                  description="Your protection"
                />
                <hr className="flex md:hidden h-1 w-1/2 bg-primary-400 border-t-primary-400" />
                <Metrics
                  amount={7001}
                  icon={<ThreeDots className="size-full" />}
                  description="Provide tailored"
                />
                <hr className="flex md:hidden h-1 w-1/2 bg-primary-400 border-t-primary-400" />
              </div>
              <Button
                component="a"
                link="#"
                className="flex lg:hidden md:mt-3 md:text-xl"
              >
                GET STARTED
              </Button>
            </div>

            {/* Small Screen Image */}
            <div className="w-full flex lg:hidden flex-col">
              <div className="w-full rounded-2xl h-[50vh] overflow-hidden -z-10">
                <img
                  src="https://images.pexels.com/photos/7691725/pexels-photo-7691725.jpeg"
                  alt="Photo by Yan Krukau: https://www.pexels.com/photo/four-people-working-in-the-office-7691725/"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex lg:hidden -mt-20">
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
            <div className="flex md:hidden lg:flex w-full flex-col gap-10 items-center sm:flex-row md:items-start md:gap-10">
              <Metrics
                amount={2000}
                icon={<LayoutIcon className="size-full" />}
                description="Your protection"
              />
              <hr className="flex md:hidden h-1 w-1/2 bg-primary-400 border-t-primary-400" />
              <Metrics
                amount={7001}
                icon={<ThreeDots className="size-full" />}
                description="Provide tailored"
              />
              <hr className="flex md:hidden h-1 w-1/2 bg-primary-400 border-t-primary-400" />
            </div>
          </div>
          {/* Hero Card */}
          <div className="hidden lg:flex mt-4 w-max shrink-0">
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
        </section>
      </div>

      {/* Large Screen Header Image */}
      <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-[40%] h-[90%] rounded-2xl overflow-hidden z-0">
        <img
          src="https://images.pexels.com/photos/7691725/pexels-photo-7691725.jpeg"
          alt="Photo by Yan Krukau: https://www.pexels.com/photo/four-people-working-in-the-office-7691725/"
          className="w-full h-full object-cover"
        />
      </div>
    </article>
  );
}
