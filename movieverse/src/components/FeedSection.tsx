import { MoviesFromMovieverse, Movie } from "~/types/movies"
import { SwiperContainer } from "./carousel/SwiperContainer"
import { ImageLink } from "./ImageLink"

export const FeedSection:React.FC<{header:string,movies:Movie[] | MoviesFromMovieverse[]}> = ({header,movies}) => {
  return (
    <section className="space-y-5">
        <div>
            <h2>{header}</h2>
        </div>
        <SwiperContainer>
            {movies.map(movie=>(
                <ImageLink imgUrl={movie.poster_path} title={movie.title} overwiew={movie.overview} movieId={movie.id}/>
            ))}
        </SwiperContainer>
    </section>
  )
}
