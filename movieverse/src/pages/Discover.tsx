import { DataNotFound } from "~/components/DataNotFound";
import { DiscoverSection } from "~/components/DiscoverSection";
import { useRecommendor } from "~/hooks/useRecommendor";

export const Discover = () => {
  const { specialMoviesForUser, top3genres, mostlyLiked } = useRecommendor();

  return (
    <div className="page space-y-5">
      <div className="page-header">
        <h1>Discover</h1>
      </div>
      <div className="page-body  space-y-10 ">
        {specialMoviesForUser && specialMoviesForUser.length > 0 ? (
          <DiscoverSection
            header="Recommended for you"
            movies={specialMoviesForUser}
          />
        ) : (
          <DataNotFound message="Please favorite more movies to get specialized recommendations for you!"/>
        )}
        {top3genres &&
          top3genres.map((item, key) => (
            <DiscoverSection
              key={key}
              header={item.genreName!}
              movies={item.movies}
            />
          ))}
        {mostlyLiked && (
          <DiscoverSection header="Mostly liked movies" movies={mostlyLiked} />
        )}
      </div>
    </div>
  );
};
