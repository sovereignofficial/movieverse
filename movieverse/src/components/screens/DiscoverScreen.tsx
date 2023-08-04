import { tempWatchedData } from "../../utils/data"
import { Card } from "../Card"
import { Carousel } from "../Carousel"
import { CustomLists } from "../custom/CustomLists"
import { ResultsList } from "../movies/ResultsList"
import { Recommended } from "../recommend/Recommended"

export const DiscoverScreen = () => {
    return (
        <div className="col-span-12 p-2 space-y-28">
            <h1 className="md:ml-10 text-2xl font-medium">Discover</h1>
            <ResultsList>
                <Carousel>
                    {tempWatchedData.map((movie,index)=>(
                    <Card key={index} {...movie} />
                    ))}
                </Carousel>
            </ResultsList>
            <Recommended>
                <Carousel>
                {tempWatchedData.map((movie,index)=>(
                    <Card key={index} {...movie} />
                    ))}
                </Carousel>
            </Recommended>
            <CustomLists/>
        </div>
    )
}
