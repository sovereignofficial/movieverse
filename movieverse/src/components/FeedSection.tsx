import { TMovie } from "~/types/movies"
import { SwiperContainer } from "./carousel/SwiperContainer"
import { ImageLink } from "./images/ImageLink"

export const FeedSection:React.FC<{header:string,movies:TMovie[]}> = ({header,movies}) => {
  return (
    <section className="space-y-5">
        <div>
            <h2>{header}</h2>
        </div>
        <SwiperContainer>
            {movies.map((movie,key)=>(
                <ImageLink key={key} imgUrl={movie?.poster_path} title={movie?.title} overwiew={movie?.overview} movieId={movie?.id}/>
            ))}
        </SwiperContainer>
    </section>
  )
}
