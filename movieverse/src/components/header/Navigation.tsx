import { NavLink } from "react-router-dom";
import { appRoutes } from "~/app.config";

export const Navigation = () => {
  return (
    <nav className="flex justify-end items-center">
      <ul className="flex gap-2">
        {appRoutes.map((route, index) => (
          <li key={index}>
            <NavLink to={route.url}>{route.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
