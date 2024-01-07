import { HeaderAvatar } from "./components/header/HeaderAvatar"
import { RiCompassDiscoverLine } from "react-icons/ri";
import { RiMovie2Line } from "react-icons/ri";

const appRoutes = [
    {
        name:'Movies',
        icon: RiMovie2Line,
        url: '/movies',
    },
    {
        name:'Discover',
        icon: RiCompassDiscoverLine,
        url: '/discover',
    },
    {
        name:'Account',
        avatar: HeaderAvatar,
        url: '/account',
    },

]

const landingRoutes = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'Sign in',
        url: '/auth/login'
    }
]

const genres = [
    {
        id:"popular",
        name:"Popular"
    },
    {
        id:"trending",
        name:"Trending🔥"
    },
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
]

export { appRoutes, landingRoutes, genres }