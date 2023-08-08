import { Found } from "./components/Found"
import { Navbar } from "./components/Navbar"
import { Search } from "./components/Search"
import { DiscoverScreen } from "./components/screens/DiscoverScreen"
import { useEffect, useState } from "react"
import { defaultSearchRequest, getMovieData, searchRequest } from "./utils/data"
import { ResultsList } from "./components/movies/ResultsList"
import { Recommended } from "./components/recommend/Recommended"
import { CustomLists } from "./components/custom/CustomLists"
import { Carousel } from "./components/Carousel"
import { Card } from "./components/Card"
import { ListsDropDown } from "./components/custom/ListDropDown"
import { DetailScreen } from "./components/screens/DetailScreen"

export type CustomList = {
    name: string,
    items: MovieUsersLike[] 
}

export interface Movie {
    Title: string,
    Year: string,
    Poster: string
}
export interface MovieDetails {
    Title: string,
    Awards: string,
    Country: string,
    Director: string,
    Genre: string,
    Language: string,
    Plot: string,
    Poster: string,
    Released: string,
    Runtime: string,
    Type: string,
    imdbRating: string,
    imdbVotes: string,
}
export interface MovieUsersLike{
    Title:string,
    Year:string,
    Poster:string,
    usersRate?:number,
}
export const mockMovieDetails = {
        Title: "",
        Awards: "",
        Country: "",
        Director: "",
        Genre: "",
        Language: "",
        Plot: "",
        Poster: "",
        Released: "",
        Runtime: "",
        Type: "",
        imdbRating: "",
        imdbVotes: "",
}
export const App = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [activeList, setActiveList] = useState<CustomList>({ name: "", items: [] });
    const [selectedMovie, setSelectedMovie] = useState<MovieDetails>(mockMovieDetails);
    const [rated, setRating] = useState(0);
    const [lists, setLists] = useState<CustomList[]>(JSON.parse(localStorage.getItem("lists")!) ?? []);

    useEffect(() => {
      lists[0] && setActiveList(lists[0]);
    }, [])
    
    useEffect(() => {
      localStorage.setItem("lists", JSON.stringify(lists))
    }, [lists])
  

    const handleDefaultMovies = async () => {
        const data = await defaultSearchRequest()
        setMovies(data);
    }
    const handleSearchRequest = async (query: string) => {
        const data = await searchRequest(query)
        setMovies(data)
    }
    const cardOnClick = async (movieTitle: string) => {
        const data = await getMovieData(movieTitle);
        setSelectedMovie(data)
    }
    useEffect(() => {
        handleDefaultMovies();
    }, [])
    return (
        <>
            <Navbar>
                <Search handleSearchRequest={handleSearchRequest} />
                <Found />
            </Navbar>
            <section className="w-full">
                <DiscoverScreen>
                    <ResultsList>
                        <Carousel>
                            {movies.map((movie, index) => (
                                <Card cardOnClick={cardOnClick} key={index} movie={movie} />
                            ))}
                        </Carousel>
                    </ResultsList>
                    <Recommended>
                        {/* <Carousel> */}
                    </Recommended>
                    <CustomLists>
                        <ListsDropDown lists={lists} setLists={setLists} activeList={activeList} setActiveList={setActiveList} />
                        <Carousel>
                            {activeList.items.map((movie, index) => (
                                <Card cardOnClick={cardOnClick} key={index} movie={movie} />
                            ))}
                        </Carousel>
                    </CustomLists>
                </DiscoverScreen>
                <DetailScreen lists={lists} setLists={setLists} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie}
                 rated={rated} setRating={setRating} activeList={activeList} setActiveList = {setActiveList} />
            </section>
        </>
    )
}
