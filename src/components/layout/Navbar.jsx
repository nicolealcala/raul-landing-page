import { useState } from "react";
import { navLinks } from "../../lib/data/nav-links";
import Menu from "../icons/Menu";
import IconButton from "../ui/IconButton";
import Logo from "./Logo";
import { Close } from "../icons/Close";
import Button from "../ui/Button";
import { cn } from "../../lib/utils";
import { NavLink } from "react-router";

export default function Navbar() {
  const [isSmallNavToggled, setIsSmallNavToggled] = useState(false);

  function handleOpenSmallNav() {
    setIsSmallNavToggled(true);
  }

  function handleCloseSmallNav() {
    setIsSmallNavToggled(false);
  }
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
        <div className="flex justify-between">
          <Logo />
          {isSmallNavToggled ? (
            <IconButton
              aria-label="Close menu"
              className="size-10"
              onClick={handleCloseSmallNav}
            >
              <Close />
            </IconButton>
          ) : (
            <IconButton
              aria-label="Open menu"
              className="size-10"
              onClick={handleOpenSmallNav}
            >
              <Menu />
            </IconButton>
          )}
        </div>

        <div className="relative w-full z-99">
          {isSmallNavToggled && (
            <div className="absolute top-0 left-0 w-full bg-primary-50">
              <hr className="text-gray-300" />
              <div className="flex flex-col gap-y-1 p-2 shadow-md">
                {navLinks.map((page) => (
                  <NavLink
                    key={page.path}
                    to={page.path}
                    className={({ isActive }) =>
                      cn(
                        "font-semibold transition-colors px-4 py-2 rounded-md",
                        isActive ? "text-primary-400" : "text-inherit",
                      )
                    }
                  >
                    {page.label}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
