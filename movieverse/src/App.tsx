import { useRoutes } from "react-router-dom"
import { AppLayout } from "./components/AppLayout"
import { Home } from "./pages/Home"
import { Popular } from "./pages/Popular"
import { Feed } from "./pages/Feed"
import { Search } from "./pages/Search"
import { Account } from "./pages/Account"
import { Auth } from "./pages/Auth"
import { MovieDetails } from "./pages/MovieDetails"
import { Favorites } from "./pages/Favorites"



export const App = () => {

    const routes = useRoutes([
        {
            element:<AppLayout/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/popular',
                    element:<Popular/>
                },
                {
                    path:'/feed',
                    element:<Feed/>
                },
                {
                    path:'/search',
                    element:<Search/>
                },
                {
                    path:'/account',
                    element:<Account/>,
                },
                {
                    path:'/account/favorites',
                    element:<Favorites/>
                },
                {
                    path:'/movie/:movieID',
                    element:<MovieDetails/>
                },
                {
                    path:'/login',
                    element:<Auth/>
                },
                {
                    path:'/register',
                    element:<Auth/>
                }
            ]
        }
    ])

    return routes
}
