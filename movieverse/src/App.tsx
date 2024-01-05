import { useRoutes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Movies } from "./pages/Movies";
import { Feed } from "./pages/Feed";
import { Search } from "./pages/Search";
import { Account } from "./pages/Account";
import { Auth } from "./pages/Auth";
import { MovieDetails } from "./pages/MovieDetails";
import { Favorites } from "./pages/Favorites";
import { Register } from "./components/auth/Register";
import { Login } from "./components/auth/Login";
import { ProtectedRoutes } from "./pages/ProtectedRoutes";
import { AppLayout } from "./components/layout/AppLayout";
import { LandingLayout } from "./components/layout/LandingLayout";
import { PersonDetails } from "./pages/PersonDetails";
import { TvShowDetails } from "./pages/TvShowDetails";
import { Settings } from "./pages/Settings";

export const App = () => {
  const routes = useRoutes([
    {
      element: <ProtectedRoutes />,
      children: [
        {
          element: <AppLayout />,
          children: [
            {
              path: "/movies",
              element: <Movies />,
            },
            {
              path: "/feed",
              element: <Feed />,
            },
            {
              path: "/search",
              element: <Search />,
            },
            {
              path: "/account",
              element: <Account />,
              children: [
                {
                  index: true,
                  element: <Favorites />,
                },
                {
                  path: "tv",
                  element: <Favorites />,
                },
                {
                  path: "movies",
                  element: <Favorites />,
                },
                {
                  path: "people",
                  element: <Favorites />,
                },
                {
                  path: "settings",
                  element: <Settings />,
                },
              ],
            },
            {
              path: "/movie",
              element: <MovieDetails />,
            },
            {
              path: "/tv",
              element: <TvShowDetails />,
            },
            {
              path: "/person",
              element: <PersonDetails />,
            },
          ],
        },
      ],
    },
    {
      element: <LandingLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/auth",
          element: <Auth />,
          children: [
            {
              index: true,
              element: <Login />,
            },
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
  ]);

  return routes;
};
