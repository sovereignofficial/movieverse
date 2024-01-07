import { NavLink } from "react-router-dom";

export const LogoMobile = () => {
  return (
    <NavLink to="/movies">
      <div className="w-12 h-12 rounded overflow-hidden">
        <img loading="lazy" className="w-full h-full object-cover" src="/LogoMobile.png"  alt="movieverse-logo-mobile"/>
      </div>
    </NavLink>
  );
};
