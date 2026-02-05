import Logo from "./Logo";
import IconButton from "../ui/IconButton";
import { useState } from "react";
import { navLinks } from "../../lib/data/nav-links";
import { cn } from "../../lib/utils";
import { NavLink } from "react-router";
import Close from "../icons/Close";
import Menu from "../icons/Menu";
export default function SmallScreenNavbar() {
  const [isSmallNavToggled, setIsSmallNavToggled] = useState(false);

  function handleOpenSmallNav() {
    setIsSmallNavToggled(true);
  }

  function handleCloseSmallNav() {
    setIsSmallNavToggled(false);
  }

  return (
    <>
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
                  onClick={handleCloseSmallNav}
                >
                  {page.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
