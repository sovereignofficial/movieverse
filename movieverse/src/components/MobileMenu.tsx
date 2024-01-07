import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { appRoutes } from "../app.config.ts";
import { MenuSideBar } from "./MenuSideBar.tsx";
import { BiMenu } from "react-icons/bi";
import { Search } from "./forms/SearchInput.tsx";
import { LogoMobile } from "./logo/LogoMobile.tsx";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu} className="p-2 text-white rounded">
        <BiMenu size={24} />
      </button>
      <div
        className={`fixed top-0 left-0 h-screen  bg-zinc-950 transform transition-transform duration-300 ease-in-out w-full z-50 animation-slow p-1 overflow-scroll ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="page">
          <div className="page-header">
            <button onClick={toggleMenu} className="p-2 flex-1">
              <BiMenu size={24} />
            </button>
            <div className="sm:block md:hidden">
              <LogoMobile />
            </div>
          </div>
          <div className="page-body space-y-10 ">
            <section className="grid place-items-center">
              <Search onSearch={toggleMenu} />
            </section>
            <nav className="grid place-items-center">
              {appRoutes.map((route) => (
                <Link
                  key={route.url}
                  to={route.url}
                  onClick={toggleMenu}
                  className={`block p-2 ${
                    location.pathname.includes(route.url)
                      ? "text-red-500"
                      : "text-white"
                  } marker:text-lg font-medium`}
                >
                  {route.name}
                </Link>
              ))}
            </nav>
            {window.location.pathname.includes("movies") && (
              <MenuSideBar onFilter={toggleMenu} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
