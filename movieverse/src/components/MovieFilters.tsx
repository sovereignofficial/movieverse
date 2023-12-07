import { genres } from "~/app.config";

export const MovieFilters = () => {
  return (
    <div className="w-11/12 relative overflow-hidden mx-auto my-5">
      <div className="grid grid-flow-col gap-1">
        {genres.map((genre) => (
          <button className="btn-carousel">{genre.name}</button>
        ))}
      </div>
    </div>
  );
};
