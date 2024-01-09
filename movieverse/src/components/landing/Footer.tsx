import { LogoDesktop } from "../logo/LogoDesktop";
import { Link, NavLink } from "react-router-dom";
import { LogoMobile } from "../logo/LogoMobile";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className=" w-full h-[500px] grid grid-cols-3 items-center aurora-bg">
      <div className="flex flex-col items-center gap-2 pl-2">
        <div className="sm:hidden md:block">
          <LogoDesktop />
        </div>
        <div className="sm:block md:hidden">
          <LogoMobile />
        </div>
        <p className="text-gray-300 text-xs text-center">
          Where Every Frame Tells a Thousand Stories
        </p>
      </div>
      <nav className="flex flex-col items-center gap-2">
        <NavLink
          className="hover:text-red-400 sm:text-xs md:text-sm lg:text-base"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="hover:text-red-400 sm:text-xs md:text-sm lg:text-base"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className="hover:text-red-400 sm:text-xs md:text-sm lg:text-base"
          to="/pricing"
        >
          Pricing
        </NavLink>
        <NavLink
          className="hover:text-red-400 sm:text-xs md:text-sm lg:text-base"
          to="/auth/login"
        >
          Login
        </NavLink>
      </nav>
      <div className="flex flex-col items-center gap-2">
        <Link to="https://pl.linkedin.com/in/egemen-akdan-167181226">
          <FaLinkedin />
        </Link>
        <Link to="https://www.facebook.com/profile.php?id=100073223918748">
          <FaFacebook />
        </Link>
        <Link to="https://www.instagram.com/akdsovereign/">
          <FaInstagram />
        </Link>
        <Link to="https://github.com/sovereignofficial/movieverse">
          <FaGithub />
        </Link>
      </div>
    </footer>
  );
};
