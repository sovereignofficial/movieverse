import { NavLink } from "react-router-dom";
import { LogoDesktop } from "../logo/LogoDesktop";
import { LogoMobile } from "../logo/LogoMobile";

export const LandingHeader = () => {
  return (
    <div className="flex p-3 items-center">
      <section id="logo" className="flex-1">
        <div className="sm:hidden md:block">
          <LogoDesktop />
        </div>
        <div className="sm:block md:hidden">
          <LogoMobile />
        </div>
      </section>
      <nav className="flex items-center gap-5">
      <NavLink to='/' className="hover:text-red-400 sm:text-xs md:text-sm lg:text-base">Home</NavLink>
      <NavLink to='/about' className="hover:text-red-400 sm:text-xs md:text-sm lg:text-base">About</NavLink>
      <NavLink to='/pricing' className="hover:text-red-400 sm:text-xs md:text-sm lg:text-base">Pricing</NavLink>
      <NavLink to='/auth/login' className="btn-primary">Start to discover</NavLink>
      </nav>
    </div>
  );
};
