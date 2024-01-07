import { NavLink, useLocation } from "react-router-dom";
import { appRoutes } from "~/app.config";
import { useUsersStore } from "~/zustand/usersStore";
import { MobileMenu } from "../MobileMenu";

export const Navigation = () => {
  const { profileUrl } = useUsersStore();
  const location = useLocation();
  
  return (
    <nav className="flex justify-end items-center">
      <div className="lg:hidden sm:block">
        <MobileMenu/>
      </div>
      <ul className="sm:hidden lg:flex gap-5 justify-end items-center">
        {appRoutes.map((route, index) => (
          <li key={index}>
            {route.avatar ? (
              <NavLink to={route.url}>
                <route.avatar avatar={profileUrl || "/avatar.jpg"} />
              </NavLink>
            ) : (
              <NavLink to={route.url}>
                <route.icon  style={{ color:  location.pathname.includes(route.url) ? "#f00707" : "white"}} size={24} />
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
