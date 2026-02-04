import React, { useState } from "react";
import { navLinks } from "../../lib/data/nav-links";
import Menu from "../icons/Menu";
import Button from "../ui/Button";
import IconButton from "../ui/IconButton";
import Logo from "./Logo";
import { Close } from "../icons/Close";

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
        <div className="flex justify-between w-full max-w-lg">
          {navLinks.map((page) => (
            <a key={page.path} href={page.link} className="font-semibold">
              {page.label}
            </a>
          ))}
        </div>
        <Button>GET STARTED</Button>
      </div>

      {/* Small Screen Nav */}
      <div className="flex flex-col gap-y-2 lg:hidden">
        <div className="flex justify-between">
          <Logo />
          {isSmallNavToggled ? (
            <IconButton className="size-10" onClick={handleCloseSmallNav}>
              <Close />
            </IconButton>
          ) : (
            <IconButton className="size-10" onClick={handleOpenSmallNav}>
              <Menu />
            </IconButton>
          )}
        </div>

        <div className="relative w-full z-99">
          {isSmallNavToggled && (
            <div className="absolute top-0 left-0 w-full bg-primary-50 rounded-b-xl">
              <hr className="text-gray-300" />
              <div className="flex flex-col gap-y-1 p-2 shadow-md">
                {navLinks.map((page) => (
                  <a
                    key={page.path}
                    href={page.path}
                    role="button"
                    className="font-semibold px-4 py-2 rounded-md"
                  >
                    {page.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
