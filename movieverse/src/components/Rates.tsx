import { Stars } from "./Stars";

export const Rates: React.FC<{ vote_average: number; vote_count: number }> = ({
  vote_average,
  vote_count,
}) => {
  return (
    <div className="flex justify-end items-center gap-2">
      <Stars vote_average={vote_average} />
      <p className="text-zinc-300">{vote_count} votes</p>
    </div>
  );
};
