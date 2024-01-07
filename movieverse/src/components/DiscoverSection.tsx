import { TMovie } from "~/types/movies";
import { SwiperContainer } from "./carousel/SwiperContainer";
import { ImageLink } from "./images/ImageLink";
import { memo } from "react";

export const DiscoverSection: React.FC<{
  header: string;
  movies: TMovie[];
}> = memo(({ header, movies }) => {
  return (
    <section className="space-y-5">
      <div>
        <h2>{header}</h2>
      </div>
      <div>
        {movies && movies.length > 0 ? (
          <SwiperContainer>
            {movies.map((movie, key) => (
              <ImageLink
                key={key}
                imgUrl={movie?.poster_path}
                title={movie?.title}
                overwiew={movie?.overview}
                movieId={movie?.id}
              />
            ))}
          </SwiperContainer>
        ) : (
          <div>
            <p>Not found enough data.</p>
          </div>
        )}
      </div>
    </section>
  );
})
