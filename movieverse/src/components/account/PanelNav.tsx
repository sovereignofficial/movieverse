import { useLocation, useNavigate } from "react-router-dom";

export const PanelNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className="flex justify-center gap-3">
      <button
        onClick={() => navigate(`/account/movies`)}
        className={`sm:text-xs md:text-base lg:text-lg px-4 py-2  bg-transparent border-b ${
          pathname === "/account/movies" || pathname === "/account" ? "border-red-500" : "border-zinc-500"
        } `}
      >
        Favorite Movies
      </button>
      <button
        onClick={() => navigate(`/account/tv`)}
        className={`sm:text-xs md:text-base lg:text-lg px-4 py-2  bg-transparent border-b ${
          pathname === "/account/tv" ? "border-red-500" : "border-zinc-500"
        } `}
      >
        Favorite Tv Shows
      </button>
      <button
        onClick={() => navigate(`/account/people`)}
        className={`sm:text-xs md:text-base lg:text-lg px-4 py-2  bg-transparent border-b ${
          pathname === "/account/people" ? "border-red-500" : "border-zinc-500"
        } `}
      >
        Favorite People
      </button>
      <button
        onClick={() => navigate(`/account/settings`)}
        className={`sm:text-xs md:text-base lg:text-lg px-4 py-2  bg-transparent border-b ${
          pathname === "/account/settings"
            ? "border-red-500"
            : "border-zinc-500"
        } `}
      >
        Settings
      </button>
    </nav>
  );
};
