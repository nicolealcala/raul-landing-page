import { pageLinks } from "../../lib/data/nav";
import Button from "../shared/Button";

export default function Navbar() {
  return (
    <nav>
      <div className="hidden md:flex justify-between items-center">
        <div className="flex gap-x-2 items-center">
          <div className="size-6 bg-primary-400 rounded-full"></div>
          <h1 className="font-extrabold text-2xl">RAUL</h1>
        </div>
        <div className="flex justify-between w-full max-w-lg">
          {pageLinks.map((page) => (
            <a key={page.path} href={page.link} className="font-semibold">
              {page.label}
            </a>
          ))}
        </div>
        <Button>GET STARTED</Button>
      </div>
    </nav>
  );
}
