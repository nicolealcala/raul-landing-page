import { navLinks } from "../../lib/data/nav-links";
import Logo from "./Logo";
import Button from "../ui/Button";
import { cn } from "../../lib/utils";
import { NavLink } from "react-router";
import SmallScreenNavbar from "./SmallScreenNavbar";

export default function Navbar() {
  return (
    <nav className="w-full max-w-7xl mx-auto">
      <div className="hidden lg:flex justify-between items-center">
        <Logo />
        <div className="flex gap-x-12">
          {navLinks.map((page) => (
            <NavLink
              key={page.path}
              to={page.path}
              className={({ isActive }) =>
                cn(
                  "font-semibold transition-colors px-2",
                  isActive ? "text-primary-400" : "text-inherit",
                )
              }
            >
              {page.label}
            </NavLink>
          ))}
        </div>
        <Button component="a" link="#">
          GET STARTED
        </Button>
      </div>

      {/* Small Screen Nav */}
      <div className="flex flex-col gap-y-2 lg:hidden">
        <SmallScreenNavbar />
      </div>
    </nav>
  );
}
