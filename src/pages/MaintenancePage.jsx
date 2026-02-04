import Button from "../components/ui/Button";
import UnderConstructionSvg from "/under-construction.svg";

export default function MaintenancePage() {
  return (
    <div className="max-w-7xl mx-auto flex-center flex-col gap-y-4 -mt-10">
      <img
        src={UnderConstructionSvg}
        alt="Website Under Construction SVG"
        className="w-[75vw] h-auto max-w-130"
      />
      <h4 className="font-semibold text-2xl text-center">
        We’re building something new
      </h4>
      <p className="text-center max-w-md mb-5">
        This page is currently under construction as part of our site update.
        Check back soon to see what’s new.
      </p>
      <Button component="a" link="/">
        Go back Home
      </Button>
    </div>
  );
}
