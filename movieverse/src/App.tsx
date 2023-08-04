import { Found } from "./components/Found"
import { Navbar } from "./components/Navbar"
import { Search } from "./components/Search"
import { DiscoverScreen } from "./components/screens/DiscoverScreen"
import { ResultScreen } from "./components/screens/ResultScreen"

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
