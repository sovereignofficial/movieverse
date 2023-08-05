import { Found } from "./components/Found"
import { Navbar } from "./components/Navbar"
import { Search } from "./components/Search"
import { DiscoverScreen } from "./components/screens/DiscoverScreen"
import { ResultScreen } from "./components/screens/ResultScreen"


export interface Movie{
    Title: string,
    Year: string,
    Poster: string,
    Type?:string,
    runtime?: number,
    imdbRating?: number,
  }
export const App = () => {
    return (
        <>
            <Navbar>
                <Search />
                <Found />
            </Navbar>
            <section className="grid grid-flow-col ">
                <DiscoverScreen></DiscoverScreen>
                <ResultScreen></ResultScreen>
            </section>
        </>
    )
}
