import { FeedSection } from "~/components/FeedSection";
import { useFeed } from "~/hooks/useFeed";

export const Feed = () => {
  const { mostlyLiked, top3genres, specialMoviesForUser } = useFeed();

  return (
    <div className="page space-y-5">
      <div className="page-header">
        <h1>Your Feed</h1>
      </div>
      <div className="page-body space-y-10 ">
        {specialMoviesForUser && (
          <FeedSection header="Special For You" movies={specialMoviesForUser} />
        )}
        {top3genres &&
          top3genres.map((item, key) => (
            <FeedSection
              key={key}
              header={item.genreName!}
              movies={item.movies}
            />
          ))}
        {mostlyLiked && (
          <FeedSection header="Mostly Liked Movies" movies={mostlyLiked} />
        )}
      </div>
    </div>
  );
};
