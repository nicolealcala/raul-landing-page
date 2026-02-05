import Button from "../components/ui/Button";
import ErrorSvg from "/error.svg";

export default function MaintenancePage() {
  return (
    <div className="min-h-dvh max-w-7xl mx-auto flex-center flex-col gap-y-6 px-6">
      <img
        src={ErrorSvg}
        alt="Page Not Found"
        className="w-[70vw] sm:w-[30vw] h-auto max-w-130"
      />
      <h4 className="font-semibold text-2xl text-center mt-4">
        We can&apos;t find that page
      </h4>
      <p className="text-center max-w-md mb-5">
        It might have been moved, or the link you followed is broken. Let's get
        you back on track.
      </p>
      <Button component="a" link="/">
        Go back Home
      </Button>
    </div>
  );
}
