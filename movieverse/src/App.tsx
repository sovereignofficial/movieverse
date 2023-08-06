import { Found } from "./components/Found"
import { Navbar } from "./components/Navbar"
import { Search } from "./components/Search"
import { DiscoverScreen } from "./components/screens/DiscoverScreen"
import { ResultScreen } from "./components/screens/ResultScreen"
import { useEffect, useState } from "react"
import { defaultSearchRequest, searchRequest } from "./utils/data"

export interface Movie{
    Title: string,
    Year: string,
    Poster: string,
    Type?:string,
    runtime?: number,
    imdbRating?: number,
  }
export const App = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const handleDefaultMovies = async () => {
        const data = await defaultSearchRequest()
        setMovies(data);
    }
    const handleSearchRequest = async (query:string) => {
        const data = await searchRequest(query)
        setMovies(data)
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
                <DiscoverScreen movies={movies}></DiscoverScreen>
                <ResultScreen></ResultScreen>
            </section>
        </>
    )
}
